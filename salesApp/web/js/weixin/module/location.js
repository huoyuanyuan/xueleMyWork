/**
 * Created by Administrator on 2016/12/19 0019.
 */

/**
 *函数名称：wxJSSDK.location
 * 函数功能：为wxJSSDK增加地理位置服务
 *参数：
 * @param locationApi 地理位置API Object配置
 */
wxJSSDK.location = function (locationApi) {
    if(wxJSSDK.isReady){        //wxJSSDK.isReady 查看微信JSSDK是否初始化完毕
        if(locationApi){
            //获取地理位置接口
            locationApi.getLocation && wx.getLocation({
                success: function (res) {
                    locationApi.getLocation.success && locationApi.getLocation.success(res);
                }
            });

            //使用微信内置地图查看位置接口
            locationApi.openLocation && wx.openLocation({
                latitude:locationApi.openLocation.latitude || 0,        //纬度，浮点数，范围为90至-90
                longitude:locationApi.openLocation.longitude || 0,      //经度，浮点数，范围为180至-180
                name:locationApi.openLocation.name || "",                //位置名
                address:locationApi.openLocation.address || "",         //地址详情说明
                scale:locationApi.openLocation.scale || 1,               //地图缩放级别，整形值，范围为1至28.默认为最大
                infoUrl:locationApi.openLocation.infoUrl || ""          //在查看位置页面底部显示的超链接，可点击跳转
            });

        }else {
            console.log("缺少配置参数")
        }
    }else {
        console.log("抱歉，wx没有初始化完毕，请等待wx初始化完毕，再调用位置接口服务。")
    }
}