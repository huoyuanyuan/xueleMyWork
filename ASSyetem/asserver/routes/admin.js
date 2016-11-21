var express = require('express');
var router = express.Router();
var url = require("url");
var async = require("async");
var orm = require("orm");
var comFunc = require("../config/commonFunc");


//退出管理系统
router.get("/logout", function (req,res,next) {
  var reqUrlObj = url.parse(req.url,true).query;
  req.models.sessions.find({data:orm.like("%"+req.session.currentAdmin+"%")}).remove(function (err) {
    if(!err){
      res.json({
        state:0,
        message:"remove success"
      });
    }else {
      res.json({
        state:1,
        message:err
      });
    }
  })

});
//更改密码
router.post("/changPass", function (req,res,next) {
  var reqData = req.body;
  req.models.admin.find({admin_name:reqData.admin_name}, function (err,admin) {
    if(!err){
      var admin_id = admin[0].admin_id;
      req.models.admin.get(admin_id, function (err,changAdmin) {
        if(!err){
          changAdmin.password = reqData.newPass;
          changAdmin.save(function (err) {
            if(!err){
              res.json({
                state:0,
                message:"Change Success"
              });
            }else {
              res.json({
                state:1,
                message:err
              });
            }
          });
        }else {
          console.log("按ID查询admin失败："+err);
        }
      });
    }else {
      console.log("查询admin失败："+err);
    }
  });
});

//管理页面
//所有广告页面 渲染
router.get("/", function(req, res, next) {

  //---------------------模拟数据部分---------------------------
  //var data = [
  //  {
  //    place_id:"广告位ID",
  //    place_name:"广告位名称",
  //    AS_number:"包含广告数",
  //    place_state:"广告位状态（true/false）",
  //    place_remarks:"广告位备注"
  //  }
  //];
  //---------------------------------------------------------
  if(req.session.currentAdmin){
    async.waterfall([
      function (cb) {
        req.models.asplace.find({}, function (err,places) {
          cb(null,places);
        });
      },
      function (n,cb) {
        var places = n;
        var data = [];
        places.forEach(function (place) {
          req.models.asplaceas.find({place_id:place.place_id}, function (err,items) {
            place.AS_number = items.length;
            data.push(place);
          });
        });
        setTimeout(function () {
          cb(null,data)
        },100)
      },
      function (n,cb) {
        var placeData = n;
        res.render("admin",{
          adminName:req.session.currentAdmin,
          showSection:"allASplace",
          linkNavTitle:"所有广告位",
          data:placeData
        });
      }
    ], function (err,result) {
      console.error(err);
    });
  }else {
    res.redirect("/");
  }
});

//搜索广告位
router.get("/searchASplace", function (req,res,next) {
  if(req.session.currentAdmin){
    var reqUrlObj = url.parse(req.url,true).query;
    async.waterfall([
      function (cb) {
        var data = [];
        //req.models.asplace.find({place_remarks:orm.like("%"+reqUrlObj.keywords+"%")}, function (err,places1) {
        //  places1.forEach(function (item) {
        //    data.push(item);
        //  })
        //});
        //req.models.asplace.find({place_name:orm.like("%"+reqUrlObj.keywords+"%")}, function (err,places2) {
        //  places2.forEach(function (item) {
        //    data.push(item);
        //  })
        //});
        //setTimeout(function () {
        //  var places = comFunc.uniqueArrObj(data);
        //  places.sort(function (a,b) {
        //    return a.place_id - b.place_id;
        //  });
        //  cb(null,places)
        //},100)
        var sql = "SELECT * FROM asplace WHERE place_name LIKE '%"+reqUrlObj.keywords+"%' OR place_remarks LIKE '%"+reqUrlObj.keywords+"%'"
        req.models.db.driver.execQuery(sql, function (err,places) {
          cb(null,places);
        })
      },
      function (n,cb) {
        var places = n;
        var data = [];
        places.forEach(function (place) {
          req.models.asplaceas.find({place_id:place.place_id}, function (err,items) {
            place.AS_number = items.length;
            data.push(place);
          });
        });
        setTimeout(function () {
          cb(null,data)
        },100)
      },
      function (n,cb) {
        var placeData = n;
        res.render("admin",{
          adminName:req.session.currentAdmin,
          showSection:"allASplace",
          linkNavTitle:"所有广告位",
          data:placeData
        });
      }
    ], function (err,result) {
      console.error(err);
    });
  }else {
    res.redirect("/");
  }
});

