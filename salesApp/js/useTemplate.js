/**
 * Created by Administrator on 2016/11/23 0023.
 */
$(function () {
    var comFunc = {
        //获取url携带参数
        url: function (url) {
            var search = url.split("?");
            if(search.length > 1){
                search = search[1];
            }else {
                return;
            };
            var obj = {};
            var searchObj = search.split("&");
            searchObj.forEach(function (item) {
                var itemObj = item.split("=")
                obj[itemObj[0]] = itemObj[1];
            })
            return obj;
        },
        //筛选按钮
        screening: function () {
            $(".btn-screening").unbind("touchstart").on("touchstart", function () {
                var screenItems = $(this).next();
                var icon = $(this).find(".icon");
                if(screenItems.is(":hidden")){
                    var width = $(this).width();
                    screenItems.css("width",width);
                    screenItems.slideDown(200);
                    icon.removeClass("icon-down").addClass("icon-up");
                }else {
                    screenItems.slideUp(200);
                    icon.removeClass("icon-up").addClass("icon-down");
                }
            });
            $(".screeningItem").unbind("touchstart").on("touchstart", function () {
                var valueItem = $(this).html();
                $(this).parent().prev().find(".screeningContent").html(valueItem);
                $(this).parent().prev().find(".icon").removeClass("icon-up").addClass("icon-down");
                $(this).parent().slideUp(200);
            })
        },
        //点击展开列表项
        clickToShow: function () {
            $(".deptContainer").find("li").unbind("touchstart").on("touchstart", function (e) {
                if(e.target === $(this).find(".header")[0]){
                    var detail = $(this).find(".detail");
                    var icon = $(this).find(".icon");
                    if($(this).attr("class") === "show"){
                        $(this).removeClass("show");
                        detail.slideUp(300);
                        icon.removeClass("icon-down").addClass("icon-right");
                    }else {
                        var show = $(".deptContainer").find("li.show");
                        show.removeClass("show");
                        show.find(".detail").slideUp(300);
                        show.find(".icon").removeClass("icon-down").addClass("icon-right");
                        $(this).addClass("show");
                        detail.slideDown(300);
                        icon.removeClass("icon-right").addClass("icon-down")
                    }
                }
            });
        }
    }
    var crmTarget = {
        data:{},
        init: function () {
            this.getPageData();
        },
        getPageData: function () {
            var self = this;
            var url = window.location.href;
            var urlData = comFunc.url(url)
            var id = urlData.targetId;
            //根据ID ajax请求数据
            //现在模拟数据
            if(id === "1"){
                var data = {
                    targetName:"机构",
                    targetId:"1",
                    number:"1234",
                    screeningValue:"筛选",
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
            }else if(id === "2"){
                var data = {
                    targetName:"学校",
                    targetId:"2",
                    number:"1234",
                    screeningValue:"筛选",
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
            }else if(id === "3"){
                var data = {
                    targetName:"合伙人",
                    targetId:"3",
                    number:"1234",
                    screeningValue:"筛选",
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
            }
            self.data = data;
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
        }
    };

    var crmTargetDetail = {
        data:{},
        init: function () {
            this.getPageData();
        },
        getPageData: function () {
            var self = this;
            var url = window.location.href;
            var urlData = comFunc.url(url);

            var targetId = urlData.targetId;
            var itemId = urlData.itemId;
            //根据ID ajax请求数据
            //模拟数据
            if(targetId === "1"){
                var data = {
                    targetName:"机构",
                    targetId:"1",
                    itemName:"机构名称1",
                    itemId:"1",
                    itemState:"沟通中",
                    province:"浙江",
                    city:"杭州",
                    county:"滨江区",
                    itemLevel:"机构级别",
                    logItems:[
                        {
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
                    contacts:[
                        {
                            contactName:"用户名称1",
                            contactImg:"../imgs/1.jpg",
                            contactPost:"职务",
                            contactTime:"3小时前"
                        },
                        {
                            contactName:"用户名称2",
                            contactImg:"../imgs/1.jpg",
                            contactPost:"职务",
                            contactTime:"3小时前"
                        },
                        {
                            contactName:"用户名称3",
                            contactImg:"../imgs/1.jpg",
                            contactPost:"职务",
                            contactTime:"3小时前"
                        }
                    ]
                }
            }else if(targetId === "2"){
                var data = {
                    targetName:"学校",
                    targetId:"2",
                    itemName:"机构名称1",
                    itemId:"1",
                    itemState:"沟通中",
                    province:"浙江",
                    city:"杭州",
                    county:"滨江区",
                    itemLevel:"机构级别",
                    logItems:[
                        {
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
                    contacts:[
                        {
                            contactName:"用户名称1",
                            contactImg:"../imgs/1.jpg",
                            contactPost:"职务",
                            contactTime:"3小时前"
                        },
                        {
                            contactName:"用户名称2",
                            contactImg:"../imgs/1.jpg",
                            contactPost:"职务",
                            contactTime:"3小时前"
                        },
                        {
                            contactName:"用户名称3",
                            contactImg:"../imgs/1.jpg",
                            contactPost:"职务",
                            contactTime:"3小时前"
                        }
                    ]
                }
            }else if(targetId === "3"){
                var data = {
                    targetName:"合伙人",
                    targetId:"3",
                    itemName:"机构名称1",
                    itemId:"1",
                    itemState:"沟通中",
                    province:"浙江",
                    city:"杭州",
                    county:"滨江区",
                    itemLevel:"机构级别",
                    logItems:[
                        {
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
                    contacts:[
                        {
                            contactName:"用户名称1",
                            contactImg:"../imgs/1.jpg",
                            contactPost:"职务",
                            contactTime:"3小时前"
                        },
                        {
                            contactName:"用户名称2",
                            contactImg:"../imgs/1.jpg",
                            contactPost:"职务",
                            contactTime:"3小时前"
                        },
                        {
                            contactName:"用户名称3",
                            contactImg:"../imgs/1.jpg",
                            contactPost:"职务",
                            contactTime:"3小时前"
                        }
                    ]
                }
            }
            self.data = data;
            self.useTemplate();
        },
        useTemplate: function () {
            var html = template("crmTargetDetail",this.data);
            $("#page-crm-targetDetail").html(html);
            this.pageEvent();
        },
        //初始化页面事件
        pageEvent: function () {

        }
    };

    var crmAddressList = {
        data:{},
        init: function () {
            this.getPageData();
        },
        getPageData: function () {
            var self = this;
            var data = {
                linkNumber:"122",
                alphabets:[
                    {
                        alphabet:"A",
                        items:[
                            {
                                itemName:"用户名称1",
                                itemPost:"职务",
                                province:"浙江",
                                city:"杭州",
                                county:"滨江区",
                                belong:"所在学校/合伙人"
                            },
                            {
                                itemName:"用户名称2",
                                itemPost:"职务",
                                province:"浙江",
                                city:"杭州",
                                county:"滨江区",
                                belong:"所在学校/合伙人"
                            }
                        ]
                    },
                    {
                        alphabet:"B",
                        items:[
                            {
                                itemName:"用户名称3",
                                itemPost:"职务",
                                province:"浙江",
                                city:"杭州",
                                county:"滨江区",
                                belong:"所在学校/合伙人"
                            },
                            {
                                itemName:"用户名称4",
                                itemPost:"职务",
                                province:"浙江",
                                city:"杭州",
                                county:"滨江区",
                                belong:"所在学校/合伙人"
                            },
                            {
                                itemName:"用户名称4",
                                itemPost:"职务",
                                province:"浙江",
                                city:"杭州",
                                county:"滨江区",
                                belong:"所在学校/合伙人"
                            }
                        ]
                    }
                ]
            }

            self.data = data;
            self.useTemplate();
        },
        useTemplate: function () {
            var html = template("crmAddressList",this.data);
            $("#page-crm-addressList").html(html);
            this.pageEvent();
        },
        pageEvent: function () {
            comFunc.screening();
        }
    };

    var adminLogNewAddTarget = {
        data:{},
        init: function () {
            this.getPageData();
        },
        getPageData: function () {
            var self = this;
            var url = window.location.href;
            var urlData = comFunc.url(url);

            var targetId = urlData.targetId;
            //根据Id ajax请求数据
            //现在模拟数据
            if(targetId === "1"){
                var data = {
                    targetName:"机构",
                    targetId:"1",
                    number:"1234",
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
            }else if(targetId === "2"){
                var data = {
                    targetName:"学校",
                    targetId:"2",
                    number:"1234",
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
            }else if(targetId === "3"){
                var data = {
                    targetName:"合伙人",
                    targetId:"3",
                    number:"1234",
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
            }
            self.data = data;
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
        }
    };
    var adminLogNewAddContacts = {
        data:{},
        init: function () {
            this.getPageData();
        },
        getPageData: function () {
            var self = this;

            var data = {
                linkNumber:"122",
                alphabets:[
                    {
                        alphabet:"A",
                        items:[
                            {
                                itemName:"用户名称1",
                                itemPost:"职务",
                                province:"浙江",
                                city:"杭州",
                                county:"滨江区",
                                belong:"所在学校/合伙人"
                            },
                            {
                                itemName:"用户名称2",
                                itemPost:"职务",
                                province:"浙江",
                                city:"杭州",
                                county:"滨江区",
                                belong:"所在学校/合伙人"
                            }
                        ]
                    },
                    {
                        alphabet:"B",
                        items:[
                            {
                                itemName:"用户名称3",
                                itemPost:"职务",
                                province:"浙江",
                                city:"杭州",
                                county:"滨江区",
                                belong:"所在学校/合伙人"
                            },
                            {
                                itemName:"用户名称4",
                                itemPost:"职务",
                                province:"浙江",
                                city:"杭州",
                                county:"滨江区",
                                belong:"所在学校/合伙人"
                            },
                            {
                                itemName:"用户名称4",
                                itemPost:"职务",
                                province:"浙江",
                                city:"杭州",
                                county:"滨江区",
                                belong:"所在学校/合伙人"
                            }
                        ]
                    }
                ]
            }

            self.data = data;
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
            //模拟数据
            var data = {
                dates:[
                    {
                        dateTime:"2016-11-04",
                        stateState:"08:30",
                        endState:"19:30"
                    },
                    {
                        dateTime:"2016-11-03",
                        stateState:"未打卡",
                        endState:"19:30"
                    },
                    {
                        dateTime:"2016-11-02",
                        stateState:"09:30",
                        endState:"未打卡"
                    },
                    {
                        dateTime:"2016-11-01",
                        stateState:"未打卡",
                        endState:"未打卡"
                    }
                ]
            };

            self.data = data;
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
            //根据Id ajax请求数据
            //现模拟数据
            if(targetId === "1"){
                var data = {
                    targetId:"1",
                    targetName:"我的日志",
                    schoolNum:"66",
                    educationalNum:"2",
                    departmentNum:"22",
                    contantsNum:"38",
                    waitContactedNum:"33",
                    waitParticipantsNum:"33",
                    waitSignedNum:"33",
                    waitBackSectionNum:"33"
                }
            }else if(targetId === "2"){
                var data = {
                    targetId:"2",
                    targetName:"部门日志",
                    schoolNum:"616",
                    educationalNum:"2",
                    departmentNum:"32",
                    contantsNum:"3218",
                    waitContactedNum:"33",
                    waitParticipantsNum:"33",
                    waitSignedNum:"33",
                    waitBackSectionNum:"33"
                }
            }else if(targetId === "3"){
                var data = {
                    targetId:"3",
                    targetName:"全部日志",
                    schoolNum:"616",
                    educationalNum:"2",
                    departmentNum:"32",
                    contantsNum:"3218",
                    waitContactedNum:"33",
                    waitParticipantsNum:"33",
                    waitSignedNum:"33",
                    waitBackSectionNum:"33"
                }
            }
            self.data = data;
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
                            userPartners:["用户1","用户2","用户3"],
                            linkPeoples:["联系人1","联系人2"],
                            workTime:"2016年12月12日11:30至12:30",
                            remarkText:"效果不好，需要再次沟通",
                            remarkImg:["../imgs/1.jpg","../imgs/1.jpg","../imgs/1.jpg"]
                        },
                        {
                            userName:"用户名称1",
                            userImg:"../../imgs/1.jpg",
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
    }

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
    }

    init();

});