/**
 * Created by Administrator on 2016/12/21 0021.
 */

var isWeiXin = function () {        //验证是否在微信中
    var ua = window.navigator.userAgent.toLowerCase();
    if(ua.match(/MicroMessenger/i) == "micromessenger"){        //根据UA标识符识别是否在微信
        return true
    }else {
        return false;
    }
},
    widgetMap = {
        initalize: function (options) {     //初始化
            this._loadBDMap();
        },
        /**
         * 载入地图
         * @private
         */
        _loadBDMap: function () {
            var self = this;
            if(isWeiXin()){     //判断是否是微信客户端
                wxJSSDK.readySuccessCall.push(function (state) {    //微信初始化之后的回调
                    self.weixinMap();
                });
                wxJSSDK.errSuccessCall = function () {      //初始化失败
                    self.getQQMap();
                };
                wxJSSDK.init();     //初始化微信JSSDK
            }
        },
        getQQMap: function () {
            var geocoder,self = this;
            geocoder = new qq.maps.Geocoder({
                complete: function (result) {
                    self.successMap(result.detail.address);     //地址参数系显示
                }
            });
            var showPosition = function (position) {
                var lat = position.coords.latitude;
                var lng = position.coords.longitude;
                var latLng = new qq.maps.LatLng(lat,lng);
                geocoder.getAddress(latLng);                //反地址解析
            }
            if(navigator.geolocation){                  //腾讯地图的：HTML5定位与纠偏
                navigator.geolocation.getCurrentPosition(showPosition);
            }else {
                self.failMap();         //地址获取失败
            }
        },
        successMap: function (address) {
            $("#GPS").html("GPS定位成功，您的地址："+address);
        },
        failMap: function (errorMsg) {
            $("#GPS").html("GPS定位失败，"+(errorMsg || "不支持外星位置定位"));
        },
        weixinMap: function () {
            var self = this,
                geocoder = new qq.maps.Geocoder({
                    complete: function (result) {
                        self.successMap(result.detail.address);     //地址参数显示
                    }
                });
            wx.getLocation({        //微信接口，获取地理位置
                success: function (res) {
                    //获取经纬度
                    var lat = res.latitude,
                        lng = res.longitude,
                        latLng = new qq.maps.LatLng(lat,lng);
                    geocoder.getAddress(latLng);        //反地址解析
                }
            });
        }
    };
window.onload = function () {
    widgetMap.initalize();      //初始化位置服务
}