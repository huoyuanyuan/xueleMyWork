/**
 * Created by Administrator on 2016/12/19 0019.
 */

/**
 *函数名称：wxJSSDK.audio
 * 函数功能：为wxJSSDK增加音频处理服务
 *参数：
 * @param audioApi 音频处理API Object配置
 */
var localId,//本地音频ID
    serverId;//服务端ID
wxJSSDK.audio = function (audioApi) {
    if(wxJSSDK.isReady){        //wxJSSDK.isReady 查看微信JSSDK是否初始化完毕
        if(audioApi){
            audioApi.startRecord && wx.startRecord();       //开始录音接口

            audioApi.stopRecord && wx.stopRecord({              //停止录音接口
                success: function (res) {
                    audioApi.stopRecord.success(res);
                }
            });

            audioApi.onVoiceRecordEnd && wx.onVoiceRecordEnd({      //监听录音自动停止接口,录音时间超过一分钟没有停止的时候会执行complete回调
                complete: function (res) {
                    audioApi.onVoiceRecordEnd.complete && audioApi.onVoiceRecordEnd.complete(res);
                }
            });

            audioApi.playVoice && wx.playVoice({        //播放语言接口
                localId:audioApi.playVoice.localId      //需要播放的音频的本地ID，由stopRecord接口获得
            });

            audioApi.pauseVoice && wx.pauseVoice({       //暂停播放接口
                localId:audioApi.pauseVoice.localId     //需要暂停的音频的本地ID，由stopRecord接口获得
            });

            audioApi.stopVoice && wx.stopVoice({        //停止播放接口
                localId:audioApi.stopVoice.localId      //需要停止的音频的本地ID，由stopRecord接口获得
            });

            audioApi.onVoicePlayEnd && wx.onVoicePlayEnd({        //监听语言播放完毕接口
                success: function (res) {
                    localId = res.localId;      //返回音频的本地ID
                    audioApi.onVoicePlayEnd.success && audioApi.onVoicePlayEnd.success(res);
                }
            });

            audioApi.uploadVoice && wx.uploadVoice({      //上传语言接口
                localId:audioApi.uploadVoice.localId,       //需要上传的音频的本地ID，由stopRecord接口获得
                isShowProgressTips:audioApi.uploadVoice.isShowProgressTips || 1,     //默认为1，显示进度提示
                success: function (res) {
                    audioApi.uploadVoice.success && audioApi.uploadVoice.success(res);
                }
            });

            audioApi.downloadVoice && wx.downloadVoice({        //下载语言接口
                serverId:audioApi.downloadVoice.serverId,       //需要下载的音频的服务器端ID，有 uploadVoice接口获得
                isShowProgressTips:audioApi.downloadVoice.isShowProgressTips || 1,  //默认为1，显示进度提示
                success: function (res) {
                    audioApi.downloadVoice.success && audioApi.downloadVoice.success(res);
                }
            })
        }else {
            console.log("缺少配置参数");
        }
    }else {
        console.log("抱歉，wx没有初始化完毕，请等待wx初始化完毕，再调用音频接口服务。")
    }
}


//响应事件
window.onload = function () {
    $("#startRecord").click(function () {       //开始录音
        wxJSSDK.audio({
            startRecord:true
        });
    });

    $("#stopRecord").click(function () {        //停止录音
        wxJSSDK.audio({
            stopRecord:{
                success: function (res) {       //停止录音成功回调
                    localId = res.localId;
                }
            }
        });
    });

    wxJSSDK.audio({             //录音超时监听
        onVoiceRecordEnd:{
            complete: function (res) {
                localId = res.localId;
                alert("监听录音已自动停止");
            }
        }
    });

    $("#playVoice").click(function () {     //播放录音
        wxJSSDK.audio({
            playVoice:{
                localId:localId
            }
        })
    });

    $("#pauseVoice").click(function () {     //暂停播放
        wxJSSDK.audio({
            pauseVoice:{
                localId:localId
            }
        })
    });

    $("#stopVoice").click(function () {         //停止播放
        wxJSSDK.audio({
            stopVoice:{
                localId:localId
            }
        })
    });

    wxJSSDK.audio({         //监听语言播放完毕接口
        onVoicePlayEnd:{
            success: function (res) {
                console.log("语言播放完毕，localId是："+res.localId);
            }
        }
    });

    $("#uploadVoice").click(function () {       //上传语言
        wxJSSDK.audio({
            uploadVoic:{
                localId:localId,
                success: function (res) {
                    serverId = res.serverId;
                    console.log("上传语言成功，serverId:"+res.serverId);
                }
            }
        })
    });

    $("#downloadVoice").click(function () {     //下载语言
        wxJSSDK.audio({
            downloadVoice:{
                serverId:serverId,
                success: function (res) {
                    console.log("下载语言成功：localId"+res.localId)
                }
            }
        })
    })
}