//更新广告位状态
router.post("/changeASplaceState", function (req,res,next) {
  var reqData = req.body;
  var idArr = reqData.place_id;
  req.models.asplace.find({place_id:idArr}).each(function (itmes) {
    itmes.place_state = reqData.place_state;
  }).save(function (err) {
    if(!err){
      comFunc.uploadASplaceJson(req);
      res.json({
        state:0,
        message:"updata success"
      });
    }else {
      console.log(err);
      res.json({
        state:1,
        message:err
      });
    }
  });
});
//删除广告位
router.post("/delASplace", function (req,res,next) {
  var reqData = req.body.place_id;
  if(reqData instanceof Array){
    var zero = [];
    var noZero = [];
    reqData.forEach(function (item) {
      var reqIdObj = JSON.parse(item);
      if(reqIdObj.asNumber == 0){
        zero.push(reqIdObj.checkedPlaceId)
      }else {
        noZero.push(reqIdObj.checkedPlaceId);
      }
    })
    async.parallel([
      function (cb) {
        if(zero.length != 0){
          req.models.asplace.find({place_id:zero}).remove(function (err) {
            if(!err){
              cb(null,true)
            }
          })
        }else {
          cb(null,true)
        }
      },
      function (cb) {
        if(noZero != 0){
          req.models.asplaceas.find({place_id:noZero}, function (err,places) {
            if(!err){
              var ASIdArr = [];
              places.forEach(function (item) {
                ASIdArr.push(item.AS_id);
              })
              //------------------根据广告ID数组删除广告-----------------------
              req.models.asplaceas.find({AS_id:ASIdArr}).remove(function (err) {
                if(!err){
                  req.models.astarget.find({AS_id:ASIdArr}).remove(function (err) {
                    if(!err){
                      req.models.astable.find({AS_id:ASIdArr}).remove(function (err) {
                        if(!err){
                          req.models.asplace.find({place_id:noZero}).remove(function (err) {
                            if(!err){
                              cb(null,true);
                            }
                          })
                        }
                      })
                    }else {
                      console.log(err)
                    }
                  })
                }else {
                  console.log(err)
                }
              })
            //------------------------------------------------------------------------
            }
          });
        }else {
          cb(null,true);
        }
      }
    ], function (err,results) {
      if(!err){
        comFunc.uploadASplaceJson(req);
        res.json({
          state:0,
          message:"del success"
        });
      }else {
        res.json({
          state:1,
          message:"del fail"
        });
      }
    });
  }else {
    var reqObj = JSON.parse(reqData);
    if(reqObj.asNumber == 0){
      req.models.asplace.find({place_id:reqObj.checkedPlaceId}).remove(function (err) {
        if(!err){
          comFunc.uploadASplaceJson(req);
          res.json({
            state:0,
            message:"del success"
          });
        }else {
          res.json({
            state:1,
            message:"del fail"
          });
        }
      });
    }else {
      req.models.asplaceas.find({place_id:reqObj.checkedPlaceId}, function (err,places) {
        if(!err){
          console.log(places)
          var AS_id = places[0].AS_id;
          //------------------根据广告ID删除广告-----------------------
          req.models.asplaceas.find({AS_id:AS_id}).remove(function (err) {
            if(!err){
              req.models.astarget.find({AS_id:AS_id}).remove(function (err) {
                if(!err){
                  req.models.astable.find({AS_id:AS_id}).remove(function (err) {
                    if(!err){
                      req.models.asplace.find({place_id:reqObj.checkedPlaceId}).remove(function (err) {
                        if(!err){
                          comFunc.uploadASplaceJson(req);
                          res.json({
                            state:0,
                            message:"del success"
                          })
                        }else {
                          res.json({
                            state:1,
                            message:"del fail"
                          })
                        }
                      });
                    }else {
                      console.log(err)
                    }
                  })
                }else {
                  console.log(err)
                }
              })
            }else {
              console.log(err)
            }
          })
          //------------------------------------------------------------------------
        }else {
          console.log(err)
        }
      });
    }
  }
});
//编辑广告位
//返回编辑广告位页面
router.get("/editASplace", function (req,res,next) {
  //-----------------------------模拟数据格式----------------
  //var data = {
  //  place_id:1
  //  place_name:"xuele",
  //  plugIn:[
  //    {
  //      plugIn_id:"1",
  //      plugIn_name:"轮播",
  //      selected:true
  //    }
  //  ],
  //  selector:selectorClassName,
  //  place_remarks:"备注"
  //}
  //---------------------------------------------------------
  var reqUrlObj = url.parse(req.url,true).query;
  req.models.asplace.find({place_id:reqUrlObj.id}, function (err,place) {
    if(!err){
      var data = place[0];
      req.models.plug_in.find({plugIn_id:place[0].plugIn_id}, function (err,plugIn) {
        if(!err){
          plugIn[0].selected = true;
          data.plugIn = plugIn
          res.render("admin",{
            adminName:req.session.currentAdmin,
            showSection:"editASplace",
            linkNavTitle:"修改广告位",
            data:data
          });
        }else {
          console.error(err);
        }
      });
    }else {
      console.error(err);
    }
  })
});
//更新广告位数据
router.post("/editASplace", function (req,res,next) {
  var reqData = req.body;
  req.models.asplace.find({place_id:reqData.place_id}).each(function (item) {
    item.place_name = reqData.place_name;
    item.plugIn_id = reqData.plugIn_id;
    item.place_remarks = reqData.place_remarks;
    item.place_state = reqData.place_state
  }).save(function (err) {
    if(!err){
      comFunc.uploadASplaceJson(req);
      res.json({
        state:0,
        message:"save success"
      });
    }else {
      console.error(err);
      res.json({
        state:1,
        message:"save fail"
      });
    }
  })
});

