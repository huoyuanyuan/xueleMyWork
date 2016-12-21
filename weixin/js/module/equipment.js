/**
 * Created by Administrator on 2016/12/20 0020.
 */

/**
 *函数名称：wxJSSDK.equipment
 * 函数功能：为wxJSSDK增加设备信息服务
 *参数：
 * @param equipmentApi 微信设备信息API Object配置
 */
wxJSSDK.equipment = function (equipmentApi) {
    if(wxJSSDK.isReady){
        if(equipmentApi){
            equipmentApi.getNetWorkType && wx.getNetWorkType({
                success: function (res) {
                    equipmentApi.getNetWorkType.success && equipmentApi.getNetWorkType.success(res);
                }
            });
        }else {
            console.log("缺少配置参数")
        }
    }else {
        console.log("抱歉，wx没有初始化完毕，请等待wx初始化完毕，再调用设备接口服务")
    }
}


//响应事件
window.onload = function () {
    $("#getNetworkType").click(function () {
        wxJSSDK.equipment({
            getNetWorkType:{
                success: function (res) {
                    var networkType = res.networkType;      //返回网络类型2g，3g，4g，wiff
                    console.log(networkType)
                }
            }
        })
    })
}