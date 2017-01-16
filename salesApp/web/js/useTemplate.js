/**
 * Created by Administrator on 2016/11/23 0023.
 */
$(function () {
    var crmTarget = {
        data:{},
        init: function () {
            this.getPageData();
        },
        getPageData: function () {
            var self = this;
            var url = window.location.href;
            var urlData = comFunc.url(url)
            var type = urlData.type;
            var templateData = {};
            templateData.type = type;
            if(type === "1"){
                templateData.targetName = "学校";
            }else if(type === "2"){
                templateData.targetName = "合伙人";
            }else if(type === "3"){
                templateData.targetName = "机构";
            }
            $.showPreloader("Loading...");
            $.ajax({
                url:"/webjson/customer/getListByUserID.aspx?type="+type,
                type:"GET",
                success: function (data) {
                    var data = JSON.parse(data);
                    if(data.status == "1"){
                        console.log(data);
                        templateData.count = data.count;
                        var cards = self.initTemplateData(data);
                        templateData.cards = cards;
                        console.log(templateData);
                        self.data = templateData;
                        self.useTemplate();
                        $.hidePreloader();
                    }else {
                        console.error(data);
                    }
                },
                error: function (err) {
                    console.log(err);
                    $.alert("服务器繁忙，请稍后重试")
                }
            });
            self.data = templateData;
            self.useTemplate();
        },
        useTemplate: function () {
            var html = template("crmTarget",this.data);
            $("#page-crm-target").html(html);
            this.pageEvent();
        },
        //初始化页面事件
        pageEvent: function () {
            comFunc.screening();
            this.screeningEvent();
        },
        //筛选按钮上的事件处理
        screeningEvent: function () {
            var self = this;
            $(".screeningItem").on("click", function () {
            })
        },

        //处理查询数据
        initTemplateData: function (data) {
            var dataArr = data.r;
            var areaObj = {};
            var areaArr = [];
            var currentDate = new Date();
            var currentTimeMS = currentDate.getTime()
            for(var i=0;i<dataArr.length;i++){
                var areaCode = dataArr[i].crm_c_area;
                if(!areaObj[areaCode]){
                    areaObj[areaCode] = [];
                    areaObj[areaCode].push(dataArr[i]);
                }else {
                    areaObj[areaCode].push(dataArr[i]);
                }
            }
            console.log(areaObj)
            for(var index in areaObj){
                var obj = {};
                var items = areaObj[index];
                var longname = items[0].area_longname.split(" ")
                var province =longname[0] || "";
                var city =longname[1] || "";
                var district =longname[2] || "";
                obj.province = province;
                obj.city = city;
                obj.district = district;

                for(var i= 0,length=items.length;i<length;i++){
                    var lasttime = items[i].crm_c_lasttime
                    if(lasttime == "1900-01-01 00:00"){
                        var timeDiff = "暂无跟进"
                    }else {
                        var lasttimeDate = new Date(lasttime);
                        var lasttimeMS = lasttimeDate.getTime();
                        var timeToNowMS = currentTimeMS - lasttimeMS;
                        var timeDiff = comFunc.MStoTime(timeToNowMS);
                    }
                    items[i].timeDiff = timeDiff
                }
                obj.items = items;
                areaArr.push(obj);
            }
            return areaArr;
        },
    };

    var crmTargetDetail = {
        data:{},
        userList:[],
        init: function () {
            this.getPageData();
        },
        getPageData: function () {
            var self = this;
            var urlData = comFunc.url(window.location.href);
            var type = urlData.type;
            var crm_c_id = urlData.crm_c_id;
            var templateData = {};

            var flgccDetail = false;
            var flgccLink = false;
            var flgccLog = false;

            if(type === "1"){
                templateData.targetName = "学校";
            }else if(type === "2"){
                templateData.targetName = "合伙人";
            }else if(type === "3"){
                templateData.targetName = "机构";
            }
            $.showPreloader("Loading...")
            //获取指定客户详细信息
            $.ajax({
                url:"/webjson/customer/getCustomerByCid.aspx",
                type:"GET",
                data:{
                    id:crm_c_id
                },
                success: function (data) {
                    var data = JSON.parse(data);
                    if(data.status == "1"){
                        var cDetail = data.r;
                        var cLevel = ""
                        if(cDetail.crm_c_type == "1"){
                            if(cDetail.crm_c_remark){
                                cLevel += (cDetail.crm_c_remark + "人  ");
                            }
                            var crm_c_category = cDetail.crm_c_category.split("");
                            crm_c_category.forEach(function (item) {
                                if(item == "1"){
                                    cLevel += "小学 ";
                                }else if(item == "2"){
                                    cLevel += "初中 ";
                                }else if(item == "3"){
                                    cLevel += "高中"
                                }
                            })
                        }else if(cDetail.crm_c_type == "2"){
                            switch (cDetail.crm_c_category){
                                case "1":
                                    cLevel = "个人";
                                    break;
                                case "2":
                                    cLevel = "组织";
                                    break;
                            }
                        }else if(cDetail.crm_c_type == "3"){
                            switch (cDetail.crm_c_category){
                                case "1":
                                    cLevel = "省";
                                    break;
                                case "2":
                                    cLevel = "市";
                                    break;
                                case "3":
                                    cLevel = "区";
                                    break;
                            }
                        }
                        cDetail.cLevel = cLevel;
                        templateData.wlcount = data.wlcount;
                        templateData.contactcount = data.contactcount;
                        templateData.r = cDetail;
                        var code = data.r.crm_c_area;
                        comFunc.getAreaByCode(code, function (data) {
                            var longname = data[0].longname.split(" ");
                            var province =longname[0] || "";
                            var city =longname[1] || "";
                            var district =longname[2] || "";
                            templateData.province = province;
                            templateData.city = city;
                            templateData.district = district;
                            flgccDetail = true;
                        })
                    }else {
                        console.error(data);
                    }
                },
                error: function (err) {
                    console.log(err);
                    $.alert("服务器繁忙，请稍后重试");
                }
            });
            //根据客户ID获取联系人
            $.ajax({
                url:"/webjson/contact/getContactByCid.aspx",
                type:"GET",
                data:{
                    id:crm_c_id
                },
                success: function (data) {
                    var data = JSON.parse(data);
                    if(data.status == "1"){
                        templateData.contacts = data.r;
                        flgccLink = true;
                    }else {
                        console.error(data);
                    }
                },
                error: function (err) {
                    console.log(err);
                    $.alert("服务器繁忙，请稍后重试")
                }
            })

            //根据客户ID查询联系日志
            $.ajax({
                url:"/webjson/work/getWorkLogListByCid.aspx",
                type:"GET",
                data:{
                    c_id:crm_c_id
                },
                success: function (data) {
                    var data = JSON.parse(data);
                    if(data.status == "1"){
                        var dataArr = data.r;
                        var nowTimeDate = new Date();
                        var nowTimeMS = nowTimeDate.getTime();

                        dataArr.forEach(function (item) {
                            var addTime = item.crm_wl_addtime;
                            var addTimeDate = new Date(addTime);
                            var addTimeMS = addTimeDate.getTime();
                            var timeDiffMS = nowTimeMS - addTimeMS;
                            item.timeDiff = comFunc.MStoTime(timeDiffMS);
                        })
                        templateData.logItems = dataArr;
                        flgccLog = true;
                    }else {
                        console.error(data);
                    }
                },
                error: function (err) {
                    console.log(err);
                    $.alert("服务器繁忙，请稍后重试")
                }
            });
            //渲染模板数据
            var end = setInterval(function () {
                if(flgccDetail && flgccLink && flgccLog){
                    var userType = UserInfo.user_department_info.crm_type;
                    templateData.userType = userType;
                    console.log(templateData);
                    self.data = templateData;
                    self.useTemplate();
                    $.hidePreloader();
                    clearInterval(end);
                }
            },100)
            self.data = templateData;
            self.useTemplate();
        },
        useTemplate: function () {
            var html = template("crmTargetDetail",this.data);
            $("#page-crm-targetDetail").html(html);
            this.pageEvent();
        },
        //初始化页面事件
        pageEvent: function () {
            this.addNewCC();
            this.redistributeEvent();
        },
        //重新分配事件
        redistributeEvent: function () {
            var self = this;
            $(".btn-redistribute").unbind("touchstart").on("touchstart", function () {
                self.userList = [];
                var container = $("#userName");
                $.ajax({
                    url:"/webjson/dept/getMyDeptList.aspx",
                    type:"GET",
                    success: function (data) {
                        var data = JSON.parse(data);
                        if(data.status == 1){
                            var optionStr = ""
                            if(data.r){
                                self.initUserData(data.r);
                                var userList = self.userList;
                                userList.forEach(function (item) {
                                    optionStr += "<option value='"+item.crm_user_id+"'>"+item.crm_name+"</option>"
                                })

                            }else {
                                optionStr = "<option value='0'>无人员</option>"
                            }
                            container.html(optionStr);
                        }else {
                            console.error(data);
                        }
                    },
                    error: function (err) {
                        console.log(err);
                    }
                })

                self.saveRedistributeEvent();
            });
        },
        //保存分配
        saveRedistributeEvent: function () {
            $(".btn-saveRedistribute").on("touchend", function () {
                var userId = $("#userName").val();
                var userName = $("#userName").find("option:checked").html();
                var urlData = comFunc.url(window.location.href);
                var crm_c_id = urlData.crm_c_id
                console.log("userId:"+userId);
                console.log("userName:"+userName);
                console.log("crm_c_id:"+crm_c_id)
                if(userId == 0){
                    $.alert("请选择人员")
                }else {
                    $.confirm(userName+"?","确定分配给", function () {
                        var postData = {
                            id:crm_c_id,
                            user_id:userId
                        };
                        console.log(postData);
                        //设置客户归属人
                        $.showPreloader("Loading...");
                        $.ajax({
                            url:"/webjson/customer/setCustomerUserID.aspx",
                            type:"POST",
                            data:postData,
                            success: function (data) {
                                var data = JSON.parse(data);
                                if(data.errcode == 1){
                                    $.alert("分配成功");
                                }else {
                                    console.error(data);
                                    $.alert("分配失败，请稍后重试")
                                }
                            },
                            error: function (err) {
                                console.log(err);
                                $.alert("服务器繁忙，请稍后重试");
                            }
                        });
                    })
                }

            });
        },
        //处理查询后成员数据
        initUserData: function (data) {
            var self = this;
            var userData = data;
            var userArr = userData.user_list;
            userArr.forEach(function (item) {
                self.userList.push(item)
            });
            if(userData.dept_list){
                userData.dept_list.forEach(function (item) {
                    self.initUserData(item)
                })
            }else {
                return;
            }
        },
        //添加联系人
        addNewCC: function () {
            var self = this;
            $(".btn-saveNewCC").unbind("touchstart").on("touchstart", function () {
                var newCCName = $(".newCCName").val();
                var newCCPosition = $(".newCCPosition").val();
                var newCCPhone = $(".newCCPhone").val();
                var promptMsg = $(".addNewCCMsg");
                var urlData = comFunc.url(window.location.href);
                var crm_c_id = urlData.crm_c_id;
                if(newCCName === ""){
                    promptMsg.html("请输入联系人姓名")
                }else if(newCCPhone === ""){
                    promptMsg.html("请输入联系人电话")
                }else if(newCCPosition === ""){
                    promptMsg.html("请输入联系人职务")
                }else {
                    var data = [{
                        crm_cc_name:newCCName,
                        crm_cc_position:newCCPosition,
                        crm_cc_phone:newCCPhone,
                        crm_c_id:crm_c_id
                    }];
                    var postData = JSON.stringify(data);
                    $.showPreloader("Loading...")
                    $.ajax({
                        url:"/webjson/contact/addContact.aspx",
                        type:"POST",
                        data:{
                            data:postData
                        },
                        success: function (data) {
                            var data = JSON.parse(data);
                            if(data.errcode == "1"){
                                promptMsg.html("保存成功");
                                $(".newCCName").val("");
                                $(".newCCPosition").val("");
                                $(".newCCPhone").val("");
                                self.ccDom(data.obj[0]);
                                $.hidePreloader();
                            }else {
                                promptMsg.html("保存失败")
                            }
                            setTimeout(function () {
                                promptMsg.html("");
                            },3000)
                        },
                        errror: function (err) {
                            console.log(err)
                        }
                    });
                }
            })
        },

        //JS生成联系人DOM
        /**
         *
         * @param obj{
         *  "crm_cc_id": "1",//联系人ID
         *  "crm_cc_name": "测试联系人",//联系人名称
         *  "crm_cc_position": "校长",//联系人职位
         *  "crm_cc_phone": "13454545678",//联系人电话
         *  "crm_c_id": "1",//客户ID
         *  "crm_cc_addtime": "1900-01-01 12:00",//添加时间
         *  "customer_info": null//客户信息   
         * }
         */
        ccDom: function (obj) {
            var domStr =    "<a href='contactsDetail.html?crm_cc_id="+obj.crm_cc_id+"' class='item-content item-link bg-white' data-ccId='"+obj.crm_c_id+"'>"
                            +   "<div class='item-inner'>"
                            +       "<div class='item-title-row'>"
                            +           "<div class='item-title'>"+obj.crm_cc_name+"</div>"
                            +           "<div class='item-title'>"+obj.crm_cc_position+"</div>"
                            +       "</div>"
                            +   "   <div class='item-subtitle'>电话："+obj.crm_cc_phone+"</div>"
                            +   "</div>";
                            +"</a>"
            $("#crmTab2").find(".media-list").append(domStr);
        }
    };

    var crmTargetEdit = {
        data:{},
        init: function () {
            this.getPageData();
        },
        getPageData: function () {
            var self = this;
            var urlData = comFunc.url(window.location.href);
            var crm_c_type = urlData.crm_c_type;
            var crm_c_id = urlData.crm_c_id;
            var templateData = {};
            var targetName = "";

            switch (parseInt(crm_c_type)){
                case 1:
                    targetName = "修改学校";
                    templateData.flgSchool = true;
                    break;
                case 2:
                    targetName = "修改合伙人";
                    templateData.flgPartner = true;
                    break;
                case 3:
                    targetName = "修改机构";
                    templateData.flgDept = true;
                    break;
            }

            templateData.targetName = targetName;

            //获取指定客户客户详细信息
            $.showPreloader("Loading...");
            $.ajax({
                url:"/webjson/customer/getCustomerByCid.aspx",
                type:"GET",
                data:{
                    id:crm_c_id
                },
                success: function (data) {
                    var data = JSON.parse(data);
                    if(data.status == 1){
                        var dataObj = data.r;
                        var crm_c_area = dataObj.crm_c_area;
                        comFunc.getAreaByCode(crm_c_area, function (dataR) {
                            var area_longname = dataR[0].longname;
                            dataObj.area_longname = area_longname;
                            templateData.detail = dataObj;
                            console.log(templateData);
                            self.data = templateData;
                            self.useTemplate();
                            $.hidePreloader();
                        })
                    }else {
                        console.error(data);
                    }
                },
                error: function (err) {
                    console.log(err);
                    $.alert("服务器繁忙，请稍后重试")
                }
            })

            self.data = templateData;
            self.useTemplate();
        },
        useTemplate: function () {
            var html = template("crmTargetEdit",this.data);
            $("#page-crm-targetEdit").html(html);
            this.pageEvent();
        },
        //添加页面事件
        pageEvent: function () {
            $("#city-picker").cityPicker({});
            this.radioChange();
            this.editDept();
            this.editSchool();
            this.editPartner();
        },
        //新增合伙人  单选项不同 是否新增一项
        //选择个人 隐藏（默认）   选择组织  显示
        radioChange: function () {
            $(".radioChange").on("click", function () {
                var showOrHide = $(".radioChange").next();
                var checkId = $(".radioChange").find("input:checked").attr("id");
                if(checkId === "personal"){
                    showOrHide.hide();
                }else if(checkId === "organization"){
                    showOrHide.show();
                }
            })
        },
        //修改机构
        editDept: function () {
            var self = this;
            $(".btn-saveDept").unbind("touchstart").on("touchstart", function () {
                var urlData = comFunc.url(window.location.href);
                var crm_c_id = urlData.crm_c_id;
                var deptArea = $(".deptArea").val();
                var deptAreaCode = $(".deptArea").data("code");
                var deptAreaCodeOld = $(".deptArea").data("codeOld");
                if(!deptAreaCode){
                    deptAreaCode = deptAreaCodeOld
                }
                var deptName = $(".deptName").val();
                var deptLevel = $(".deptLevel").val();
                var deptState = $(".deptState").val();
                var deptRemark = $(".deptRemark").val();

                var contacts = [];
                if(deptArea === ""){
                    $.alert("请选择机构所在地");
                }else if(deptName === ""){
                    $.alert("请填写机构名称");
                }else if(deptLevel === ""){
                    $.alert("请选择机构级别");
                }else {
                    var data = {
                        c_id:crm_c_id,
                        c_name:deptName,
                        c_type:3,
                        c_category:deptLevel,
                        c_area:deptAreaCode,
                        c_stage:deptState,
                        c_remark:deptRemark
                    };
                    console.log(data);
                    $.showPreloader("Loading...")
                    $.ajax({
                        url:"/webjson/customer/setCustomer.aspx",
                        type:"POST",
                        data:data,
                        success: function (data) {
                            var data = JSON.parse(data);
                            if(data.errcode == 1){
                                self.banInputDept();
                                $.alert("保存成功，请返回");
                            }
                            else {
                                console.error(data);
                            }
                        },
                        error: function (err) {
                            console.log(err);
                            $.alert("保存失败，请稍后重试")
                        }
                    });
                }
            })
        },
        banInputDept: function () {
            $(".deptArea").attr("readonly","readonly");
            $(".deptName").attr("readonly","readonly");
            $(".deptLevel").attr("readonly","readonly");
            $(".deptState").attr("readonly","readonly");
            $(".deptRemark").attr("readonly","readonly");
        },
        //修改学校
        editSchool: function () {
            var self = this;
            $(".btn-saveSchool").unbind("touchstart").on("touchstart", function () {
                var urlData = comFunc.url(window.location.href);
                var crm_c_id = urlData.crm_c_id;
                var schoolArea = $(".schoolArea").val();
                var schoolAreaCode = $(".schoolArea").data("code");
                var schoolAreaCodeOld = $(".schoolArea").data("codeOld");
                if(!schoolAreaCode){
                    schoolAreaCode = schoolAreaCodeOld;
                }
                var schoolName = $(".schoolName").val();
                var schoolPeriodDom = $(".schoolPeriod").find("input:checked");
                var schoolPeriod = ""
                for(var i=0;i<schoolPeriodDom.length;i++){
                    schoolPeriod += schoolPeriodDom.eq(i).val();
                }
                var schoolNumber = $(".schoolNumber").val();
                var schoolState = $(".schoolState").val();


                if(schoolArea === ""){
                    $.alert("请选择学校所在地区")
                }else if(schoolName === ""){
                    $.alert("请填写学校名称")
                }else if(schoolPeriod === ""){
                    $.alert("请勾选学段")
                }else {
                    var data = {
                        c_id:crm_c_id,
                        c_name:schoolName,
                        c_type:1,
                        c_category:schoolPeriod,
                        c_area:schoolAreaCode,
                        c_stage:schoolState,
                        c_remark:schoolNumber
                    };
                    console.log(data);
                    $.showPreloader("Loading...")
                    $.ajax({
                        url:"/webjson/customer/setCustomer.aspx",
                        type:"POST",
                        data:data,
                        success: function (data) {
                            var data = JSON.parse(data);
                            if(data.errcode == 1){
                                $.alert("保存成功,请返回");
                                self.banInputSchool()
                            }
                            else {
                                console.error(data)
                            }
                        },
                        error: function (err) {
                            console.log(err);
                            $.alert("保存失败，请稍后重试")
                        }
                    });
                }
            })
        },
        banInputSchool: function () {
            $(".schoolArea").attr("readonly","readonly");
            $(".schoolName").attr("readonly","readonly");
            $(".schoolPeriod").find("input").attr("readonly","readonly");
            $(".schoolNumber").attr("readonly","readonly");
            $(".schoolState").attr("readonly","readonly");
        },
        //修改合伙人
        editPartner: function () {
            var self = this;
            $(".btn-savePartner").unbind("touchstart").on("touchstart", function () {
                var urlData = comFunc.url(window.location.href);
                var crm_c_id = urlData.crm_c_id;
                var partnerArea = $(".partnerArea").val();
                var partnerAreaCode = $(".partnerArea").data("code");
                var partnerAreaCodeOld = $(".partnerArea").data("codeOld");
                if(!partnerAreaCode){
                    partnerAreaCode = partnerAreaCodeOld;
                }
                var partnerType = $(".partnerType").find("input:checked").val();
                var partnerName = $(".partnerOrgName").val();

                var partnerState = $(".partnerState").val();
                var partnerRemark = $(".partnerRemark").val();

                if(partnerArea === ""){
                    $.alert("请选择合伙人所在地")
                }else if(partnerName === ""){
                    $.alert("请填写名称")
                } else {
                        var data = {
                            c_id:crm_c_id,
                            c_name:partnerName,
                            c_type:2,
                            c_category:partnerType,
                            c_area:partnerAreaCode,
                            c_stage:partnerState,
                            c_remark:partnerRemark
                        };
                        console.log(data);
                        $.showPreloader("Loading...")
                        $.ajax({
                            url:"/webjson/customer/setCustomer.aspx",
                            type:"POST",
                            data:data,
                            success: function (data) {
                                var data = JSON.parse(data);
                                if(data.errcode == 1){
                                    self.banInputPartner();
                                    $.alert("保存成功，请返回");
                                }
                                else {
                                    console.error(data);
                                }
                            },
                            error: function (err) {
                                console.log(err);
                                $.alert("保存失败，请稍后重试")
                            }
                        });
                }
            })
        },
        banInputPartner: function () {
            $(".partnerArea").attr("readonly","readonly");
            $(".radioChange").find("input[type=radio]").attr("readonly","readonly");
            $(".partnerOrgName").attr("readonly","readonly");
            $(".partnerState").attr("readonly","readonly");
            $(".partnerRemark").attr("readonly","readonly");
        },
    }

    var crmAddressList = {
        data:{},
        init: function () {
            this.getPageData();
        },
        getPageData: function () {
            var self = this;
            var templateData = {};
            $.showPreloader("Loading...");
            $.ajax({
                url:"/webjson/contact/getContactListByUserID.aspx",
                type:"GET",
                success: function (data) {
                    var data = JSON.parse(data);
                    if(data.status == 1){
                        templateData.count = data.count;
                        var items = self.initTemplateData(data);
                        templateData.alphabets = items;
                        self.data = templateData;
                        self.useTemplate();
                        $.hidePreloader();
                    }else {
                        console.error(data);
                    }
                },
                error: function (data) {
                    console.log(data);
                    $.alert("服务器繁忙，请稍后重试")
                }
            });
            self.data = templateData;
            self.useTemplate();
        },
        useTemplate: function () {
            var html = template("crmAddressList",this.data);
            $("#page-crm-addressList").html(html);
            this.pageEvent();
        },
        //添加页面事件
        pageEvent: function () {
            comFunc.screening();
        },
        //初始化模板数据
        initTemplateData: function (data) {
            var dataArr = data.r;
            var ccObj = {};
            var ccArr = [];
            for(var i=0;i<dataArr.length;i++){
                var ChineseSpell = dataArr[i].ChineseSpell;
                //console.log(ChineseSpell);
                var alphabet = ChineseSpell.slice(0,1).toUpperCase();
                //console.log(alphabet);
                if(!ccObj[alphabet]){
                    ccObj[alphabet] = [];
                    ccObj[alphabet].push(dataArr[i]);
                }else {
                    ccObj[alphabet].push(dataArr[i]);
                }
            }
            for(i in ccObj){
                var obj = {};
                obj.alphabet = i;
                obj.items = ccObj[i];
                ccArr.push(obj);
            }
            ccArr.sort(function (a,b) {
                if(a.alphabet < b.alphabet){return -1;};
                if(a.alphabet > b.alphabet){return 1};
                return 0;
            });
            return ccArr;
        }
    };

    var contactsDetail = {
        data:{},
        init: function () {
            this.getPageData();
        },
        getPageData: function () {
            var self = this;
            var url = window.location.href;
            var urlData = comFunc.url(url);

            var id = urlData.crm_cc_id;
            var templateData = {};
            $.showPreloader("Loading...")
            $.ajax({
                url:"/webjson/contact/getContactByCcid.aspx",
                type:"GET",
                data:{
                    id:id
                },
                success: function (data) {
                    var data = JSON.parse(data);
                    if(data.status == 1){
                        templateData = data.r;
                        self.data = templateData;
                        self.uesTemplate();
                        $.hidePreloader();
                    }else {
                        console.error(data);
                    }
                },
                error: function (err) {
                    console.log(err);
                    $.alert("服务器繁忙，请稍后重试")
                }
            });

            self.data = templateData;
            self.uesTemplate();
        },
        uesTemplate: function () {
            var html = template("contactsDetail",this.data);
            $("#page-contactsDetail").html(html);
            this.pageEvent();
        },
        //初始化页面事件
        pageEvent: function () {
            this.editCC();
        },
        //编辑联系人
        editCC: function () {
            var self = this;
            //监听编辑按钮 动态添加联系人信息
            $(".btn-editCC").unbind("touchstart").on("touchstart", function () {
                var content = $(".popup-editCC");
                var editCCName = content.find(".editCCName");
                var editCCPhone = content.find(".editCCPhone");
                var editCCPosition = content.find(".editCCPosition");
                var urlData = comFunc.url(window.location.href);
                var ccId = urlData.crm_cc_id;
                $.ajax({
                    url:"/webjson/contact/getContactByCcid.aspx",
                    type:"GET",
                    data:{
                        id:ccId
                    },
                    success: function (data) {
                        var data = JSON.parse(data);
                        if(data.status == 1){
                            var ccData = data.r;
                            editCCName.val(ccData.crm_cc_name);
                            editCCPhone.val(ccData.crm_cc_phone);
                            editCCPosition.val(ccData.crm_cc_position);
                        }else {
                            console.error();
                            $.alert("查询出错")
                        }
                    },
                    error: function (err) {
                        console.log(err);
                        $.alert("服务器繁忙，请稍后重试");
                    }
                });
            });
            //保存编辑信息
            $(".btn-saveEditCC").unbind("touchstart").on("touchstart", function () {
                var content = $(this).parents(".content");
                var editCCName = content.find(".editCCName").val();
                var editCCPhone = content.find(".editCCPhone").val();
                var editCCPosition = content.find(".editCCPosition").val();
                var editCCMsg = content.find(".editCCMsg");
                var urlData = comFunc.url(window.location.href);
                var ccId = urlData.crm_cc_id;
                if(editCCName === ""){
                    editCCMsg.html("请输入联系人姓名")
                }else if(editCCPhone === ""){
                    editCCMsg.html("请输入联系方式")
                }else if(editCCPosition === ""){
                    editCCMsg.html("请输入职务")
                }else {
                    var postData = {
                        cc_id:ccId,
                        cc_name:editCCName,
                        cc_position:editCCPosition,
                        cc_phone:editCCPhone
                    };
                    console.log(postData);
                    $.ajax({
                        url:"/webjson/contact/setContact.aspx",
                        type:"POST",
                        data:postData,
                        success: function (data) {
                            var data = JSON.parse(data);
                            if(data.errcode == 1){
                                editCCMsg.html("保存成功");
                                self.getPageData();
                            }else {
                                editCCMsg.html("保存失败");
                            }
                            setTimeout(function () {
                                editCCMsg.html("")
                            },2000)
                        },
                        error: function (err) {
                            console.log(err);
                            editCCMsg.html("保存失败")
                        }
                    });
                }
            })
        }
    };

    var adminLog = {
        data:{},
        init: function () {
            this.getPageData();
        },
        getPageData: function () {
            var userType = UserInfo.user_department_info.crm_type;
            var templateData = {};
            templateData = UserInfo;
            this.data = templateData;
            console.log(templateData);
            this.useTemplate();
        },
        useTemplate: function () {
            var html = template("adminLog",this.data);
            $("#page-adminLog").html(html);
            this.pageEvent();
        },
        pageEvent: function () {
            comFunc.addFooterClickEvent();
        }
    }

    var adminLogNewAddTarget = {
        config:{
            pageNum:10,
            sloatNum:3
        },
        currentPage:1,
        maxPage:0,
        data:{},
        init: function () {
            this.getPageData();
        },
        getPageData: function () {
            var urlData = comFunc.url(window.location.href)
            var type = urlData.type;
            this.refreshPage(type,1,1);
            this.useTemplate();
        },
        useTemplate: function () {
            var html = template("adminLogNewAddTarget",this.data);
            $("#page-adminLog-newAddTarget").html(html);
            this.pageEvent();
        },
        //初始化页面事件
        pageEvent: function () {
            comFunc.screening();
            this.screeningTime();
            this.sloatPage();
        },
        //刷新页面 输入 type(类型代号) value(筛选按钮代号) page(请求页数)
        refreshPage: function (type,value,page) {
            var self = this;
            var sdate = ""
            var timeSlot = comFunc.getNowTimeSlot();
            var templateData = {};
            templateData.type = type;
            templateData.screeningValue = value;
            templateData.currentPage = page;
            if(type === "1"){
                templateData.targetName = "学校";
            }else if(type === "2"){
                templateData.targetName = "合伙人";
            }else if(type === "3"){
                templateData.targetName = "机构";
            }
            switch (parseInt(value)){
                case 1:
                    sdate = timeSlot.currentDay;
                    templateData.screening = "今天";
                    break;
                case 2:
                    sdate = timeSlot.weekAgo;
                    templateData.screening = "一周内";
                    break;
                case 3:
                    sdate = timeSlot.monthAgo;
                    templateData.screening = "一月内";
                    break;
                case 4:
                    sdate = timeSlot.quarterAgo;
                    templateData.screening = "一季内";
                    break;
                case 0:
                    sdate = timeSlot.beginTime;
                    templateData.screening = "全部";
            }
            var postData = {
                type:parseInt(type),
                page:parseInt(page),
                sdate:sdate,
                edate:timeSlot.currentTime
            }
            console.log(postData);
            $.showPreloader("Loading...")
            $.ajax({
                url:"/webjson/customer/getDeptCustomerListByNew.aspx",
                type:"GET",
                data:postData,
                success: function (data) {
                    var data = JSON.parse(data);
                    console.log(data);
                    if(data.status == "1"){
                        templateData.count = data.count;

                        //分页处理
                        var pages = Math.ceil(data.count/self.config.pageNum);
                        self.maxPage = pages;
                        templateData.maxPage = pages;
                        var pagesArr = [];
                        var sloatNum = self.config.sloatNum;
                        if(pages <= sloatNum){
                            for(var i=1;i<=pages;i++){
                                pagesArr.push(i);
                            }
                        }else {
                            var currentPage = page;
                            if(currentPage - sloatNum < 0){
                                for(var i=1;i<=sloatNum;i++){
                                    pagesArr.push(i);
                                }
                            }else if(currentPage + sloatNum > pages){
                                for(var i=pages-sloatNum+1;i<=pages;i++){
                                    pagesArr.push(i);
                                }
                            }else {
                                for(var i = currentPage;i<currentPage+sloatNum;i++){
                                    pagesArr.push(i);
                                }
                            }
                        }
                        templateData.pages = pagesArr;

                        var cards = self.initTemplateData(data);
                        templateData.cards = cards;
                        console.log(templateData)
                        self.data = templateData;
                        self.useTemplate();
                        $.hidePreloader();
                    }else {
                        console.error(data);
                    }
                },
                error: function (err) {
                    console.log(err);
                    $.alert("服务器繁忙，请稍后重试");
                }
            });
        },
        //筛选功能
        screeningTime: function () {
            var self = this;
            $("#page-adminLog-newAddTarget").find(".screeningItem").unbind("touchstart").on("touchstart", function () {
                var value = $(this).data("value");
                var urlData = comFunc.url(window.location.href);
                var type = urlData.type;
                self.refreshPage(type,value,1)
            })
        },
        //分页按钮功能
        sloatPage: function () {
            var self = this;
            $("#page-adminLog-newAddTarget").find(".btn-sloatPage").unbind("touchstart").on("touchstart", function () {
                var urlData = comFunc.url(window.location.href)
                var type = urlData.type;
                var value = $("#page-adminLog-newAddTarget").find(".screeningContent").data("value");
                var page = $(this).data("page");
                if(page == "left"){
                    if(self.currentPage == 1){
                        return;
                    }else {
                        self.currentPage --;
                    }
                }else if(page == "right"){
                    if(self.currentPage == self.maxPage){
                        return;
                    }else {
                        self.currentPage ++;
                    }
                }else {
                    self.currentPage = parseInt(page);
                }
                self.refreshPage(type,value,self.currentPage);
            })
        },
        //处理查询数据
        initTemplateData: function (data) {
            var dataArr = data.r;
            var areaObj = {};
            var areaArr = [];
            var currentDate = new Date();
            var currentTimeMS = currentDate.getTime()
            for(var i=0;i<dataArr.length;i++){
                var areaCode = dataArr[i].crm_c_area;
                if(!areaObj[areaCode]){
                    areaObj[areaCode] = [];
                    areaObj[areaCode].push(dataArr[i]);
                }else {
                    areaObj[areaCode].push(dataArr[i]);
                }
            }
            for(var index in areaObj){
                var obj = {};
                var items = areaObj[index];
                var longname = items[0].area_longname.split(" ")
                var province =longname[0] || "";
                var city =longname[1] || "";
                var district =longname[2] || "";
                obj.province = province;
                obj.city = city;
                obj.district = district;

                for(var i= 0,length=items.length;i<length;i++){
                    var lasttime = items[i].crm_c_lasttime
                    if(lasttime == "1900-01-01 00:00"){
                        var timeDiff = "暂无跟进"
                    }else {
                        var lasttimeDate = new Date(lasttime);
                        var lasttimeMS = lasttimeDate.getTime();
                        var timeToNowMS = currentTimeMS - lasttimeMS;
                        var timeDiff = comFunc.MStoTime(timeToNowMS);
                    }
                    items[i].timeDiff = timeDiff
                }
                obj.items = items;
                areaArr.push(obj);
            }
            return areaArr;
        },
    };

    var adminLogNewAddContacts = {
        config:{
            pageNum:10,
            sloatNum:3
        },
        currentPage:1,
        maxPage:0,
        data:{},
        init: function () {
            this.getPageData();
        },
        getPageData: function () {
            this.refreshPage(1,1);
            this.useTemplate();
        },
        useTemplate: function () {
            var html = template("adminLogNewAddContacts",this.data);
            $("#page-adminLog-newAddContacts").html(html);
            this.pageEvent();
        },
        //初始化页面事件
        pageEvent: function () {
            comFunc.screening();
            this.screeningTime();
            this.sloatPage();
        },
        //刷新页面  输入 value(筛选显示代号)  和  page(请求页数)
        refreshPage: function (value,page) {
            var self = this;
            var sdate = ""
            var timeSlot = comFunc.getNowTimeSlot();
            var templateData = {};
            templateData.screeningValue = value;
            templateData.currentPage = page;
            switch (parseInt(value)){
                case 1:
                    sdate = timeSlot.currentDay;
                    templateData.screening = "今天";
                    break;
                case 2:
                    sdate = timeSlot.weekAgo;
                    templateData.screening = "一周内";
                    break;
                case 3:
                    sdate = timeSlot.monthAgo;
                    templateData.screening = "一月内";
                    break;
                case 4:
                    sdate = timeSlot.quarterAgo;
                    templateData.screening = "一季内";
                    break;
                case 0:
                    sdate = timeSlot.beginTime;
                    templateData.screening = "全部";
                    break;
            }
            var postData = {
                page:parseInt(page),
                sdate:sdate,
                edate:timeSlot.currentTime
            }
            console.log(postData);
            $.showPreloader("Loading...")
            $.ajax({
                url:"/webjson/contact/getDeptContactListByNew.aspx",
                type:"GET",
                data:postData,
                success: function (data) {
                    var data = JSON.parse(data);
                    if(data.status == "1"){
                        console.log(data);
                        templateData.count = data.count;

                        //分页处理
                        var pages = Math.ceil(data.count/self.config.pageNum);
                        self.maxPage = pages;
                        templateData.maxPage = pages;
                        var pagesArr = [];
                        var sloatNum = self.config.sloatNum;
                        if(pages <= sloatNum){
                            for(var i=1;i<=pages;i++){
                                pagesArr.push(i);
                            }
                        }else {
                            var currentPage = page;
                            if(currentPage - sloatNum < 0){
                                for(var i=1;i<=sloatNum;i++){
                                    pagesArr.push(i);
                                }
                            }else if(currentPage + sloatNum > pages){
                                for(var i=pages-sloatNum+1;i<=pages;i++){
                                    pagesArr.push(i);
                                }
                            }else {
                                for(var i = currentPage;i<currentPage+sloatNum;i++){
                                    pagesArr.push(i);
                                }
                            }
                        }
                        templateData.pages = pagesArr;


                        var items = self.initTemplateData(data);
                        templateData.alphabets = items;
                        console.log(templateData)
                        self.data = templateData;
                        self.useTemplate();
                        $.hidePreloader();
                    }else {
                        console.error(data);
                    }
                },
                error: function (err) {
                    console.log(err);
                    $.alert("服务器繁忙，请稍后重试")
                }
            })
        },
        //筛选按钮功能
        screeningTime: function () {
            var self = this;
            $("#page-adminLog-newAddContacts").find(".screeningItem").unbind("touchstart").on("touchstart", function () {
                var value = $(this).data("value");
                self.refreshPage(value,1)
            })
        },
        //分页按钮功能
        sloatPage: function () {
            var self = this;
            $("#page-adminLog-newAddContacts").find(".btn-sloatPage").unbind("touchstart").on("touchstart", function () {
                var page = $(this).data("page");
                var screeningValue = $("#page-adminLog-newAddContacts").find(".screeningContent").data("value");
                if(page == "left"){
                    if(self.currentPage == 1){
                        return;
                    }else {
                        self.currentPage --;
                    }
                }else if(page == "right"){
                    if(self.currentPage == self.maxPage){
                        return;
                    }else {
                        self.currentPage ++;
                    }
                }else {
                    self.currentPage = parseInt(page);
                }
                self.refreshPage(screeningValue,self.currentPage);
            })
        },
        //初始化模板数据
        initTemplateData: function (data) {
            var dataArr = data.r;
            var ccObj = {};
            var ccArr = [];
            for(var i=0;i<dataArr.length;i++){
                var ChineseSpell = dataArr[i].ChineseSpell;
                //console.log(ChineseSpell);
                var alphabet = ChineseSpell.slice(0,1).toUpperCase();
                //console.log(alphabet);
                if(!ccObj[alphabet]){
                    ccObj[alphabet] = [];
                    ccObj[alphabet].push(dataArr[i]);
                }else {
                    ccObj[alphabet].push(dataArr[i]);
                }
            }
            for(i in ccObj){
                var obj = {};
                obj.alphabet = i;
                obj.items = ccObj[i];
                ccArr.push(obj);
            }
            ccArr.sort(function (a,b) {
                if(a.alphabet < b.alphabet){return -1;};
                if(a.alphabet > b.alphabet){return 1};
                return 0;
            });
            return ccArr;
        }
    };

    var adminLogAttendance = {
        data:{},
        dataDetail:{},
        deptArr:[],
        init: function () {
            this.getPageData();
        },
        getPageData: function () {

            this.getAllDeptData(1);

            this.useTemplate();
        },
        useTemplate: function () {
            var html = template("adminLogAttendance",this.data);
            $("#page-adminLog-attendance").html(html);
            this.pageEvent();
        },
        useTemplateDetail: function (id) {
            var html = template("adminLogAttendanceDeptDetail",this.dataDetail);
            $(".dept"+id).append(html);
        },
        //初始化页面事件
        pageEvent: function () {
            comFunc.screening();
            this.screeningTime();
            this.getDeptSignInEvent();
        },
        //添加事件 实现点击部门获取 部门成员具体签到情况
        getDeptSignInEvent: function () {
            var self = this;
            $(".deptContainer").find("li").unbind("click").on("click", function (e) {
                var _this = this;
                var detail = $(this).find(".detail");
                var flgNext = false;
                if(detail.length == 0){
                    var path = $(this).data("path");
                    var value = $(this).data("value");
                    var id = $(this).data("id");
                    self.getDeptSignIn(value,path,id, function () {
                        flgNext = true;
                    })
                }else {
                    flgNext = true;
                }

                var end = setInterval(function () {
                    if(flgNext){
                        return self.clickToShow(e,_this,end);
                        clearInterval(end);
                    }
                },100)

            })
        },
        //点击展开事件
        clickToShow: function (e,_this,end) {
            if(e.target === $(_this).find(".header")[0]){
                var detail = $(_this).find(".detail");
                var icon = $(_this).find(".icon");
                if($(_this).hasClass("show")){
                    $(_this).removeClass("show");
                    detail.slideUp(300);
                    icon.removeClass("icon-down").addClass("icon-right");
                }else {
                    var show = $(".deptContainer").find("li.show");
                    show.removeClass("show");
                    show.find(".detail").slideUp(300);
                    show.find(".icon").removeClass("icon-down").addClass("icon-right");
                    $(_this).addClass("show");
                    detail.slideDown(300);
                    icon.removeClass("icon-right").addClass("icon-down")
                }
            }
            clearInterval(end);
        },
        //获取指定部门人员签到情况    value(时间代码 1.当天 2.一周 3.一月 4.一个季度 0 全部) path(部门路径) id(部门ID)
        getDeptSignIn: function (value,path,id,call) {
            var self = this;
            var timeSlot = comFunc.getNowTimeSlot();
            var sdate = "";
            var screening = ""
            switch (parseInt(value)){
                case 1:
                    sdate = timeSlot.currentDay;
                    screening = "今天";
                    break;
                case 2:
                    sdate = timeSlot.weekAgo;
                    screening = "一周内";
                    break;
                case 3:
                    sdate = timeSlot.monthAgo;
                    screening = "一月内";
                    break;
                case 4:
                    sdate = timeSlot.quarterAgo;
                    screening = "一季内";
                    break;
                case 0:
                    sdate = timeSlot.beginTime;
                    screening = "全部";
                    break;
            }
            var postData = {
                sdate:sdate,
                edate:timeSlot.currentTime,
                path:path
            };
            $.showPreloader("Loading...")
            $.ajax({
                url:"/webjson/signin/getDeptSignIn.aspx",
                type:"GET",
                data:postData,
                success: function (data) {
                    var data = JSON.parse(data);
                    if(data.status == 1){
                        var templateData = self.initSignInData(data);
                        templateData.screening = screening;
                        templateData.screeningValue = value;
                        console.log(templateData);
                        self.dataDetail = templateData;
                        self.useTemplateDetail(id)
                        call && call();
                        $.hidePreloader();
                    }else {
                        console.error(data);
                    }
                },
                error: function (err) {
                    console.loe(err);
                }
            });
        },
        //请求所有部门数据 value(时间代码 1.当天 2.一周 3.一月 4.一个季度 0 全部)
        getAllDeptData: function (value) {
            var self = this;
            var templateData = {};
            self.deptArr = [];

            var timeSlot = comFunc.getNowTimeSlot();
            var sdate = "";
            var screening = ""
            switch (parseInt(value)){
                case 1:
                    sdate = timeSlot.currentDay;
                    screening = "今天";
                    break;
                case 2:
                    sdate = timeSlot.weekAgo;
                    screening = "一周内";
                    break;
                case 3:
                    sdate = timeSlot.monthAgo;
                    screening = "一月内";
                    break;
                case 4:
                    sdate = timeSlot.quarterAgo;
                    screening = "一季内";
                    break;
                case 0:
                    sdate = timeSlot.beginTime;
                    screening = "全部";
                    break;
            }

            templateData.screening = screening;
            templateData.screeningValue = value;
            //请求所有部门
            $.showPreloader("Loading...")
            $.ajax({
                url:"/webjson/dept/getMyDeptList.aspx",
                type:"GET",
                success: function (data) {
                    var data = JSON.parse(data);
                    if(data.status == 1){
                        if(data.r){
                            self.initDeptData(data.r);
                            templateData.dept = self.deptArr;
                            console.log(templateData);
                            self.data = templateData;
                            self.useTemplate();
                            $.hidePreloader();
                        }else {
                            $.alert("无部门")
                        }
                    }else {
                        console.error(data);
                    }
                },
                error: function (err) {
                    console.log(err);
                    $.alert("服务器繁忙，请稍后重试")
                }
            });
        },
        //处理部门数据
        initDeptData: function (data) {
            var self = this;
            var deptData = data;
            var obj = {};
            obj.crm_department_id = deptData.crm_department_id;
            obj.crm_department_name = deptData.crm_department_name;
            obj.crm_department_parent = deptData.crm_department_parent;
            obj.crm_department_path = deptData.crm_department_path;
            this.deptArr.push(obj);
            if(deptData.dept_list){
                deptData.dept_list.forEach(function (item) {
                    self.initDeptData(item)
                })
            }else {
                return;
            }
        },
        //处理签到数据
        initSignInData: function (data) {
            var dataObj = data;
            var daycount = dataObj.daycount;
            var notCT = 0;
            var memberArr = dataObj.r;
            if(memberArr){
                memberArr.forEach(function (item) {
                    var c = item.c;
                    var notC = 0;
                    if(c){
                        notC = daycount * 2 - c;
                    }else {
                        notC = daycount * 2;
                    }
                    notCT += notC;
                    item.notC = notC;
                });
            }
            dataObj.notCT = notCT;
            return dataObj;
        },
        //筛选按钮功能
        screeningTime: function () {
            var self = this;
            $("#page-adminLog-attendance").find(".screeningItem").unbind("touchstart").on("touchstart", function () {
                var value = $(this).data("value");
                self.getAllDeptData(value)
            })
        },

    };

    var adminLogAttendanceDetail = {
        data:{},
        init: function () {
            this.getPageData();
        },
        getPageData: function () {
            var urlData = comFunc.url(window.location.href);

            var userid = urlData.userid;
            var value = urlData.value;

            this.refreshPage(userid,value);
            this.useTemplate();
        },
        useTemplate: function () {
            var html = template("adminLogAttendanceDetail",this.data);
            $("#page-adminLog-attendanceDetail").html(html);
            this.pageEvent();
        },
        //刷新页面  输入 userid(用户ID),value(筛选代号)
        refreshPage: function (userid,value) {
            var self = this;
            var templateData = {};
            templateData.screeningValue = value;
            var sdate = "";
            var timeSlot = comFunc.getNowTimeSlot();
            switch (parseInt(value)){
                case 1:
                    sdate = timeSlot.currentDay;
                    templateData.screening = "今天";
                    break;
                case 2:
                    sdate = timeSlot.weekAgo;
                    templateData.screening = "一周内";
                    break;
                case 3:
                    sdate = timeSlot.monthAgo;
                    templateData.screening = "一月内";
                    break;
                case 4:
                    sdate = timeSlot.quarterAgo;
                    templateData.screening = "一季内";
                    break;
                case 0:
                    sdate = timeSlot.beginTime;
                    templateData.screening = "全部"
                    break;
            }
            var postData = {
                userid:userid,
                sdate:sdate,
                edate:timeSlot.currentTime
            }
            $.showPreloader("Loading...")
            //获取当前用户考勤信息
            console.log(postData);
            $.ajax({
                url:"/webjson/signin/getSignInByUserID.aspx",
                type:"GET",
                data:postData,
                success: function (data) {
                    var data = JSON.parse(data);
                    if(data.status == 1){
                        var dates = self.initTemplateData(data);
                        templateData.dates = dates;
                        console.log(templateData);
                        self.data = templateData;
                        self.useTemplate();
                        $.hidePreloader();
                    }else {
                        console.error(data);
                    }
                },
                error: function (err) {
                    console.log(err);
                    $.alert("服务器繁忙，请稍后重试");
                }
            });
        },
        //初始化页面事件
        pageEvent: function () {
            comFunc.screening();
            this.screeningTime();
        },
        //筛选按钮功能
        screeningTime: function () {
            var self = this;
            $("#page-adminLog-attendanceDetail").find(".screeningItem").unbind("touchstart").on("touchstart", function () {
                var value = $(this).data("value");
                var urlData = comFunc.url(window.location.href);
                var userid = urlData.userid;
                self.refreshPage(userid,value)
            })
        },
        //处理模板数据
        initTemplateData: function (data) {
            var dataArr = data.r;
            var dateObj = {};
            var resultArr = [];
            dataArr.forEach(function (item) {
                var signInLog = item.SignInLog;
                signInLog.forEach(function (signItem) {
                    var crm_addtime = signItem.crm_addtime;
                    var data = crm_addtime.slice(0,10);
                    var time = crm_addtime.slice(11)
                    if(!dateObj[data]){
                        dateObj[data] = [];
                        dateObj[data].push(signItem)
                    }else {
                        dateObj[data].push(signItem)
                    }
                })
            })
            for(index in dateObj){
                var obj = {};
                obj.dateTime = index;
                var arr = dateObj[index];
                arr.forEach(function (item) {
                    var crm_tag = item.crm_tag;
                    var lastFlg = crm_tag.slice(crm_tag.length-1);
                    if(lastFlg == "1"){
                        var start = {};
                        start.crm_phone = item.crm_phone
                        start.crm_map = item.crm_map;
                        start.crm_map_name = item.crm_map_name;
                        start.crm_addtime = item.crm_addtime;
                        start.crm_tag = item.crm_tag
                        start.crm_user_id = item.crm_user_id;
                        start.id = item.id
                        start.time = item.crm_addtime.slice(11);
                        obj.start = start;
                    }else if(lastFlg == "2"){
                        var end = {};
                        end.crm_phone = item.crm_phone
                        end.crm_map = item.crm_map;
                        end.crm_map_name = item.crm_map_name;
                        end.crm_addtime = item.crm_addtime;
                        end.crm_tag = item.crm_tag
                        end.crm_user_id = item.crm_user_id;
                        end.id = item.id
                        end.time = item.crm_addtime.slice(11);
                        obj.end = end;
                    }
                })
                resultArr.push(obj);
            };
            //倒序排列
            resultArr.sort(function (a,b) {
                if(a.dateTime < b.dateTime){return 1;};
                if(a.dateTime > b.dateTime){return -1};
                return 0;
            })
            return resultArr;
        }
    };

    var adminLogAttendanceMy = {
        data:{},
        init: function () {
            this.getPageData();
        },
        getPageData: function () {
            // 1 代表 查找今天的数据
            this.refreshPage(1);
            this.useTemplate();
        },
        useTemplate: function () {
            var html = template("adminLogAttendanceMy",this.data);
            $("#page-adminiLog-attendanceMy").html(html);
            this.pageEvent();
        },
        //初始化页面数据
        pageEvent: function () {
            comFunc.screening();
            this.screeningTime();
        },
        //刷新页面  输入 value(筛选代号)
        refreshPage: function (value) {
            var self = this;
            var templateData = {};
            templateData.screeningValue = value;
            var sdate = "";
            var timeSlot = comFunc.getNowTimeSlot();
            switch (parseInt(value)){
                case 1:
                    sdate = timeSlot.currentDay;
                    templateData.screening = "今天";
                    break;
                case 2:
                    sdate = timeSlot.weekAgo;
                    templateData.screening = "一周内";
                    break;
                case 3:
                    sdate = timeSlot.monthAgo;
                    templateData.screening = "一月内";
                    break;
                case 4:
                    sdate = timeSlot.quarterAgo;
                    templateData.screening = "一季内";
                    break;
            }
            var postData = {
                sdate:sdate,
                edate:timeSlot.currentTime
            }
            $.showPreloader("Loading...")
            //获取当前用户考勤信息
            console.log(postData);
            $.ajax({
                url:"/webjson/signin/getSignInByUserID.aspx",
                type:"GET",
                data:postData,
                success: function (data) {
                    var data = JSON.parse(data);
                    if(data.status == 1){
                        var dates = self.initTemplateData(data);
                        templateData.dates = dates;
                        console.log(templateData);
                        self.data = templateData;
                        self.useTemplate();
                        $.hidePreloader();
                    }else {
                        console.error(data);
                    }
                },
                error: function (err) {
                    console.log(err);
                    $.alert("服务器繁忙，请稍后重试");
                }
            });
        },
        //筛选按钮功能
        screeningTime: function () {
            var self = this;
            $("#page-adminiLog-attendanceMy").find(".screeningItem").unbind("touchstart").on("touchstart", function () {
                var value = $(this).data("value");
                self.refreshPage(value)
            })
        },
        //处理模板数据
        initTemplateData: function (data) {
            console.log(data);
            var dataArr = data.r;
            var dateObj = {};
            var resultArr = [];
            dataArr.forEach(function (item) {
                var signInLog = item.SignInLog;
                signInLog.forEach(function (signItem) {
                    var crm_addtime = signItem.crm_addtime;
                    var data = crm_addtime.slice(0,10);
                    var time = crm_addtime.slice(11)
                    if(!dateObj[data]){
                        dateObj[data] = [];
                        dateObj[data].push(signItem)
                    }else {
                        dateObj[data].push(signItem)
                    }
                })
            })
            for(index in dateObj){
                var obj = {};
                obj.dateTime = index;
                var arr = dateObj[index];
                arr.forEach(function (item) {
                    var crm_tag = item.crm_tag;
                    var lastFlg = crm_tag.slice(crm_tag.length-1);
                    if(lastFlg == "1"){
                        var start = {};
                        start.crm_phone = item.crm_phone
                        start.crm_map = item.crm_map;
                        start.crm_map_name = item.crm_map_name;
                        start.crm_addtime = item.crm_addtime;
                        start.crm_tag = item.crm_tag
                        start.crm_user_id = item.crm_user_id;
                        start.id = item.id
                        start.time = item.crm_addtime.slice(11);
                        obj.start = start;
                    }else if(lastFlg == "2"){
                        var end = {};
                        end.crm_phone = item.crm_phone
                        end.crm_map = item.crm_map;
                        end.crm_map_name = item.crm_map_name;
                        end.crm_addtime = item.crm_addtime;
                        end.crm_tag = item.crm_tag
                        end.crm_user_id = item.crm_user_id;
                        end.id = item.id
                        end.time = item.crm_addtime.slice(11);
                        obj.end = end;
                    }
                })
                resultArr.push(obj);
            };
            //倒序排列
            resultArr.sort(function (a,b) {
                if(a.dateTime < b.dateTime){return 1;};
                if(a.dateTime > b.dateTime){return -1};
                return 0;
            })
            return resultArr;
        }
    };

    var adminLogLog = {
        data:{},
        subHeaderData:{},
        tabContentData:{},
        init: function () {
            this.getPageData();
        },
        getPageData: function () {
            var self = this;
            var urlData = comFunc.url(window.location.href);
            var targetId = urlData.targetId;
            var templateData = {};

            switch (parseInt(targetId)){
                case 1:
                    templateData.targetName = "我的日志";
                    break;
                case 2:
                    templateData.targetName = "部门日志";
                    break;
                case 3:
                    templateData.targetName = "全部日志";
                    break;
            }
            self.data = templateData;
            self.useTemplate();

            var flgSubHeader = false,
                flgTabContent = false;
            var trackNum = "";

            $.showPreloader("Loading...")
            //刷新subHeader
            self.refreshSubHeaderData(targetId,0, function (data) {
                var templateDataSubHeader = data;
                console.log(templateDataSubHeader);
                self.subHeaderData = templateDataSubHeader;
                self.useTemplateSubheader();

                flgSubHeader = true;
            })

            //获得客户跟踪结果分类数量
            self.getResultCount(targetId,1, function (data) {
                trackNum = data;
            })

            //刷新tabContent
            self.refreshTabContent(targetId,1, function (data) {
                var end = setInterval(function () {
                    if(trackNum){
                        if(targetId == 1 || targetId == 2){
                            data.trackNum = trackNum;
                            data.targetId = targetId;
                            var tabData = self.initTabData(data);
                            var jump = false;
                            if(targetId == 2){
                                jump = true;
                            }
                            tabData.targetId = targetId;
                            tabData.jump = jump;
                            tabData.value = 1;
                            console.log(tabData);
                            self.tabContentData = tabData;
                            self.useTemplateTabContent(1);
                        }else {
                            var tabData = trackNum;
                            tabData.targetId = targetId;
                            tabData.value = 1;
                            console.log(tabData);
                            self.tabContentData = tabData;
                            self.useTemplateTabContent(1);
                        }
                        flgTabContent = true;

                        trackNum = "";
                        clearInterval(end);
                    }
                },100)
            });

            var end = setInterval(function () {
                if(flgSubHeader && flgTabContent){
                    $.hidePreloader();
                    flgSubHeader = false;
                    flgTabContent = false;
                    clearInterval(end)
                }
            },100)
        },
        useTemplate: function () {
            var html = template("adminLogLog",this.data);
            $("#page-adminLog-log").html(html);
            this.pageEvent();
        },
        useTemplateSubheader: function () {
            var html = template("adminLogLogSubheader",this.subHeaderData);
            $("#page-adminLog-log").find(".subHeader").html(html);
        },
        useTemplateTabContent: function (id) {
            var html = template("adminLogLogTabContent",this.tabContentData);
            $("#adminLogTab"+id).html(html);
        },
        //初始化页面事件
        pageEvent: function () {
            this.tabSwitch();
        },
        //初始化tabData
        initTabData: function (data) {
            var maxData = data.r;
            var meData = data.trackNum;
            var targetId = data.targetId;
            var tabDataObj = {};

            var selfName = "";
            if(targetId == 1){
                selfName = "我";
            }else if(targetId == 2){
                selfName = "本部门"
            }

            var dataArr = [];
            for(var i=1;i<=4;i++){
                var targetName = "";
                var type = "";
                switch (i){
                    case 1:
                        targetName = "联络客户";
                        type = "1";
                        break;
                    case 2:
                        targetName = "参会客户";
                        type = "2";
                        break;
                    case 3:
                        targetName = "签约客户";
                        type = "3";
                        break;
                    case 4:
                        targetName = "回款客户";
                        type = "4";
                        break;
                }
                var obj = {};
                var objMe = {};
                var objFirst = {};
                var meNum,maxNum;
                var maxObj = {};
                obj.targetName = targetName;
                obj.type = type;
                meNum = meData["t"+i];
                var maxArr;
                maxArr = maxData.filter(function (item) {
                    return item.type == type
                });
                if(maxArr.length == 0){
                    objMe.name = selfName;
                    objMe.num = meNum;
                    objMe.percent = "0%";
                    obj.me = objMe;

                    objFirst.name = "第一名";
                    objFirst.num = 0;
                    objFirst.percent = "0%";
                    obj.first = objFirst;

                }else {
                    var maxObj = maxArr[0];
                    maxNum = maxObj.count;
                    var total = meNum + maxNum;
                    objMe.name = selfName;
                    objMe.num = meNum;
                    objMe.percent = (meNum/total).toFixed(2)*100+"%";
                    obj.me = objMe;

                    objFirst.name = maxObj.name;
                    objFirst.num = maxNum;
                    objFirst.percent = (maxNum/total).toFixed(2)*100+"%";
                    obj.first = objFirst;
                }
                dataArr.push(obj);
            }
            tabDataObj.dataArr = dataArr;
            return tabDataObj;
        },
        //tab之间切换事件
        tabSwitch: function () {
            var self = this;
            $(".tab-switch").unbind("click").on("click", function () {
                var urlData = comFunc.url(window.location.href);
                var targetId = urlData.targetId;
                var value = $(this).data("value");
                var flgSubHeader = false,
                    flgTabContent = false;
                var trackNum = "";

                $.showPreloader("Loading...")
                //刷新subHeader
                //self.refreshSubHeaderData(targetId,value, function (data) {
                //    var templateDataSubHeader = data;
                //    console.log(templateDataSubHeader);
                //    trackNum = templateDataSubHeader.trackNum
                //    self.subHeaderData = templateDataSubHeader;
                //    self.useTemplateSubheader();
                //
                //    flgSubHeader = true;
                //})

                //获得客户跟踪结果分类数量
                self.getResultCount(targetId,value, function (data) {
                    trackNum = data;
                })

                //刷新tabContent
                self.refreshTabContent(targetId,value, function (data) {
                    var end = setInterval(function () {
                        if(trackNum){
                            if(targetId == 1 || targetId == 2){
                                data.trackNum = trackNum;
                                data.targetId = targetId;
                                var tabData = self.initTabData(data);
                                var jump = false;
                                if(targetId == 2){
                                    jump = true;
                                }
                                tabData.targetId = targetId;
                                tabData.jump = jump;
                                tabData.value = value;
                                console.log(tabData);
                                self.tabContentData = tabData;
                                self.useTemplateTabContent(value);
                                $.hidePreloader();
                            }else {
                                var tabData = trackNum;
                                tabData.targetId = targetId;
                                tabData.value = value;
                                console.log(tabData);
                                self.tabContentData = tabData;
                                self.useTemplateTabContent(value);
                                $.hidePreloader();
                            }
                            trackNum = "";
                            clearInterval(end);
                        }
                    },100)
                });
            })
        },

        //获得客户跟踪结果分类数量
        getResultCount: function (targetId,value,call) {
            var urlGetResultCount = "";

            var path = "";

            var sdate = "";
            var timeSloat = comFunc.getNowTimeSlot();

            switch (parseInt(targetId)){
                case 1:
                    urlGetResultCount = "/webjson/customer/getResultCountByUserID.aspx";
                    break;
                case 2:
                    urlGetResultCount = "/webjson/customer/getDeptResultCount.aspx";
                    break;
                case 3:
                    urlGetResultCount = "/webjson/customer/getDeptResultCount.aspx";
                    path = "0";
                    break;
            }

            switch (parseInt(value)){
                case 1:
                    sdate = timeSloat.currentDay;
                    break;
                case 2:
                    sdate = timeSloat.weekAgo;
                    break;
                case 3:
                    sdate = timeSloat.monthAgo;
                    break;
                case 4:
                    sdate = timeSloat.quarterAgo;
                    break;
                case 0:
                    sdate = timeSloat.beginTime;
                    break;
            };

            var postData = {
                path:path,
                sdate:sdate,
                edate:timeSloat.currentTime
            }
            console.log(postData);
            //获取 客户跟踪结果分类数量
            $.ajax({
                url:urlGetResultCount,
                type:"GET",
                data:postData,
                success: function (data) {
                    var data = JSON.parse(data);
                    call && call(data);
                },
                error: function (err) {
                    console.log(err);
                }
            });
        },

        //刷新subHeader数据 targetId(三种类型 1：我的 2：部门 3：全部) value（时间段 1：当天 2：一周 3：一月 4：一季度）
        refreshSubHeaderData: function (targetId,value,call) {
            var urlGetTypeCount = "",
                urlGetContactCount = "",
                urlGetResultCount = "";
            var path = "";

            var flgType = false,
                flgTrack = false,
                flgCount = false;

            var sdate = "";
            var timeSloat = comFunc.getNowTimeSlot();

            var templateData = {};

            switch (parseInt(targetId)){
                case 1:
                    urlGetTypeCount = "/webjson/customer/getTypeCountByUserID.aspx";
                    urlGetContactCount = "/webjson/contact/getContactCountByUserID.aspx";
                    urlGetResultCount = "/webjson/customer/getResultCountByUserID.aspx";
                    break;
                case 2:
                    urlGetTypeCount = "/webjson/customer/getDeptTypeCount.aspx";
                    urlGetContactCount = "/webjson/contact/getDeptContactCount.aspx";
                    urlGetResultCount = "/webjson/customer/getDeptResultCount.aspx";
                    break;
                case 3:
                    urlGetTypeCount = "/webjson/customer/getDeptTypeCount.aspx";
                    urlGetContactCount = "/webjson/contact/getDeptContactCount.aspx";
                    urlGetResultCount = "/webjson/customer/getDeptResultCount.aspx";
                    path = "0"
                    break;
            }
            switch (parseInt(value)){
                case 1:
                    sdate = timeSloat.currentDay;
                    break;
                case 2:
                    sdate = timeSloat.weekAgo;
                    break;
                case 3:
                    sdate = timeSloat.monthAgo;
                    break;
                case 4:
                    sdate = timeSloat.quarterAgo;
                    break;
                case 0:
                    sdate = timeSloat.beginTime;
                    break;
            }
            var postData = {
                path:path,
                sdate:sdate,
                edate:timeSloat.currentTime
            }
            console.log(postData)
            //获取 客户类别数量
            $.ajax({
                url:urlGetTypeCount,
                type:"GET",
                data:postData,
                success: function (data) {
                    var data = JSON.parse(data);
                    templateData.typeNum = data;
                    flgType = true;
                },
                error: function (err) {
                    console.log(err);
                    $.alert("服务器繁忙，请稍后重试")
                }
            });

            //根据员工ID获取指定员工联系人数量
            $.ajax({
                url:urlGetContactCount,
                type:"GET",
                data:postData,
                success: function (data) {
                    var data = JSON.parse(data);
                    templateData.count = data.count;
                    flgCount = true;
                },
                error: function (err) {
                    console.log(err);
                    $.alert("服务器繁忙，请稍后重试")
                }
            });
            //获取 客户跟踪结果分类数量
            $.ajax({
                url:urlGetResultCount,
                type:"GET",
                data:postData,
                success: function (data) {
                    var data = JSON.parse(data);
                    templateData.trackNum = data;
                    flgTrack = true;
                },
                error: function (err) {
                    console.log(err);
                    $.alert("服务器繁忙，请稍后重试")
                }
            });

            var end = setInterval(function () {
                if(flgTrack && flgType && flgCount){
                    call && call(templateData);
                    clearInterval(end);
                }
            },100)
        },
        //刷新每个tab页面内容 targetId(三种类型 1：我的 2：部门 3：全部) value（时间段 1：当天 2：一周 3：一月 4：一季度）
        refreshTabContent: function (targetId,value,call) {
            var getUrl = "";
            if(targetId == 1 || targetId == 2){
                getUrl = "/webjson/customer/getCustomerResultMax.aspx"
            }else if(targetId == 3){
                call && call();
                return;
            }
            var sdate = "";
            var timeSloat = comFunc.getNowTimeSlot();
            switch (parseInt(value)){
                case 1:
                    sdate = timeSloat.currentDay;
                    break;
                case 2:
                    sdate = timeSloat.weekAgo;
                    break;
                case 3:
                    sdate = timeSloat.monthAgo;
                    break;
                case 4:
                    sdate = timeSloat.quarterAgo;
                    break;
                case 0:
                    sdate = timeSloat.beginTime;
                    break;
            }
            var postData = {
                sdate:sdate,
                edate:timeSloat.currentTime
            }

            $.ajax({
                url:getUrl,
                type:"GET",
                data:postData,
                success: function (data) {
                    var data = JSON.parse(data);
                    if(data.status == 1){
                        call && call(data);
                    }else {
                        console.error(data);
                    }
                },
                error: function (err) {
                    console.log(err);
                    $.alert("服务器繁忙，请稍后重试");
                }
            });
        }
    };

    var adminLogLogCompareDetail = {
        data:{},
        init: function () {
            this.getPageData();
        },
        getPageData: function () {
            var self = this;
            var templateData = {};

            var urlData = comFunc.url(window.location.href);
            var result = urlData.type;
            var targetId = urlData.targetId;
            var value = urlData.value;
            var total = urlData.total;

            var targetName =""
            switch (parseInt(result)){
                case 1:
                    targetName = "联络客户详情";
                    break;
                case 2:
                    targetName = "参会客户详情";
                    break;
                case 3:
                    targetName = "签约客户详情";
                    break;
                case 4:
                    targetName = "回款客户详情";
                    break;
            }
            templateData.targetName = targetName

            if(targetId == 2){
                this.refreshPageDept(value,result, function (data) {
                    var dataArr = data.r;
                    dataArr.forEach(function (item) {
                        item.name = item.crm_name;
                        if(total == 0){
                            item.percent = "0%";
                        }else {
                            item.percent = (item.count/total).toFixed(2)*100+"%";
                        }
                    })
                    templateData.dataArr = dataArr;
                    console.log(templateData);
                    self.data = templateData;
                    self.useTemplate();
                });
            }else if(targetId == 3){
                var path = "|0|";
                this.refreshPageAll(value,result,path, function (data) {
                    var dataArr = data.r;
                    dataArr.forEach(function (item) {
                        item.name = item.crm_department_name;
                        if(total == 0){
                            item.percent = "0%";
                        }else {
                            item.percent = (item.count/total).toFixed(2)*100+"%";
                        }
                    })
                    templateData.dataArr = dataArr;
                    console.log(templateData);
                    self.data = templateData;
                    self.useTemplate();
                });
            }


            self.data = templateData;
            self.useTemplate();
        },
        useTemplate: function () {
            var html = template("adminLogLogCompareDetail",this.data);
            $("#page-adminLog-logCompareDetail").html(html);
        },
        //刷新部门日志页面 value(时间段代号) result(跟踪结果类型)
        refreshPageDept: function (value,result,call) {
            var sdate = "";
            var timeSloat = comFunc.getNowTimeSlot();
            switch (parseInt(value)){
                case 1:
                    sdate = timeSloat.currentDay;
                    break;
                case 2:
                    sdate = timeSloat.weekAgo;
                    break;
                case 3:
                    sdate = timeSloat.monthAgo;
                    break;
                case 4:
                    sdate = timeSloat.quarterAgo;
                    break;
                case 0:
                    sdate = timeSloat.beginTime;
                    break;
            }
            var postData = {
                path:"",
                result:parseInt(result),
                sdate:sdate,
                edate:timeSloat.currentTime
            }
            console.log(postData);
            $.ajax({
                url:"/webjson/customer/getDeptResultCountList.aspx",
                type:"GET",
                data:postData,
                success: function (data) {
                    var data = JSON.parse(data);
                    if(data.status == 1){
                        call && call(data);
                    }else {
                        console.error(data);
                    }
                },
                error: function (err) {
                    console.log(err);
                }
            });
        },
        //刷新全部日志页面 value(时间段代号) result(跟踪结果类型) path(部门路径)
        refreshPageAll: function (value,result,path,call) {
            var sdate = "";
            var timeSloat = comFunc.getNowTimeSlot();
            switch (parseInt(value)){
                case 1:
                    sdate = timeSloat.currentDay;
                    break;
                case 2:
                    sdate = timeSloat.weekAgo;
                    break;
                case 3:
                    sdate = timeSloat.monthAgo;
                    break;
                case 4:
                    sdate = timeSloat.quarterAgo;
                    break;
                case 0:
                    sdate = timeSloat.beginTime;
                    break;
            }
            var postData = {
                path:path,
                result:parseInt(result),
                sdate:sdate,
                edate:timeSloat.currentTime
            }
            console.log(postData);
            $.ajax({
                url:"/webjson/customer/getDeptResultCountDeptList.aspx",
                type:"GET",
                data:postData,
                success: function (data) {
                    var data = JSON.parse(data);
                    if(data.status == 1){
                        call && call(data);
                    }else {
                        console.error(data)
                    }
                },
                error: function (err) {
                    console.log(err);
                }
            });
        }
    }

    var adminLogLogDetail = {
        config:{
            pageNum:10,
            sloatNum:3
        },
        currentPage:1,
        maxPage:0,
        data:{},
        init: function () {
            this.getPageData();
        },
        getPageData: function () {
            var urlData = comFunc.url(window.location.href);
            var targetId = urlData.targetId;
            var value = urlData.value;
            this.refreshPage(targetId,value,1);
            this.useTemplate();
        },
        useTemplate: function () {
            var html = template("adminLogLogDetail",this.data);
            $("#page-adminLog-logDetail").html(html);
            this.pageEvent();
        },
        //初始化页面事件
        pageEvent: function () {
            comFunc.screening();
            this.sloatPage();
        },
        //刷新页面 输入targetId（1：我的 2：部门 3：全部） value（开始时间代号） page(请求页数)
        refreshPage: function (targetId,value,page) {
            var self = this;
            var templateData = {};

            var sdate = "";
            var timeSlot = comFunc.getNowTimeSlot();
            templateData.currentPage = page;

            var getUrl = "";
            var path = "";
            switch (parseInt(targetId)){
                case 1:
                    templateData.targetName = "我的日志";
                    getUrl = "/webjson/work/getWorkLogListByUserId.aspx";
                    break;
                case 2:
                    templateData.targetName = "部门日志";
                    getUrl = "/webjson/work/getDeptWorkLogList.aspx";
                    break;
                case 3:
                    templateData.targetName = "全部日志";
                    getUrl = "/webjson/work/getDeptWorkLogList.aspx";
                    path = "0";
                    break;
            }

            switch (parseInt(value)){
                case 1:
                    sdate = timeSlot.currentDay;
                    break;
                case 2:
                    sdate = timeSlot.weekAgo;
                    break;
                case 3:
                    sdate = timeSlot.monthAgo;
                    break;
                case 4:
                    sdate = timeSlot.quarterAgo;
                    break;
                case 0:
                    sdate = timeSlot.beginTime;
                    break;
            };
            var useId = "";
            var flgNext = false;
            if(targetId == 1){
                //获取登录用户信息
                $.ajax({
                    url:"/webjson/dept/getMyDeptList.aspx",
                    type:"GET",
                    success: function (data) {
                        var data = JSON.parse(data);
                        if(data.status == 1){
                            console.log(data);
                            if(data.status == 1){
                                var currentUse = data.r.user_list[0];
                                useId = currentUse.crm_user_id;
                                flgNext = true;
                            }
                        }else {
                            console.error("错误")
                        }
                    },
                    error: function (err) {
                        console.log(err);
                    }
                })
            }else {
                flgNext = true;
            }

            var end = setInterval(function () {
                if(flgNext){
                    if(targetId == 1){
                        var postData = {
                            user_id:useId,
                            sdate:sdate,
                            edate:timeSlot.currentTime,
                            page:parseInt(page)
                        }
                    }else {
                        var postData = {
                            path:path,
                            sdate:sdate,
                            edate:timeSlot.currentTime,
                            page:parseInt(page)
                        }
                    }
                    //获取日志
                    console.log(postData);
                    $.showPreloader("Lading...")
                    $.ajax({
                        url:getUrl,
                        type:"GET",
                        data:postData,
                        success: function (data) {
                            var data = JSON.parse(data);
                            if(data.status == 1){
                                templateData.count = data.count;
                                //分页处理
                                var pages = Math.ceil(data.count/self.config.pageNum);
                                self.maxPage = pages;
                                templateData.maxPage = pages;
                                var pagesArr = [];
                                var sloatNum = self.config.sloatNum;
                                if(pages <= sloatNum){
                                    for(var i=1;i<=pages;i++){
                                        pagesArr.push(i);
                                    }
                                }else {
                                    var currentPage = page;
                                    if(currentPage - sloatNum < 0){
                                        for(var i=1;i<=sloatNum;i++){
                                            pagesArr.push(i);
                                        }
                                    }else if(currentPage + sloatNum > pages){
                                        for(var i=pages-sloatNum+1;i<=pages;i++){
                                            pagesArr.push(i);
                                        }
                                    }else {
                                        for(var i = currentPage;i<currentPage+sloatNum;i++){
                                            pagesArr.push(i);
                                        }
                                    }
                                }
                                templateData.pages = pagesArr;

                                var dataArr = data.r;
                                var nowTimeDate = new Date();
                                var nowTimeMS = nowTimeDate.getTime();
                                dataArr.forEach(function (item) {
                                    var addTime = item.crm_wl_addtime;
                                    var addTimeDate = new Date(addTime);
                                    var addTimeMS = addTimeDate.getTime();
                                    var timeDiffMS = nowTimeMS - addTimeMS;
                                    item.timeDiff = comFunc.MStoTime(timeDiffMS);
                                })
                                templateData.logItems = dataArr;
                                console.log(templateData);
                                self.data = templateData;
                                self.useTemplate();
                                $.hidePreloader();
                            }else {
                                console.error(data);
                            }
                        },
                        error: function (err) {
                            console.log(err);
                            $.alert("服务器繁忙，请稍后重试")
                        }
                    });

                    flgNext = false;
                    clearInterval(end);
                }
            },10)

            self.data = templateData;
            self.useTemplate();
        },
        //分页按钮功能
        sloatPage: function () {
            var self = this;
            $("#page-adminLog-logDetail").find(".btn-sloatPage").unbind("touchstart").on("touchstart", function () {
                var page = $(this).data("page");
                var screeningValue = $("#page-adminLog-newAddContacts").find(".screeningContent").data("value");
                if(page == "left"){
                    if(self.currentPage == 1){
                        return;
                    }else {
                        self.currentPage --;
                    }
                }else if(page == "right"){
                    if(self.currentPage == self.maxPage){
                        return;
                    }else {
                        self.currentPage ++;
                    }
                }else {
                    self.currentPage = parseInt(page);
                }
                var urlData = comFunc.url(window.location.href);
                var targetId = urlData.targetId;
                var value = urlData.value;
                self.refreshPage(targetId,value,self.currentPage);
            })
        },
    };

    var adminLogMyDept = {
        data:{},
        deptArr:[],
        init: function () {
            this.getPageData();
        },
        getPageData: function () {
            var self = this;
            var templateData = {};
            self.deptArr = [];

            //获取当前登录用户信息
            var userInfo = UserInfo;
            var userType = userInfo.user_department_info.crm_type;
            if(userType == 1){
                userInfo.department_info.deptMemberNum = userInfo.department_info.crm_department_count
                self.deptArr.push(userInfo.department_info);
                templateData.deptArr = self.deptArr;
            }else {
                $.showPreloader("Loading...")
                $.ajax({
                    url:"/webjson/dept/getMyDeptList.aspx",
                    type:"GET",
                    success: function (data) {
                        var data = JSON.parse(data);
                        if(data.status == 1){
                            self.initDeptData(data.r);
                            templateData.deptArr = self.deptArr;
                            self.data = templateData;
                            console.log(templateData);
                            self.useTemplate();
                            $.hidePreloader();
                        }else {
                            console.error(data);
                        }
                    },
                    error: function (err) {
                        console.log(err);
                        $.alert("服务器繁忙，请稍后重试")
                    }
                });
            }

            self.data = templateData;
            self.useTemplate();
        },
        useTemplate: function () {
            var html = template("adminLogMyDept",this.data);
            $("#page-adminLog-myDept").html(html);
        },
        //初始化页面事件
        pageEvent: function () {

        },
        //处理部门数据
        initDeptData: function (data) {
            var self = this;
            var deptData = data;
            var obj = {};
            obj.crm_department_id = deptData.crm_department_id;
            obj.crm_department_name = deptData.crm_department_name;
            obj.crm_department_parent = deptData.crm_department_parent;
            obj.crm_department_path = deptData.crm_department_path;
            obj.deptMemberNum = deptData.user_list.length;
            this.deptArr.push(obj);
            if(deptData.dept_list){
                deptData.dept_list.forEach(function (item) {
                    self.initDeptData(item)
                })
            }else {
                return;
            }
        },
    };

    var adminLogMyDeptMember = {
        data:{},
        init: function () {
            this.getPageData();
        },
        getPageData: function () {
            var self = this;
            var urlData = comFunc.url(window.location.href);
            var deptId = urlData.deptId;
            var templateData = {};
            //获取部门成员
            $.showPreloader("Loading...");
            $.ajax({
                url:"/webjson/employee/list.aspx",
                type:"GET",
                data:{
                    id:deptId
                },
                success: function (data) {
                    var data = JSON.parse(data);
                    if(data.status == 1){
                        templateData.deptMembers = data.r;
                        console.log(templateData);
                        self.data = templateData;
                        self.useTemplate();
                        $.hidePreloader();
                    }else {
                        console.error(data);
                    }
                },
                error: function (err) {
                    console.log(err);
                    $.alert("服务器繁忙，请稍后重试")
                }
            });
            self.data = templateData;
            self.useTemplate();
        },
        useTemplate: function () {
            var html = template("adminLogMyDeptMember",this.data);
            $("#page-adminLog-myDeptMember").html(html);
        }
    };

    var adminLogMyCheck = {
        config:{
            pageNum:10,
            sloatNum:3
        },
        currentPage1:1,
        maxPage1:0,
        currentPage2:1,
        maxPage2:0,
        data:{},
        data1:{},
        data2:{},
        init: function () {
            this.getPageData();
        },
        getPageData: function () {
            var self = this;
            //更新待审核页面
            self.refreshPage(1,1);
            //更新审核页面
            self.refreshPage(2,1);
        },
        useTemplate1: function () {
            var html = template("adminLogMyCheck",this.data1);
            $("#myCheckTab1").html(html);
            this.pageEvent();
        },
        useTemplate2: function () {
            var html = template("adminLogMyCheck",this.data2);
            $("#myCheckTab2").html(html);
            this.pageEvent();
        },
        //初始化页面事件
        pageEvent: function () {
            comFunc.screening();
            this.checkEvent();
            this.sloatPage();
        },
        //分页按钮功能
        sloatPage: function () {
            var self = this;
            //待审核页 分页按钮
            $("#page-adminLog-myCheck").find(".btn-sloatPage1").unbind("touchstart").on("touchstart", function () {
                var page = $(this).data("page");
                if(page == "left"){
                    if(self.currentPage1 == 1){
                        return;
                    }else {
                        self.currentPage1 --;
                    }
                }else if(page == "right"){
                    if(self.currentPage1 == self.maxPage1){
                        return;
                    }else {
                        self.currentPage1 ++;
                    }
                }else {
                    self.currentPage1 = parseInt(page);
                }
                self.refreshPage(1,self.currentPage1);
            });
            //已审核页 分页按钮
            $("#page-adminLog-myCheck").find(".btn-sloatPage2").unbind("touchstart").on("touchstart", function () {
                var page = $(this).data("page");
                if(page == "left"){
                    if(self.currentPage2 == 1){
                        return;
                    }else {
                        self.currentPage2 --;
                    }
                }else if(page == "right"){
                    if(self.currentPage2 == self.maxPage2){
                        return;
                    }else {
                        self.currentPage2 ++;
                    }
                }else {
                    self.currentPage2 = parseInt(page);
                }
                self.refreshPage(2,self.currentPage2);
            });
        },
        //刷新页面数据 status(1,待审核  2，审核) page(页码)
        refreshPage: function (status,page) {
            var self = this;
            var templateData = {};

            var postData = {
                status:parseInt(status),
                page:parseInt(page)
            };
            $.showPreloader("Loading...")
            console.log(postData);
            $.ajax({
                url:"/webjson/work/getWorkLogListByStatus.aspx",
                type:"GET",
                data:postData,
                success: function (data) {
                    var data = JSON.parse(data);
                    if(data.status == 1){
                        templateData.status = status;
                        templateData.currentPage = page;
                        var dataArr = data.r;
                        if(dataArr.length == 0 && page != 1){
                            self.refreshPage(status,page-1);
                            return;
                        }
                        var nowTimeDate = new Date();
                        var nowTimeMS = nowTimeDate.getTime();
                        dataArr.forEach(function (item) {
                            var addTime = item.crm_wl_addtime;
                            var addTimeDate = new Date(addTime);
                            var addTimeMS = addTimeDate.getTime();
                            var timeDiffMS = nowTimeMS - addTimeMS;
                            item.timeDiff = comFunc.MStoTime(timeDiffMS);
                        })
                        templateData.logs = dataArr;
                        templateData.count = data.count;
                        //分页处理
                        var pages = Math.ceil(data.count/self.config.pageNum);
                        templateData.maxPage = pages;
                        var pagesArr = [];
                        var sloatNum = self.config.sloatNum;
                        if(pages <= sloatNum){
                            for(var i=1;i<=pages;i++){
                                pagesArr.push(i);
                            }
                        }else {
                            var currentPage = page;
                            if(currentPage - sloatNum < 0){
                                for(var i=1;i<=sloatNum;i++){
                                    pagesArr.push(i);
                                }
                            }else if(currentPage + sloatNum > pages){
                                for(var i=pages-sloatNum+1;i<=pages;i++){
                                    pagesArr.push(i);
                                }
                            }else {
                                for(var i = currentPage;i<currentPage+sloatNum;i++){
                                    pagesArr.push(i);
                                }
                            }
                        }
                        templateData.pages = pagesArr;
                        if(status == 1){
                            self.maxPage1 = pages;
                            self.data1 = templateData;
                            console.log(templateData)
                            self.useTemplate1();
                        }else if(status == 2){
                            self.maxPage2 = pages;
                            self.data2 = templateData;
                            console.log(templateData);
                            self.useTemplate2();
                        };
                        $.hidePreloader();
                    }else {
                        console.error(data);
                    }
                },
                error: function (err) {
                    console.log(err);
                    $.alert("服务器繁忙，请稍后重试")
                }
            });
        },
        //审核事件
        checkEvent: function () {
            var self = this;
            $(".btn-check").on("click", function () {
                var logId = $(this).data("logId");
                var buttons1 = [
                    {
                        text: '沟通中',
                        bold: true,
                        bg: 'success',
                        onClick: function () {
                            var postData = {
                                id:logId,
                                audit:1
                            };
                            $.confirm("沟通中","审核结果", function () {
                                self._ajaxCheck(postData, function () {
                                    self.refreshPage(1,self.currentPage1);
                                    self.refreshPage(2,self.currentPage2);
                                });
                            })
                        }
                    },
                    {
                        text: '已参会',
                        bold: true,
                        bg: 'success',
                        onClick: function () {
                            var postData = {
                                id:logId,
                                audit:2
                            };
                            $.confirm("已参会","审核结果", function () {
                                self._ajaxCheck(postData, function () {
                                    $.alert("审核成功","已参会");
                                    self.refreshPage(1,self.currentPage1);
                                    self.refreshPage(2,self.currentPage2);
                                });
                            })
                        }
                    },
                    {
                        text: '已签约',
                        bold: true,
                        bg: 'success',
                        onClick: function () {
                            var postData = {
                                id:logId,
                                audit:3
                            };
                            $.confirm("已签约","审核结果", function () {
                                self._ajaxCheck(postData, function () {
                                    $.alert("审核成功","已签约");
                                    self.refreshPage(1,self.currentPage1);
                                    self.refreshPage(2,self.currentPage2);
                                });
                            })
                        }
                    },
                    {
                        text: '已回款',
                        bold: true,
                        bg: 'success',
                        onClick: function () {
                            var postData = {
                                id:logId,
                                audit:4
                            };
                            $.confirm("已回款","审核结果", function () {
                                self._ajaxCheck(postData, function () {
                                    $.alert("审核成功","已回款");
                                    self.refreshPage(1,self.currentPage1);
                                    self.refreshPage(2,self.currentPage2);
                                });
                            })
                        }
                    }
                ];
                var buttons2 = [
                    {
                        text: '关闭',
                        bg: 'danger'
                    }
                ];
                var groups = [buttons1, buttons2];
                $.actions(groups);
            });
        },
        //审核ajax  postData(Object){id:日志ID；audit:审状态}
        _ajaxCheck: function (postData,call) {
            var postData = postData;
            console.log(postData);
            $.showPreloader("Loading...")
            $.ajax({
                url:"/webjson/work/setWorkLogStatus.aspx",
                type:"POST",
                data:postData,
                success: function (data) {
                    var data = JSON.parse(data);
                    if(data.errcode == 1){
                        call && call();
                    }else {
                        console.error(data);
                    }
                },
                error: function (err) {
                    console.log(err);
                    $.alert("服务器繁忙，请稍后重试");
                }
            });
        }
    };

    var adminLogOM = {
        deptId:"",
        data:{},
        init: function () {
            this.getPageData();
            $.initSwipeout();
        },
        getPageData: function () {
            var self = this;
            var urlData = comFunc.url(window.location.href);
            var deptId = urlData.deptId;
            this.deptId = deptId;
            var templateData = {};
            var flgDept = false;
            var flgMember = false;
            //ajax获取部门列表
            $.showPreloader("Loading...")
            $.ajax({
                url:"/webjson/dept/list.aspx?id="+deptId,
                type:"GET",
                success: function (data) {
                    data = JSON.parse(data);
                    if(data.status == 1){
                        var deptData = self.initTemplateData(data);
                        templateData.deptData = deptData;
                        flgDept = true;
                    }else {
                        console.error(data);
                    }
                },
                error: function (err) {
                    console.log(err);
                    $.alert("服务器繁忙，请稍后重试")
                }
            });
            //获取部门成员列表
            $.ajax({
                url:"/webjson/employee/list.aspx",
                type:"GET",
                data:{
                    id:deptId
                },
                success: function (data) {
                    var data = JSON.parse(data);
                    if(data.status == 1){
                        templateData.deptMembers = data.r;
                        flgMember = true;
                    }else {
                        console.error(data);
                    }
                },
                error: function (err) {
                    console.log(err);
                    $.alert("服务器繁忙，请稍后重试");
                }
            });
            var end = setInterval(function () {
                if(flgDept && flgMember){
                    console.log(templateData)
                    self.data = templateData;
                    self.useTemplate();
                    $.hidePreloader();
                    flgDept = false;
                    flgMember = false;
                    clearInterval(end);
                }
            },100)
            self.data = templateData;
            self.useTemplate();
        },
        useTemplate: function () {
            var html = template("adminLogOM",this.data);
            $("#page-adminLog-OM").html(html);
            this.pageEvent();
        },
        //初始化页面事件
        pageEvent: function () {
            this.addNewDept();
            this.addNewMember();
            this.addActionSheet();
            //this.operationMember();

            this.removeMember();
            this.optionMember();
        },

        //成员操作
        //移除成员
        removeMember: function () {
            var self = this;
            $(".btn-deleteUser").on("click", function () {
                var clicked = $(this);

                var userId = $(this).data("userId");
                var userName = $(this).data("userName");
                var userType = $(this).data("userType");
                var deptId = comFunc.url(window.location.href).deptId;

                $.confirm("确定移除"+userName+"?","移除成员", function () {
                    var postData = {
                        id:userId
                    }
                    console.log(postData);
                    $.showPreloader("Loading...")
                    $.ajax({
                        url:"/webjson/employee/delDept.aspx",
                        type:"POST",
                        data:postData,
                        success: function (data) {
                            var data = JSON.parse(data);
                            if(data.errcode == 1){
                                $.swipeoutDelete(clicked.parents('.swipeout'));
                                $.hidePreloader();
                            }else{
                                console.error(data);
                                $.alert("删除失败，请稍后重试")
                            }
                        },
                        error: function (err) {
                            console.log(err);
                            $.alert("服务器繁忙，请稍后重试");
                        }
                    });
                })

            });
        },
        //设置成员
        optionMember: function () {
            var self = this;
            $(".btn-changeUser").on("click", function () {
                var userId = $(this).data("userId");
                var userName = $(this).data("userName");
                var userType = $(this).data("userType");
                var deptId = comFunc.url(window.location.href).deptId;

                var editPageDom = $(".popup-changeDept")
                var editPage = editPageDom.eq(editPageDom.length-1);
                var memName = editPage.find(".changeMem");
                var deptName = editPage.find(".changeDept");
                var deptType = editPage.find(".deptType");

                memName.val(userName);
                memName.data("id",userId);

                deptType.find("option[value="+userType+"]").attr("selected",true);

                var optionStr = "";
                //获取部门列表
                $.ajax({
                    url:"/webjson/dept/list.aspx?id=0",
                    type:"GET",
                    success: function (data) {
                        var data = JSON.parse(data);
                        if(data.status == 1){
                            console.log(data);
                            if(data.r){
                                var dataArr = data.r;
                                dataArr.forEach(function (item) {
                                    optionStr += "<option value='"+item.crm_department_id+"'>"+item.crm_department_name+"</option>"
                                })
                            }else {
                                optionStr = "<option value='0'>无部门</option>"
                            }
                            deptName.html(optionStr);
                            deptName.find("option[value="+deptId+"]").attr("selected",true);
                        }else {
                            console.error(data);
                        }
                    },
                    error: function (err) {
                        console.log(err);
                        $.alert("服务器繁忙，请稍后重试")
                    }
                });
                self.saveChangeMem();
            });
        },

        //成员操作 (目前没有使用这个方法)
        //交互为效果为：点击选择操作
        operationMember: function () {
            var self = this;
            $(".btn-operationMember").on("click", function () {
                var userId = $(this).data("userId");
                var userName = $(this).find(".item-title").html();
                var userType = $(this).data("userType");
                var deptId = comFunc.url(window.location.href).deptId;

                //添加操作选择
                var buttons1 = [
                    {
                        text: '更换部门',
                        bold: true,
                        color: 'success',
                        class:"open-popup",
                        data_popup:".popup-changeDept",
                        onClick: function () {
                            var editPageDom = $(".popup-changeDept")
                            var editPage = editPageDom.eq(editPageDom.length-1);
                            var memName = editPage.find(".changeMem");
                            var deptName = editPage.find(".changeDept");
                            var deptType = editPage.find(".deptType");

                            memName.val(userName);
                            memName.data("id",userId);

                            deptType.find("option[value="+userType+"]").attr("selected",true);

                            var optionStr = "";
                            //获取部门列表
                            $.ajax({
                                url:"/webjson/dept/list.aspx?id=0",
                                type:"GET",
                                success: function (data) {
                                    var data = JSON.parse(data);
                                    if(data.status == 1){
                                        console.log(data);
                                        if(data.r){
                                            var dataArr = data.r;
                                            dataArr.forEach(function (item) {
                                                optionStr += "<option value='"+item.crm_department_id+"'>"+item.crm_department_name+"</option>"
                                            })
                                        }else {
                                            optionStr = "<option value='0'>无部门</option>"
                                        }
                                        deptName.html(optionStr);
                                        deptName.find("option[value="+deptId+"]").attr("selected",true);
                                    }else {
                                        console.error(data);
                                    }
                                },
                                error: function (err) {
                                    console.log(err);
                                    $.alert("服务器繁忙，请稍后重试")
                                }
                            });
                            self.saveChangeMem();
                        }
                    },
                    {
                        text:"移除成员",
                        bold:true,
                        color:"success",
                        onClick: function () {
                            $.confirm("确定移除"+userName+"?","移除成员", function () {
                                var postData = {
                                    id:userId
                                }
                                console.log(postData);
                                $.showPreloader("Loading...")
                                $.ajax({
                                    url:"/webjson/employee/delDept.aspx",
                                    type:"POST",
                                    data:postData,
                                    success: function (data) {
                                        var data = JSON.parse(data);
                                        if(data.errcode == 1){
                                            self.getPageData();
                                        }else{
                                            console.error(data);
                                            $.alert("删除失败，请稍后重试")
                                        }
                                    },
                                    error: function (err) {
                                        console.log(err);
                                        $.alert("服务器繁忙，请稍后重试");
                                    }
                                });
                            })
                        }
                    }
                ];
                var buttons2 = [
                    {
                        text: '关闭',
                        bg: 'danger'
                    }
                ];
                var groups = [buttons1, buttons2];
                $.actions(groups);
            })
        },
        //成员更换部门保存操作
        saveChangeMem: function () {
            var self = this;
            $(".btn-saveChangeMemDept").on("click", function () {
                var content = $(this).parents(".content");
                var userId = content.find(".changeMem").data("id");
                var did = content.find(".changeDept").val();
                var type = content.find(".deptType").val();
                var postData = {
                    user_id:userId,
                    did:did,
                    type:type
                };
                console.log(postData);
                //修改设置员工部门
                $.showPreloader("Loading...");
                $.ajax({
                    url:"/webjson/employee/setUserDepartment.aspx",
                    type:"POST",
                    data:postData,
                    success: function (data) {
                        var data = JSON.parse(data);
                        if(data.errcode == 1){
                            self.getPageData();
                            comFunc.refreshLoginUserInfo();
                            $.alert("修改成功")
                        }else {
                            console.error(data);
                            $.alert("修改失败，请稍后重试")
                        }
                    },
                    error: function (err) {
                        console.log(err);
                        $.alert("服务器繁忙，请稍后重试");
                    }
                });
            });
        },
        //删除部门操作 deptId(部门ID)
        removeDept: function (deptId) {
            var self = this;
            //获取部门列表 （就为获得部门名字）
            $.ajax({
                url:"/webjson/dept/list.aspx?id="+deptId,
                type:"GET",
                success: function (data) {
                    var data = JSON.parse(data);
                    if(data.status == 1){
                        var rootDept = data.r[0];
                        var deptName = rootDept.crm_department_name;
                        $.confirm("移除部门"+deptName+"，是否确认？","移除部门", function () {
                            //删除部门
                            var postData = {
                                id:deptId
                            }
                            console.log(postData)
                            $.ajax({
                                url:"/webjson/dept/del.aspx",
                                type:"POST",
                                data:postData,
                                success: function (data) {
                                    var data = JSON.parse(data);
                                    if(data.errcode == 1){
                                        $.alert("移除成功,请返回")
                                    }else if(data.errcode == -203){
                                        $.alert("部门下面还有员工，不可移除。请先移除员工")
                                    }else {
                                        console.error(data);
                                        $.alert("移除失败，请稍后重试")
                                    }
                                },
                                error: function (err) {
                                    console.log(err);
                                    $.alert("服务器繁忙，请稍后重试")
                                }
                            });
                        });
                    }else {
                        console.error(data);
                    }
                },
                error: function (err) {
                    console.log(err);
                    $.alert("服务器繁忙，请稍后重试")
                }
            });
        },
        //添加选择操作
        addActionSheet: function () {
            var self = this;
            $(".choose-actions").on("click", function () {
                var buttons1 = [
                    {
                        text: '新增部门',
                        bold: true,
                        color: 'success',
                        class:"open-popup",
                        data_popup:".popup-addDept",
                    },
                    {
                        text: '新增成员',
                        bold: true,
                        color: 'success',
                        class:"open-popup",
                        data_popup:".popup-addMember",
                    },
                    {
                        text: '修改部门',
                        bold: true,
                        color: 'success',
                        class:"open-popup",
                        data_popup:".popup-editDept",
                    },
                    {
                        text:"移除部门",
                        bold:true,
                        color:"success",
                        onClick: function () {
                            var urlData = comFunc.url(window.location.href);
                            var deptId = urlData.deptId;
                            self.removeDept(deptId)
                        }
                    }
                ];
                var buttons2 = [
                    {
                        text: '关闭',
                        bg: 'danger'
                    }
                ];
                var groups = [buttons1, buttons2];
                $.actions(groups);

                self.editDept();
            });
        },
        //格式化模板数据格式
        initTemplateData: function (data) {
            var r = data.r;
            var dept = {};
            var rootDept = r[0];
            var rootPath = rootDept.crm_department_path.split("|");
            dept.crm_department_name = rootDept.crm_department_name;
            dept.crm_department_id = rootDept.crm_department_id;
            dept.crm_department_count = rootDept.crm_department_count;
            dept.crm_department_parent = rootDept.crm_department_parent;
            dept.crm_department_path = rootDept.crm_department_path;
            var subDept = [];
            for(var i=1;i< r.length;i++){
                var obj = {};
                var subDeptPath = r[i].crm_department_path.split("|");
                if(subDeptPath.length === rootPath.length+1){
                    obj.crm_department_name = r[i].crm_department_name;
                    obj.crm_department_id = r[i].crm_department_id;
                    obj.crm_department_count = r[i].crm_department_count;
                    obj.crm_department_parent = r[i].crm_department_parent;
                    obj.crm_department_path = r[i].crm_department_path;
                    subDept.push(obj);
                }
            }
            dept.crm_department_subDeptNum = subDept.length;
            dept.crm_department_subDept = subDept;
            return dept;
        },

        //作用：筛选当前部门的可移动父级部门 用来移动修改当前部门
        //传入：根据当前部门ID获取的部门列表数据  成功后的回调函数
        getCanMoveDept: function (deptData,call) {
            var currentDept = deptData.r[0];
            console.log(currentDept)
            var currentDeptPath = currentDept.crm_department_path;
            var currentDeptParentId = currentDept.crm_department_parent;
            console.log(currentDeptParentId);
            var parentDept = {};
            var flgParent = false;
            if(currentDeptParentId == 0){
                parentDept.crm_department_id = 0;
                parentDept.crm_department_name = "无";
                flgParent = true;
            }else {
                $.ajax({
                    url:"/webjson/dept/list.aspx?id="+currentDeptParentId,
                    type:"GET",
                    success: function (data) {
                        var data = JSON.parse(data);
                        if(data.status == 1){
                            console.log(data);
                            parentDept = data.r[0];
                            flgParent = true;
                        }else {
                            console.error("查询父部门出错")
                        }
                    },
                    error: function (err) {
                        console.log(err);
                        $.alert("服务器繁忙，请稍后重试");
                    }
                });
            }
            var canMoveDept = [];
            //获取所有部门
            $.ajax({
                url:"/webjson/dept/list.aspx?id=0",
                type:"GET",
                success: function (data) {
                    var data = JSON.parse(data);
                    if(data.status == 1){
                        var allDeptArr = data.r;
                        canMoveDept = allDeptArr.filter(function (item) {
                            var path = item.crm_department_path.slice(0,currentDeptPath.length);
                            return path != currentDeptPath
                        });
                        var end = setInterval(function () {
                            if(flgParent){
                                call&&call(canMoveDept,currentDeptParentId);
                                flgParent = false;
                                clearInterval(end);
                            }
                        },100)

                    }else {
                        console.error(data);
                    }
                },
                error: function (err) {
                    console.log(err);
                    $.alert("服务器繁忙，请稍后重试");
                }
            });
        },
        //修改部门
        editDept: function () {
            var self = this;
            //动态添加可移动的父级部门
            $(".actions-modal-button[data-popup='.popup-editDept']").unbind("touchstart").on("touchstart", function () {
                var editDeptPage = $(".popup-editDept");
                var deptName = editDeptPage.find(".deptName");
                var parentDeptContainer = editDeptPage.find(".parentDeptContainer");

                var urlData = comFunc.url(window.location.href);
                var deptId = urlData.deptId;
                console.log("deptId:"+deptId);
                //ajax获取部门列表
                $.ajax({
                    url:"/webjson/dept/list.aspx?id="+deptId,
                    type:"GET",
                    success: function (data) {
                        data = JSON.parse(data);
                        if(data.status == 1){
                            var currentDept = data.r[0];
                            deptName.val(currentDept.crm_department_name);
                            deptName.attr("data-id",currentDept.crm_department_id)
                            self.getCanMoveDept(data, function (canMoveDept,currentDeptParentId) {
                                var canMoveDept = canMoveDept;
                                var currentDeptParentId = currentDeptParentId;
                                var domStr = "";
                                canMoveDept.forEach(function (item) {
                                    var optionStr = "<option value='"+item.crm_department_id+"'>"+item.crm_department_name+"</option>"
                                    domStr += optionStr;
                                });
                                parentDeptContainer.html(domStr);
                                parentDeptContainer.find("option[value="+currentDeptParentId+"]").attr("selected",true);
                            });
                        }else {
                            console.error(data);
                        }
                    },
                    error: function (err) {
                        console.log(err);
                        $.alert("服务器繁忙，请稍后重试");
                    }
                });
            });
            //监听保存事件
            $(".btn-saveEditDept").unbind("touchstart").on("touchstart", function () {
                var content = $(this).parents(".content");
                var editDeptMsg = content.find(".editDeptMsg");
                var deptNameDom = content.find(".deptName");
                var parentDeptContainerDom = content.find(".parentDeptContainer");
                var deptName = deptNameDom.val();
                var deptId = deptNameDom.data("id");
                var parentDeptId = parentDeptContainerDom.find("option:checked").val();

                var postData = {
                    id:parseInt(deptId),
                    name:deptName,
                    parentid:parseInt(parentDeptId)
                };
                console.log(postData);
                //修改部门
                if(deptName === ""){
                    editDeptMsg.html("请填写部门名称")
                }else {
                    $.ajax({
                        url:"/webjson/dept/set.aspx",
                        type:"POST",
                        data:postData,
                        success: function (data) {
                            var data = JSON.parse(data);
                            console.log(data);
                            if(data.errcode == 1){
                                editDeptMsg.html("保存成功");
                                self.getPageData();
                            }else {
                                editDeptMsg.html("保存失败");
                            }
                            setTimeout(function () {
                                editDeptMsg.html("")
                            },2000)
                        },
                        error: function (err) {
                            console.log(err);
                            $.alert("服务器繁忙，请稍后重试");
                        }
                    });
                }
            })
        },
        //新增部门
        addNewDept: function () {
            var self = this;
            var promptMsg = $(".addDeptMsg");
            $(".btn-saveNewDept").unbind("touchstart").on("touchstart", function () {
                var deptId = parseInt(self.deptId);
                var addDept = $(".popup-addDept")
                var deptNameDom = addDept.find(".deptName");
                console.log(deptNameDom)
                var deptNameCurrent = deptNameDom.eq(deptNameDom.length-1);
                var deptName = deptNameCurrent.val();
                console.log(deptNameCurrent)
                if(deptName === ""){
                    promptMsg.html("部门名称不能为空");
                }else {
                    promptMsg.html("");
                    $.ajax({
                        url:"/webjson/dept/add.aspx",
                        type:"POST",
                        data:{
                            name:deptName,
                            parentid:deptId
                        },
                        success: function (data) {
                            var data = JSON.parse(data)
                            if(data.errcode == "1"){
                                promptMsg.html("保存成功");
                                deptNameCurrent.val("");
                                self.getPageData();
                            }else {
                                promptMsg.html("保存失败")
                            }
                            setTimeout(function () {
                                promptMsg.html("")
                            },2000)

                            console.log(data)
                        },
                        error: function (err) {
                            console.log(err);
                        }
                    });
                }
            })
        },
        //新增成员
        addNewMember: function () {
            var self = this;
            var promptMsg = $(".addMemberMsg");
            $(".btn-saveNewMember").unbind("touchstart").on("touchstart", function () {
                var deptId = parseInt(self.deptId);
                var memberIdDom = $(".memberId");
                var memberNameDom = $(".memberName");
                var memberTelDom = $(".memberTel");
                var memberPnameDom = $(".memberPname");
                var memberEmailDom = $(".memberEmail");
                var memberWeixinidDom = $(".memberWeixinid");

                var memberId = memberIdDom.eq(memberIdDom.length-1).val();
                var memberName = memberNameDom.eq(memberNameDom.length-1).val();
                var memberTel = memberTelDom.eq(memberTelDom.length-1).val();
                var memberPname = memberPnameDom.eq(memberPnameDom.length-1).val();
                var memberEmail = memberEmailDom.eq(memberEmailDom.length-1).val();
                var memberWeixinid = memberWeixinidDom.eq(memberWeixinidDom.length-1).val();
                if(memberId === ""){
                    promptMsg.html("用户ID不能为空")
                }else if(memberName === ""){
                    promptMsg.html("姓名不能为空")
                }else if(memberTel === ""){
                    promptMsg.html("电话不能为空")
                }else {
                    $.ajax({
                        url:"/webjson/employee/add.aspx",
                        type:"POST",
                        data:{
                            user_id:memberId,
                            name:memberName,
                            mobile:memberTel,
                            pname:memberPname,
                            email:memberEmail,
                            weixinid:memberWeixinid,
                            did:deptId
                        },
                        success: function (data) {
                            self.clearInput();
                            var data = JSON.parse(data);
                            if(data.errcode == "1"){
                                promptMsg.html("保存成功");
                                self.getPageData();
                                self.clearInput();
                            }else {
                                promptMsg.html("保存失败");
                            }
                            setTimeout(function () {
                                promptMsg.html("")
                            },3000)
                        },
                        error: function (err) {
                            console.log(err);
                        }
                    });
                }

            })
        },
        clearInput: function () {
            var memberIdDom = $(".memberId");
            var memberNameDom = $(".memberName");
            var memberTelDom = $(".memberTel");
            var memberPnameDom = $(".memberPname");
            var memberEmailDom = $(".memberEmail");
            var memberWeixinidDom = $(".memberWeixinid");
            memberIdDom.eq(memberIdDom.length-1).val("");
            memberNameDom.eq(memberNameDom.length-1).val("");
            memberTelDom.eq(memberTelDom.length-1).val("");
            memberPnameDom.eq(memberPnameDom.length-1).val("");
            memberEmailDom.eq(memberEmailDom.length-1).val("");
            memberWeixinidDom.eq(memberWeixinidDom.length-1).val("");
        }
    };

    var adminLogOMCopy = {
        deptId:"",
        data:{},
        init: function () {
            this.getPageData();
            $.initSwipeout();
        },
        getPageData: function () {
            var self = this;
            var urlData = comFunc.url(window.location.href);
            var deptId = urlData.deptId;
            this.deptId = deptId;
            var templateData = {};

            var flgDept = false;
            var flgMember = false;
            //ajax获取部门列表
            $.showPreloader("Loading...")
            $.ajax({
                url:"/webjson/dept/list.aspx?id="+deptId,
                type:"GET",
                success: function (data) {
                    data = JSON.parse(data);
                    if(data.status == 1){
                        var deptData = adminLogOM.initTemplateData(data);
                        templateData.deptData = deptData;
                        flgDept = true;
                    }else {
                        console.error(data);
                    }

                },
                error: function (err) {
                    console.log(err);
                    $.alert("服务器繁忙，请稍后重试");
                }
            });
            //获取部门成员列表
            $.ajax({
                url:"/webjson/employee/list.aspx",
                type:"GET",
                data:{
                    id:deptId
                },
                success: function (data) {
                    var data = JSON.parse(data);
                    if(data.status == 1){
                        templateData.deptMembers = data.r;
                        flgMember = true;
                    }else {
                        console.log(data);
                    }
                },
                error: function (err) {
                    console.log(err);
                    $.alert("服务器繁忙，请稍后重试");
                }
            });

            //渲染模板
            var end = setInterval(function () {
                if(flgDept && flgMember){
                    console.log(templateData)
                    self.data = templateData;
                    self.useTemplate();
                    $.hidePreloader();
                    flgDept = false;
                    flgMember = false;
                    clearInterval(end);
                }
            },100)
            self.data = templateData;
            self.useTemplate();
        },
        useTemplate: function () {
            var html = template("adminLogOMCopy",this.data);
            $("#page-adminLog-OMCopy").html(html);
            this.pageEvent();
        },
        //初始化页面事件
        pageEvent: function () {
            this.addNewDept();
            this.addNewMember();
            this.addActionSheet();
            //this.operationMember();

            this.removeMember();
            this.optionMember();
        },
        //成员操作
        //移除成员
        removeMember: function () {
            var self = this;
            $(".btn-deleteUser").on("click", function () {
                var clicked = $(this);

                var userId = $(this).data("userId");
                var userName = $(this).data("userName");
                var userType = $(this).data("userType");
                var deptId = comFunc.url(window.location.href).deptId;

                $.confirm("确定移除"+userName+"?","移除成员", function () {
                    var postData = {
                        id:userId
                    }
                    console.log(postData);
                    $.showPreloader("Loading...")
                    $.ajax({
                        url:"/webjson/employee/delDept.aspx",
                        type:"POST",
                        data:postData,
                        success: function (data) {
                            var data = JSON.parse(data);
                            if(data.errcode == 1){
                                $.swipeoutDelete(clicked.parents('.swipeout'));
                                $.hidePreloader();
                            }else{
                                console.error(data);
                                $.alert("删除失败，请稍后重试")
                            }
                        },
                        error: function (err) {
                            console.log(err);
                            $.alert("服务器繁忙，请稍后重试");
                        }
                    });
                })

            });
        },
        //设置成员
        optionMember: function () {
            var self = this;
            $(".btn-changeUser").on("click", function () {
                var userId = $(this).data("userId");
                var userName = $(this).data("userName");
                var userType = $(this).data("userType");
                var deptId = comFunc.url(window.location.href).deptId;

                var editPageDom = $(".popup-changeDept")
                var editPage = editPageDom.eq(editPageDom.length-1);
                var memName = editPage.find(".changeMem");
                var deptName = editPage.find(".changeDept");
                var deptType = editPage.find(".deptType");

                memName.val(userName);
                memName.data("id",userId);

                deptType.find("option[value="+userType+"]").attr("selected",true);

                var optionStr = "";
                //获取部门列表
                $.ajax({
                    url:"/webjson/dept/list.aspx?id=0",
                    type:"GET",
                    success: function (data) {
                        var data = JSON.parse(data);
                        if(data.status == 1){
                            console.log(data);
                            if(data.r){
                                var dataArr = data.r;
                                dataArr.forEach(function (item) {
                                    optionStr += "<option value='"+item.crm_department_id+"'>"+item.crm_department_name+"</option>"
                                })
                            }else {
                                optionStr = "<option value='0'>无部门</option>"
                            }
                            deptName.html(optionStr);
                            deptName.find("option[value="+deptId+"]").attr("selected",true);
                        }else {
                            console.error(data);
                        }
                    },
                    error: function (err) {
                        console.log(err);
                        $.alert("服务器繁忙，请稍后重试")
                    }
                });
                self.saveChangeMem();
            });
        },
        //成员操作 (目前没有使用这个方法)
        //交互为效果为：点击选择操作
        operationMember: function () {
            var self = this;
            $(".btn-operationMember").on("click", function () {
                var userId = $(this).data("userId");
                var userName = $(this).find(".item-title").html();
                var userType = $(this).data("userType");
                var deptId = comFunc.url(window.location.href).deptId;

                //添加操作选择
                var buttons1 = [
                    {
                        text: '更换部门',
                        bold: true,
                        color: 'success',
                        class:"open-popup",
                        data_popup:".popup-changeDept",
                        onClick: function () {
                            var editPageDom = $(".popup-changeDept");
                            var editPage = editPageDom.eq(editPageDom.length-1);
                            var memName = editPage.find(".changeMem");
                            var deptName = editPage.find(".changeDept");
                            var deptType = editPage.find(".deptType");

                            memName.val(userName);
                            memName.data("id",userId);

                            deptType.find("option[value="+userType+"]").attr("selected",true);


                            var optionStr = "";
                            //获取部门列表
                            $.ajax({
                                url:"/webjson/dept/list.aspx?id=0",
                                type:"GET",
                                success: function (data) {
                                    var data = JSON.parse(data);
                                    if(data.status == 1){
                                        console.log(data);
                                        if(data.r){
                                            var dataArr = data.r;
                                            dataArr.forEach(function (item) {
                                                optionStr += "<option value='"+item.crm_department_id+"'>"+item.crm_department_name+"</option>"
                                            })
                                        }else {
                                            optionStr = "<option value='0'>无部门</option>"
                                        }
                                        deptName.html(optionStr);
                                        deptName.find("option[value="+deptId+"]").attr("selected",true);
                                    }else {
                                        console.error(data);
                                    }
                                },
                                error: function (err) {
                                    console.log(err);
                                    $.alert("服务器繁忙，请稍后重试")
                                }
                            });
                            self.saveChangeMem();
                        }
                    },
                    {
                        text:"移除成员",
                        bold:true,
                        color:"success",
                        onClick: function () {
                            $.confirm("确定移除"+userName+"?","移除成员", function () {
                                var postData = {
                                    id:useId
                                }
                                console.log(postData);
                                $.showPreloader("Loading...")
                                $.ajax({
                                    url:"/webjson/employee/delDept.aspx",
                                    type:"POST",
                                    data:postData,
                                    success: function (data) {
                                        var data = JSON.parse(data);
                                        if(data.errcode == 1){
                                            self.getPageData();
                                        }else{
                                            console.error(data);
                                            $.alert("删除失败，请稍后重试")
                                        }
                                    },
                                    error: function (err) {
                                        console.log(err);
                                        $.alert("服务器繁忙，请稍后重试");
                                    }
                                });
                            })
                        }
                    }
                ];
                var buttons2 = [
                    {
                        text: '关闭',
                        bg: 'danger'
                    }
                ];
                var groups = [buttons1, buttons2];
                $.actions(groups);
            })
        },
        //成员更换部门保存操作
        saveChangeMem: function () {
            var self = this;
            $(".btn-saveChangeMemDept").on("click", function () {
                var content = $(this).parents(".content");
                var userId = content.find(".changeMem").data("id");
                var did = content.find(".changeDept").val();
                var type = content.find(".deptType").val();
                var postData = {
                    user_id:userId,
                    did:did,
                    type:type
                };
                console.log(postData);
                //修改设置员工部门
                $.showPreloader("Loading...");
                $.ajax({
                    url:"/webjson/employee/setUserDepartment.aspx",
                    type:"POST",
                    data:postData,
                    success: function (data) {
                        var data = JSON.parse(data);
                        if(data.errcode == 1){
                            self.getPageData();
                            comFunc.refreshLoginUserInfo();
                            $.alert("修改成功")
                        }else {
                            console.error(data);
                            $.alert("修改失败，请稍后重试")
                        }
                    },
                    error: function (err) {
                        console.log(err);
                        $.alert("服务器繁忙，请稍后重试");
                    }
                });
            });
        },
        //删除部门操作 deptId(部门ID)
        removeDept: function (deptId) {
            var self = this;
            //获取部门列表 （就为获得部门名字）
            $.ajax({
                url:"/webjson/dept/list.aspx?id="+deptId,
                type:"GET",
                success: function (data) {
                    var data = JSON.parse(data);
                    if(data.status == 1){
                        var rootDept = data.r[0];
                        var deptName = rootDept.crm_department_name;
                        $.confirm("移除部门"+deptName+"，是否确认？","移除部门", function () {
                            //删除部门
                            var postData = {
                                id:deptId
                            }
                            console.log(postData)
                            $.ajax({
                                url:"/webjson/dept/del.aspx",
                                type:"POST",
                                data:postData,
                                success: function (data) {
                                    var data = JSON.parse(data);
                                    if(data.errcode == 1){
                                        $.alert("移除成功,请返回")
                                    }else if(data.errcode == -203){
                                        $.alert("部门下面还有员工，不可移除。请先移除员工")
                                    }else {
                                        console.error(data);
                                        $.alert("移除失败，请稍后重试")
                                    }
                                },
                                error: function (err) {
                                    console.log(err);
                                    $.alert("服务器繁忙，请稍后重试")
                                }
                            });
                        });
                    }else {
                        console.error(data);
                    }
                },
                error: function (err) {
                    console.log(err);
                    $.alert("服务器繁忙，请稍后重试")
                }
            });
        },
        //添加选择操作
        addActionSheet: function () {
            var self = this;
            $(".choose-actionsCopy").on("click", function () {
                var buttons1 = [
                    {
                        text: '新增部门',
                        bold: true,
                        color: 'success',
                        class:"open-popup",
                        data_popup:".popup-addDeptCopy",
                    },
                    {
                        text: '新增成员',
                        bold: true,
                        color: 'success',
                        class:"open-popup",
                        data_popup:".popup-addMemberCopy",
                    },
                    {
                        text: '修改部门',
                        bold: true,
                        color: 'success',
                        class:"open-popup",
                        data_popup:".popup-editDept",
                    },
                    {
                        text:"移除部门",
                        bold:true,
                        color:"success",
                        onClick: function () {
                            var urlData = comFunc.url(window.location.href);
                            var deptId = urlData.deptId;
                            self.removeDept(deptId)
                        }
                    }
                ];
                var buttons2 = [
                    {
                        text: '关闭',
                        bg: 'danger'
                    }
                ];
                var groups = [buttons1, buttons2];
                $.actions(groups);

                self.editDept();
            });
        },
        //修改部门
        editDept: function () {
            var self = this;
            //动态添加可移动的父级部门
            $(".actions-modal-button[data-popup='.popup-editDept']").unbind("touchstart").on("touchstart", function () {
                var editDeptPage = $(".popup-editDept");
                var deptName = editDeptPage.find(".deptName");
                var parentDeptContainer = editDeptPage.find(".parentDeptContainer");

                var urlData = comFunc.url(window.location.href);
                var deptId = urlData.deptId;
                console.log("deptId:"+deptId);
                //ajax获取部门列表
                $.ajax({
                    url:"/webjson/dept/list.aspx?id="+deptId,
                    type:"GET",
                    success: function (data) {
                        data = JSON.parse(data);
                        if(data.status == 1){
                            var currentDept = data.r[0];
                            deptName.val(currentDept.crm_department_name);
                            deptName.attr("data-id",currentDept.crm_department_id)
                            adminLogOM.getCanMoveDept(data, function (canMoveDept,currentDeptParentId) {
                                var canMoveDept = canMoveDept;
                                var currentDeptParentId = currentDeptParentId;
                                var domStr = "";
                                canMoveDept.forEach(function (item) {
                                    var optionStr = "<option value='"+item.crm_department_id+"'>"+item.crm_department_name+"</option>"
                                    domStr += optionStr;
                                });
                                parentDeptContainer.html(domStr);
                                parentDeptContainer.find("option[value="+currentDeptParentId+"]").attr("selected",true);
                            });
                        }else {
                            console.error(data);
                        }
                    },
                    error: function (err) {
                        console.log(err);
                        $.alert("服务器繁忙，请稍后重试");
                    }
                });
            });
            //监听保存事件
            $(".btn-saveEditDeptCopy").unbind("touchstart").on("touchstart", function () {
                var content = $(this).parents(".content");
                var editDeptMsg = content.find(".editDeptMsg");
                var deptNameDom = content.find(".deptName");
                var parentDeptContainerDom = content.find(".parentDeptContainer");
                var deptName = deptNameDom.val();
                var deptId = deptNameDom.data("id");
                var parentDeptId = parentDeptContainerDom.find("option:checked").val();

                var postData = {
                    id:parseInt(deptId),
                    name:deptName,
                    parentid:parseInt(parentDeptId)
                };
                console.log(postData);
                //修改部门
                if(deptName === ""){
                    editDeptMsg.html("请填写部门名称")
                }else {
                    $.ajax({
                        url:"/webjson/dept/set.aspx",
                        type:"POST",
                        data:postData,
                        success: function (data) {
                            var data = JSON.parse(data);
                            console.log(data);
                            if(data.errcode == 1){
                                editDeptMsg.html("保存成功");
                                self.getPageData();
                            }else {
                                editDeptMsg.html("保存失败");
                            }
                            setTimeout(function () {
                                editDeptMsg.html("")
                            },2000)
                        },
                        error: function (err) {
                            console.log(err);
                            $.alert("服务器繁忙，请稍后重试")
                        }
                    });
                }
            })
        },
        //新增部门
        addNewDept: function () {
            var self = this;
            var promptMsg = $(".addDeptMsg");
            $(".btn-saveNewDeptCopy").unbind("touchstart").on("touchstart", function () {
                var deptId = parseInt(self.deptId);
                var addDept = $(".popup-addDeptCopy")
                var deptNameDom = addDept.find(".deptNameCopy");
                var deptNameCurrent = deptNameDom.eq(deptNameDom.length-1);
                var deptName = deptNameCurrent.val();
                if(deptName === ""){
                    promptMsg.html("部门名称不能为空");
                }else {
                    promptMsg.html("");
                    $.ajax({
                        url:"/webjson/dept/add.aspx",
                        type:"POST",
                        data:{
                            name:deptName,
                            parentid:deptId
                        },
                        success: function (data) {
                            var data = JSON.parse(data)
                            if(data.errcode == "1"){
                                promptMsg.html("保存成功");
                                deptNameCurrent.val("")
                                self.getPageData();
                            }else {
                                console.error(data);
                                promptMsg.html("保存失败")
                            }
                            setTimeout(function () {
                                promptMsg.html("")
                            },2000)
                        },
                        error: function (err) {
                            console.log(err);
                            $.alert("服务器繁忙，请稍后重试")
                        }
                    });
                }
            })
        },
        //新增成员
        addNewMember: function () {
            var self = this;
            var promptMsg = $(".addMemberMsg");
            $(".btn-saveNewMemberCopy").unbind("touchstart").on("touchstart", function () {
                var deptId = parseInt(self.deptId);
                var memberIdDom = $(".memberIdCopy");
                var memberNameDom = $(".memberNameCopy");
                var memberTelDom = $(".memberTelCopy");
                var memberPnameDom = $(".memberPnameCopy");
                var memberEmailDom = $(".memberEmailCopy");
                var memberWeixinidDom = $(".memberWeixinidCopy");

                var memberId = memberIdDom.eq(memberIdDom.length-1).val();
                var memberName = memberNameDom.eq(memberNameDom.length-1).val();
                var memberTel = memberTelDom.eq(memberTelDom.length-1).val();
                var memberPname = memberPnameDom.eq(memberPnameDom.length-1).val();
                var memberEmail = memberEmailDom.eq(memberEmailDom.length-1).val();
                var memberWeixinid = memberWeixinidDom.eq(memberWeixinidDom.length-1).val();
                if(memberId === ""){
                    promptMsg.html("用户ID不能为空")
                }else if(memberName === ""){
                    promptMsg.html("姓名不能为空")
                }else if(memberTel === ""){
                    promptMsg.html("电话不能为空")
                }else {
                    $.ajax({
                        url:"/webjson/employee/add.aspx",
                        type:"POST",
                        data:{
                            user_id:memberId,
                            name:memberName,
                            mobile:memberTel,
                            pname:memberPname,
                            email:memberEmail,
                            weixinid:memberWeixinid,
                            did:deptId
                        },
                        success: function (data) {
                            self.clearInput();
                            var data = JSON.parse(data);
                            if(data.errcode == "1"){
                                promptMsg.html("保存成功");
                                self.clearInput();
                                self.getPageData();
                            }else {
                                promptMsg.html("保存失败")
                            }
                            setTimeout(function () {
                                promptMsg.html("")
                            },3000)
                            console.log(data)
                        },
                        error: function (err) {
                            console.log(err);
                            $("服务器繁忙，请稍后重试")
                        }
                    });
                }

            })
        },
        clearInput: function () {
            var memberIdDom = $(".memberIdCopy");
            var memberNameDom = $(".memberNameCopy");
            var memberTelDom = $(".memberTelCopy");
            var memberPnameDom = $(".memberPnameCopy");
            var memberEmailDom = $(".memberEmailCopy");
            var memberWeixinidDom = $(".memberWeixinidCopy");
            memberIdDom.eq(memberIdDom.length-1).val("");
            memberNameDom.eq(memberNameDom.length-1).val("");
            memberTelDom.eq(memberTelDom.length-1).val("");
            memberPnameDom.eq(memberPnameDom.length-1).val("");
            memberEmailDom.eq(memberEmailDom.length-1).val("");
            memberWeixinidDom.eq(memberWeixinidDom.length-1).val("");
        }
    };

    function init(){
        $(document).on("pageInit","#page-crm-target" ,function () {
            crmTarget.init();
        });
        $(document).on("pageReinit","#page-crm-target" ,function () {
            crmTarget.init();
        });
        $(document).on("pageInit","#page-crm-targetDetail" ,function () {
            crmTargetDetail.init();
        });
        $(document).on("pageReinit","#page-crm-targetDetail" ,function () {
            crmTargetDetail.init();
        });
        $(document).on("pageInit","#page-crm-targetEdit" ,function () {
            crmTargetEdit.init();
        });
        $(document).on("pageInit","#page-crm-addressList" ,function () {
            crmAddressList.init();
        });
        $(document).on("pageReinit","#page-crm-addressList" ,function () {
            crmAddressList.init();
        });
        $(document).on("pageInit","#page-contactsDetail" ,function () {
            contactsDetail.init();
        });
        $(document).on("pageInit","#page-adminLog" ,function () {
            adminLog.init();
        });
        $(document).on("pageReinit","#page-adminLog" ,function () {
            adminLog.init();
        });
        $(document).on("pageInit","#page-adminLog-newAddTarget" ,function () {
            adminLogNewAddTarget.init();
        });
        $(document).on("pageInit","#page-adminLog-newAddContacts" ,function () {
            adminLogNewAddContacts.init();
        });
        $(document).on("pageInit","#page-adminLog-attendance" ,function () {
            adminLogAttendance.init();
        });
        $(document).on("pageInit","#page-adminLog-attendanceDetail" ,function () {
            adminLogAttendanceDetail.init();
        });
        $(document).on("pageInit","#page-adminiLog-attendanceMy" ,function () {
            adminLogAttendanceMy.init();
        });
        $(document).on("pageInit","#page-adminLog-log" ,function () {
            adminLogLog.init();
        });
        $(document).on("pageInit","#page-adminLog-logCompareDetail" ,function () {
            adminLogLogCompareDetail.init();
        });
        $(document).on("pageInit","#page-adminLog-logDetail" ,function () {
            adminLogLogDetail.init();
        });
        $(document).on("pageInit","#page-adminLog-myDept" ,function () {
            adminLogMyDept.init();
        });
        $(document).on("pageInit","#page-adminLog-myDeptMember" ,function () {
            adminLogMyDeptMember.init();
        });
        $(document).on("pageInit","#page-adminLog-myCheck" ,function () {
            adminLogMyCheck.init();
        });

        $(document).on("pageInit","#page-adminLog-OM" ,function () {
            adminLogOM.init();
        });
        $(document).on("pageInit","#page-adminLog-OMCopy" ,function () {
            adminLogOMCopy.init();
        });
        $(document).on("pageReinit","#page-adminLog-OM" ,function () {
            adminLogOM.init();
        });
        $(document).on("pageReinit","#page-adminLog-OMCopy" ,function () {
            adminLogOMCopy.init();
        });
    }

    init();

});