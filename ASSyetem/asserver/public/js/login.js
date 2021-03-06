/**
 * Created by Administrator on 2016/10/20 0020.
 */
$(function () {
    function init(){
        addEventListeners();
        goLogin();
    }
    //添加Dom事件监听
    function addEventListeners(){
        $("#admin_name").on("blur", function () {
            if($(this).val() == ""){
                $("#admin_name_msg").html("用户名不能为空");
            }else {
                $("#admin_name_msg").html("");
            }
        });
        $("#admin_pass").on("blur", function () {
            if($(this).val() == ""){
                $("#admin_pass_msg").html("密码不能为空");
            }else {
                $("#admin_pass_msg").html("");
            }
        });
    }
    //登陆处理
    function goLogin(){
        $("#go_login").on("click", function () {
            var loginData={
                admin_name:$("#admin_name").val(),
                password:$("#admin_pass").val()
            };

            $.ajax({
                url:"/login",
                type:"post",
                data:{
                    admin_name:$("#admin_name").val(),
                    password:$("#admin_pass").val()
                },
                success: function (data) {
                    console.log(data);
                    switch (data.state) {
                        case 0:
                            window.location.href = "/admin";
                            break;
                        case 1:
                            $("#admin_name_msg").html("用户名输入有误");
                            break;
                        case 2:
                            $("#admin_pass_msg").html("密码输入有误");
                            break;
                        case 3:
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

    init();
});