/**
 * Created by Administrator on 2017/1/6 0006.
 */
$(function () {
    //判断登陆用户
    $.ajax({
        url:"/webjson/employee/getMyInfo.aspx",
        type:"GET",
        success: function (data) {
            var data = JSON.parse(data);
            console.log(data);
            if(!data.user_department_info){
                window.location.href = "loginError.html";
            }else {
                UserInfo = data;
            }
        },
        error: function (err) {
            console.log(err);
        }
    });
});