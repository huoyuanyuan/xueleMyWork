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
                var value = $(this).data("value");
                var screeningValue = $(this).html();
                if(value === "0"){
                    var data = {
                        targetName:"机构",
                        targetId:"1",
                        number:"1234",
                        screeningValue:screeningValue,
                        cards:[
                            {
                                province:"浙江",
                                city:"杭州",
                                county:"滨江区",
                                items:[
                                    {
                                        itemId:"1",
                                        itemName:"机构名称1",
                                        itemState:"待沟通",
                                        userName:"用户名称1",
                                        time:"3小时前"
                                    },
                                    {
                                        itemId:"2",
                                        itemName:"机构名称2",
                                        itemState:"沟通中",
                                        userName:"用户名称2",
                                        time:"6小时前"
                                    }
                                ]
                            },
                            {
                                province:"山西",
                                city:"晋城",
                                county:"沁水",
                                items:[
                                    {
                                        itemId:"3",
                                        itemName:"机构名称3",
                                        itemState:"待沟通",
                                        userName:"用户名称3",
                                        time:"3小时前"
                                    },
                                    {
                                        itemId:"4",
                                        itemName:"机构名称4",
                                        itemState:"沟通中",
                                        userName:"用户名称4",
                                        time:"6小时前"
                                    }
                                ]
                            }
                        ]
                    }
                }else if(value === "1"){
                    var data = {
                        targetName:"机构",
                        targetId:"1",
                        number:"1234",
                        screeningValue:screeningValue,
                        cards:[
                            {
                                province:"山西",
                                city:"晋城",
                                county:"沁水",
                                items:[
                                    {
                                        itemId:"3",
                                        itemName:"机构名称3",
                                        itemState:"待沟通",
                                        userName:"用户名称3",
                                        time:"3小时前"
                                    },
                                    {
                                        itemId:"4",
                                        itemName:"机构名称4",
                                        itemState:"沟通中",
                                        userName:"用户名称4",
                                        time:"6小时前"
                                    }
                                ]
                            }
                        ]
                    }
                }else if(value === "2"){
                    var data = {
                        targetName:"机构",
                        targetId:"1",
                        number:"1234",
                        screeningValue:screeningValue,
                        cards:[
                            {
                                province:"浙江",
                                city:"杭州",
                                county:"滨江区",
                                items:[
                                    {
                                        itemId:"1",
                                        itemName:"机构名称1",
                                        itemState:"待沟通",
                                        userName:"用户名称1",
                                        time:"3小时前"
                                    },
                                    {
                                        itemId:"2",
                                        itemName:"机构名称2",
                                        itemState:"沟通中",
                                        userName:"用户名称2",
                                        time:"6小时前"
                                    }
                                ]
                            }
                        ]
                    }
                }
                self.data = data;
                self.useTemplate();
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
                    var addTime = items[i].crm_c_addtime
                    var addDate = new Date(addTime);
                    var addTimeMS = addDate.getTime();
                    var timeToNowMS = currentTimeMS - addTimeMS;
                    var timeDiff = comFunc.MStoTime(timeToNowMS);
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
                    console.log(data)
                    if(data.status == "1"){
                        templateData.logItems = data.r;
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

            //根据ID ajax请求数据
            //模拟数据
            //if(targetId === "1"){
            //    var data = {
            //        targetName:"机构",
            //        targetId:"1",
            //        itemName:"机构名称1",
            //        itemId:"1",
            //        itemState:"沟通中",
            //        province:"浙江",
            //        city:"杭州",
            //        county:"滨江区",
            //        itemLevel:"机构级别",
            //        logItems:[
            //            {
            //                userName:"用户名称1",
            //                userImg:"../imgs/1.jpg",
            //                userTime:"3小时前",
            //                userWay:"拜访",
            //                userTarget:"邀请参会",
            //                userResult:"继续沟通",
            //                userState:"新分配",
            //                userPartners:["用户1","用户2","用户3"],
            //                linkPeoples:["联系人1","联系人2"],
            //                workTime:"2016年12月12日11:30至12:30",
            //                remarkText:"效果不好，需要再次沟通",
            //                remarkImg:["../imgs/1.jpg","../imgs/1.jpg","../imgs/1.jpg"]
            //            },
            //            {
            //                userName:"用户名称1",
            //                userImg:"../imgs/1.jpg",
            //                userTime:"3小时前",
            //                userWay:"拜访",
            //                userTarget:"邀请参会",
            //                userResult:"继续沟通",
            //                userState:"初次沟通",
            //                userPartners:["用户1","用户2","用户3"],
            //                linkPeoples:["联系人1","联系人2"],
            //                workTime:"2016年12月12日11:30至12:30",
            //                remarkText:"效果不好，需要再次沟通",
            //                remarkImg:["../imgs/1.jpg","../imgs/1.jpg","../imgs/1.jpg"]
            //            }
            //        ],
            //        contacts:[
            //            {
            //                contactName:"用户名称1",
            //                contactImg:"../imgs/1.jpg",
            //                contactPost:"职务",
            //                contactTime:"3小时前"
            //            },
            //            {
            //                contactName:"用户名称2",
            //                contactImg:"../imgs/1.jpg",
            //                contactPost:"职务",
            //                contactTime:"3小时前"
            //            },
            //            {
            //                contactName:"用户名称3",
            //                contactImg:"../imgs/1.jpg",
            //                contactPost:"职务",
            //                contactTime:"3小时前"
            //            }
            //        ]
            //    }

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
            //var data = {
            //    linkNumber:"122",
            //    alphabets:[
            //        {
            //            alphabet:"A",
            //            items:[
            //                {
            //                    itemName:"用户名称1",
            //                    itemId:"1",
            //                    itemPost:"职务",
            //                    province:"浙江",
            //                    city:"杭州",
            //                    county:"滨江区",
            //                    belong:"所在学校/合伙人"
            //                },
            //                {
            //                    itemName:"用户名称2",
            //                    itemId:"2",
            //                    itemPost:"职务",
            //                    province:"浙江",
            //                    city:"杭州",
            //                    county:"滨江区",
            //                    belong:"所在学校/合伙人"
            //                }
            //            ]
            //        },
            //        {
            //            alphabet:"B",
            //            items:[
            //                {
            //                    itemName:"用户名称3",
            //                    itemId:"3",
            //                    itemPost:"职务",
            //                    province:"浙江",
            //                    city:"杭州",
            //                    county:"滨江区",
            //                    belong:"所在学校/合伙人"
            //                },
            //                {
            //                    itemName:"用户名称4",
            //                    itemId:"4",
            //                    itemPost:"职务",
            //                    province:"浙江",
            //                    city:"杭州",
            //                    county:"滨江区",
            //                    belong:"所在学校/合伙人"
            //                },
            //                {
            //                    itemName:"用户名称5",
            //                    itemId:"5",
            //                    itemPost:"职务",
            //                    province:"浙江",
            //                    city:"杭州",
            //                    county:"滨江区",
            //                    belong:"所在学校/合伙人"
            //                }
            //            ]
            //        }
            //    ]
            //}
            //self.data = data;
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

            var id = urlData.id;
            if(id === "1"){
                var data = {
                    name:"用户1",
                    tel:"123456",
                    post:"职务",
                    address:"浙江省杭州市滨江区",
                    dept:"XX学校"
                }
            }else if(id == "2"){
                var data = {
                    name:"用户2",
                    tel:"654321",
                    post:"职务",
                    address:"浙江省杭州市下沙区",
                    dept:"XX机构"
                }
            }else if(id === "3"){
                var data = {
                    name:"用户3",
                    tel:"123456",
                    post:"职务",
                    address:"浙江省杭州市滨江区",
                    dept:"XX学校"
                }
            }else if(id === "4"){
                var data = {
                    name:"用户4",
                    tel:"654321",
                    post:"职务",
                    address:"浙江省杭州市下沙区",
                    dept:"XX机构"
                }
            }else if(id === "5"){
                var data = {
                    name:"用户5",
                    tel:"123456",
                    post:"职务",
                    address:"浙江省杭州市滨江区",
                    dept:"XX学校"
                }
            }


            self.data = data;
            self.uesTemplate();
        },
        uesTemplate: function () {
            var html = template("contactsDetail",this.data);
            $("#page-contactsDetail").html(html);
        }
    }

    var adminLogNewAddTarget = {
        data:{},
        init: function () {
            this.getPageData();
        },
        getPageData: function () {
            var self = this;
            var urlData = comFunc.url(window.location.href)
            var type = urlData.type;
            var templateData = {};
            templateData.type = type;
            templateData.screening = "今天";
            if(type === "1"){
                templateData.targetName = "学校";
            }else if(type === "2"){
                templateData.targetName = "合伙人";
            }else if(type === "3"){
                templateData.targetName = "机构";
            }
            console.log("type:"+type);
            var timeSlot = comFunc.getNowTimeSlot();

            var postData = {
                type:parseInt(type),
                page:1,
                sdate:timeSlot.currentDay,
                edate:timeSlot.currentTime
            }
            console.log(postData)
            $.showPreloader("Loading...");
            $.ajax({
                url:"/webjson/customer/getDeptCustomerListByNew.aspx",
                type:"GET",
                data:postData,
                success: function (data) {
                    var data = JSON.parse(data);
                    console.log(data);
                    if(data.status == "1"){
                        templateData.count = data.count;
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
            self.data = templateData;
            self.useTemplate();
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
        },
        //筛选功能
        screeningTime: function () {
            $("#page-adminLog-newAddTarget").find(".screeningItem").unbind("touchstart").on("touchstart", function () {
                var value = $(this).data("value");
                var urlData = comFunc.url(window.location.href);
                var type = urlData.type;
                var sdate = ""
                var timeSlot = comFunc.getNowTimeSlot();
                var templateData = {};
                templateData.type = type;
                if(type === "1"){
                    templateData.targetName = "学校";
                }else if(type === "2"){
                    templateData.targetName = "合伙人";
                }else if(type === "3"){
                    templateData.targetName = "机构";
                }
                switch (value){
                    case "1":
                        sdate = timeSlot.currentDay;
                        templateData.screening = "今天";
                        break;
                    case "2":
                        sdate = timeSlot.weekAgo;
                        templateData.screening = "一周内";
                        break;
                    case "3":
                        sdate = timeSlot.monthAgo;
                        templateData.screening = "一月内";
                        break;
                    case "4":
                        sdate = timeSlot.quarterAgo;
                        templateData.screening = "一季内";
                        break;
                }
                var postData = {
                    type:parseInt(type),
                    page:1,
                    sdate:sdate,
                    edate:timeSlot.currentTime
                }
                console.log(postData);
                $.ajax({
                    url:"/webjson/customer/getDeptCustomerListByNew.aspx",
                    type:"GET",
                    data:postData,
                    success: function (data) {
                        var data = JSON.parse(data);
                        console.log(data);
                        if(data.status == "1"){
                            templateData.count = data.count;
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
                    var addTime = items[i].crm_c_addtime
                    var addDate = new Date(addTime);
                    var addTimeMS = addDate.getTime();
                    var timeToNowMS = currentTimeMS - addTimeMS;
                    var timeDiff = comFunc.MStoTime(timeToNowMS);
                    items[i].timeDiff = timeDiff
                }
                obj.items = items;
                areaArr.push(obj);
            }
            return areaArr;
        },
    };
    var adminLogNewAddContacts = {
        data:{},
        init: function () {
            this.getPageData();
        },
        getPageData: function () {
            var self = this;
            var templateData = {};
            templateData.screening = "今天"
            var timeSlot = comFunc.getNowTimeSlot();
            var postData = {
                page:1,
                sdate:timeSlot.currentDay,
                edate:timeSlot.currentTime
            };
            $.showPreloader("Loading...")
            console.log(postData);
            $.ajax({
                url:"/webjson/contact/getDeptContactListByNew.aspx",
                type:"GET",
                data:postData,
                success: function (data) {
                    var data = JSON.parse(data);
                    console.log(data);
                    if(data.status == "1"){
                        templateData.count = data.count;
                        var items = self.initTemplateData(data);
                        templateData.alphabets = items;
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
            self.data = templateData;
            self.useTemplate();
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
        },
        //筛选按钮功能
        screeningTime: function () {
            $("#page-adminLog-newAddContacts").find(".screeningItem").unbind("touchstart").on("touchstart", function () {
                var value = $(this).data("value");
                var sdate = ""
                var timeSlot = comFunc.getNowTimeSlot();
                var templateData = {};
                switch (value){
                    case "1":
                        sdate = timeSlot.currentDay;
                        templateData.screening = "今天";
                        break;
                    case "2":
                        sdate = timeSlot.weekAgo;
                        templateData.screening = "一周内";
                        break;
                    case "3":
                        sdate = timeSlot.monthAgo;
                        templateData.screening = "一月内";
                        break;
                    case "4":
                        sdate = timeSlot.quarterAgo;
                        templateData.screening = "一季内";
                        break;
                }
                var postData = {
                    page:1,
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
                        console.log(data);
                        if(data.status == "1"){
                            templateData.count = data.count;
                            var items = self.initTemplateData(data);
                            templateData.alphabets = items;
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
            var self = this;
            var templateData = {};
            var timeSlot = comFunc.getNowTimeSlot();
            var postData = {
                sdate:timeSlot.currentDay,
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
                    console.log(data);
                    if(data.status == 1){
                        console.log(data);
                        var dates = self.initTemplateData(data);
                        templateData.dates = dates;
                        console.log(templateData)
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
            //模拟数据
            //var data = {
            //    dates:[
            //        {
            //            dateTime:"2016-11-04",
            //            stateState:"08:30",
            //            endState:"19:30"
            //        },
            //        {
            //            dateTime:"2016-11-03",
            //            stateState:"未打卡",
            //            endState:"19:30"
            //        },
            //        {
            //            dateTime:"2016-11-02",
            //            stateState:"09:30",
            //            endState:"未打卡"
            //        },
            //        {
            //            dateTime:"2016-11-01",
            //            stateState:"未打卡",
            //            endState:"未打卡"
            //        }
            //    ]
            //};

            self.data = templateData;
            self.useTemplate();
        },
        useTemplate: function () {
            var html = template("adminLogAttendanceMy",this.data);
            $("#page-adminiLog-attendanceMy").html(html);
            this.pageEvent();
        },
        //初始化页面数据
        pageEvent: function () {
            comFunc.screening();
        },
        //处理模板数据
        initTemplateData: function (data) {
            var dataArr = data.r;
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
                        start.crm_map = item.crm_map;
                        start.crm_addtime = item.crm_addtime;
                        start.crm_tag = item.crm_tag
                        start.crm_user_id = item.crm_user_id;
                        start.id = item.id
                        start.time = item.crm_addtime.slice(11);
                        obj.start = start;
                    }else if(lastFlg == "2"){
                        var end = {};
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
            }
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
            var templateData = {};
            if(targetId == "1"){
                templateData.targetName = "我的日志";
            }

            $.showPreloader("Loading...")
            //获取指定用户客户类别数量
            $.ajax({
                url:"/webjson/customer/geTypeCountByUserID.aspx",
                type:"GET",
                data:{
                    id:""
                },
                success: function (data) {
                    var data = JSON.parse(data);
                    console.log(data);
                },
                error: function (err) {
                    console.log(err);
                }
            });

            //获取指定用户客户跟踪结果分类数量
            $.ajax({
                url:"/webjson/customer/getResultCountByUserID.aspx",
                type:"GET",
                data:{
                    id:""
                },
                success: function (data) {
                    var data = JSON.parse(data);
                    console.log(data);
                },
                error: function (err) {
                    console.log(err);
                }
            })
            //根据Id ajax请求数据
            //现模拟数据
            //if(targetId === "1"){
            //    var data = {
            //        targetId:"1",
            //        targetName:"我的日志",
            //        schoolNum:"66",
            //        educationalNum:"2",
            //        departmentNum:"22",
            //        contantsNum:"38",
            //        waitContactedNum:"33",
            //        waitParticipantsNum:"33",
            //        waitSignedNum:"33",
            //        waitBackSectionNum:"33"
            //    }
            //}else if(targetId === "2"){
            //    var data = {
            //        targetId:"2",
            //        targetName:"部门日志",
            //        schoolNum:"616",
            //        educationalNum:"2",
            //        departmentNum:"32",
            //        contantsNum:"3218",
            //        waitContactedNum:"33",
            //        waitParticipantsNum:"33",
            //        waitSignedNum:"33",
            //        waitBackSectionNum:"33"
            //    }
            //}else if(targetId === "3"){
            //    var data = {
            //        targetId:"3",
            //        targetName:"全部日志",
            //        schoolNum:"616",
            //        educationalNum:"2",
            //        departmentNum:"32",
            //        contantsNum:"3218",
            //        waitContactedNum:"33",
            //        waitParticipantsNum:"33",
            //        waitSignedNum:"33",
            //        waitBackSectionNum:"33"
            //    }
            //}
            self.data = templateData;
            self.useTemplate();
        },
        useTemplate: function () {
            var html = template("adminLogLog",this.data);
            $("#page-adminLog-log").html(html);
        },
        //初始化页面事件
        pageEvent: function () {

        }
    };
    var adminLogLogDetail = {
        data:{},
        init: function () {
            this.getPageData();
        },
        getPageData: function () {
            var self = this;
            var url = window.location.href;
            var urlData = comFunc.url(url);

            var targetId = urlData.targetId;
            //根据ID ajax请求数据
            //现模拟数据
            if(targetId === "1"){
                var data = {
                    targetId:"1",
                    targetName:"我的日志详情",
                    logItems:[
                        {
                            userName:"用户名称1",
                            userImg:"../imgs/1.jpg",
                            userTime:"3小时前",
                            userWay:"拜访",
                            userTarget:"邀请参会",
                            userResult:"继续沟通",
                            userState:"新分配",
                            userPartners:["用户1","用户2","用户3"],
                            linkPeoples:["联系人1","联系人2"],
                            workTime:"2016年12月12日11:30至12:30",
                            remarkText:"效果不好，需要再次沟通",
                            remarkImg:["../imgs/1.jpg","../imgs/1.jpg","../imgs/1.jpg"]
                        },
                        {
                            userName:"用户名称1",
                            userImg:"../imgs/1.jpg",
                            userTime:"3小时前",
                            userWay:"拜访",
                            userTarget:"邀请参会",
                            userResult:"继续沟通",
                            userState:"初次沟通",
                            userPartners:["用户1","用户2","用户3"],
                            linkPeoples:["联系人1","联系人2"],
                            workTime:"2016年12月12日11:30至12:30",
                            remarkText:"效果不好，需要再次沟通",
                            remarkImg:["../imgs/1.jpg","../imgs/1.jpg","../imgs/1.jpg"]
                        }
                    ],
                }
            }else if(targetId === "2"){
                var data = {
                    targetId:"2",
                    targetName:"部门日志详情",
                    logItems:[
                        {
                            userName:"用户名称1",
                            userImg:"../imgs/1.jpg",
                            userTime:"3小时前",
                            userWay:"拜访",
                            userTarget:"邀请参会",
                            userResult:"继续沟通",
                            userState:"新分配",
                            userPartners:["用户1","用户2","用户3"],
                            linkPeoples:["联系人1","联系人2"],
                            workTime:"2016年12月12日11:30至12:30",
                            remarkText:"效果不好，需要再次沟通",
                            remarkImg:["../imgs/1.jpg","../imgs/1.jpg","../imgs/1.jpg"]
                        },
                        {
                            userName:"用户名称1",
                            userImg:"../imgs/1.jpg",
                            userTime:"3小时前",
                            userWay:"拜访",
                            userTarget:"邀请参会",
                            userResult:"继续沟通",
                            userState:"初次沟通",
                            userPartners:["用户1","用户2","用户3"],
                            linkPeoples:["联系人1","联系人2"],
                            workTime:"2016年12月12日11:30至12:30",
                            remarkText:"效果不好，需要再次沟通",
                            remarkImg:["../imgs/1.jpg","../imgs/1.jpg","../imgs/1.jpg"]
                        }
                    ],
                }
            }else if(targetId === "3"){
                var data = {
                    targetId:"3",
                    targetName:"全部日志详情",
                    logItems:[
                        {
                            userName:"用户名称1",
                            userImg:"../imgs/1.jpg",
                            userTime:"3小时前",
                            userWay:"拜访",
                            userTarget:"邀请参会",
                            userResult:"继续沟通",
                            userState:"新分配",
                            userPartners:["用户1","用户2","用户3"],
                            linkPeoples:["联系人1","联系人2"],
                            workTime:"2016年12月12日11:30至12:30",
                            remarkText:"效果不好，需要再次沟通",
                            remarkImg:["../imgs/1.jpg","../imgs/1.jpg","../imgs/1.jpg"]
                        },
                        {
                            userName:"用户名称1",
                            userImg:"../imgs/1.jpg",
                            userTime:"3小时前",
                            userWay:"拜访",
                            userTarget:"邀请参会",
                            userResult:"继续沟通",
                            userState:"初次沟通",
                            userPartners:["用户1","用户2","用户3"],
                            linkPeoples:["联系人1","联系人2"],
                            workTime:"2016年12月12日11:30至12:30",
                            remarkText:"效果不好，需要再次沟通",
                            remarkImg:["../imgs/1.jpg","../imgs/1.jpg","../imgs/1.jpg"]
                        }
                    ],
                }
            }

            self.data = data;
            self.useTemplate();
        },
        useTemplate: function () {
            var html = template("adminLogLogDetail",this.data);
            $("#page-adminLog-logDetail").html(html);
            this.pageEvent();
        },
        //初始化页面事件
        pageEvent: function () {
            comFunc.screening();
        }
    };

    var adminLogMyDept = {
        data:{},
        init: function () {
            this.getPageData();
        },
        getPageData: function () {
            var self = this;
            //$.ajax({
            //    url:"/webjson/dept/list.aspx?id=0",
            //    type:"get",
            //    success: function (data) {
            //        console.log(data)
            //    },
            //    error: function (err) {
            //        console.log(err);
            //    }
            //});
            //模拟数据
            var data = {
                depts:[
                    {
                        deptName:"技术部",
                        deptId:"1",
                        deptMemberNum:"6"
                    },
                    {
                        deptName:"编辑部",
                        deptId:"2",
                        deptMemberNum:"10"
                    },
                    {
                        deptName:"内容部",
                        deptId:"3",
                        deptMemberNum:"5"
                    }
                ]
            }

            self.data = data;
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
            var url = window.location.href;
            var urlData = comFunc.url(url);
            var deptId = urlData.deptId;
            //根据ID ajax请求数据
            //现模拟数据
            if(deptId === "1"){
                var data = {
                    deptMembers:[
                        {
                            memberId:"1",
                            memberImg:"../imgs/1.jpg",
                            memberName:"技术部1",
                            memberPost:"职务名称1"
                        },
                        {
                            memberId:"2",
                            memberImg:"../imgs/1.jpg",
                            memberName:"技术部2",
                            memberPost:"职务名称2"
                        },
                        {
                            memberId:"3",
                            memberImg:"../imgs/1.jpg",
                            memberName:"技术部3",
                            memberPost:"职务名称3"
                        }
                    ]
                }
            }else if(deptId === "2"){
                var data = {
                    deptMembers:[
                        {
                            memberId:"1",
                            memberImg:"../imgs/1.jpg",
                            memberName:"编辑部1",
                            memberPost:"职务名称1"
                        },
                        {
                            memberId:"2",
                            memberImg:"../imgs/1.jpg",
                            memberName:"编辑部2",
                            memberPost:"职务名称2"
                        },
                        {
                            memberId:"3",
                            memberImg:"../imgs/1.jpg",
                            memberName:"编辑部3",
                            memberPost:"职务名称3"
                        }
                    ]
                }
            }else if(deptId === "3"){
                var data = {
                    deptMembers:[
                        {
                            memberId:"1",
                            memberImg:"../imgs/1.jpg",
                            memberName:"内容部1",
                            memberPost:"职务名称1"
                        },
                        {
                            memberId:"2",
                            memberImg:"../imgs/1.jpg",
                            memberName:"内容部2",
                            memberPost:"职务名称2"
                        },
                        {
                            memberId:"3",
                            memberImg:"../imgs/1.jpg",
                            memberName:"内容部3",
                            memberPost:"职务名称3"
                        }
                    ]
                }
            }
            self.data = data;
            self.useTemplate();
        },
        useTemplate: function () {
            var html = template("adminLogMyDeptMember",this.data);
            $("#page-adminLog-myDeptMember").html(html);
        }
    };
    var adminLogMyCheck = {
        data:{},
        init: function () {
            this.getPageData();
        },
        getPageData: function () {
            var self = this;
            //模拟数据
            var data = {
                waitCheckItems:[
                    {
                        logItemId:"1",
                        userName:"用户名称1",
                        userImg:"../imgs/1.jpg",
                        userTime:"3小时前",
                        userWay:"拜访",
                        userTarget:"邀请参会",
                        userResult:"继续沟通",
                        userPartners:["用户1","用户2","用户3"],
                        linkPeoples:["联系人1","联系人2"],
                        workTime:"2016年12月12日11:30至12:30",
                        remarkText:"效果不好，需要再次沟通",
                        remarkImg:["../imgs/1.jpg","../imgs/1.jpg","../imgs/1.jpg"]
                    },
                    {
                        logItemId:"2",
                        userName:"用户名称1",
                        userImg:"../imgs/1.jpg",
                        userTime:"3小时前",
                        userWay:"拜访",
                        userTarget:"邀请参会",
                        userResult:"继续沟通",
                        userPartners:["用户1","用户2","用户3"],
                        linkPeoples:["联系人1","联系人2"],
                        workTime:"2016年12月12日11:30至12:30",
                        remarkText:"效果不好，需要再次沟通",
                        remarkImg:["../imgs/1.jpg","../imgs/1.jpg","../imgs/1.jpg"]
                    }
                ],
                alreadyCheckItems:[
                    {
                        logItemId:"1",
                        checkResult:"已参会",
                        userName:"用户名称1",
                        userImg:"../imgs/1.jpg",
                        userTime:"3小时前",
                        userWay:"拜访",
                        userTarget:"邀请参会",
                        userResult:"继续沟通",
                        userPartners:["用户1","用户2","用户3"],
                        linkPeoples:["联系人1","联系人2"],
                        workTime:"2016年12月12日11:30至12:30",
                        remarkText:"效果不好，需要再次沟通",
                        remarkImg:["../imgs/1.jpg","../imgs/1.jpg","../imgs/1.jpg"]
                    },
                    {
                        logItemId:"2",
                        checkResult:"待回款",
                        userName:"用户名称1",
                        userImg:"../imgs/1.jpg",
                        userTime:"3小时前",
                        userWay:"拜访",
                        userTarget:"邀请参会",
                        userResult:"继续沟通",
                        userPartners:["用户1","用户2","用户3"],
                        linkPeoples:["联系人1","联系人2"],
                        workTime:"2016年12月12日11:30至12:30",
                        remarkText:"效果不好，需要再次沟通",
                        remarkImg:["../imgs/1.jpg","../imgs/1.jpg","../imgs/1.jpg"]
                    }
                ]
            }

            self.data = data;
            self.useTemplate();
        },
        useTemplate: function () {
            var html = template("adminLogMyCheck",this.data);
            $("#page-adminLog-myCheck").html(html);
            this.pageEvent();
        },
        //初始化页面事件
        pageEvent: function () {
            comFunc.screening();
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
            var flg = false;
            //ajax获取部门列表
            $.showPreloader("Loading...")
            $.ajax({
                url:"/webjson/dept/list.aspx?id="+deptId,
                type:"GET",
                success: function (data) {
                    flg = true;
                    data = JSON.parse(data);
                    templateData = self.initTemplateData(data)
                },
                error: function (err) {
                    console.log(err);
                }
            });
            //获取部门成员列表
            setInterval(function () {
                if(flg){
                    flg=false;
                    $.ajax({
                        url:"/webjson/employee/list.aspx",
                        type:"GET",
                        data:{
                            id:deptId
                        },
                        success: function (data) {
                            var data = JSON.parse(data);
                            templateData.deptMembers = data.r;
                            self.data = templateData;
                            self.useTemplate();
                            $.hidePreloader();
                        },
                        error: function (err) {
                            console.log(err);
                            $.alert("载入出错")
                        }
                    });
                }
            },100)
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
                                setTimeout(function () {
                                    promptMsg.html("")
                                },3000)
                                self.getPageData();
                                self.clearInput();
                            }else {
                                promptMsg.html("保存失败");
                                setTimeout(function () {
                                    promptMsg.html("")
                                },3000);
                            }
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
            var flg = false;
            //ajax获取部门列表
            $.showPreloader("Loading...")
            $.ajax({
                url:"/webjson/dept/list.aspx?id="+deptId,
                type:"GET",
                success: function (data) {
                    flg = true;
                    data = JSON.parse(data);
                    templateData = adminLogOM.initTemplateData(data)
                },
                error: function (err) {
                    console.log(err);
                }
            });
            //获取部门成员列表
            setInterval(function () {
                if(flg){
                    flg=false;
                    $.ajax({
                        url:"/webjson/employee/list.aspx",
                        type:"GET",
                        data:{
                            id:deptId
                        },
                        success: function (data) {
                            var data = JSON.parse(data);
                            templateData.deptMembers = data.r;
                            self.data = templateData;
                            self.useTemplate();
                            $.hidePreloader();
                        },
                        error: function (err) {
                            console.log(err);
                            $.alert("载入出错")
                        }
                    });
                }
            },100)
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
        $(document).on("pageInit","#page-crm-targetDetail" ,function () {
            crmTargetDetail.init();
        });
        $(document).on("pageInit","#page-crm-addressList" ,function () {
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