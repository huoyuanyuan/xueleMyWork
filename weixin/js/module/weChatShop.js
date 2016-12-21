/**
 * Created by Administrator on 2016/12/20 0020.
 */

/**
 *函数名称：wxJSSDK.weChatShop
 * 函数功能：为wxJSSDK增加微信商店服务
 *参数：
 * @param weChatShopApi 微信商店API Object配置
 */
wxJSSDK.weChatShop = function (weChatShopApi) {
    if(wxJSSDK.isReady){
        if(weChatShopApi){
            weChatShopApi.openProductSpecificView && wx.openProductSpecificView({
                productId:weChatShopApi.openProductSpecificView.productId || "",    //商品ID
                viewType:weChatShopApi.openProductSpecificView.viewType || "0",     //0,默认值，普通商品详情页 1，扫一扫商品详情页 2，小店商品详情页
            });
        }else {
            console.log("缺少配置参数")
        }
    }else {
        console.log("抱歉，wx没有初始化完毕，请等待wx初始化完毕，再调用微信商店服务")
    }
}


//响应事件
window.onload = function () {
    $("#openProductSpecificView").click(function () {
        wxJSSDK.weChatShop({
            openProductSpecificView:{
                productId:"",       //商品ID，此处是参考商品ID，会显示商品下架
                viewType:""         //0.默认值，普通商品详情页 1，扫一扫商品详情页 2，小店商品详情页
            }
        })
    });
}