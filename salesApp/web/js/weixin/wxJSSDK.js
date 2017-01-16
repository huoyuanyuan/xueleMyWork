/**
 * Created by Administrator on 2016/12/17 0017.
 */
var wxJSSDK = {         //声明微信全局变量，防止污染外部变量
    version:"1.0",      //版本号
    appName:"",         //使用当前库的开发者，可以配置应用的名字
    isReady:false,      //微信JSSDK是否初始化完毕
    access_token:"",    //令牌
    ticket:"",           //微信临时票据
    readySuccessCall:[],//微信初始化成功后的执行事务
    errorSuccessCall:null,//微信初始化失败后的执行事务
    config:{
        debug:true,      //开启调试模式，调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端才会打印
        appId:"wx0712579f4fe8b9fb",         //必填，公众号的唯一标识
        timestamp:Math.ceil(new Date().getTime()/1000).toString(),      //必填，生成签名的时间戳
        nonceStr:"html5xuele_wxJSSDK",     //必填，生成签名的随机串
        signature:"",                        //必填，签名
        jsApiList:[
            //shareApi.js
            "onMenuShareTimeLine",
            "onMenuShareAppMessage",
            "onMenuShareQQ",
            "onMenuShareWeibo",
            //imageApi.js
            "chooseImage",
            "previewImage",
            "uploadImage",
            "downloadImage",
            //audio.js
            "startRecord",
            "stopRecord",
            "onVoiceRecordEnd",
            "playVoice",
            "pauseVoice",
            "stopVoice",
            "onVoicePlayEnd",
            "uploadVoic",
            "downloadVoice",
            //locationApi.js
            "getLocation",
            "openLocation",
            //ui.js
            "hideOptionMenu",
            "showOptionMenu",
            "closeWindow",
            "hideMenuItems",
            "showMenuItems",
            "hideAllNonBaseMenuItem",
            //ai.js
            "translateVoice",
            //scanQRCode.js
            "scanQRCode",
            //equipment.js
            "getNetWorkType",
            //weChatShop.js
            "openProductSpecificView",
            //weChatCardVouchers.js
            "addCard",
            "chooseCard",
            "openCard"
        ]                                     //必填，需要使用的JS接口列表
    },
    init: function (call) {                      //微信功能：初始化
        if(!wx){                              //验证是否存在微信的JS组件
            alert("微信接口调用失败，请检查是否引入微信JS！");
            return;
        }
        var that = this;        //保存当前作用域，方便回调函数使用
        //获取令牌
        var postData = {
            timestamp:that.config.timestamp,
            noncestr:that.config.nonceStr,
            url:window.location.href
        }
        console.log(postData);
        $.ajax({
            url:"/webjson/getconfig.aspx",
            type:"GET",
            data:postData,
            success: function (data) {
                var data = JSON.parse(data);
                console.log(data);
                if(data.status == 1){
                    that.access_token = data.access_token;
                    that.ticket = data.ticket;
                    that.config.signature = data.signature;
                    that.initWx(function () {       //初始化微信接口
                        //初始化完成后的执行
                        call && call();
                    });
                }else {
                    console.error("获取签名失败")
                }
            },
            error: function (err) {
                console.log(err);
            }
        });

        //this.wx_get_token(function (data) {
        //    if(data.access_token){
        //        Cookie.Set("access_token",data.access_token,3600);
        //        that.access_token = data.access_token;
        //    }
        //    //获取票据
        //    that.wx_get_ticket(function (data) {
        //        if(data.ticket){
        //            Cookie.Set("ticket",data.ticket,3600);
        //            that.ticket = data.ticket
        //        }
        //        //获取签名
        //        that.wx_get_signature(function (data) {
        //            that.config.signature = data;
        //            that.initWx(function () {       //初始化微信接口
        //                //初始化完成后的执行
        //
        //            });
        //        });
        //    });
        //});
    },
    ////获取令牌
    //wx_get_token: function (call) {
    //    this.access_token = Cookie.Get("access_token");
    //    if(!Cookie.Get("access_token")){
    //        $.get(Config.wx.wx_get_token,{}, function (data) {
    //            debugger
    //            call && call(data);
    //        },"json");
    //        return;
    //    }
    //    call && call({});
    //},
    ////获取票据
    //wx_get_ticket: function (call) {
    //    this.ticket = Cookie.Get("ticket");
    //    if(!this.ticket){
    //        $.get(Config.wx.wx_get_jsapi_ticket,{access_token:this.access_token}, function (data) {
    //            debugger
    //            call && call(data);
    //        },"json");
    //        return
    //    }
    //    call && call({});
    //},
    ////获取签名
    //wx_get_signature: function (call) {
    //    $.get(Config.wx.wx_get_signature,{
    //        ticekt:this.ticekt,                 //必填，生成签名的时间戳
    //        timestamp:this.config.timestamp,  //必填，生成签名的时间戳
    //        nonceStr:this.config.nonceStr,    //必填，生成签名的随机串
    //        url:window.location.href           //必填，生成签名的随机串
    //    },
    //    function (data) {
    //        debugger
    //        call && call(data);
    //    });
    //},
    initWx: function (call,errorCall) {     //初始化微信接口
        var that = this;
        wx.config(this.config);     //初始化配置
        /**
         * config信息验证后会执行ready方法，所有接口调用都必须在config接口获得结果之后
         * ，config是一个客户端的异步操作，所以如果需要在页面加载时就调用相关接口，则
         * 需把相关接口放在ready函数中调用来确保正确执行。对于用户触发是才调用的接口，
         * 则可以直接调用，不要要放在ready函数中。
         */
        wx.ready(function () {
            that.isReady = true;
            console.log("初始化成功");

            if(that.readySuccessCall.length > 0){       //成功初始化后，执行的事务
                $.each(that.readySuccessCall, function (i,n) {
                    n();
                })
            }

            call && call();
        });
        /**
         * config信息验证失败会执行error函数，如签名过期导致验证失败，
         * 具体错误信息可以开发config的debug模式查看，也可以在返回的res参数中查看，
         * 对于SPA可以在这里更新签名。
         */
        wx.error(function (res) {
            that.isReady = "false";
            errorCall && errorCall();
            that.errorSuccessCall && that.errorSuccessCall();
        });
    }
}
//执行初始化
wxJSSDK.init();