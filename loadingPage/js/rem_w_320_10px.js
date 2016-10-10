/*
 * 移动设备字体监听:（默认调试设备根字体大小为10px）
 * 1.dh设置默认调试设备
 * 2.dhs中可自定义添加新设备
 */
(function() {
	//设置viewport
	var vp = document.createElement('meta');
	vp.name = "viewport";
	vp.content = "width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no";
	document.documentElement.firstElementChild.appendChild(vp);
	//自定义调试设备列表
	var dw_dh = {
		"iphone4_w": 320,
		"iphone5_w": 320,
		"iphone6_w": 375,
		"iphone6p_w": 414,
		//
		"iphone4_h": 480,
		"iphone5_h": 568,
		"iphone6_h": 667,
		"iphone6p_h": 736,
	}

	//选择默认调试设备
	var dw = dw_dh.iphone4_w;
	var dh = dw_dh.iphone4_h;
	window.onload = function() {
		fn();
	};
	document.addEventListener('DOMContentLoaded', function() {
		fn();
	}, false);
	window.onresize = function() {
		fn();
	};
	//设置根字体为10px
	function fn() {
		var w = document.documentElement.clientWidth;
		var h = document.documentElement.clientHeight;
		var r = w / h;
		if (r >= 0.5 && r <= 0.8 && w <= 800) {
			document.documentElement.style.fontSize = w * 62.5 / dw + '%';
			document.documentElement.style.fontSize = w * 10 / dw + 'px';
		}
		if (r <= 2 && r >= 0.8 && h <= 800) {
			document.documentElement.style.fontSize = h * 62.5 / dw + '%';
			document.documentElement.style.fontSize = h * 10 / dw + 'px';
		}
	}
})();