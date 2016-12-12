/**
 * Created by Administrator on 2016/11/17 0017.
 */
$(function () {
    var initFunc = {
        init: function () {
            this.addFooterClickEvent();
            this.addNewContacts();
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
        },
        //点击添加联系人按钮
        //容器类名 .addNewContactsContainer
        //添加内容Id名 #addNewContacts
        //添加点击事件类名 .addNewContacts
        addNewContacts: function () {
            $(".addNewContacts").on("touchstart", function () {
                var container = $(".addNewContactsContainer");
                var innerHtml = $("#addNewContacts").html();
                container.append(innerHtml);
            });
        }
    }
    var crm = {
        init: function () {
            this.radioChange();
            this.newDept();
            this.newSchool();
            this.newPartner();
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
                    }else if(flgName && flgPhone){
                        var data = {
                            c_name:deptName,
                            c_type:3,
                            c_category:deptLevel,
                            c_area:"110106",
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
                                                $.alert("保存失败")
                                            }
                                        },
                                        error: function (err) {
                                            console.log(err);
                                            $.alert("保存失败")
                                        }
                                    })
                                }
                                else {
                                    $.alert("保存失败")
                                }
                            },
                            error: function (err) {
                                console.log(err);
                                $.alert("保存失败")
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
                    }else if(flgName && flgPhone){
                        var data = {
                            c_name:schoolName,
                            c_type:1,
                            c_category:schoolPeriod,
                            c_area:"110108",
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
                                                $.alert("保存失败")
                                            }
                                        },
                                        error: function (err) {
                                            console.log(err);
                                            $.alert("保存失败")
                                        }
                                    })
                                }
                                else {
                                    $.alert("保存失败")
                                }
                            },
                            error: function (err) {
                                console.log(err);
                                $.alert("保存失败")
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
                    }else if(flgName && flgPhone){
                        if(partnerName === ""){
                            partnerName = contacts[0].crm_cc_name;
                        }
                        var data = {
                            c_name:partnerName,
                            c_type:2,
                            c_category:partnerType,
                            c_area:"110108",
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
                                                $.alert("保存失败")
                                            }
                                        },
                                        error: function (err) {
                                            console.log(err);
                                            $.alert("保存失败")
                                        }
                                    })
                                }
                                else {
                                    $.alert("保存失败")
                                }
                            },
                            error: function (err) {
                                console.log(err);
                                $.alert("保存失败")
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
        init: function () {
            this.changeContanctsByClient();
            this.addNewLog();
        },
        //动态改变选择客户和联系人
        changeContanctsByClient: function () {
            var workClient = $("#workClient");
            var workContancts = $("#workContancts");
            $("#workClientType").on("change", function () {
                var type = $(this).val();
                //根据value请求数据
                //现模拟数据
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
                                $.alert("加载出错")
                            }
                        },
                        error: function (err) {
                            console.log(err);
                            $.alert("加载出错")
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
                                $.alert("加载出错")
                            }
                        },
                        error: function (err) {
                            console.log(err);
                            $.alert("加载出错");
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
                var wl_other = $("#workPartners").find("option:checked").val();
                var wl_remark = $("#workRemark").val();
                if(type === ""){
                    $.alert("请选择方式")
                }else if(c_id === ""){
                    $.alert("请选择客户")
                }else if(cc_id === ""){
                    $.alert("请选择联系人")
                }else if(wl_target ===  ""){
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
                    var map = comFunc.getLocation();
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
                        map:map
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
                                $.alert("保存失败")
                            }
                        },
                        error: function (err) {
                            console.log(err);
                            $.alert("保存失败")
                        }
                    });
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
        //签到
        signIn: function () {
            var container = $("#page-myLog-signIn").find(".content");
            var urlData = comFunc.url(window.location.href);
            var type = urlData.type;
            var map = comFunc.getLocation();
            var timeSlot = comFunc.getNowTimeSlot();
            var currentTime = timeSlot.currentTime;
            var hintMsg = "";
            if(type == "1"){
                hintMsg = "提示：上班签到成功";
            }else if(type == "2"){
                hintMsg = "提示：下班签到成功";
            }
            var domStr =    "<div class='signInItem'>"
                            +       "<div class='time'>"+currentTime+"</div>"
                            +       "<div class='msgConatiner'>"
                            +           "<span class='icon icon-emoji'></span>"
                            +           "<p class='hintMsg'>"+hintMsg+"</p>"
                            +       "</div>"
                            +"</div>"

            $.showPreloader("Loading...");
            //读取签到信息
            var timeSlot = comFunc.getNowTimeSlot();
            var data={
                edate:timeSlot.currentDay,
                sdate:timeSlot.currentTime
            };
            console.log(data);
            $.ajax({
                url:"/webjson/signin/getSignInByUserID.aspx",
                type:"GET",
                data:data,
                success: function (data) {
                    var data = JSON.parse(data);
                    console.log(data);
                    if(data.status == 1){
                        console.log(data);
                    }else {
                        $.alert("读取记录失败")
                    }
                },
                error: function (err) {
                    console.log(err);
                    $.alert("读取记录失败")
                }
            })

            //签到
            var postData = {
                type:parseInt(type),
                map:map
            };
            console.log(postData);
            $.ajax({
                url:"/webjson/signin/addSignIn.aspx",
                type:"POST",
                data:postData,
                success: function (data) {
                    var data = JSON.parse(data);
                    console.log(data);
                    if(data.errcode == 1){
                        container.append(domStr);
                        $.hidePreloader();
                    }else if(data.errcode == -301){
                        $.alert("已经打卡")
                    }else {
                        $.alert("打卡失败")
                    }
                }
            })





            //打卡签到
            //$.ajax({
            //    url:"/webjson/signin/addSignIn.aspx",
            //    type:"POST",
            //    data:postData,
            //    success: function (data) {
            //        var data = JSON.parse(data);
            //        console.log(data);
            //        if(data.errcode == "1"){
            //
            //        }
            //    }
            //})
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
    function init(){
        initFunc.init();
    }
    $(document).on("pageInit", function () {
        init();
    });
    $(document).on("pageInit","#page-datetime-picker", function () {
        myLog.init();
        uploadPic.init();
    });
    $(document).on("pageInit","#page-myLog-signIn", function () {
        myLog.signIn();
    });
    $(document).on("pageInit","#page-city-picker", function () {
        crm.init();
    });
})