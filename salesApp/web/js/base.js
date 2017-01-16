/**
 * Created by Administrator on 2016/11/17 0017.
 */
$(function () {
    var initFunc = {
        init: function () {
            this.addFooterClickEvent();
        },
        //添加footer点击事件
        addFooterClickEvent: function () {
            $(".tab-item").unbind("touchstart").on("touchstart", function () {
                $(".tab-item").not($(this)).find(".item_catefory").hide();
                var item_catefory = $(this).find(".item_catefory");
                if(item_catefory.length){
                    var height = item_catefory.height()+30;
                    item_catefory.css("top",-height+"px");
                    if(item_catefory.is(":hidden")){
                        item_catefory.fadeIn(200);
                    }
                    else {
                        item_catefory.fadeOut(200);
                    }
                }
            });
        }
    };

    var crm = {
        init: function () {
            this.addNewContacts();
            this.radioChange();
            this.newDept();
            this.newSchool();
            this.newPartner();
        },
        //点击添加联系人按钮
        //容器类名 .addNewContactsContainer
        //添加内容Id名 #addNewContacts
        //添加点击事件类名 .addNewContacts
        addNewContacts: function () {
            var self = this;
            $(".addNewContacts").on("click", function (e) {
                var container = $(".addNewContactsContainer");
                var innerHtml = $("#addNewContacts").html();
                container.append(innerHtml);
                $.initSwipeout(container.find(".swipeout"));
            });
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
        //新增机构
        newDept: function () {
            var self = this;
            $(".btn-saveDept").unbind("touchstart").on("touchstart", function () {
                var deptArea = $(".deptArea").val();
                var deptAreaCode = $(".deptArea").data("code");
                var deptName = $(".deptName").val();
                var deptLevel = $(".deptLevel").val();
                var deptState = $(".deptState").val();
                var deptRemark = $(".deptRemark").val();
                var ccNameDom = $(".deptContacts").find(".ccName");
                var ccPositionDom = $(".deptContacts").find(".ccPosition");
                var ccPhoneDom = $(".deptContacts").find(".ccPhone");
                var contacts = [];
                if(deptArea === ""){
                    $.alert("请选择机构所在地");
                }else if(deptName === ""){
                    $.alert("请填写机构名称");
                }else if(deptLevel === ""){
                    $.alert("请选择机构级别");
                }else {
                    var flgName = true;
                    var flgPhone = true;
                    var flgPosition = true;
                    for(var i=0;i<ccNameDom.length;i++){
                        var ccName = ccNameDom.eq(i).val();
                        var ccPosition = ccPositionDom.eq(i).val();
                        var ccPhone = ccPhoneDom.eq(i).val();
                        if(ccName === ""){
                            $.alert("联系人姓名不能为空");
                            flgName = false;
                        }else if(ccPhone === ""){
                            $.alert("联系人电话不能为空");
                            flgPhone = false;
                        }else if(ccPosition === ""){
                            $.alert("联系人职务不能为空");
                            flgPosition = false;
                        }else {
                            var obj = {};
                            obj.crm_cc_name = ccName;
                            obj.crm_cc_position = ccPosition;
                            obj.crm_cc_phone = ccPhone;
                            contacts.push(obj);
                        }
                    };
                    if(contacts.length === 0){
                        $.alert("必须添加一位联系人")
                    }else if(flgName && flgPhone & flgPosition){
                        var data = {
                            c_name:deptName,
                            c_type:3,
                            c_category:deptLevel,
                            c_area:deptAreaCode,
                            c_stage:deptState,
                            c_remark:deptRemark
                        };
                        $.showPreloader("Loading...")
                        $.ajax({
                            url:"/webjson/customer/addCustomer.aspx",
                            type:"POST",
                            data:data,
                            success: function (data) {
                                var data = JSON.parse(data);
                                if(data.errcode == 1){
                                    var crm_c_id = data.obj.crm_c_id;
                                    //添加联系人
                                    for(var i=0;i<contacts.length;i++){
                                        contacts[i].crm_c_id = crm_c_id
                                    }
                                    var contactsData = JSON.stringify(contacts);
                                    $.ajax({
                                        url:"/webjson/contact/addContact.aspx",
                                        type:"POST",
                                        data:{
                                            data:contactsData
                                        },
                                        success: function (data) {
                                            var data = JSON.parse(data);
                                            if(data.errcode == 1){
                                                $.alert("保存成功")
                                                self.clearInputDept();
                                            }else {
                                                console.error(data);
                                            }
                                        },
                                        error: function (err) {
                                            console.log(err);
                                            $.alert("保存失败,请稍后重试")
                                        }
                                    })
                                }
                                else {
                                    console.error(data);
                                }
                            },
                            error: function (err) {
                                console.log(err);
                                $.alert("保存失败,请稍后重试");
                            }
                        });
                    }
                }
            })
        },
        clearInputDept: function () {
            $(".deptArea").val("");
            $(".deptName").val("");
            $(".deptLevel").val("");
            $(".deptState").val("");
            $(".deptRemark").val("");
            $(".deptContacts").find("ul:gt(0)").remove();
            $(".deptContacts").find(".ccName").val("");
            $(".deptContacts").find(".ccPosition").val("");
            $(".deptContacts").find(".ccPhone").val("");
        },
        //新增学校
        newSchool: function () {
            var self = this;
            $(".btn-saveSchool").unbind("touchstart").on("touchstart", function () {
                var schoolArea = $(".schoolArea").val();
                var schoolAreaCode = $(".schoolArea").data("code");
                var schoolName = $(".schoolName").val();
                var schoolPeriodDom = $(".schoolPeriod").find("input:checked");
                var schoolPeriod = ""
                for(var i=0;i<schoolPeriodDom.length;i++){
                    schoolPeriod += schoolPeriodDom.eq(i).val();
                }
                var schoolNumber = $(".schoolNumber").val();
                var schoolState = $(".schoolState").val();

                var ccNameDom = $(".schoolContacts").find(".ccName");
                var ccPositionDom = $(".schoolContacts").find(".ccPosition");
                var ccPhoneDom = $(".schoolContacts").find(".ccPhone");
                var contacts = [];

                if(schoolArea === ""){
                    $.alert("请选择学校所在地区")
                }else if(schoolName === ""){
                    $.alert("请填写学校名称")
                }else if(schoolPeriod === ""){
                    $.alert("请勾选学段")
                }else {
                    var flgName = true;
                    var flgPhone = true;
                    var flgPosition = true;
                    for(var i=0;i<ccNameDom.length;i++){
                        var ccName = ccNameDom.eq(i).val();
                        var ccPosition = ccPositionDom.eq(i).val();
                        var ccPhone = ccPhoneDom.eq(i).val();
                        if(ccName === ""){
                            $.alert("联系人姓名不能为空");
                            flgName = false;
                        }else if(ccPhone === ""){
                            $.alert("联系人电话不能为空");
                            flgPhone = false;
                        }else if(ccPosition === ""){
                            $.alert("联系人职务不能为空");
                            flgPosition = false;
                        }else {
                            var obj = {};
                            obj.crm_cc_name = ccName;
                            obj.crm_cc_position = ccPosition;
                            obj.crm_cc_phone = ccPhone;
                            contacts.push(obj);
                        }
                    };
                    if(contacts.length === 0){
                        $.alert("必须添加一位联系人")
                    }else if(flgName && flgPhone && flgPosition){
                        var data = {
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
                            url:"/webjson/customer/addCustomer.aspx",
                            type:"POST",
                            data:data,
                            success: function (data) {
                                var data = JSON.parse(data);
                                if(data.errcode == 1){
                                    var crm_c_id = data.obj.crm_c_id;
                                    //添加联系人
                                    for(var i=0;i<contacts.length;i++){
                                        contacts[i].crm_c_id = crm_c_id
                                    }
                                    var contactsData = JSON.stringify(contacts);
                                    $.ajax({
                                        url:"/webjson/contact/addContact.aspx",
                                        type:"POST",
                                        data:{
                                            data:contactsData
                                        },
                                        success: function (data) {
                                            var data = JSON.parse(data);
                                            if(data.errcode == 1){
                                                $.alert("保存成功")
                                                self.clearInputSchool();
                                            }else {
                                                console.error(data);
                                            }
                                        },
                                        error: function (err) {
                                            console.log(err);
                                            $.alert("保存失败,请稍后重试")
                                        }
                                    })
                                }
                                else {
                                    console.error(data);
                                }
                            },
                            error: function (err) {
                                console.log(err);
                                $.alert("保存失败,请稍后重试")
                            }
                        });
                    }
                }
            })
        },
        clearInputSchool: function () {
            $(".schoolArea").val("");
            $(".schoolName").val("");
            $(".schoolPeriod").find("input").removeAttr("checked");
            $(".schoolNumber").val("");
            $(".schoolState").val("");

            $(".schoolContacts").find("ul:gt(0)").remove();
            $(".schoolContacts").find(".ccName").val("");
            $(".schoolContacts").find(".ccPosition").val("");
            $(".schoolContacts").find(".ccPhone").val("");
        },
        //新增合伙人
        newPartner: function () {
            var self = this;
            $(".btn-savePartner").unbind("touchstart").on("touchstart", function () {
                var partnerArea = $(".partnerArea").val();
                var partnerAreaCode = $(".partnerArea").data("code");
                var partnerType = $(".partnerType").find("input:checked").val();
                var partnerName = "";
                if(partnerType == "2"){
                    partnerName = $(".partnerOrgName").val();
                }
                var partnerState = $(".partnerState").val();
                var partnerRemark = $(".partnerRemark").val();

                var ccNameDom = $(".partnerContacts").find(".ccName");
                var ccPositionDom = $(".partnerContacts").find(".ccPosition");
                var ccPhoneDom = $(".partnerContacts").find(".ccPhone");
                var contacts = [];

                if(partnerArea === ""){
                    $.alert("请选择合伙人所在地")
                }else if(partnerType === "2" && partnerName === ""){
                    $.alert("请填写组织名称")
                } else {
                    var flgName = true;
                    var flgPhone = true;
                    var flgPosition = true;
                    for(var i=0;i<ccNameDom.length;i++){
                        var ccName = ccNameDom.eq(i).val();
                        var ccPosition = ccPositionDom.eq(i).val();
                        var ccPhone = ccPhoneDom.eq(i).val();
                        if(ccName === ""){
                            $.alert("联系人姓名不能为空");
                            flgName = false;
                        }else if(ccPhone === ""){
                            $.alert("联系人电话不能为空");
                            flgPhone = false;
                        }else if(ccPosition === ""){
                            $.alert("联系人职位不能为空");
                            flgPosition = false;
                        }else {
                            var obj = {};
                            obj.crm_cc_name = ccName;
                            obj.crm_cc_position = ccPosition;
                            obj.crm_cc_phone = ccPhone;
                            contacts.push(obj);
                        }
                    };
                    if(contacts.length === 0){
                        $.alert("必须添加一位联系人")
                    }else if(flgName && flgPhone && flgPosition){
                        if(partnerName === ""){
                            partnerName = contacts[0].crm_cc_name;
                        }
                        var data = {
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
                            url:"/webjson/customer/addCustomer.aspx",
                            type:"POST",
                            data:data,
                            success: function (data) {
                                var data = JSON.parse(data);
                                if(data.errcode == 1){
                                    var crm_c_id = data.obj.crm_c_id;
                                    //添加联系人
                                    for(var i=0;i<contacts.length;i++){
                                        contacts[i].crm_c_id = crm_c_id
                                    }
                                    var contactsData = JSON.stringify(contacts);
                                    $.ajax({
                                        url:"/webjson/contact/addContact.aspx",
                                        type:"POST",
                                        data:{
                                            data:contactsData
                                        },
                                        success: function (data) {
                                            var data = JSON.parse(data);
                                            if(data.errcode == 1){
                                                $.alert("保存成功")
                                                self.clearInputPartner();
                                            }else {
                                                console.error(data);
                                            }
                                        },
                                        error: function (err) {
                                            console.log(err);
                                            $.alert("保存失败,请稍后重试")
                                        }
                                    })
                                }
                                else {
                                    console.error(data);
                                }
                            },
                            error: function (err) {
                                console.log(err);
                                $.alert("保存失败,请稍后重试")
                            }
                        });
                    }
                }
            })
        },
        clearInputPartner: function () {
            $(".partnerArea").val("");
            $("#personal").prop("checked","true");
            $(".organizationNone").hide();
            $(".partnerOrgName").val("")
            $(".partnerState").val("");
            $(".partnerRemark").val("");

            $(".partnerContacts").find("ul:gt(0)").remove();
            $(".partnerContacts").find(".ccName").val("");
            $(".partnerContacts").find(".ccPosition").val("");
            $(".partnerContacts").find(".ccPhone").val("");
        },
    };

    var myLog = {
        userList:[],
        init: function () {
            this.changeContanctsByClient();
            this.addNewLog();
            this.addColleague();
        },
        //动态添加同事
        addColleague: function () {
            var self = this;
            var container = $("#workPartners");
            var domStr = "";
            var currentUserId = "";
            var flgNext = false;
            //获取当前用户信息
            $.ajax({
                url:"/webjson/employee/getMyInfo.aspx",
                type:"GET",
                success: function (data) {
                    var data = JSON.parse(data);
                    currentUserId = data.crm_user_id;
                    flgNext = true;
                }
            });
            //获取登录用户上下级部门和人员信息列表
            var end = setInterval(function () {
                if(flgNext){
                    $.ajax({
                        url:"/webjson/dept/getMyDeptList.aspx",
                        type:"GET",
                        success: function (data) {
                            var data = JSON.parse(data);
                            if(data.status == 1){
                                console.log(data);
                                if(data.r){
                                    self.initUserData(data.r);
                                    var userList = self.userList;
                                    var userList = userList.filter(function (item) {
                                        return item.crm_user_id != currentUserId
                                    })
                                    userList.forEach(function (item) {
                                        var optionStr = "<option value='"+item.crm_user_id+"'>"+item.crm_name+"</option>"
                                        domStr += optionStr;
                                    })
                                }else {
                                    domStr = "<option>无同事</option>"
                                }


                                container.append(domStr);
                            }
                        }
                    });
                    flgNext = false;
                    clearInterval(end);
                }
            },100)
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
        //动态改变选择客户和联系人
        changeContanctsByClient: function () {
            var workClient = $("#workClient");
            var workContancts = $("#workContancts");
            $("#workClientType").on("change", function () {
                var type = $(this).val();
                //根据value请求数据
                if(type === ""){
                    var optionStr = "<option value=''>请先选择客户类型</option>";
                    workClient.html(optionStr);
                    workClient.attr("disabled","disabled")
                    workContancts.html("<option value=''>请先选择客户</option>");
                    workContancts.attr("disabled","disabled");
                }else {
                    $.showPreloader("Loading...")
                    //根据客户类型查询数据
                    $.ajax({
                        url:"/webjson/customer/getListByUserID.aspx",
                        type:"GET",
                        data:{
                            type:type
                        },
                        success: function (data) {
                            var data = JSON.parse(data);
                            if(data.status == "1"){
                                var clientData = data.r;
                                var optionStr = "<option value=''>请选择</option>";
                                clientData.forEach(function (item) {
                                    optionStr += "<option value="+item.crm_c_id+">"+item.crm_c_name+"</option>"
                                });
                                workClient.html(optionStr);
                                workClient.removeAttr("disabled");
                                workContancts.html("<option value=''>请先选择客户</option>");
                                workContancts.attr("disabled","disabled");
                                $.hidePreloader();
                            }else {
                                console.error(data);
                            }
                        },
                        error: function (err) {
                            console.log(err);
                            $.alert("服务器繁忙，请稍后重试");
                        }
                    })
                }
            });
            workClient.on("change", function () {
                var cId = $(this).val();
                if(cId === ""){
                    var optionStr = "<option value=''>请先选择客户</option>";
                    workContancts.html(optionStr);
                    workContancts.attr("disabled","disabled")
                }else {
                    $.showPreloader("Loading...")
                    //根据客户ID获取联系人
                    $.ajax({
                        url:"/webjson/contact/getContactByCid.aspx",
                        type:"GET",
                        data:{
                            id:cId
                        },
                        success: function (data) {
                            var data = JSON.parse(data);
                            if(data.status == "1"){
                                var ccData = data.r;
                                var optionStr = "";
                                ccData.forEach(function (item) {
                                    optionStr += "<option value="+item.crm_cc_id+">"+item.crm_cc_name+"</option>"
                                });
                                workContancts.html(optionStr);
                                workContancts.removeAttr("disabled");
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
                }
            })
        },
        //添加日志
        addNewLog: function () {
            var self = this;
            $(".btn-submitLog").unbind("touchstart").on("touchstart", function () {
                var type = $("#workType").val();
                var c_id = $("#workClient").val();
                var c_name = $("#workClient").find("option:checked").html();
                var cc_id = $("#workContancts").val();
                var cc_name = $("#workContancts").find("option:checked").html();
                var wl_target = $("#workTarget").val();
                var wl_result = $("#workResult").val();
                var wl_stage = $("#clientState").val();
                var wl_start_time = $("#workStartTime").val();
                var wl_end_time = $("#workEndTime").val();
                var wl_other = $("#workPartners").find("option:checked").html();
                var wl_remark = $("#workRemark").val();
                if(c_id === ""){
                    $.alert("请选择客户")
                }else if(cc_id === ""){
                    $.alert("请选择联系人")
                }else if(type === ""){
                    $.alert("请选择方式")
                } else if(wl_target ===  ""){
                    $.alert("请选择目标")
                }else if(wl_result === ""){
                    $.alert("请选择结果")
                }else if(wl_stage === ""){
                    $.alert("请选择客户状态")
                }else if(wl_start_time === ""){
                    $.alert("请选择起始时间")
                }else if(wl_end_time === ""){
                    $.alert("请选择终止时间")
                }else {
                    comFunc.getLocation(function (result) {
                        var map_name = result.detail.address;
                        var map = JSON.stringify(result.detail.location);

                        var files = "";

                        //===测试数据===================
                        //var filesArr = [
                        //    {crm_weixin_fid:"1237378768e7q8e7r8qwesafdasdfasdfaxss111"},
                        //    {crm_weixin_fid:"1237378768e7q8e7r8qwesafdasdfasdfaxss111"}
                        //];
                        //files = JSON.stringify(filesArr);
                        //var map = JSON.stringify({lan:30.274085,lng:120.15507});
                        //var map_name = "滨江区智慧e谷";
                        //============

                        var uploadFinsh = imageOption.uploadFinsh;
                        if(uploadFinsh){
                            //微信服务器上图片ID （数组）
                            var serverId = imageOption.imgInfo.uploadImageID;
                            if(serverId.length > 0){
                                var filesArr = [];
                                var currentYMD = comFunc.getNowTimeSlot().currentYMD;
                                serverId.forEach(function (item) {
                                    var obj = {};
                                    //obj.id = "";
                                    //obj.module_id = 0;
                                    //obj.crm_item_id = "";
                                    obj.crm_weixin_fid = item.toString();
                                    //obj.crm_xuele_fid = "";
                                    //obj.crm_file_extension = "";
                                    //obj.crm_file_size = 0;
                                    //obj.crm_addtime = "";
                                    filesArr.push(obj);
                                })
                                files = JSON.stringify(filesArr);
                            }
                        }

                        var data = {
                            type:parseInt(type),
                            c_id:c_id,
                            c_name:c_name,
                            cc_id:cc_id,
                            cc_name:cc_name,
                            wl_stage:wl_stage,
                            wl_target:parseInt(wl_target),
                            wl_result:parseInt(wl_result),
                            wl_start_time:wl_start_time,
                            wl_end_time:wl_end_time,
                            wl_remark:wl_remark,
                            wl_other:wl_other,
                            map:map,
                            map_name:map_name,
                            files:files
                        }
                        console.log(data);
                        $.showPreloader("Loading...")
                        $.ajax({
                            url:"/webjson/work/addWorkLog.aspx",
                            type:"POST",
                            data:data,
                            success: function (data) {
                                var data = JSON.parse(data);
                                if(data.errcode == "1"){
                                    $.alert("保存成功");
                                    self.clearInput();
                                }else {
                                    console.error(data);
                                }
                            },
                            error: function (err) {
                                console.log(err);
                                $.alert("保存失败,请稍后重试")
                            }
                        });
                    })

                }
            })
        },
        //清除添加日志输入
        clearInput: function () {
            var workClient = $("#workClient");
            var workContancts = $("#workContancts");
            var optionStr = "<option value=''>请先选择客户类型</option>";
            workClient.html(optionStr);
            workClient.attr("disabled","disabled")
            workContancts.html("<option value=''>请先选择客户</option>");
            workContancts.attr("disabled","disabled");
            $("#workType").val("");
            $("#workClientType").val("");
            $("#workTarget").val("");
            $("#workResult").val("");
            $("#clientState").val("");
            $("#workStartTime").val("");
            $("#workEndTime").val("");
            $("#workPartners").val("");
            $("#workRemark").val("");
        },
        //签到功能
        signIn: function () {
            var self = this;
            var container = $("#page-myLog-signIn").find(".content");

            var urlData = comFunc.url(window.location.href);
            var type = urlData.type;
            var timeSlot = comFunc.getNowTimeSlot();
            var currentTime = timeSlot.currentTimeH;
            var hintDom = self.makeHintDom(type,currentTime);
            var phoneMsg = comFunc.getPhoneMsg();

            //读取签到信息
            var timeSlot = comFunc.getNowTimeSlot();
            var data = {
                sdate:timeSlot.threeDayAgo,
                edate:timeSlot.currentTime
            }
            console.log(data);
            //获取当前用户考勤信息
            $.ajax({
                url:"/webjson/signin/getSignInByUserID.aspx",
                type:"GET",
                data:data,
                success: function (data) {
                    var data = JSON.parse(data);
                    if(data.status == 1){
                        console.log(data);
                        var dataArr = data.r;
                        dataArr.forEach(function (item) {
                            var signInLog = item.SignInLog;
                            signInLog.forEach(function (signItem) {
                                var type = signItem.crm_tag.slice(-1);
                                var time = signItem.crm_addtime;
                                container.append(self.makeHintDom(type,time));
                            })

                        })
                    }else {
                        console.error(data);
                    }
                },
                error: function (err) {
                    console.log(err);
                    $.alert("服务器繁忙，请稍后重试")
                }
            });

            comFunc.getLocation(function (result) {
                var map_name = result.detail.address;
                var map = JSON.stringify(result.detail.location);
                //签到
                var postData = {
                    type:parseInt(type),
                    map:map,
                    map_name:map_name,
                    phone:phoneMsg
                };
                console.log(postData);
                $.showPreloader("Loading...");
                $.ajax({
                    url:"/webjson/signin/addSignIn.aspx",
                    type:"POST",
                    data:postData,
                    success: function (data) {
                        var data = JSON.parse(data);
                        console.log(data);
                        if(data.errcode == 1){
                            container.append(hintDom);
                            $.hidePreloader();
                        }else if(data.errcode == -301){
                            $.alert("已经打卡")
                        }else {
                            $.alert("打卡失败")
                        }
                    }
                })
            })

        },
        //输入type 和 time 生成签到提示信息DOM
        makeHintDom: function (type,time) {
            var hintMsg = "";
            if(type == "1"){
                hintMsg = "提示：上班签到成功";
            }else if(type == "2"){
                hintMsg = "提示：下班签到成功";
            }
            var domStr =    "<div class='signInItem'>"
                            +       "<div class='time'>"+time+"</div>"
                            +       "<div class='msgConatiner'>"
                            +           "<span class='icon icon-emoji'></span>"
                            +           "<p class='hintMsg'>"+hintMsg+"</p>"
                            +       "</div>"
                            +"</div>";
            return domStr;
        }
    };

    var adminLog = {
        init: function () {

        },
        myInfo: function () {
            var container = $("#page-adminLog-myInfo");
            var userNameDom = container.find(".userName");
            var userDeptDom = container.find(".userDept");
            var userPositionDom = container.find(".userPosition");
            var userPhoneDom = container.find(".userPhone");
            //获取当前登录用户信息
            $.showPreloader("Loading...");
            $.ajax({
                url:"/webjson/employee/getMyInfo.aspx",
                type:"GET",
                success: function (data) {
                    var data = JSON.parse(data);
                    console.log(data);
                    var userName = "",
                        userDept = "",
                        userPosition = "",
                        userPhone = "";
                    if(data.crm_name){
                        userName = data.crm_name
                    }else {
                        userDept = "暂无";
                    };
                    if(data.department_info){
                        userDept = data.department_info.crm_department_name
                    }else {
                        userDept = "暂无"
                    };
                    if(data.crm_position){
                        userPosition = data.crm_position
                    }else {
                        userPosition = "暂无";
                    };
                    if(data.crm_mobile){
                        userPhone = data.crm_mobile;
                    }else {
                        userPhone = "暂无"
                    }
                    userNameDom.html(userName);
                    userDeptDom.html(userDept);
                    userPositionDom.html(userPosition);
                    userPhoneDom.html(userPhone);
                    $.hidePreloader();
                },
                error: function (err) {
                    console.log(err);
                    $.alert("服务器繁忙，请稍后重试");
                }
            });
        }
    };

    var uploadPic = {
        /**
         *
         * @param obj{uploadPic}
         */
        doms:{
            uploadPic:"",
            uploadPicContaier:"",
        },
        init: function () {
            var self = this;
            this.doms.uploadPic = $(".uploadPic");
            this.doms.uploadPicContaier = $(".uploadPicContainer");
            this.doms.uploadPic.on("change", function () {
                self.fileSelected();
            })
        },

        //选择文件，获取文件大小，也可以在这里获取文件格式，限制用户上传非要求格式的文件
        fileSelected: function () {
            var files = (this.doms.uploadPic)[0].files;
            var count = files.length;
            for(var index = 0;index<count;index++){
                var file = files[index];
                var fileSize = 0;
                if(file.size > 1024 * 1024){
                    fileSize = (Math.round(file.size * 100 / (1024 * 1024)) / 100).toString() + 'MB';
                }else {
                    fileSize = (Math.round(file.size * 100 / 1024) / 100).toString() + 'KB';
                }
                console.log(fileSize)
            }
            this.uploadFile();
        },
        //异步上传文件
        uploadFile: function () {
            var fd = new FormData();    //创建表单对象
            var files = (this.doms.uploadPic)[0].files;
            var count = files.length;
            for(var index=0;index<count;index++){
                var file = files[index];
                fd.append("file",file);     //将文件添加到表单数据中
                this.previewImage(file);     //上传前预览图片
            }

            //下面发送数据
        },
        //文件预览
        previewImage: function (file) {
            var img = document.createElement("img");
            img.file = file;
            this.doms.uploadPicContaier.find(".file_input").before(img);
            //使用FileReader方法显示图片内容
            var render = new FileReader();
            render.onload = (function (aImg) {
                return function (e) {
                    aImg.src = e.target.result;
                };
            })(img);
            render.readAsDataURL(file);
        }
    };

    var imageOption = {
        imgInfo:{
            chooseImageID:[],
            uploadImageID:[],
        },
        uploadFinsh:true,
        init: function () {
            this.addPic();
        },
        addPic: function () {
            var self = this;
            $(".btn-addPic").on("click", function () {

                setTimeout(function () {
                    wxJSSDK.imageApi({
                        chooseImage:{
                            success: function (res) {
                                console.log(res);
                                var chooseImageId = [];
                                chooseImageId = res.localIds;   // 返回选定照片的本地ID列表，localId可以作为img标签的src属性显示图片
                                if(chooseImageId == 0){
                                    return false;
                                }

                                chooseImageId.forEach(function (item) {
                                    self.imgInfo.chooseImageID.push(item);
                                })
                                var imgStr = "";
                                chooseImageId.forEach(function (item) {
                                    imgStr += "<img src='"+item+"' class='btn-preview'>"
                                })
                                $(".uploadPicContainer").find(".file_input").before(imgStr);

                                //添加预览功能
                                self.previewPic();

                                //上传图片
                                self.uploadFinsh = false;
                                var i = 0,length = chooseImageId.length;

                                function upload(){
                                    wxJSSDK.imageApi({
                                        uploadImage:{
                                            localId:chooseImageId[i],
                                            success: function (res) {
                                                i++;
                                                self.imgInfo.uploadImageID.push(res.serverId);
                                                if(i<length){
                                                    upload();
                                                }else {
                                                    self.uploadFinsh = true;
                                                }
                                            },
                                            fail: function (res) {
                                                $.alert(JSON.stringify(res));
                                            }
                                        }
                                    })
                                }
                                setTimeout(function () {
                                    upload();
                                },100)
                            }
                        }
                    })
                },300)


            });
        },
        previewPic: function () {
            var self = this;
            $(".btn-preview").unbind("touchend").on("touchend", function () {
                var currentImgSrc = $(this).attr("src");
                wxJSSDK.imageApi({
                    previewImage:{
                        current:currentImgSrc,
                        urls:self.imgInfo.chooseImageID
                    }
                })
            });
        }
    }

    function init(){
        initFunc.init();
    }

    $(document).on("pageInit", "#page-datetime-picker", function(e) {
        $(".datetime-picker").datetimePicker({
            toolbarTemplate: '<header class="bar bar-nav">\
      <button class="button button-link pull-right close-picker">OK</button>\
      <h1 class="title">datetime</h1>\
      </header>'
        });
    });
    $(document).on("pageInit", "#page-city-picker", function(e) {
        $("#city-picker").cityPicker({});
    });

    $(document).on("pageInit", function () {
        init();
    });
    $(document).on("pageInit","#page-datetime-picker", function () {
        myLog.init();
        //uploadPic.init();
        imageOption.init();
    });
    $(document).on("pageInit","#page-myLog-signIn", function () {
        myLog.signIn();
    });
    $(document).on("pageInit","#page-city-picker", function () {
        crm.init();
    });
    $(document).on("pageInit","#page-adminLog-myInfo", function () {
        adminLog.myInfo();
    });
})