//管理广告
router.get("/adminAS", function (req,res,next) {
  //-----------------模拟数据部分-------------------
  //var data=[{
  //  place_id:"广告位ID",
  //  place_name:"广告位名称",
  //  AS_id:"广告ID",
  //  AS_name:"广告名称",
  //  AS_target:{
  //    target_area_code:"广告投放地区编码",
  //    target_area_name:"投放地区名称",
  //    target_role:[{
  //      target_role_id:"投放角色ID",
  //      target_role_name:"投放角色名称"
  //    }]
  //  },
  //  AS_usetime:"生效时间",
  //  AS_order:"播放次序",
  //  AS_state:"广告状态",
  //  AS_remarks:"广告备注"
  //}];
  //------------------------------------------------
  if(req.session.currentAdmin){
    var reqUrlObj = url.parse(req.url,true).query;
    var place_id = reqUrlObj.id;
    var data;
    async.waterfall([
      function (cb) {

        req.models.asplaceas.find({place_id:place_id}, function (err,items) {
          if(!err){
            data = items;
            var ASidArr = []
            items.forEach(function (item) {
              ASidArr.push(item.AS_id);
            })
            req.models.asplace.get(place_id, function (err,place) {
              data.forEach(function (item) {
                item.place_name = place.place_name
              })
            })
            cb(null,ASidArr);
          }else {
            console.log(err);
          }
        });
      }, function (n,cb) {
        var ASIdArr = n;
        req.models.astable.find({AS_id:ASIdArr}, function (err,items) {
          if(!err){
            var ASArr = [];
            items.forEach(function (item) {
              var obj = {};
              var useTime = item.AS_usetime.toLocaleString();
              var newUseTime = useTime.slice(0,10)+"/"+useTime.slice(11,16);
              obj.AS_name = item.AS_name;
              obj.AS_usetime = newUseTime;
              obj.AS_state = item.AS_state;
              obj.AS_remarks = item.AS_remarks;
              ASArr.push(obj)
            })
            for(var i= 0,length=ASArr.length;i<length;i++){
              data[i].AS_name = ASArr[i].AS_name;
              data[i].AS_usetime = ASArr[i].AS_usetime;
              data[i].AS_state = ASArr[i].AS_state;
              data[i].AS_remarks = ASArr[i].AS_remarks;
            }
            cb(null,ASIdArr)
          }else {
            console.log(err)
          }
        });
      },
      function (n,cb) {
        var ASIdArr = n;
        var AS_targetArr = [];
        for(var i=0,length=ASIdArr.length;i<length;i++){
          var AS_id = ASIdArr[i];
          req.models.astarget.find({AS_id:AS_id}, function (err,items) {
            var AS_target = {};
            AS_target.target_area_code = items[0].target_area_code;
            AS_target.target_area_name = items[0].target_area_name;
            var roleArr = [];
            items.forEach(function (item) {
              var obj = {};
              obj.target_role_id = item.target_role_id;
              obj.target_role_name = item.target_role_name;
              roleArr.push(obj);
            })
            AS_target.target_role = roleArr;
            AS_targetArr.push(AS_target);
          });
        }
        setTimeout(function () {
          for(var i= 0,length=data.length;i<length;i++){
            data[i].AS_target = AS_targetArr[i];
          }
          cb(null,true)
        },100)
      }
    ], function (err,results) {
        if(!err){
          res.render("admin",{
            adminName:req.session.currentAdmin,
            showSection:"adminAS",
            linkNavTitle:"管理广告",
            data:data
          });
        }
    })
  }else {
    res.redirect("/")
  }
})
//改变广告次序
router.post("/changeASOrder", function (req,res,next) {
  var reqData = req.body.orderArr;
  async.parallel([
    function (cb) {
      reqData.forEach(function (item) {
        var itemObj = JSON.parse(item);
        req.models.asplaceas.find({AS_id:itemObj.AS_id}).each(function (orderItem) {
          orderItem.AS_order = itemObj.AS_order
        }).save(function (err) {
          if(!err){

          }else {
            console.log(err)
          }
        });
      })
      cb(null,true);
    }
  ], function (err,results) {
    if(!err){
      comFunc.uploadASplaceJson(req);
      res.json({
        state:0,
        message:"change success"
      });
    }else {
      res.json({
        state:1,
        message:"change fail"
      });
    }
  })
});

