/**
 * Created by Administrator on 2016/12/19 0019.
 */

/**
 *函数名称：wxJSSDK.scanQRCode
 * 函数功能：为wxJSSDK增加扫一扫服务
 *参数：
 * @param codeApi 微信扫一扫API Object配置
 */
wxJSSDK.scanQRCode = function (codeApi) {
    if(wxJSSDK.isReady){
        if(codeApi){
            codeApi.scanQRCode && wx.scanQRCode({
                needResult:codeApi.scanQRCode.needResult || 0,       //默认为0，扫描结果由微信处理，1则直接返回扫描结果
                scanType:codeApi.scanQRCode.scanType || ["qrCode","barCode"],      //可以指定扫二维码还是一维码，默认二者都有
                success: function (res) {
                    codeApi.scanQRCode.success && codeApi.scanQRCode.success(res);
                }
            })
        }else {
            console.log("缺少配置参数");
        }
    }else {
        console.log("抱歉，wx没有初始化完毕，请等待wx初始化完毕，再调用扫一扫接口服务。")
    }
}

//响应事件
window.onload = function () {
    $("#scanQRCode").click(function () {
        wxJSSDK.scanQRCode({
            scanQRCode:{
                needResult:0,       //默认为0，扫描结果由微信处理，1则直接返回扫描结果
                scanType:["qrCode","barCode"],      //可以指定扫描二维码还是一维码，默认二者都有
                success: function (res) {
                    var result = res.resultStr;     //当needResult为1时，扫码返回的结果
                    alert(result);
                }
            }
        })
    });
}