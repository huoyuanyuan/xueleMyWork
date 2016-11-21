/**
 * Created by Administrator on 2016/10/20 0020.
 */
$(function () {
    function init(){
        ASplaceAdminHandle();
        pageHandle();
        addEventListeners();
        ASadminHandle();
    }

    //---------------------------广告位管理操作---------------
    function ASplaceAdminHandle(){
        makeASPlace();
        upDataASplace();
        editASplace();
        placeSearch();
    }
    //搜索框
    function placeSearch(){
        $("#place_searchBtn").on("click", function (e) {
            e.preventDefault();
            var searchInput = $("#place_searchInput").val();
            console.log(searchInput);
            window.location.href = "/admin/searchASplace?keywords="+searchInput;
        });
    }
    //创建广告位 提交数据
    function makeASPlace(){
        $("#place_saveBtn").on("click", function () {
            var placeName = $("#place_name_input").val();
            var plugInId = $("#plugIn_input :checked").val();
            var selector = $("#place_selector").val();
            var remarks = $("#placeRemarks_input").val();
            var state = $(".place_radio_bigo :checked").val();
            var placeMsg = $("#place_msg");
            var placeData = {
                place_name:placeName,
                plugIn_id:plugInId,
                selector:selector,
                place_state:state,
                place_remarks:remarks
            }
            if(placeName == ""){
                placeMsg.html("请填写广告位名称");
            }else if(plugInId == ""){
                placeMsg.html("请选择广告脚本");
            }else {
                $.ajax({
                    url:"/admin/makeASplace",
                    type:"post",
                    data:placeData,
                    success: function (data) {
                        console.log(data);
                        if(data.state == 0){
                            window.location.href = "/admin"
                        }else if(data.state == 1){
                            placeMsg.html("创建失败");
                            console.log(data.message);
                        }
                    },
                    error: function (err) {
                        console.log(err);
                    }
                });
            }
        });
    }
    //更新广告位（改变状态，删除）
    function upDataASplace(){
        $("#allPlace_submitBtn").on("click", function () {
            var checkedInput = $("tbody input:checked");
            var checkedIdArr = [];
            for(var i= 0,lenght=checkedInput.length;i<lenght;i++){
                var obj = {};
                obj.checkedPlaceId = checkedInput.eq(i).val();
                obj.asNumber = checkedInput.eq(i).parent().parent().children("td.asNumber").html();
                checkedIdArr.push(obj);
            }
            var checkedAction = $("#allPlace_act_post option:checked");
            var allPlaceMsg = $("#allPlace_msg");
            if(checkedIdArr.length == 0){
                allPlaceMsg.html("请先勾选对象");
            }else if(checkedAction.val() == ""){
                allPlaceMsg.html("请选择要执行的操作");
            }else if(checkedAction.val() == "enable" || checkedAction.val() == "disable"){
                allPlaceMsg.html("");
                var state;
                if(checkedAction.val() == "enable"){
                    state = 1;
                }else {
                    state = 0;
                }
                var idArr = [];
                checkedIdArr.forEach(function (item) {
                    idArr.push(item.checkedPlaceId)
                });
                $.ajax({
                    url:"/admin/changeASplaceState",
                    type:"post",
                    traditional:true,
                    data:{
                        place_id:idArr,
                        place_state:state
                    },
                    success: function (data) {
                        if(data.state == 0){
                            window.location.href = "/admin";
                        }else if(data.state ==1){
                            allPlaceMsg.html("操作失败");
                        }
                    },
                    error: function (err) {
                        console.log(err);
                    }
                });
            }else if(checkedAction.val() == "del"){
                allPlaceMsg.html("");
                var delArr = [];
                checkedIdArr.forEach(function (item) {
                    delArr.push(JSON.stringify(item));
                })
                console.log(delArr)
                $.ajax({
                    url:"/admin/delASplace",
                    type:"post",
                    traditional:true,
                    data:{
                        place_id:delArr,
                    },
                    success: function (data) {
                        if(data.state == 0){
                            window.location.href = "/admin";
                        }else if(data.state == 1){
                            allPlaceMsg.html("操作失败");
                        }
                    }
                });
            }
        });
    }
    //修改广告位
    function editASplace(){
        $("#edit_place_saveBtn").on("click", function () {
            var place_id = $("#edit_place_id").val();
            var place_name = $("#edit_place_name_input").val();
            var plugIn_id = $("#edit_plugIn_input :selected").val();
            var place_remarks = $("#edit_placeRemarks_input").val();
            var place_state = $(".eidt_place_radio_bigo :checked").val();
            var editData = {
                place_id:place_id,
                place_name:place_name,
                plugIn_id:plugIn_id,
                place_remarks:place_remarks,
                place_state:place_state
            }
            $.ajax({
                url:"/admin/editASplace",
                type:"post",
                data:editData,
                success: function (data) {
                    console.log(data);
                    if(data.state == 0){
                        window.location.href = "/admin"
                    }else if(data.state == 1){
                        $("#edit_place_msg").html("保存失败");
                    }
                },
                error: function (err) {
                    console.error(err);
                }
            });
        });
    }
    //----------------------------------------------------
    //---------------------------------------页面操作-----------------------
    function pageHandle(){
        addLeftNavCss();
        logout();
        changePassword();
        addBodyMinHeight();
    }
    //添加body最小高度
    function addBodyMinHeight(){
        var screenHeight = window.innerHeight
        $("body").css("minHeight",screenHeight)
    }
    //添加左边导航栏样式
    function addLeftNavCss(){
        var href = window.location.href.split("/");
        var last = href[href.length-1];
        var reg = {
            allASplace:/^admin$/,
            editASplace:/^editASplace.*$/,
            searchASplace:/^searchASplace.*$/,
            makeASplace:/^makeASplace.*$/,
            adminAS:/^adminAS.*$/,
            allAS:/^allAS.*$/,
            editAS:/^editAS.*$/,
            searchAS:/^searchAS.*$/,
            makeAS:/^makeAS.*$/
        }
        if(reg.allASplace.test(last) || reg.editASplace.test(last) || reg.searchASplace.test(last) || reg.adminAS.test(last)){
            $(".leftNav:eq(0)").addClass("activeLeftNav");
        }else if(reg.makeASplace.test(last)){
            $(".leftNav:eq(1)").addClass("activeLeftNav");
        }else if(reg.allAS.test(last) || reg.editAS.test(last) || reg.searchAS.test(last)){
            $(".leftNav:eq(2)").addClass("activeLeftNav");
        }else if(reg.makeAS.test(last)){
            $(".leftNav:eq(3)").addClass("activeLeftNav");
        }
    }
    //退出登陆
    function logout(){
        $("#logoutBtn").on("click", function (e) {
            e.preventDefault();
            $.ajax({
                url:"/admin/logout",
                data:{
                    currentAdmin:$("#adminName").html()
                },
                success: function (data) {
                    console.log(data);
                    switch (data.state){
                        case 0:
                            window.location.href = "/";
                            break;
                        case 1:
                            console.log(data.message);
                            break;
                        default:
                            console.log("default");
                            break;
                    }
                },
                error: function (err) {
                    console.log(err);
                }
            });
        });
    }
    //修改密码
    function changePassword(){
        $("#changPassBtn").on("click", function () {
            var newPass = $("#newPass").val();
            var repeatPass = $("#repeatNewPass").val();
            if(newPass == ""){
                $("#changePassMsg").html("新密码不能为空");
            }else if(newPass != repeatPass){
                $("#changePassMsg").html("两次密码不一致");
            }else {
                $.ajax({
                    url:"/admin/changPass",
                    type:"post",
                    data:{
                        admin_name:$("#adminName").html(),
                        newPass:newPass
                    },
                    success: function (data) {
                        if(data.state == 0){
                            $("#changePassMsg").html("密码修改成功");
                            $("#newPass").val("");
                            $("#repeatNewPass").val("");
                        }else if(data.state == 1){
                            $("#changePassMsg").html("密码修改失败");
                        }
                    },
                    error: function (err) {
                        console.log(err);
                    }
                })
            }
        });
    }
    //-------------------------------------------------------------------
    //------------------------添加dom事件监听--------------------
    function addEventListeners(){
        addCheckAllBtnListener();
        clickToChecked();

        var changePassMsg = $("#changePassMsg");
        $("#newPass").on("blur", function () {
            if($(this).val() == ""){
                changePassMsg.html("新密码不能为空");
            }else {
                changePassMsg.html("");
            }
        });
        $("#repeatNewPass").on("blur", function () {
            if($(this).val() != $("#newPass").val()){
                changePassMsg.html("两次密码不一致");
            }else {
                changePassMsg.html("");
            }
        });
    }
    //全选按钮监听
    function addCheckAllBtnListener(){
        $("#chk_all_allASplace").on("click", function () {
            if($(this).is(":checked")){
                $("input[data-parent='chk_all_allASplace']").prop("checked",true);
            }else {
                $("input[data-parent='chk_all_allASplace']").prop("checked",false);
            }
        });
        $("#chk_all_allAS").on("click", function () {
            if($(this).is(":checked")){
                $("input[data-parent='chk_all_allAS']").prop("checked",true);
            }else {
                $("input[data-parent='chk_all_allAS']").prop("checked",false);
            }
        });
        $("#allRole").on("click", function () {
            if($(this).is(":checked")){
                $("input[data-parent='allRole']").prop("checked",true);
            }else {
                $("input[data-parent='allRole']").prop("checked",false);
            }
        });
        $("#chk_all_adminAS").on("click", function () {
            if($(this).is(":checked")){
                $("input[data-parent='chk_all_adminAS']").prop("checked",true);
            }else {
                $("input[data-parent='chk_all_adminAS']").prop("checked",false);
            }
        });
    }
    //点击某行选中
    function clickToChecked(){
        $("tbody tr").on("click", function () {
            var inputDom = $(this).find("td:first input")
            if(inputDom.is(":checked")){
                inputDom.prop("checked",false);
            }else {
                inputDom.prop("checked",true);
            }
        });
    }
    //-------------------------------------------------------------------------
    //------------------------------广告管理操作-------------------------------
    function ASadminHandle(){
        uploadPic();
        getArea();
        makeAS();
        ASSearch();
        changeAS();
        editAS();
        changeAdminAS();
        changeASorder();
        getDetailAdress();
    }
    function repeatArr(arr){
        var hash={};
        for(var i in arr){
            if(hash[arr[i]]){
                return true;
            }else {
                hash[arr[i]] = true
            }
        }
        return false;
    }
    //管理广告次序
    function changeASorder(){
        var showContainer = $(".showOrderContainer");
        var hideContainer = $(".hiddenOrderContainer");
        $("#AS_order_changeBtn").on("click", function (e) {
            e.preventDefault();
            for(var i= 0,length=showContainer.length;i<length;i++){
                var order = showContainer.eq(i).html();
                hideContainer.eq(i).find("input").val(order);
            };
            showContainer.hide();
            hideContainer.show();
        });
        $("#AS_order_sureBtn").on("click", function (e) {
            e.preventDefault();
            if(hideContainer.is(":visible")){
                var placeId = $(".adminAS_placeId").val();
                var orderInput = $(".hiddenOrderContainer input");
                var orderArr = [];
                var arr = [];
                for(var i= 0,length=orderInput.length;i<length;i++){
                    var item = orderInput.eq(i);
                    arr.push(item.val());
                    var obj = {};
                    obj.AS_id = item.attr("data-ASId");
                    obj.AS_order = item.val();
                    orderArr.push(JSON.stringify(obj));
                }
                if(repeatArr(arr)){
                    $("#adminAS_msg").html("广告次序不能重复");
                }else {
                    $.ajax({
                        url:"/admin/changeASOrder",
                        type:"post",
                        traditional:true,
                        data:{
                            orderArr:orderArr
                        },
                        success: function (data) {
                            console.log(data);
                            if(data.state == 0){
                                window.location.href = "/admin/adminAS?id="+placeId;
                            }else if(data.state == 1){
                                $("#adminAS_msg").html("改变失败")
                            }
                        },
                        error: function (err) {
                            console.log(err)
                        }
                    });
                }
            }
        });
    }
    //管理广告（改变状态 删除）
    function changeAdminAS(){
        $("#adminAS_submintBtn").on("click", function (e) {
            e.preventDefault();
            var checkedInput = $("tbody input:checked");
            var placeId = $(".adminAS_placeId").val();
            var checkedIdArr = [];
            for(var i= 0,lenght=checkedInput.length;i<lenght;i++){
                var checkedPlaceId = checkedInput.eq(i).val();
                checkedIdArr.push(checkedPlaceId);
            }
            var checkedAction = $("#adminAS_act_post option:checked");
            var ASMsg = $("#adminAS_msg");
            if(checkedIdArr.length == 0){
                ASMsg.html("请先勾选对象");
            }else if(checkedAction.val() == ""){
                ASMsg.html("请选择要执行的操作");
            }else if(checkedAction.val() == "enable" || checkedAction.val() == "disable"){
                ASMsg.html("");
                var state;
                if(checkedAction.val() == "enable"){
                    state = 1;
                }else {
                    state = 0;
                }
                console.log(checkedIdArr)
                $.ajax({
                    url:"/admin/changeASState",
                    type:"post",
                    traditional:true,
                    data:{
                        AS_id:checkedIdArr,
                        AS_state:state
                    },
                    success: function (data) {
                        console.log(data)
                        if(data.state == 0){
                            window.location.href = "/admin/adminAS?id="+placeId;
                        }else if(data.state ==1){
                            ASMsg.html("操作失败");
                        }
                    },
                    error: function (err) {
                        console.log(err);
                    }
                });
            }else if(checkedAction.val() == "del"){
                ASMsg.html("");
                $.ajax({
                    url:"/admin/delAS",
                    type:"post",
                    traditional:true,
                    data:{
                        AS_id:checkedIdArr
                    },
                    success: function (data) {
                        console.log(data);
                        if(data.state == 0){
                            window.location.href = "/admin/adminAS?id="+placeId;
                        }else if(data.state == 1){
                            ASMsg.html("操作失败");
                        }
                    }
                });
            }
        });
    }
    //更新广告（改变状态 删除）
    function changeAS(){
        $("#AS_submitBtn").on("click", function (e) {
            e.preventDefault();
            var checkedInput = $("tbody input:checked");
            var checkedIdArr = [];
            for(var i= 0,lenght=checkedInput.length;i<lenght;i++){
                var checkedPlaceId = checkedInput.eq(i).val();
                checkedIdArr.push(checkedPlaceId);
            }
            var checkedAction = $("#AS_act_post option:checked");
            var ASMsg = $("#AS_msg");
            if(checkedIdArr.length == 0){
                ASMsg.html("请先勾选对象");
            }else if(checkedAction.val() == ""){
                ASMsg.html("请选择要执行的操作");
            }else if(checkedAction.val() == "enable" || checkedAction.val() == "disable"){
                ASMsg.html("");
                var state;
                if(checkedAction.val() == "enable"){
                    state = 1;
                }else {
                    state = 0;
                }
                $.ajax({
                    url:"/admin/changeASState",
                    type:"post",
                    traditional:true,
                    data:{
                        AS_id:checkedIdArr,
                        AS_state:state
                    },
                    success: function (data) {
                        console.log(data)
                        if(data.state == 0){
                            window.location.href = "/admin/allAS";
                        }else if(data.state ==1){
                            ASMsg.html("操作失败");
                        }
                    },
                    error: function (err) {
                        console.log(err);
                    }
                });
            }else if(checkedAction.val() == "del"){
                ASMsg.html("");
                $.ajax({
                    url:"/admin/delAS",
                    type:"post",
                    traditional:true,
                    data:{
                        AS_id:checkedIdArr
                    },
                    success: function (data) {
                        console.log(data);
                        if(data.state == 0){
                            window.location.href = "/admin/allAS";
                        }else if(data.state == 1){
                            ASMsg.html("操作失败");
                        }
                    }
                });
            }
        });
    }
    //广告搜索
    function ASSearch(){
        $("#AS_searchBtn").on("click", function (e) {
            e.preventDefault();
            var placeId = $("#AS_ASplaceContainer option:selected").val();
            var state = $("#AS_stateContainer option:selected").val();
            var keywords = $("#AS_keywords").val();
            window.location.href = "/admin/searchAS?placeId="+placeId+"&state="+state+"&keywords="+keywords;
        });
    }
    //上传图片
    function uploadPic(){
        var picSubMsg = $("#picSubMsg");
        $("#AS_selectPicBtn").on("change", function () {
            var picName = $("#AS_selectPicBtn")[0].files[0].name;
            picSubMsg.html(picName);
        });
        $("#picSubBtn").on("click", function (e) {
            e.preventDefault();
            var files = $("#AS_selectPicBtn")[0].files;
            if(files.length){
                var formData = new FormData();
                formData.append("file",files[0]);
                $.ajax({
                    url:"http://ulxs.neiwang.com/upload",
                    type:"post",
                    data:formData,
                    cache:false,
                    processData:false,
                    contentType:false,
                    success: function (data) {
                        console.log(data);
                        var uploadPicSrc = "http://dl.xueleyun.com/images/"+data.FileKey+".jpg"
                        if(data.Status){
                            $("#uploadPic").attr("src",uploadPicSrc);
                            picSubMsg.html("上传成功");
                        }else {
                            picSubMsg.html("上传失败，请重新上传");
                        }
                    },
                    error: function (err) {
                        console.error(err)
                    }
                });
            }else {
                picSubMsg.html("请选择上传图片");
            }
        });
    }
    //点击获得详细地址
    function getDetailAdress(){
        var detailAdress = "";
        var detailAdressContainer = $("#detailAdressContainer");
        $("#getDetailBtn").on("click", function (e) {
            e.preventDefault();
            var code = $("#originArea").attr("data-value");
            var codeName = $("#originArea").html();
            if(code.length == 2){
                detailAdress = codeName;
                detailAdressContainer.html(detailAdress)
            }else if(code.length == 4){
                var newCode = code.slice(0,code.length-2);
                getAreaByCode("", function (data) {
                    data.wrapper.forEach(function (item) {
                        if(item.code == newCode){
                            detailAdress = item.name+"/"+codeName
                        }
                    })
                    detailAdressContainer.html(detailAdress);
                })
            }else if(code.length == 6){
                var checkCode = code.slice(0,code.length-2);
                var selectCode = code.slice(0,code.length-4);
                getAreaByCode(selectCode, function (data) {
                    data.wrapper.forEach(function (item) {
                        if(item.code == checkCode){
                            detailAdress = item.name+"/"+codeName
                        }
                    })
                    getAreaByCode("", function (data) {
                        data.wrapper.forEach(function (item) {
                            if(item.code == selectCode){
                                detailAdress = item.name +"/"+detailAdress;
                            }
                        })
                        console.log(detailAdress)
                        detailAdressContainer.html(detailAdress)
                    })
                })
            }
        });
    }
    //获得地区
    function getArea(){
        var regionSelector = $("#region_selector");
        var districtSelector = $("#district_selector");
        regionSelector.hide();
        districtSelector.hide();
        getAreaByCode("", function (data) {
            addOption(data,"province_selector");
        });
        $("#province_selector").on("change", function () {
            var clickTargetVal = $(this).val();
            if(clickTargetVal == "province"){
                regionSelector.hide();
                removeOption("region_selector")
                districtSelector.hide();
                removeOption("district_selector");
            }else if(clickTargetVal == "all"){
                regionSelector.hide();
                removeOption("region_selector");
                districtSelector.hide();
                removeOption("district_selector");
                console.log("all")
            //    TODO all ajax
            }else {
                regionSelector.show();
                removeOption("region_selector");
                removeOption("district_selector");
                getAreaByCode(clickTargetVal, function (data) {
                    addOption(data,"region_selector");
                })
            }
        });
        $("#region_selector").on("change", function () {
            var clickTargetVal = $(this).val();
            if(clickTargetVal == "region"){
                districtSelector.hide();
                removeOption("district_selector");
            }else if(clickTargetVal == "all"){
                districtSelector.hide();
                removeOption("district_selector");
                console.log("all")
                //    TODO all ajax
            }else {
                districtSelector.show();
                removeOption("district_selector");
                getAreaByCode(clickTargetVal, function (data) {
                    addOption(data,"district_selector");
                })
            }
        });
    }
    //添加option
    function addOption(data,id){
        var dataArr = data.wrapper;
        dataArr.forEach(function (item) {
            $("#"+id).append("<option value='"+item.code+"'>"+item.name+"</option>");
        })
    }
    //移除option
    function removeOption(id){
        $("#"+id+" :gt(1)").remove()
    }
    //根据code得到返回数据
    function getAreaByCode(code,callback){
        $.ajax({
            url:"http://www.xueleyun.com/member/shiftClass/anonymous/getArea.ajax?cb=?",
            dataType:"JSONP",
            type:"post",
            data:{
                areaId:code
            },
            success: function (data) {
                if(callback && callback instanceof Function){
                    callback(data);
                }
            },
            error: function (err) {
                console.log(err);
            }
        });
    }
    //创建广告
    function makeAS(){
        $("#AS_makeAS_saveBtn").on("click", function () {
            var ASName = $("#AS_name_input").val();
            var ASLinkUrl = $("#AS_link_url_input").val();
            var ASPlaceId = $("#AS_place_input :checked").val();
            var ASbgColor = $("#AS_bgColor_input").val();
            var ASTargetArea = $("#areaSelectorContainer option:selected");
            var ASTargetRole = $("#roleContainer input:checked[data-parent='allRole']");
            var ASUsetime = $("#AS_usetime_input").val();
            var ASRemarks = $("#AS_remarks_input").val();
            var ASState = $(".AS_state:checked").val();
            var ASOpenPlace = $(".AS_openPlace:checked").val();
            var ASPicSrc = $("#uploadPic").attr("src");
            var ASMsg = $("#ASMag");
            var areaArr = [];
            for(var i= 0,length=ASTargetArea.length;i<length;i++){
                var obj = {};
                obj.areaCode=ASTargetArea.eq(i).val();
                obj.areaName = ASTargetArea.eq(i).html();
                if(obj.areaCode == "all" || obj.areaCode == "region" || obj.areaCode == "district"){
                    continue
                }else {
                    areaArr.push(obj);
                }
            }
            var AS_Target_area_id = areaArr[areaArr.length-1].areaCode;
            var AS_Target_area_name = areaArr[areaArr.length-1].areaName
            var roleArr = [];
            for(var j= 0,roleLength=ASTargetRole.length;j<roleLength;j++){
                var arrObj = {};
                arrObj.roleId = ASTargetRole.eq(j).val();
                arrObj.roleName = roleToRole(ASTargetRole.eq(j).attr("id"));
                roleArr.push(arrObj);
            }
            var ASData = {
                AS_name:ASName,
                AS_link_url:ASLinkUrl,
                AS_to_ASplace_id:ASPlaceId,
                AS_picture_src:ASPicSrc,
                AS_backgroundcolor:ASbgColor,
                AS_target_area_id:AS_Target_area_id,
                AS_target_area_name:AS_Target_area_name,
                AS_target_role:JSON.stringify(roleArr),
                AS_usetime:ASUsetime,
                AS_remarks:ASRemarks,
                AS_state:ASState,
                AS_open_place:ASOpenPlace
            };

            if(ASData.AS_name == ""){
                ASMsg.html("请输入广告名称")
            }else if(ASData.AS_link_url == ""){
                ASMsg.html("请输入连接地址")
            }else if(ASData.AS_to_ASplace_id == ""){
                ASMsg.html("请选择广告位");
            }else if(ASData.AS_picture_src == "/imgs/image.png"){
                ASMsg.html("请上传图片")
            } else if(ASData.AS_target_area_id == "province"){
                ASMsg.html("请选择投放地区");
            }else if(ASData.AS_target_role == "[]"){
                ASMsg.html("请选择投放角色");
            } else if(ASData.AS_usetime == ""){
                ASMsg.html("请选择广告生效时间")
            }else {
                ASMsg.html("");
                $.ajax({
                    url:"/admin/makeAS",
                    type:"post",
                    traditional:true,
                    data:ASData,
                    success: function (data) {
                        console.log(data);
                        if(data.state == 0){
                            window.location.href = "/admin/allAS"
                        }else if(data.state == 1){
                            console.log(data.message);
                            ASMsg.html("保存失败");
                        }
                    },
                    error: function (err) {
                        console.log(err)
                    }
                });
            }

        })
    }
    //修改广告
    function editAS(){
        $("#AS_editAS_saveBtn").on("click", function () {
            var ASId = $("#AS_edit_id").val();
            var ASName = $("#AS_edit_name_input").val();
            var ASLinkUrl = $("#AS_eidt_link_url_input").val();
            var ASPlaceId = $("#AS_edit_place_input :checked").val();
            var ASbgColor = $("#AS_edit_bgColor_input").val();
            var ASTargetArea = $("#edit_areaSelectorContainer option:selected");
            var ASTargetRole = $("#edit_roleContainer input:checked[data-parent='allRole']");
            var ASUsetime = $("#AS_edit_usetime_input").val();
            var ASRemarks = $("#AS_edit_remarks_input").val();
            var ASState = $(".AS_edit_state:checked").val();
            var ASOpenPlace = $(".AS_edit_openPlace:checked").val();
            var ASPicSrc = $("#uploadPic").attr("src");
            var ASMsg = $("#AS_edit_Msg");
            var areaArr = [];
            for(var i= 0,length=ASTargetArea.length;i<length;i++){
                var obj = {};
                obj.areaCode=ASTargetArea.eq(i).val();
                obj.areaName = ASTargetArea.eq(i).html();
                if(obj.areaCode == "all" || obj.areaCode == "region" || obj.areaCode == "district"){
                    continue
                }else {
                    areaArr.push(obj);
                }
            }
            var AS_Target_area_id = areaArr[areaArr.length-1].areaCode;
            var AS_Target_area_name = areaArr[areaArr.length-1].areaName;
            if(AS_Target_area_id == "province"){
                AS_Target_area_id = $("#originArea").attr("data-value");
                AS_Target_area_name = $("#originArea").html();
            }
            var roleArr = [];
            for(var j= 0,roleLength=ASTargetRole.length;j<roleLength;j++){
                var arrObj = {};
                arrObj.roleId = ASTargetRole.eq(j).val();
                arrObj.roleName = roleToRole(ASTargetRole.eq(j).attr("id"));
                roleArr.push(arrObj);
            }
            var ASData = {
                AS_id:ASId,
                AS_name:ASName,
                AS_link_url:ASLinkUrl,
                AS_to_ASplace_id:ASPlaceId,
                AS_picture_src:ASPicSrc,
                AS_backgroundcolor:ASbgColor,
                AS_target_area_id:AS_Target_area_id,
                AS_target_area_name:AS_Target_area_name,
                AS_target_role:JSON.stringify(roleArr),
                AS_usetime:ASUsetime,
                AS_remarks:ASRemarks,
                AS_state:ASState,
                AS_open_place:ASOpenPlace
            };

            if(ASData.AS_name == ""){
                ASMsg.html("请输入广告名称")
            }else if(ASData.AS_link_url == ""){
                ASMsg.html("请输入连接地址")
            }else if(ASData.AS_to_ASplace_id == ""){
                ASMsg.html("请选择广告位");
            }else if(ASData.AS_picture_src == ""){
                ASMsg.html("请上传图片");
            }else if(ASData.AS_target_area_id == "province"){
                ASMsg.html("请选择投放地区");
            }else if(ASData.AS_target_role == "[]"){
                ASMsg.html("请选择投放角色");
            } else if(ASData.AS_usetime == ""){
                ASMsg.html("请选择广告生效时间")
            }else {
                ASMsg.html("");
                $.ajax({
                    url:"/admin/editAS",
                    type:"post",
                    traditional:true,
                    data:ASData,
                    success: function (data) {
                        console.log(data);
                        if(data.state == 0){
                            window.location.href = "/admin/allAS"
                        }else if(data.state == 1){
                            console.log(data.message);
                            ASMsg.html("保存失败");
                        }
                    },
                    error: function (err) {
                        console.log(err)
                    }
                });
            }
        })
    }
    //角色对照
    function roleToRole(role){
        switch (role){
            case "teacher":
                return "教师";
            case "student":
                return "学生";
            case "parent":
                return "家长";
            case "school_manager":
                return "学校管理员";
            case "education_manager":
                return "教育机构管理员";
            case "educaton_staff":
                return "教育机构人员";
        }
    }

    init();
});