//创建广告位
//页面 渲染
router.get("/makeASplace", function (req,res,next) {
  //----------模拟数据部分-----------------
  //var maxID = 3; //数据库广告位表最大ID
  //var selectorClassName = "_as_xl_p"+(maxID+1)+"_";
  //var data = {
  //  plugIn:[
  //    {
  //      plugIn_id:"1",
  //      plugIn_name:"轮播"
  //    }
  //  ],
  //  selector:selectorClassName
  //}
  //--------------------------------------------------
  if(req.session.currentAdmin){
      var data = {}
      req.models.plug_in.find({}, function (err,plugIn) {
        if(!err){
          data.plugIn = plugIn;
          req.models.asplace.find({}, function (err,place) {
            if(!err){
              var maxId = 0;
              if(place.length == 0){
                maxId = 0;
              }else {
                place.forEach(function (item) {
                  var eachId = item.place_id;
                  if(eachId > maxId){
                    maxId = eachId;
                  }
                })
              }
              var selectorClassName = "_as_xl_p"+(maxId+1)+"_";
              data.selector = selectorClassName;
              res.render("admin",{
                adminName:req.session.currentAdmin,
                showSection:"makeASplace",
                linkNavTitle:"创建广告位",
                data:data
              });
            }else {
              console.log("广告位表查询失败"+err);
            }
          });
        }else {
          console.log("插件表查询失败："+err);
        }
      });
  }else {
    res.redirect("/");
  }

});
//创建新的广告位
router.post("/makeASplace", function (req,res,next) {
  var reqData = req.body;
  var newDate = comFunc.getNewDate();
  req.models.asplace.create([{
    place_name:reqData.place_name,
    plugIn_id:reqData.plugIn_id,
    selector:reqData.selector,
    place_state:reqData.place_state,
    place_remarks:reqData.place_remarks,
    place_date:newDate
  }], function (err,items) {
    if(!err){
      comFunc.uploadASplaceJson(req);
      res.json({
        state:0,
        message:"make success"
      });
    }else {
      res.json({
        state:1,
        message:err
      });
    }
  });
});

