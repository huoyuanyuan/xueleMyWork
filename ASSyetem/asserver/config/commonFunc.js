/**
 * Created by Administrator on 2016/10/22 0022.
 */
var fs = require("fs");
var path = require("path")
var async = require("async");

//对时间格式进行统一
function initTime(number) {
    return number >= 10 ? number : ("0" + number);
}

module.exports = {
    getNewDate: function () {
        //获得当前系统时间
        var newDate = new Date();
        var year = newDate.getFullYear();
        var month = initTime(newDate.getMonth() + 1);
        var day = initTime(newDate.getDate());
        var hours = initTime(newDate.getHours());
        var minutes = initTime(newDate.getMinutes());
        var seconds = initTime(newDate.getSeconds());
        return year + "-" + month + "-" + day + "  " + hours + ":" + minutes + ":" + seconds;
    },
    uniqueArrObj: function (arr) {
        var unique = {};
        arr.forEach(function (arrItem) {
            unique[JSON.stringify(arrItem)] = arrItem;
        })
        arr = Object.keys(unique).map(function (u) {
            return JSON.parse(u)
        });
        return arr;
    },
    //生成JSON结构
    //[{
    //    "place_id":"广告位ID",
    //    "place_name":"广告位名称",
    //    "plugIn":{
    //        "plugIn_id":"插件ID",
    //        "plugIn_name":"插件名称",
    //        "plugIn_url":"插件地址"
    //    },
    //    "selector":"选择器名称",
    //    "place_state":"广告位状态",
    //    "containerAS":[{
    //        "AS_id":"广告ID",
    //        "AS_name":"广告名称",
    //        "AS_link_url":"广告链接",
    //        "AS_open_place":"广告打开位置",
    //        "AS_picture_src":"图片链接",
    //        "AS_backgroundcolor":"背景颜色",
    //        "AS_usetime":"生效时间",
    //        "AS_state":"广告状态",
    //        "AS_order":"广告顺序",
    //        "AS_target":{
    //            "target_area_code":"投放地区编码",
    //            "target_area_name":"投放地区名称",
    //            "target_role":[{
    //                "role_id":"角色ID",
    //                "role_name":"角色名称"
    //            }]
    //        }
    //    }]
    //}]
    uploadASplaceJson: function (req) {
        var dataArr = [];
        async.waterfall([
            function (cb) {
                var plugInArr = [];
                req.models.plug_in.find({}, function (err,data) {
                    var obj = {};
                    data.forEach(function (item) {
                        obj.plugIn_id = item.plugIn_id;
                        obj.plugIn_name = item.plugIn_name;
                        obj.plugIn_url = item.plugIn_url
                        plugInArr.push(obj);
                    })
                    cb(null,plugInArr)
                })
            },
            function (n,cb) {
                var plugInArr = n;
                var placeIdArr = [];
                req.models.asplace.find({}, function (err,data) {
                    data.forEach(function (item) {
                        var obj = {};
                        placeIdArr.push(item.place_id);
                        obj.place_id = item.place_id;
                        obj.place_name = item.place_name;
                        obj.plugIn = plugInArr.filter(function (plugIn) {
                            return plugIn.plugIn_id == item.plugIn_id;
                        })[0];
                        obj.selector = item.selector;
                        obj.place_state = item.place_state;
                        dataArr.push(obj);
                    })
                    cb(null,placeIdArr);
                });
            },
            function (n,cb) {
                var placeIdArr = n;
                var cbArr = [];
                for(var i= 0,length=placeIdArr.length;i<length;i++){
                    var placeId = placeIdArr[i];
                    req.models.asplaceas.find({place_id:placeId}, function (err,data) {
                        var obj = {};
                        if(data.length == 0){
                            obj.asIdArr = [];
                            cbArr.push(obj);
                        }else {
                            var asIdArr = [];
                            data.forEach(function (item) {
                                var obj = {};
                                obj.AS_id = item.AS_id;
                                obj.AS_order = item.AS_order;
                                asIdArr.push(obj);
                            })
                            obj.asIdArr = asIdArr;
                            cbArr.push(obj);
                        }
                    });
                }
                setTimeout(function () {
                    cb(null,cbArr)
                },100)
            },
            function (n,cb) {
                var idArr = n;
                var containerAS = [];
                idArr.forEach(function (item) {
                    var asIdArr = item.asIdArr;
                    if(asIdArr.length == 0){
                        setTimeout(function () {
                            var obj = {};
                            obj.containerAS = "";
                            containerAS.push(obj);
                        },100)
                    }else {
                        var asArr = [];
                        asIdArr.forEach(function (item) {
                            req.models.astarget.find({AS_id:item.AS_id}, function (err,data) {
                                var AS_target = {};
                                AS_target.target_area_code = data[0].target_area_code;
                                AS_target.target_area_name = data[0].target_area_name;
                                var roleArr = [];
                                data.forEach(function (item) {
                                    var obj = {};
                                    obj.role_id = item.target_role_id;
                                    obj.role_name = item.target_role_name;
                                    roleArr.push(obj);
                                })
                                AS_target.target_role = roleArr;
                                req.models.astable.get(item.AS_id, function (err,data) {
                                    var obj = {};
                                    obj.AS_id = data.AS_id;
                                    obj.AS_name = data.AS_name;
                                    obj.AS_link_url = data.AS_link_url;
                                    obj.AS_open_place = data.AS_open_place;
                                    obj.AS_picture_src = data.AS_picture_src;
                                    obj.AS_backgroundcolor = data.AS_backgroundcolor;
                                    obj.AS_usetime = data.AS_usetime.toLocaleString();
                                    obj.AS_state = data.AS_state;
                                    obj.AS_order = item.AS_order;
                                    obj.AS_target = AS_target;
                                    asArr.push(obj);
                                });
                            });

                        });
                        setTimeout(function () {
                            var obj = {};
                            obj.containerAS = asArr;
                            containerAS.push(obj);
                        },100)
                    }
                })
                setTimeout(function () {
                    for(var i= 0,length=dataArr.length;i<length;i++){
                        dataArr[i].containerAS = containerAS[i].containerAS;
                    }
                    //console.log(dataArr)
                    cb(null,dataArr);
                },200)
            }
        ], function (err,results) {
            //console.log(results);
            fs.writeFile(path.join(__dirname,"ASplace.json"),JSON.stringify(results), function (err) {
                if(!err){
                    console.log("Export ASplace.json success!");
                }else {
                    throw err;
                }
            })
        })
    },
    getASplaceData: function (id,callback) {
        var getData;
        fs.readFile(path.join(__dirname,"/ASplace.json"),{encoding:"utf8"}, function (err,data) {
            if(err){
                console.error(err);
                return;
            }
            var dataObj = JSON.parse(data);
            getData = dataObj.filter(function (item) {
                return item.selector == id
            });
        })
        setTimeout(function () {
            if(callback && callback instanceof Function){
                callback(getData)
            }
        },100)
    }
}