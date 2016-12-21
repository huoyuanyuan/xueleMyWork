/**
 * Created by Administrator on 2016/12/19 0019.
 */

/**
 *函数名称：wxJSSDK.aiApi
 * 函数功能：为wxJSSDK增加智能服务
 *参数：
 * @param aiApi 智能接口API Object配置
 */
wxJSSDK.ai = function (aiApi) {
    if(wxJSSDK.isReady){        //wxJSSDK.isReady 查看微信JSSDK是否初始化完毕
        if(aiApi){
            aiApi.translateVoice && wx.translateVoice({
                localId:aiApi.translateVoice.localId || "",     //需要识别的音频的本地ID，由录音相关接口获得
                isShowProgressTips:aiApi.translateVoice.isShowProgressTips || 1,           //默认为1，显示进度提示
                success: function (res) {
                    aiApi.translateVoice.success && aiApi.translateVoice.success(res);
                }
            })
        }else {
            console.log("缺少配置信息")
        }
    }else {
        console.log("抱歉，wx没有初始化完毕，请等待wx初始化完毕，再调用智能接口服务")
    }
}

//响应事件
window.onload = function () {
    //智能API
    var translateVoice = function () {
        wxJSSDK.ai({
            translateVoice:{
                localId:localId,        //需要识别的音频的本地ID，由录音相关接口获得
                success: function (res) {
                    console.log("识别结果："+res.translateResult);   //语言识别结果
                }
            }
        })
    }
}