//广告管理
//所有广告 页面渲染
router.get("/allAS", function (req,res,next) {
  //-----------------------模拟数据-------------
  //var data = [
  //  {
  //    AS_id:"广告ID",
  //    AS_name:"广告名称",
  //    AS_place:{
  //      place_id:"广告位ID",
  //      place_name:"广告位名称"
  //    },
  //    AS_target:{
  //      target_area_code:"广告投放地区编码",
  //      target_area_name:"投放地区名称",
  //      target_role:[{
  //        target_role_id:"投放角色ID",
  //        target_role_name:"投放角色名称"
  //      }]
  //    },
  //    AS_usetime:"广告生效时间",
  //    AS_state:"广告状态（true/false）",
  //    AS_remarks:"广告备注"
  //  }
  //];
  //var allASPlace = [
  //  {
  //    place_id:"广告位ID",
  //    place_name:"广告位名称"
  //  },
  //  {
  //    place_id:1,
  //    place_name:"xuele"
  //  },
  //  {
  //    place_id:2,
  //    place_name:"轮播"
  //  }
  //];
  //--------------------------------------------
  if(req.session.currentAdmin){
    var data;
    async.waterfall([
      function (cb) {
        req.models.astable.find({}, function (err,items) {
          var cbArr = [];
          items.forEach(function (item) {
            var useTime = item.AS_usetime.toLocaleString();
            var newUseTime = useTime.slice(0,10)+"/"+useTime.slice(11,16);
            item.AS_usetime = newUseTime
            var obj = {};
            obj.AS_id = item.AS_id;
            obj.place_id = item.AS_to_ASplace_id;
            cbArr.push(obj);
          })
          data = items;
          cb(null,cbArr);
        });
      },
      function (n,cb) {
        var idArr = n;
        for(var i= 0,length=idArr.length;i<length;i++){
          var place_id = idArr[i].place_id;
          var AS_placeArr = [];
          req.models.asplace.find({place_id:place_id}, function (err,place) {
            var obj = {};
            var place_id = place[0].place_id;
            var place_name = place[0].place_name;
            obj.place_id = place_id;
            obj.place_name = place_name;
            AS_placeArr.push(obj);
          });
        }
        setTimeout(function () {
          for(var i= 0,length=idArr.length;i<length;i++){
            delete idArr[i].place_id;
            idArr[i].AS_place = AS_placeArr[i];
          }
          cb(null,idArr);
        },100)
      },
      function (n,cb) {
        var idArr = n;
        var AS_targetArr = [];
        for(var i= 0,length=idArr.length;i<length;i++){
          var AS_id = idArr[i].AS_id;
          req.models.astarget.find({AS_id:AS_id}, function (err,items) {
            var AS_target = {};
            AS_target.target_area_code = items[0].target_area_code;
            AS_target.target_area_name = items[0].target_area_name;
            var roleArr = [];
            items.forEach(function (item) {
              var obj = {};
              obj.target_role_id = item.target_role_id;
              obj.target_role_name = item.target_role_name;
              roleArr.push(obj);
            })
            AS_target.target_role = roleArr;
            AS_targetArr.push(AS_target);
          });
        };
        setTimeout(function () {
          for(var i= 0,length=idArr.length;i<length;i++){
            delete idArr[i].AS_id;
            idArr[i].AS_target = AS_targetArr[i];
            data[i].AS_place = idArr[i].AS_place;
            data[i].AS_target = idArr[i].AS_target;
          }
          cb(null,true)
        },100)
      },
      function (n,cb) {
        req.models.asplace.find({}, function (err,places) {
          if(!err){
            res.render("admin",{
              adminName:req.session.currentAdmin,
              showSection:"allAS",
              linkNavTitle:"所有广告",
              data:data,
              allASPlace:places
            });
          }else {
            console.log(err)
          }
        });
      }
    ], function (err,results) {
      console.log(err);
    })
  }else {
    res.redirect("/")
  }
});
//广告搜索
router.get("/searchAS", function (req,res,next) {
  if(req.session.currentAdmin){
    var reqUrlObj = url.parse(req.url,true).query;
    var data,allASPlaces;
    async.waterfall([
      function (cb) {
        req.models.asplace.find({}, function (err,places) {
          allASPlaces = places;
          cb(null,places)
        });
      },
      function (n,cb) {
        var sql = "SELECT * FROM astable WHERE AS_name LIKE '%"+reqUrlObj.keywords+"%' OR AS_remarks LIKE '%"+reqUrlObj.keywords+"%'";
        req.models.db.driver.execQuery(sql, function (err,items) {
          var checkItemsPlaceId
          if(reqUrlObj.placeId != ""){
            checkItemsPlaceId = items.filter(function (item) {
              return item.AS_to_ASplace_id == reqUrlObj.placeId;
            });
          }else{
            checkItemsPlaceId = items;
          }
          var checkOut;
          if(reqUrlObj.state != ""){
            checkOut = checkItemsPlaceId.filter(function (item) {
              return item.AS_state == reqUrlObj.state;
            });
          }else {
            checkOut = checkItemsPlaceId;
          };
          data = checkOut;
          if(data.length == 0){
            res.render("admin",{
              adminName:req.session.currentAdmin,
              showSection:"allAS",
              linkNavTitle:"所有广告",
              data:data,
              allASPlace:allASPlaces
            });
          }else {
            var cbArr = [];
            checkOut.forEach(function (item) {
              var obj = {};
              var useTime = item.AS_usetime.toLocaleString();
              var newUseTime = useTime.slice(0,10)+"/"+useTime.slice(11,16);
              item.AS_usetime = newUseTime;
              obj.AS_id = item.AS_id;
              obj.place_id = item.AS_to_ASplace_id;
              cbArr.push(obj);
            })
            data = checkOut;
            cb(null,cbArr);
          }
        })
      },
      function (n,cb) {
        var idArr = n;
        for(var i= 0,length=idArr.length;i<length;i++){
          var place_id = idArr[i].place_id;
          var AS_placeArr = [];
          req.models.asplace.find({place_id:place_id}, function (err,place) {
            var obj = {};
            var place_id = place[0].place_id;
            var place_name = place[0].place_name;
            obj.place_id = place_id;
            obj.place_name = place_name;
            AS_placeArr.push(obj);
          });
        }
        setTimeout(function () {
          for(var i= 0,length=idArr.length;i<length;i++){
            delete idArr[i].place_id;
            idArr[i].AS_place = AS_placeArr[i];
          }
          cb(null,idArr);
        },100)
      },
      function (n,cb) {
        var idArr = n;
        var AS_targetArr = [];
        for(var i= 0,length=idArr.length;i<length;i++){
          var AS_id = idArr[i].AS_id;
          req.models.astarget.find({AS_id:AS_id}, function (err,items) {
            var AS_target = {};
            AS_target.target_area_code = items[0].target_area_code;
            AS_target.target_area_name = items[0].target_area_name;
            var roleArr = [];
            items.forEach(function (item) {
              var obj = {};
              obj.target_role_id = item.target_role_id;
              obj.target_role_name = item.target_role_name;
              roleArr.push(obj);
            })
            AS_target.target_role = roleArr;
            AS_targetArr.push(AS_target);
          });
        };
        setTimeout(function () {
          for(var i= 0,length=idArr.length;i<length;i++){
            delete idArr[i].AS_id;
            idArr[i].AS_target = AS_targetArr[i];
            data[i].AS_place = idArr[i].AS_place;
            data[i].AS_target = idArr[i].AS_target;
          }
          cb(null,true)
        },100)
      },
      function (n,cb) {
        res.render("admin",{
          adminName:req.session.currentAdmin,
          showSection:"allAS",
          linkNavTitle:"所有广告",
          data:data,
          allASPlace:allASPlaces
        });
      }
    ], function (err,results) {
      console.log(err);
    })
  }else {
    res.redirect("/");
  }
});

