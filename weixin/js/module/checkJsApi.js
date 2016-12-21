/**
 * Created by Administrator on 2016/12/17 0017.
 */

/**
 * 函数名称：wxJSSDK.checkJsApi
 * 函数功能：位wxJSSDK增加基础检测服务
 * 参数：
 * @param jsApiList（Array） 必选项，待检测的API列表
 * @param back（Function）必选项，检测API回调
 */
wxJSSDK.checkJsApi = function (jsApiList,back) {
    if(jsApiList && jsApiList.length === 0){
        console.log("抱歉，缺少需要检测的API列表");
        return this;
    }
    if(wxJSSDK.isReady){        //wxJSSDK.isReady查看微信JSSDK是否初始化完毕
        wx.checkJsApi({           //需要检测的JS接口列表
            jsApiList:jsApiList,
            success: function (res) {
                /**
                 * 结果以键值对的形式返回，可用的API值为true，不可用位false
                 */
                back && back(res);
            }
        });
    }else {
        console.log("抱歉，wx没有初始化完毕，请等待wx初始化完毕，再调用检测分享服务。");
    }
}

//成功初始化后执行API检测事务
wxJSSDK.readySuccessCall.push(function () {
    wxJSSDK.checkJsApi([
        "onMenuShareTimeline",
        "chooseImage"
    ], function (res) {
        alert(JSON.stringify(res))
    })
})