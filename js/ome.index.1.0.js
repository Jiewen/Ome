/**
 * 针对主页的浏览器滚动效果，搜索框以及大图滚动
 */
var currScrollHeight = 0; //当前浏览器滚动高度
$(document).ready(function() {
	$(".ome-jumbotron").click(function(e) {
		var bgx = $(".ome-jumbotron-input-bg").offset().left;
		var bgy = $(".ome-jumbotron-input-bg").offset().top-currScrollHeight;
		var bgwidth = parseInt($(".ome-jumbotron-input-bg").css("width"));
		var bgheight = parseInt($(".ome-jumbotron-input-bg").css("height"));
		if (e.clientX > bgx && e.clientX < bgx + bgwidth && e.clientY > bgy && e.clientY < bgy + bgheight) {
			return;
		}
		var keywords = $(".ome-index-search-input").val();
		if (keywords != "") {
			return;
		}
		$(".ome-index-search-compu").hide();
		$("#ome_index_search_mind").hide();
		$(".ome-jumbotron-input-bg").removeClass("ome-jumbotron-search-bg-active");
	})
});
$(document).scroll(function() {
	var currWidth = document.documentElement.clientWidth;
	currScrollHeight = $(document).scrollTop();
	$(".ome-index-tran-png").css("transform","rotateZ("+currScrollHeight+"deg)");
	$(".ome-index-tran-png").css("-webkit-transform","rotateZ("+currScrollHeight+"deg)");
	$(".ome-index-tran-png").css("-moz-transform","rotateZ("+currScrollHeight+"deg)");
	if( currWidth>450 ){  /*手机设定小于450*/
	var bgy = $(".ome-jumbotron-input-bg").offset().top;
	var bgheight = parseInt($(".ome-jumbotron-input-bg").css("height"));
	
	if ($(document).scrollTop() > (bgy+bgheight)) {
		$("header").addClass("header-active");
		$(".ome-head-search").show();
	} else {
		$("header").removeClass("header-active");
		$(".ome-head-search").hide();
	}
	}
})
OmeOpenSearch = function() {
	var currWidth = document.documentElement.clientWidth;
	if (currWidth > 450) {
		var keywords = $(".ome-index-search-input").val();
		if (keywords != "") {
			return;
		}
		$(".ome-index-search-compu").show();
		$(".ome-jumbotron-input-bg").addClass("ome-jumbotron-search-bg-active");
		$(".ome-index-search-phone").css("top", "100%");
	} else {
		$(".ome-index-search-compu").hide();
		$(".ome-jumbotron-input-bg").removeClass("ome-jumbotron-search-bg-active");
		$(".ome-index-search-phone").css("top", "0%");
	}
}
OmeCloseComSearch = function() {
	$(".ome-index-search-compu").hide();
	$(".ome-jumbotron-input-bg").removeClass("ome-jumbotron-search-bg-active");
}
OmeOpenResult = function(obj) {
	var keywords = $(obj).val();
	if (keywords != "") {
		$(".ome-index-search-compu").hide();
		$("#ome_index_search_mind").show();
	} else {
		$(".ome-index-search-compu").show();
		$("#ome_index_search_mind").hide();
	}
}
OmeChangeSearchshow = function(index, obj) {
	var currIndex = $(".ome-index-search-compu-head").data("index");
	if (index != currIndex) {
		if (index == 0) {
			$(".ome-index-search-compu-hos").css("left", "0%");
			$(".ome-index-search-compu-alls").css("left", "100%");
			$(".ome-index-search-compu-head").data("index", "0");
		} else {
			$(".ome-index-search-compu-hos").css("left", "-100%");
			$(".ome-index-search-compu-alls").css("left", "0%");
			$(".ome-index-search-compu-head").data("index", "1");
		}
		$(".ome-index-search-compu-head li").removeClass("active");
		$(obj).addClass("active");
	}
}
OmeCloseSearch = function() {
	$(".ome-index-search-phone").css("top", "100%");
}