//修改广告状态
router.post("/changeASState", function (req,res,next) {
  var reqData = req.body;
  var idArr = req.body.AS_id;
  req.models.astable.find({AS_id:idArr}).each(function (items) {
    items.AS_state = reqData.AS_state;
  }).save(function (err) {
    if(!err){
      comFunc.uploadASplaceJson(req);
      res.json({
        state:"0",
        message:"change success"
      });
    }else {
      res.json({
        state:"1",
        message:"change fail"
      });
    }
  })
});
//删除广告
router.post("/delAS", function (req,res,next) {
  var reqData = req.body;
  var idArr = reqData.AS_id;
  req.models.asplaceas.find({AS_id:idArr}).remove(function (err) {
    if(!err){
      req.models.astarget.find({AS_id:idArr}).remove(function (err) {
        if(!err){
          req.models.astable.find({AS_id:idArr}).remove(function (err) {
            if(!err){
              comFunc.uploadASplaceJson(req);
              res.json({
                state:0,
                message:"del success"
              });
            }else {
              res.json({
                state:1,
                message:"del fail"
              });
            }
          })
        }else {
          console.log(err)
        }
      })
    }else {
      console.log(err)
    }
  })
});

//广告管理 投放广告
//渲染投放广告页面
router.get("/makeAS", function (req,res,next) {
  //--------------------模拟数据----------------------
  //var data =[
  //  {
  //    place_id:"广告位ID",
  //    place_name:"广告位名称"
  //  }
  //];
  //--------------------------------------------------
  if(req.session.currentAdmin){
    req.models.asplace.find({}, function (err,places) {
      if(!err){
        res.render("admin",{
          adminName:req.session.currentAdmin,
          showSection:"makeAS",
          linkNavTitle:"投放广告",
          data:places
        });
      }else {
        console.error(err)
      }
    });
  }else {
    res.redirect("/")
  }
});
//投放广告 创建广告并保存
router.post("/makeAS", function (req,res,next) {
  var reqData =req.body;
  async.waterfall([
    function (cb) {
      req.models.astable.create([{
        AS_name:reqData.AS_name,
        AS_link_url:reqData.AS_link_url,
        AS_open_place:reqData.AS_open_place,
        AS_to_ASplace_id:reqData.AS_to_ASplace_id,
        AS_picture_src:reqData.AS_picture_src,
        AS_backgroundcolor:reqData.AS_backgroundcolor,
        AS_usetime:reqData.AS_usetime,
        AS_remarks:reqData.AS_remarks,
        AS_state:reqData.AS_state,
        AS_date:comFunc.getNewDate()
      }], function (err,items) {
        cb(null,items[0].AS_id)
      });
    },
    function (n,cb) {
      var AS_id = n;
      var createArr = [];
      var roleArr = JSON.parse(reqData.AS_target_role);
      for(var i=0,length=roleArr.length;i<length;i++){
        var obj = {};
        obj.AS_id = AS_id;
        obj.target_area_code = reqData.AS_target_area_id;
        obj.target_area_name = reqData.AS_target_area_name;
        obj.target_role_id = roleArr[i].roleId;
        obj.target_role_name = roleArr[i].roleName;
        createArr.push(obj);
      }
      req.models.astarget.create(createArr, function (err,items) {
        cb(null,AS_id);
      });
    },
    function (n,cb) {
      var AS_id = n;
      var place_id = reqData.AS_to_ASplace_id;
      var AS_order;
      req.models.asplaceas.find({place_id:place_id}, function (err,items) {
        if(items.length == 0){
          AS_order = 1;
        }else {
          AS_order = items.length+1;
        }
        req.models.asplaceas.create([{
          place_id:place_id,
          AS_id:AS_id,
          AS_order:AS_order
        }], function (err,items) {
          if(!err){
            comFunc.uploadASplaceJson(req);
            res.json({
              state:0,
              message:"save success"
            });
          }else {
            res.json({
              state:1,
              message:"save fail"
            });
          }
        });
      });
    }
  ], function (err,result) {
    console.log(err)
  });
});

