/**
 * Created by Administrator on 2016/12/1 0001.
 */
$(function () {
    var comFunc = {
        //获取url携带参数
        url: function (url) {
            var search = url.split("?");
            if(search.length > 1){
                search = search[1];
            }else {
                return;
            };
            var obj = {};
            var searchObj = search.split("&");
            searchObj.forEach(function (item) {
                var itemObj = item.split("=")
                obj[itemObj[0]] = itemObj[1];
            });
            return obj;
        },

        //功能：修改window.setInterval，使之可以传递参数和对象像参数
        //方法：setInterval(回调函数，时间，参数1，参数n)参数可以为对象：如数组等
        setInterval_EDIT: function () {
            var __sto = setInterval;
            window.setInterval = function (callback,timeout,param) {
                var args = Array.prototype.slice.call(arguments,2);
                var _cb = function () {
                    callback.apply(null,args);
                }
                __sto(_cb,timeout);
            }
        },

        //使用全屏Mask
        addMask: function (element) {
            var self = this;
            element.append("<div class='mainMask'></div>")
            var width = window.innerWidth;
            var height = window.innerHeight;
            $(".mainMask").css({
                width:width,
                height:height
            }).show();
            $(".mainMask").on("touchstart", function (e) {
                e.stopPropagation();
                var screenItems = element.find(".screeningItems");
                var icon = element.find(".btn-screening").find(".icon");
                screenItems.slideUp(200);
                icon.removeClass("icon-up").addClass("icon-down");
                self.removeMask(element);
            })
        },
        removeMask: function (element) {
            $(".mainMask").hide();
            element.find(".mainMask").remove();
        },
        //筛选按钮
        /**
         *  <div class="btn-screening">
         *  <span class="icon icon-caret"></span>
         *  <span class="screeningContent">筛选</span>
         *  </div>
         *  <div class="screeningItems">
         *  <div class="screeningItem" data-value="1">昨日</div>
         *  <div class="screeningItem" data-value="2">本月</div>
         *  </div>
         */
        screening: function () {
            var self = this;
            var currentPage = $(".page")
            $(".btn-screening").unbind("touchend").on("touchend", function () {
                var screenItems = $(this).next();
                var icon = $(this).find(".icon");
                if(screenItems.is(":hidden")){
                    var width = $(this).width();
                    screenItems.css("width",width);
                    screenItems.slideDown(200);
                    icon.removeClass("icon-down").addClass("icon-up");
                    self.addMask(currentPage);
                }else {
                    screenItems.slideUp(200);
                    icon.removeClass("icon-up").addClass("icon-down");
                    self.removeMask(currentPage);
                }
            });
            $(".screeningItem").unbind("touchend").on("touchend", function () {
                var valueItem = $(this).html();
                $(this).parent().prev().find(".screeningContent").html(valueItem);
                $(this).parent().prev().find(".icon").removeClass("icon-up").addClass("icon-down");
                $(this).parent().slideUp(200);
                self.removeMask(currentPage);
            });
        },

        //我的部门 点击展开
        clickToShow: function () {
            $(".deptContainer").find("li").unbind("touchend").on("touchend", function (e) {
                if(e.target === $(this).find(".header")[0]){
                    var detail = $(this).find(".detail");
                    var icon = $(this).find(".icon");
                    if($(this).attr("class") === "show"){
                        $(this).removeClass("show");
                        detail.slideUp(300);
                        icon.removeClass("icon-down").addClass("icon-right");
                    }else {
                        var show = $(".deptContainer").find("li.show");
                        show.removeClass("show");
                        show.find(".detail").slideUp(300);
                        show.find(".icon").removeClass("icon-down").addClass("icon-right");
                        $(this).addClass("show");
                        detail.slideDown(300);
                        icon.removeClass("icon-right").addClass("icon-down")
                    }
                }
            });
        },

        //根据地区编号查询具体信息
        getAreaByCode: function (code,callback) {
            var selectCode = code.slice(0,code.length-2);
            $.ajax({
                url:"/webjson/area/getAreaList.aspx",
                type:"GET",
                data:{
                    code:selectCode
                },
                success: function (data) {
                    var data = JSON.parse(data);
                    var target = data.r.filter(function (item) {
                        return item.code === code;
                    })
                    if(target.length >0){
                        callback(target);
                    }
                },
                error: function (err) {
                    console.log(err);
                }
            });
        },
        //毫秒转时间
        MStoTime: function (MS) {
            var ms = Math.round(MS/1000);
            var min = Math.floor(ms/60);
            var hr = Math.floor(min/60);
            var day = Math.floor(hr/24);
            var week = Math.floor(day/7);
            var month = Math.floor(week/30);
            var year = Math.floor(month/12);
            if(year >0){
                return year+"年前"
            }else if(month > 0){
                return month+"月前"
            } else if(week > 0){
                return week+"周前"
            } else if(day > 0){
                return day+"天前"
            }else if(hr > 0){
                return hr+"小时前"
            }else if(min > 0){
                return min+"分钟前"
            }else if(ms > 0){
                return ms+"秒前"
            }else {
                return "刚刚"
            }
        },

        /**
         * 对日期进行格式化，
         * @param date 要格式化的日期  必填
         * @param format 进行格式化的模式字符串    选填 默认为 XXXX年X月X日xx:xx:xx
         *     支持的模式字母有：
         *     y:年,
         *     M:年中的月份(1-12),
         *     d:月份中的天(1-31),
         *     h:小时(0-23),
         *     m:分(0-59),
         *     s:秒(0-59),
         *     S:毫秒(0-999),
         *     q:季度(1-4)
         * @return String
         */
        dateFormat: function (date,format) {
            var date = new Date(date);
            var map = {
                "M": date.getMonth() + 1, //月份
                "d": date.getDate(), //日
                "h": date.getHours(), //小时
                "m": date.getMinutes(), //分
                "s": date.getSeconds(), //秒
                "q": Math.floor((date.getMonth() + 3) / 3), //季度
                "S": date.getMilliseconds() //毫秒
            };
            var format = format || "yyyy年MM月dd日hh:mm:ss";
            format = format.replace(/([yMdhmsqS])+/g, function(all, t){
                var v = map[t];
                if(v !== undefined){
                    if(all.length > 1){
                        v = '0' + v;
                        v = v.substr(v.length-2);
                    }
                    return v;
                }
                else if(t === 'y'){
                    return (date.getFullYear() + '').substr(4 - all.length);
                }
                return all;
            });
            return format;
        },
        //获取此时一天的时间段 obj{
        //  currentTimeH:当前时间
        //  currentTime:当天结束数据
        //  currentDay:当天开始时间
        //  threeDayAgo:三天前时间
        //  weekAgo:一周前时间
        //  monthAgo:一月前时间
        //  quarterAgo:一个季度前时间
        //  beginTime:最初始化时间 用来筛选全部
        // }
        getNowTimeSlot: function () {
            var obj = {};
            var self = this;
            var nowDate = new Date();
            var currentTime = self.dateFormat(nowDate,"yyyy-MM-dd hh:mm");
            obj.currentTimeH = currentTime;
            var currentDay = currentTime.slice(0,11)+"00:00";
            var currentDayDate = new Date(currentDay);
            var currentDayMS = currentDayDate.getTime();

            var currentTimeMS = currentDayMS + 86400000;
            var currentTimeDate = new Date(currentTimeMS);
            obj.currentTime = self.dateFormat(currentTimeDate,"yyyy-MM-dd hh:mm");

            obj.currentDay = currentDay;
            var threeDayAgoMS = currentDayMS - 259200000;
            var threeDayDate = new Date(threeDayAgoMS);
            var weekAgoMs = currentDayMS-604800000;
            var weekDate = new Date(weekAgoMs);
            var monthAgoMs = currentDayMS- 2419200000;
            var monthDate = new Date(monthAgoMs);
            var quarterAgoMs = currentDayMS - 7257600000;
            var quarterAgo = new Date(quarterAgoMs);
            obj.threeDayAgo = self.dateFormat(threeDayDate,"yyyy-MM-dd hh:mm");
            obj.weekAgo = self.dateFormat(weekDate,"yyyy-MM-dd hh:mm");
            obj.monthAgo = self.dateFormat(monthDate,"yyyy-MM-dd hh:mm");
            obj.quarterAgo = self.dateFormat(quarterAgo,"yyyy-MM-dd hh:mm");

            obj.beginTime = "1900-01-01 00:00";

            return obj;
        },

        //获得当前定位
        getLocation: function () {
            var currentLocation = "";
            currentLocation = "浙江省杭州市滨江区智慧e谷";

            return currentLocation;
        },
        //获得移动设备信息
        getPhoneMsg: function () {
            var currentPhoneMsg = "";

            var ua = navigator.userAgent.toLowerCase();
            var isIphone = false;
            var isAndroid = false;
            if (ua.match(/MicroMessenger/i)=="micromessenger" && ua.indexOf('iphone') > 0) {
                isIphone = true
            }else if (ua.match(/MicroMessenger/i)=="micromessenger" && ua.indexOf('android') > 0) {
                isAndroid = true;
            }
            else if( ua.indexOf('iphone') > 0) { //需对所有 iOS 系统 UA 信息进行判断
                isIphone = true
            }else if (ua.indexOf('android') > 0) { //需对所有 Android 系统 UA 信息进行判断
                isAndroid = true;
            }else if(/MIDP|SymbianOS|NOKIA|SAMSUNG|LG|NEC|TCL|Alcatel|BIRD|DBTEL|Dopod|PHILIPS|HAIER|LENOVO|MOT-|Nokia|SonyEricsson|SIE-|Amoi|ZTE/i.test(ua)){
                isAndroid = true;
            }else {
                console.log(ua);
                currentPhoneMsg = "未知系统";
            }
            if(isIphone){
                // 6,6s,7   w=375    6plus,6splus,7plus  w=414   5s w=320     5 w=320
                //var wigth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
                //if(wigth>400){
                //    currentPhoneMsg = "iphone6 plus";
                //}else if(wigth>370){
                //    currentPhoneMsg = "iphone6";
                //}else if(wigth>315){
                //    currentPhoneMsg = "iphone5 or iphone5s";
                //}else{
                //    currentPhoneMsg = "iphone 4s";
                //}
                console.log(ua);
                currentPhoneMsg = "iPhone"
            }else if(isAndroid){
                console.log(ua)
                currentPhoneMsg = "Android"
            }
            console.log(currentPhoneMsg);
            return currentPhoneMsg;
        }
    }
    window.comFunc = comFunc;
})