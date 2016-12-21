/**
 * Created by Administrator on 2016/12/20 0020.
 */

/**
 *函数名称：wxJSSDK.weChatCardVouchers
 * 函数功能：为wxJSSDK增加微信卡劵服务
 *参数：
 * @param weChatCardVouchersApi 微信卡劵API Object配置
 */
wxJSSDK.weChatCardVouchers = function (weChatCardVouchersApi) {
    if(wxJSSDK.isReady){
        if(weChatCardVouchersApi){
            weChatCardVouchersApi.addCard && wx.addCard({       //批量添加卡卷接口
                cardList:weChatCardVouchersApi.addCard.cardList,    //需要添加的卡劵列表
                success: function (res) {
                    weChatCardVouchersApi.addCard.success && weChatCardVouchersApi.addCard.success(res);
                }
            });

            weChatCardVouchersApi.chooseCard && wx.chooseCard({
                shopId:weChatCardVouchersApi.chooseCard.shopId || "",     //门店ID
                cardType:weChatCardVouchersApi.chooseCard.cardType || "",     //卡劵类型
                cardId:weChatCardVouchersApi.chooseCard.cardId || "",       //卡劵ID
                timestamp:weChatCardVouchersApi.chooseCard.timestamp || 0,      //卡劵签名时间戳
                nonceStr:weChatCardVouchersApi.chooseCard.nonceStr || "",       //卡劵签名随机串
                signType:weChatCardVouchersApi.chooseCard.signType || "",       //签名方式，默认“SHA1”
                cardSign:weChatCardVouchersApi.chooseCard.cardSign || "",       //卡劵签名
                success: function (res) {
                    weChatCardVouchersApi.chooseCard.success && weChatCardVouchersApi.chooseCard.success(res);
                }
            });

            weChatCardVouchersApi.openCard && wx.openCard({
                cardList:weChatCardVouchersApi.openCard.cardList || [],     //需要打开的卡劵列表，数组形式
            });
        }else {
            console.log("缺少配置参数")
        }
    }else {
        console.log("抱歉，wx没有初始化完毕，请等待wx初始化完毕，再调用微信卡劵服务")
    }
}

//响应事件
window.onload = function () {
    $("#addCard").click(function () {
        wxJSSDK.weChatCardVouchers({
            addCard:{
                cardList:[
                    {
                        cardId:"",
                        cardExt:""
                    }
                ],
                success: function (res) {
                    var cardList = res.cardList;    //添加的卡卷列表信息
                    alert("已添加卡卷："+JSON.stringify(cardList));
                }
            }
        })
    });

    $("#chooseCard").click(function () {
        wxJSSDK.weChatCardVouchers({
            chooseCard:{
                cardSign:"",
                timestamp:Math.round(new Date().getTime()/1000),
                noceStr:"",
                success: function (res) {
                    var cardList = res.cardList;        //用户选中的卡劵列表信息
                    alert("已选择卡卷："+JSON.stringify(cardList))
                }
            }
        })
    });

    $("#openCard").click(function () {
        alert("只是测试之用。。。您没有当前公众号的卡劵，不能打开卡劵");
        wxJSSDK.weChatCardVouchers({
            openCard:{
                cardList:[]
            }
        })
    });
}