//编辑广告
//渲染编辑广告页面
router.get("/editAS", function (req,res,next) {
  //--------------------模拟数据----------------------
  //var data = {
  //  AS_id:1,
  //  AS_name:"test1",
  //  AS_link_url:"kkkk",
  //  AS_picture_src:"src"
  //  AS_place:[{
  //    place_id:1,
  //    place_name:"place1",
  //    selected:true
  //  },{
  //    place_id:2,
  //    place_name:"place2",
  //    selected:false
  //  }],
  //  AS_target_area_code:"4404",
  //  AS_target_area_name:"杭州",
  //  AS_target_role:"1234",
  //  AS_backgroundcolor:"#ffffff",
  //  AS_usetime:"2016-10-20T08:00",
  //  AS_remarks:"备注",
  //  AS_state:"1",
  //  AS_open_place:"0"
  //}
  //--------------------------------------------------
  if(req.session.currentAdmin){
    var reqUrlObj = url.parse(req.url,true).query;
    var AS_id = reqUrlObj.id;
    var data;
    async.waterfall([
      function (cb) {
        req.models.astable.find({AS_id:AS_id}, function (err,item) {
          if(!err){
            var useTime = item[0].AS_usetime.toLocaleString();
            var newUseTime = useTime.slice(0,10)+"T"+useTime.slice(11,16);
            item[0].AS_usetime = newUseTime;
            data = item[0];
            var cbObj = {};
            cbObj.AS_id = item[0].AS_id;
            cbObj.place_id = item[0].AS_to_ASplace_id;
            cb(null,cbObj)
          }else {
            console.log(err)
          }
        });
      },
      function (n,cb) {
        var idObj = n;
        req.models.asplace.find({}, function (err,places) {
          places.forEach(function (item) {
            if(item.place_id == idObj.place_id){
              item.selected = true;
            }else {
              item.selected = false;
            }
          })
          data.AS_place = places;
          var AS_id = idObj.AS_id;
          cb(null,AS_id)
        })
      },
      function (n,cb) {
        var AS_id = n;
        req.models.astarget.find({AS_id:AS_id}, function (err,items) {
          if(!err){
            data.AS_target_area_code = items[0].target_area_code;
            data.AS_target_area_name = items[0].target_area_name;
            var AS_target_role = ""
            items.forEach(function (item) {
              AS_target_role+=item.target_role_id
            })
            data.AS_target_role = AS_target_role;
            res.render("admin",{
              adminName:req.session.currentAdmin,
              showSection:"editAS",
              linkNavTitle:"编辑广告",
              data:data
            });
          }else {
            console.log(err)
          }
        });
      }
    ], function (err,items) {
      console.log(err)
    })
  }else {
    res.redirect("/")
  }
});
//保存编辑广告数据（更新广告数据）
router.post("/editAS", function (req,res,next) {
  var reqData = req.body;
  var AS_id = reqData.AS_id;
  async.parallel([
    function (cb) {
      req.models.astable.find({AS_id:AS_id}).each(function (item) {
        item.AS_name = reqData.AS_name;
        item.AS_link_url = reqData.AS_link_url;
        item.AS_to_ASplace_id = reqData.AS_to_ASplace_id;
        item.AS_picture_src = reqData.AS_picture_src;
        item.AS_backgroundcolor = reqData.AS_backgroundcolor;
        item.AS_usetime = reqData.AS_usetime;
        item.AS_state = reqData.AS_state;
        item.AS_remarks = reqData.AS_remarks;
        item.AS_open_place = reqData.AS_open_place
      }).save(function (err) {
        if(!err){
          cb(null,true)
        }
      })
    }, function (cb) {
      var createArr = [];
      var roleArr = JSON.parse(reqData.AS_target_role);
      for(var i=0,length=roleArr.length;i<length;i++){
        var obj = {};
        obj.AS_id = AS_id;
        obj.target_area_code = reqData.AS_target_area_id;
        obj.target_area_name = reqData.AS_target_area_name;
        obj.target_role_id = roleArr[i].roleId;
        obj.target_role_name = roleArr[i].roleName;
        createArr.push(obj);
      }
      req.models.astarget.find({AS_id:AS_id}).remove(function (err) {
        if(!err){
          req.models.astarget.create(createArr, function (err,items) {
            cb(null,true);
          });
        }
      })
    },
    function (cb) {
      req.models.asplaceas.find({AS_id:AS_id}).each(function (item) {
        item.place_id = reqData.AS_to_ASplace_id
      }).save(function (err) {
        if(!err){
          cb(null,true)
        }
      });
    }
  ], function (err,results) {
    if(!err){
      comFunc.uploadASplaceJson(req);
      res.json({
        state:0,
        message:"save success"
      })
    }else {
      res.json({
        state:1,
        message:"save fail"
      })
    }
  })
});

module.exports = router;
