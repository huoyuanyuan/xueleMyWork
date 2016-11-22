/**
 * Created by Administrator on 2016/11/17 0017.
 */
$(function () {
    var comFunc = {
        init: function () {
            this.addFooterClickEvent();
            this.addNewContacts();
        },
        //添加footer点击事件
        addFooterClickEvent: function () {
            $(".tab-item").unbind("touchstart").on("touchstart", function () {
                $(".tab-item").not($(this)).find(".item_catefory").hide();
                var item_catefory = $(this).find(".item_catefory");
                if(item_catefory.length){
                    var height = item_catefory.height()+30;
                    item_catefory.css("top",-height+"px");
                    if(item_catefory.is(":hidden")){
                        item_catefory.fadeIn(200);
                    }
                    else {
                        item_catefory.fadeOut(200);
                    }

                }
            });
        },
        //点击添加联系人card
        //容器类名 .addNewContactsContainer
        //添加内容Id名 #addNewContacts
        //添加点击事件类名 .addNewContacts
        addNewContacts: function () {
            $(".addNewContacts").on("touchstart", function () {
                var container = $(".addNewContactsContainer");
                var innerHtml = $("#addNewContacts").html();
                container.append(innerHtml);
            });
        }
    }
    var crm = {
        init: function () {
            this.radioChange();
        },
        //新增合伙人  单选项不同 是否新增一项
        //选择个人 隐藏（默认）   选择组织  显示
        radioChange: function () {
            $(".radioChange").on("click", function () {
                var showOrHide = $(".radioChange").next();
                var checkId = $(".radioChange").find("input:checked").attr("id");
                if(checkId === "personal"){
                    showOrHide.hide();
                }else if(checkId === "organization"){
                    showOrHide.show();
                }
            })
        }
    }
    var adminLog = {
        init: function () {
            this.clickToShow();
        },
        //点击展开列表项
        clickToShow: function () {
            $(".deptContainer").find("li").unbind("touchstart").on("touchstart", function (e) {
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

            })
        }
    };

    function init(){
        comFunc.init();
        crm.init();
        adminLog.init();
    }
    var oldUrl = "";
    setInterval(function () {
        var newUrl = window.location.href;
        if(oldUrl === newUrl){
            return;
        }else {
            init();
            oldUrl = newUrl;
        }
    },1000);
})