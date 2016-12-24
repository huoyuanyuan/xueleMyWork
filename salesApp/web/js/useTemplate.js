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
                        templateData.count = data.count;
                        var cards = self.initTemplateData(data);
                        templateData.cards = cards;
                        console.log(templateData);
                        self.data = templateData;
                        self.useTemplate();
                        $.hidePreloader();
                    }else {
                        $.alert("加载出错")
                    }
                },
                error: function (err) {
                    console.log(err);
                    $.alert("加载出错")
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
                        $.alert("加载出错")
                    }
                },
                error: function (err) {
                    console.log(err);
                    $.alert("加载出错")
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
                        $.alert("加载出错")
                    }
                },
                error: function (err) {
                    console.log(err);
                    $.alert("加载出错")
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
                        $.alert("加载出错")
                    }
                },
                error: function (err) {
                    console.log(err);
                    $.alert("加载出错")
                }
            });
            //渲染模板数据
            var end = setInterval(function () {
                if(flgccDetail && flgccLink && flgccLog){
                    self.data = templateData;
                    console.log(templateData);
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
            var domStr =    "<div class='item-content bg-white'>"
                            +   "<div class='item-inner'>"
                            +       "<div class='item-title-row'>"
                            +           "<div class='item-title'>"+obj.crm_cc_name+"</div>"
                            +           "<div class='item-title'>"+obj.crm_cc_position+"</div>"
                            +       "</div>"
                            +   "   <div class='item-subtitle'>电话："+obj.crm_cc_phone+"</div>"
                            +   "</div>";
                            +"</div>"
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
            //this.radioChange();
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
                    templateData.count = data.count;
                    var items = self.initTemplateData(data);
                    templateData.alphabets = items;
                    self.data = templateData;
                    self.useTemplate();
                    $.hidePreloader();
                },
                error: function (data) {
                    console.log(data);
                    $.alert("加载出错")
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
                        $.alert("加载出错")
                    }
                },
                error: function (err) {
                    console.log(err);
                    $.alert("加载出错")
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
                            console.error("查询出错")
                        }
                    },
                    error: function (err) {
                        console.log(err);
                    }
                });
            });
            //保存编辑信息
            $(".btn-saveEditCC").unbind("touchstart").on("touchstart", function () {
                var content = $(this).parent().parent();
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
                                for(var i = currentPage;i<=sloatNum;i++){
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
                        $.alert("加载出错")
                    }
                },
                error: function (err) {
                    console.log(err);
                    $.alert("加载出错")
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
                                for(var i = currentPage;i<=sloatNum;i++){
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
                        $.alert("加载出错")
                    }
                },
                error: function (err) {
                    console.log(err);
                    $.alert("加载出错")
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
        init: function () {
            this.getPageData();
        },
        getPageData: function () {
            var self = this

            var data = {
                depts:[
                    {
                        deptName:"技术部",
                        deptId:"1",
                        attendNum:"8",
                        noAttendNum:"5",
                        deptPersons:[
                            {
                                personName:"王凯帆",
                                personId:"1",
                                personState:"考勤正常"
                            },
                            {
                                personName:"霍园园",
                                personId:"2",
                                personState:"缺卡1次"
                            },
                        ]
                    },
                    {
                        deptName:"编辑部",
                        deptId:"2",
                        attendNum:"9",
                        noAttendNum:"3",
                        deptPersons:[
                            {
                                personName:"王凯帆",
                                personId:"1",
                                personState:"缺卡3次"
                            },
                            {
                                personName:"霍园园",
                                personId:"2",
                                personState:"考勤正常"
                            },
                        ]
                    },
                    {
                        deptName:"内容部",
                        deptId:"3",
                        attendNum:"4",
                        noAttendNum:"0",
                        deptPersons:[
                            {
                                personName:"王凯帆",
                                personId:"1",
                                personState:"考勤正常"
                            },
                            {
                                personName:"霍园园",
                                personId:"2",
                                personState:"考勤正常"
                            },
                        ]
                    },
                ]
            }

            self.data = data;
            self.useTemplate();
        },
        useTemplate: function () {
            var html = template("adminLogAttendance",this.data);
            $("#page-adminLog-attendance").html(html);
            this.pageEvent();
        },
        //初始化页面事件
        pageEvent: function () {
            comFunc.clickToShow();
        }
    };

    var adminLogAttendanceDetail = {
        data:{},
        init: function () {
            this.getPageData();
        },
        getPageData: function () {
            var self = this;
            var url = window.location.href;
            var urlData = comFunc.url(url);

            var personId = urlData.personId;
            //根据ID ajax请求数据
            //现模拟数据
            if(personId === "1"){
                var data = {
                    personName:"王凯帆",
                    personId:"1",
                    personState:"缺卡5次",
                    dates:[
                        {
                            date:"2016年12月12日",
                            dateState:true,
                            stateState:true,
                            stateTime:"08:30",
                            stateDevice:"iphone6",
                            stateAdress:"浙江省杭州市滨江区智慧e谷",
                            endState:true,
                            endTime:"19:30",
                            endDevice:"iphone6",
                            endAdress:"浙江省杭州市滨江区智慧e谷"
                        },
                        {
                            date:"2016年12月11日",
                            dateState:true,
                            stateState:true,
                            stateTime:"08:30",
                            stateDevice:"iphone6",
                            stateAdress:"浙江省杭州市滨江区智慧e谷",
                            endState:false,
                            endTime:"",
                            endDevice:"",
                            endAdress:""
                        },
                        {
                            date:"2016年12月10日",
                            dateState:false,
                            stateState:"",
                            stateTime:"",
                            stateDevice:"",
                            stateAdress:"",
                            endState:"",
                            endTime:"",
                            endDevice:"",
                            endAdress:""
                        },
                        {
                            date:"2016年12月09日",
                            dateState:true,
                            stateState:false,
                            stateTime:"",
                            stateDevice:"",
                            stateAdress:"",
                            endState:true,
                            endTime:"19:30",
                            endDevice:"iphone6",
                            endAdress:"浙江省杭州市滨江区智慧e谷"
                        }
                    ]
                }
            }else if(personId === "2"){
                var data = {
                    personName:"霍园园",
                    personId:"2",
                    personState:"考勤正常",
                    dates:[
                        {
                            date:"2016年12月12日",
                            dateState:true,
                            stateState:true,
                            stateTime:"08:30",
                            stateDevice:"Android",
                            stateAdress:"浙江省杭州市滨江区智慧e谷",
                            endState:true,
                            endTime:"19:30",
                            endDevice:"Android",
                            endAdress:"浙江省杭州市滨江区智慧e谷"
                        },
                        {
                            date:"2016年12月11日",
                            dateState:true,
                            stateState:true,
                            stateTime:"08:30",
                            stateDevice:"Android",
                            stateAdress:"浙江省杭州市滨江区智慧e谷",
                            endState:false,
                            endTime:"",
                            endDevice:"",
                            endAdress:""
                        },
                        {
                            date:"2016年12月10日",
                            dateState:false,
                            stateState:"",
                            stateTime:"",
                            stateDevice:"",
                            stateAdress:"",
                            endState:"",
                            endTime:"",
                            endDevice:"",
                            endAdress:""
                        },
                        {
                            date:"2016年12月09日",
                            dateState:true,
                            stateState:false,
                            stateTime:"",
                            stateDevice:"",
                            stateAdress:"",
                            endState:true,
                            endTime:"19:30",
                            endDevice:"Android",
                            endAdress:"浙江省杭州市滨江区智慧e谷"
                        }
                    ]
                }
            }

            self.data = data;
            self.useTemplate();
        },
        useTemplate: function () {
            var html = template("adminLogAttendanceDetail",this.data);
            $("#page-adminLog-attendanceDetail").html(html);
            this.pageEvent();
        },
        //初始化页面事件
        pageEvent: function () {
            comFunc.screening();
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
                        $.ajax("加载出错")
                    }
                },
                error: function (err) {
                    console.log(err);
                    $.alert("加载出错")
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
            var dataArr = data.r;
            console.log(dataArr)
            var dateObj = {};
            var resultArr = [];
            dataArr.forEach(function (item) {
                var crm_addtime = item.crm_addtime;
                var data = crm_addtime.slice(0,10);
                var time = crm_addtime.slice(11)
                if(!dateObj[data]){
                    dateObj[data] = [];
                    dateObj[data].push(item)
                }else {
                    dateObj[data].push(item)
                }
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
            //resultArr.sort(function (a,b) {
            //    if(a.dateTime < b.dateTime){return -1;};
            //    if(a.dateTime > b.dateTime){return 1};
            //    return 0;
            //})
            return resultArr;
        }
    };

    var adminLogLog = {
        data:{},
        init: function () {
            this.getPageData();
        },
        getPageData: function () {
            var self = this;
            var url = window.location.href;
            var urlData = comFunc.url(url);
            var targetId = urlData.targetId;

            var flgType = false,
                flgTrack = false,
                flgCount = false;

            var urlGetTypeCount = "",
                urlGetContactCount = "",
                urlGetResultCount = "";


            var templateData = {};
            templateData.targetId = targetId;

            switch (parseInt(targetId)){
                case 1:
                    templateData.targetName = "我的日志";
                    urlGetTypeCount = "/webjson/customer/getTypeCountByUserID.aspx";
                    urlGetContactCount = "/webjson/contact/getContactCountByUserID.aspx";
                    urlGetResultCount = "/webjson/customer/getResultCountByUserID.aspx";
                    break;
                case 2:
                    console.log(">>缺少contact")
                    templateData.targetName = "部门日志";
                    urlGetTypeCount = "/webjson/customer/getDeptTypeCount.aspx";
                    urlGetContactCount = "/webjson/contact/getContactCountByUserID.aspx";
                    urlGetResultCount = "/webjson/customer/getDeptResultCount.aspx";
                    break;
                case 3:
                    console.log(">>缺少type contact  result")
                    templateData.targetName = "全部日志";
                    urlGetTypeCount = "/webjson/customer/getTypeCountByUserID.aspx";
                    urlGetContactCount = "/webjson/contact/getContactCountByUserID.aspx";
                    urlGetResultCount = "/webjson/customer/getResultCountByUserID.aspx";
                    break;
            }

            $.showPreloader("Loading...")
            //获取指定用户客户类别数量
            $.ajax({
                url:urlGetTypeCount,
                type:"GET",
                data:{
                    id:"",
                    sdate:"",
                    edate:""
                },
                success: function (data) {
                    var data = JSON.parse(data);
                    templateData.typeNum = data;
                    flgType = true;
                },
                error: function (err) {
                    console.log(err);
                    $.alert("加载出错")
                }
            });

            //根据员工ID获取指定员工联系人数量
            $.ajax({
                url:urlGetContactCount,
                type:"GET",
                data:{
                    id:"",
                },
                success: function (data) {
                    var data = JSON.parse(data);
                    templateData.count = data.count;
                    flgCount = true;
                },
                error: function (err) {
                    console.log(err);
                    $.alert("加载出错")
                }
            });
            //获取指定用户客户跟踪结果分类数量
            $.ajax({
                url:urlGetResultCount,
                type:"GET",
                data:{
                    id:"",
                    sdate:"",
                    edate:""
                },
                success: function (data) {
                    var data = JSON.parse(data);
                    templateData.trackNum = data;
                    flgTrack = true;
                },
                error: function (err) {
                    console.log(err);
                    $.alert("加载出错")
                }
            });

            //获取对比关系数据
            var compareData = {
                jump:true,
                today:[
                    {
                        targetName:"联络客户",
                        targetId:1,
                        me:{
                            name:"我",
                            num:5,
                            percent:"25%"
                        },
                        first:{
                            name:"第一",
                            num:20,
                            percent:"100%"
                        }
                    },
                    {
                        targetName:"参会客户",
                        targetId:2,
                        me:{
                            name:"我",
                            num:4,
                            percent:"20%"
                        },
                        first:{
                            name:"第一",
                            num:20,
                            percent:"100%"
                        }
                    },
                    {
                        targetName:"签约客户",
                        targetId:3,
                        me:{
                            name:"我",
                            num:10,
                            percent:"50%"
                        },
                        first:{
                            name:"第一",
                            num:20,
                            percent:"100%"
                        }
                    },
                    {
                        targetName:"回款客户",
                        targetId:4,
                        me:{
                            name:"我",
                            num:15,
                            percent:"75%"
                        },
                        first:{
                            name:"第一",
                            num:20,
                            percent:"100%"
                        }
                    }
                ]
            };
            templateData.compareData = compareData;

            var end = setInterval(function () {
                if(flgTrack && flgType && flgCount){
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
            var html = template("adminLogLog",this.data);
            $("#page-adminLog-log").html(html);
        },
        //初始化页面事件
        pageEvent: function () {

        },

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
            var targetId = urlData.targetId;
            var targetName =""
            switch (parseInt(targetId)){
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

            //获取详情数据
            var detailData = {
                r:[
                    {
                        name:"我",
                        num:10,
                        percent:"10%"
                    },
                    {
                        name:"小包子",
                        num:20,
                        percent:"20%"
                    },
                    {
                        name:"小白",
                        num:40,
                        percent:"40%"
                    },
                    {
                        name:"大白",
                        num:30,
                        percent:"30%"
                    }
                ]
            }
            templateData.detailData = detailData;
            self.data = templateData;
            self.useTemplate();
        },
        useTemplate: function () {
            var html = template("adminLogLogCompareDetail",this.data);
            $("#page-adminLog-logCompareDetail").html(html);
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
            };
            var useId = "";
            var flgNext = false;
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

            var end = setInterval(function () {
                if(flgNext){
                    var postData = {
                        user_id:useId,
                        sdate:sdate,
                        edate:timeSlot.currentTime,
                        page:parseInt(page)
                    }
                    //获取日志
                    console.log(postData);
                    $.showPreloader("Lading...")
                    $.ajax({
                        url:"/webjson/work/getWorkLogListByUserId.aspx",
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
                                        for(var i = currentPage;i<=sloatNum;i++){
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
                                $.alert("加载出错")
                            }
                        },
                        error: function (err) {
                            console.log(err);
                            $.alert("加载出错")
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
        init: function () {
            this.getPageData();
        },
        getPageData: function () {
            var self = this;
            var templateData = {};
            //获取当前登录用户信息
            $.showPreloader("Loading...")
            $.ajax({
                url:"/webjson/dept/getMyDeptList.aspx",
                type:"GET",
                success: function (data) {
                    var data = JSON.parse(data);
                    if(data.status == 1){
                        templateData = data.r;
                        templateData.deptMemberNum = data.r.user_list.length
                        console.log(templateData)
                        self.data = templateData;
                        self.useTemplate();
                        $.hidePreloader();
                    }else {
                        $.alert("加载出错")
                    }
                },
                error: function (err) {
                    console.log(err);
                    $.alert("加载出错")
                }
            });
            self.data = templateData;
            self.useTemplate();
        },
        useTemplate: function () {
            var html = template("adminLogMyDept",this.data);
            $("#page-adminLog-myDept").html(html);
        },
        //初始化页面事件
        pageEvent: function () {

        }
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
                        $.alert("加载出错")
                    }
                },
                error: function (err) {
                    console.log(err);
                    $.alert("加载出错")
                }
            });
            //if(deptId === "1"){
            //    var data = {
            //        deptMembers:[
            //            {
            //                memberId:"1",
            //                memberImg:"../imgs/1.jpg",
            //                memberName:"技术部1",
            //                memberPost:"职务名称1"
            //            },
            //            {
            //                memberId:"2",
            //                memberImg:"../imgs/1.jpg",
            //                memberName:"技术部2",
            //                memberPost:"职务名称2"
            //            },
            //            {
            //                memberId:"3",
            //                memberImg:"../imgs/1.jpg",
            //                memberName:"技术部3",
            //                memberPost:"职务名称3"
            //            }
            //        ]
            //    }
            //}else if(deptId === "2"){
            //    var data = {
            //        deptMembers:[
            //            {
            //                memberId:"1",
            //                memberImg:"../imgs/1.jpg",
            //                memberName:"编辑部1",
            //                memberPost:"职务名称1"
            //            },
            //            {
            //                memberId:"2",
            //                memberImg:"../imgs/1.jpg",
            //                memberName:"编辑部2",
            //                memberPost:"职务名称2"
            //            },
            //            {
            //                memberId:"3",
            //                memberImg:"../imgs/1.jpg",
            //                memberName:"编辑部3",
            //                memberPost:"职务名称3"
            //            }
            //        ]
            //    }
            //}else if(deptId === "3"){
            //    var data = {
            //        deptMembers:[
            //            {
            //                memberId:"1",
            //                memberImg:"../imgs/1.jpg",
            //                memberName:"内容部1",
            //                memberPost:"职务名称1"
            //            },
            //            {
            //                memberId:"2",
            //                memberImg:"../imgs/1.jpg",
            //                memberName:"内容部2",
            //                memberPost:"职务名称2"
            //            },
            //            {
            //                memberId:"3",
            //                memberImg:"../imgs/1.jpg",
            //                memberName:"内容部3",
            //                memberPost:"职务名称3"
            //            }
            //        ]
            //    }
            //}
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
                                for(var i = currentPage;i<=sloatNum;i++){
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
                }
            });
        }
    };

    var adminLogOM = {
        deptId:"",
        data:{},
        init: function () {
            this.getPageData();
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
                        $.alert("加载出错")
                    }
                },
                error: function (err) {
                    console.log(err);
                    $.alert("加载出错")
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
                        $.alert("加载出错")
                    }
                },
                error: function (err) {
                    console.log(err);
                    $.alert("加载出错")
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
                        console.log(data);
                        var allDeptArr = data.r;
                        canMoveDept = allDeptArr.filter(function (item) {
                            var path = item.crm_department_path.slice(0,currentDeptPath.length);
                            return path != currentDeptPath
                        });
                        var end = setInterval(function () {
                            if(flgParent){
                                canMoveDept.unshift(parentDept)
                                call&&call(canMoveDept);
                                flgParent = false;
                                clearInterval(end);
                            }
                        },100)

                    }else {
                        console.error("获取所有部门失败")
                    }
                },
                error: function (err) {
                    console.log(err);
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
                            self.getCanMoveDept(data, function (canMoveDept) {
                                var canMoveDept = canMoveDept;
                                var domStr = "";
                                canMoveDept.forEach(function (item) {
                                    var optionStr = "<option value='"+item.crm_department_id+"'>"+item.crm_department_name+"</option>"
                                    domStr += optionStr;
                                });
                                parentDeptContainer.html(domStr);
                            });
                        }else {
                            $.alert("加载出错")
                        }
                    },
                    error: function (err) {
                        console.log(err);
                        $.alert("加载出错")
                    }
                });
            });
            //监听保存事件
            $(".btn-saveEditDept").unbind("touchstart").on("touchstart", function () {
                var content = $(this).parent().parent();
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
                            editDeptMsg.html("保存失败")
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
                var deptNameDom = $(".deptName");
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
                                setTimeout(function () {
                                    promptMsg.html("")
                                },1000)
                                deptNameCurrent.val("");
                                self.getPageData();
                            }else {
                                promptMsg.html("保存失败")
                                setTimeout(function () {
                                    promptMsg.html("")
                                },1000)
                            }

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
                        $.alert("加载出错")
                    }

                },
                error: function (err) {
                    console.log(err);
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
                        $.alert("加载出错")
                    }
                },
                error: function (err) {
                    console.log(err);
                    $.alert("载入出错")
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
                            adminLogOM.getCanMoveDept(data, function (canMoveDept) {
                                var canMoveDept = canMoveDept;
                                var domStr = "";
                                canMoveDept.forEach(function (item) {
                                    var optionStr = "<option value='"+item.crm_department_id+"'>"+item.crm_department_name+"</option>"
                                    domStr += optionStr;
                                });
                                parentDeptContainer.html(domStr);
                            });
                        }else {
                            $.alert("加载出错")
                        }
                    },
                    error: function (err) {
                        console.log(err);
                        $.alert("加载出错")
                    }
                });
            });
            //监听保存事件
            $(".btn-saveEditDeptCopy").unbind("touchstart").on("touchstart", function () {
                var content = $(this).parent().parent();
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
                            editDeptMsg.html("保存失败")
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
                var deptNameDom = $(".deptNameCopy");
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
                                promptMsg.html("保存失败")
                            }
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