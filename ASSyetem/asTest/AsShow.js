/**
 * Created by Administrator on 2016/11/7 0007.
 */
(function ($) {
        /**
         *
         * @param obj{
     * width:广告容器宽度（可选，默认100%），
     * height:广告容器宽度（可选，默认300px），
     * auto:是否自动切换(可选，true/false,默认true),
     * timeout:图片之间切换时间，单位毫秒（可选，默认3000）,
     * pause:鼠标悬停到幻灯上则暂停（可选，true/false,默认false）
     * pager:显示页码(可选，true/false,默认false)
     * }
         * @constructor
         */
        function AsShow(obj){
            this.asPlaceId = obj.id;
            this.asPlaceWidth = obj.width || "100%";
            this.asPlaceHeight = obj.height || "300px";
            this.auto = obj.auto;
            this.timeout = obj.timeout || 3000;
            this.pause = obj.pause;
            this.pager = obj.pager
        }
        AsShow.prototype.init = function () {
            this.getData(this.getDataCBHandle.bind(this));
        };
        AsShow.prototype.getData = function (callback) {
            var currentID = this.asPlaceId;
            var asContainer = $("#"+this.asPlaceId);
            $.ajax({
                url:"http://localhost:3000/getData?id="+this.asPlaceId,
                type:"get",
                success: function (data) {
                    if(data.state == 0){
                        var asData = data.data;
                        if(callback && callback instanceof Function){
                            callback(asData)
                        }
                    }else if(data.state == 1){
                        asContainer.hide();
                        console.error("暂无ID："+currentID+"的广告位，请确认ID")
                    }
                },
                error: function (err) {
                    console.log(err)
                }
            });
        };
        AsShow.prototype.getNowFormatDate = function () {
            var date = new Date();
            var seperator1 = "-";
            var seperator2 = ":";
            var month = date.getMonth() + 1;
            var strDate = date.getDate();
            var hours = date.getHours();
            var minutes = date.getMinutes();
            if (month >= 1 && month <= 9) {
                month = "0" + month;
            }
            if (strDate >= 0 && strDate <= 9) {
                strDate = "0" + strDate;
            }
            if (hours >= 0 && hours <= 9) {
                hours = "0" + hours;
            }
            if (minutes >= 0 && minutes <= 9) {
                minutes = "0" + minutes;
            }
            var currentdate = date.getFullYear() + seperator1 + month + seperator1 + strDate
                + " " + hours + seperator2 + minutes;
            return currentdate;
        }
        AsShow.prototype.getDataCBHandle = function (data) {
            this.setASplace(data);
            this.setAS(data);
        };
        AsShow.prototype.setASplace = function (data) {
            var asContainer = $("#"+this.asPlaceId);
            if(data.place_state){
                asContainer.show();
                asContainer.attr("data-id",data.place_id);
                asContainer.attr("data-name",data.place_name);
                asContainer.css({
                    width:this.asPlaceWidth,
                    height:this.asPlaceHeight,
                    position:"relative",
                    overflow:"hidden",
                    padding:"0",
                    margin:"0"
                });
                var plugInSrc = "<script type='text/javascript' src='http://localhost:3000"+data.plugIn.plugIn_url+"'></script>"
                $("body").append(plugInSrc);
            }else {
                asContainer.hide();
            }
        };
        AsShow.prototype.setAS = function (data) {
            //获得当前用户信息
            var currentTargetObj = {
                role_name:PAGEUSER.identityDescription,
                role_areaId:PAGEUSER.area
            };

            var asContainer = $("#"+this.asPlaceId);
            var asData = data.containerAS;
            if(asData != ""){
                asData.sort(function (a,b) {
                    return a.AS_order - b.AS_order
                });
                var nowDate = this.getNowFormatDate();
                var imgContainerHtml = "<div class='xuele_imgContainer'></div>";
                asContainer.append(imgContainerHtml);
                var imgContainer = $("#"+this.asPlaceId+" .xuele_imgContainer");
                imgContainer.css({
                    width:"100%",
                    height:"100%"
                });
                asData.forEach(function (item) {
                    var asTarget = item.AS_target;
                    //判断地区
                    var areaId = asTarget.target_area_code.toString();
                    var isInArea = false;
                    var longStr,sortStr;
                    if(currentTargetObj.role_areaId.length > areaId.length){
                        longStr = currentTargetObj.role_areaId;
                        sortStr = areaId;
                    }else {
                        longStr = areaId;
                        sortStr = currentTargetObj.role_areaId;
                    };
                    if(longStr.indexOf(sortStr) != -1){
                        isInArea = true;
                    }
                    //console.log("地区："+isInArea)
                    //判断对象角色
                    var isInclude = false
                    var roleArr = asTarget.target_role.filter(function (item) {
                        return item.role_name === currentTargetObj.role_name
                    });
                    if(roleArr.length != 0){
                        isInclude = true;
                    }
                    //console.log("角色："+isInclude)
                    //判断生效时间
                    var useTime = item.AS_usetime;
                    var useTimeStr = useTime.slice(0,10)+" "+useTime.slice(11,16);
                    if(item.AS_state && nowDate >= useTimeStr && isInArea && isInclude){
                        var aTarget = "";
                        if(item.AS_open_place){
                            aTarget = "_self";
                        }else {
                            aTarget = "_blank";
                        }
                        var htmlSrc = "<a href='"+item.AS_link_url+"' target="+aTarget+" data-id='"+item.AS_id+"' data-name='"+item.AS_name+"'><img src='"+item.AS_picture_src+"' style='background-color:"+item.AS_backgroundcolor+"'></a>";
                        imgContainer.append(htmlSrc);
                    }
                });
                if(imgContainer.html() != "" && asContainer.is(":visible")){
                    asContainer.show();
                }else {
                    asContainer.hide();
                }
                imgContainer.find("a").css({
                    position: "absolute",
                    display: "none",
                    width: "100%",
                    height: "100%",
                    left: "0",
                    top: "0",
                });
                imgContainer.find("a:first-child").css({
                    position:"relative",
                    display:"block",
                    float:"left"
                });
                imgContainer.find("img").css({
                    display:"block",
                    height:"auto",
                    float:"left",
                    width:"100%",
                    height:"100%",
                    border:"0"
                });
                imgContainer.responsiveSlides({
                    auto:this.auto,
                    timeout:this.timeout,
                    pause:this.pause,
                    pager:this.pager
                });
            }else {
                asContainer.hide()
            }
        };
    $.fn.asShow = function (options) {
        var options = options || {};
        options.id = this.selector.slice(1)
        var asShowObj = new AsShow(options);
        return asShowObj.init();
    }
})(jQuery);