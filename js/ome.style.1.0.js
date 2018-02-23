$(document).ready(function() {
	$(".ome-select-style-common").find("input").click(function(){
		var selectInput = this;
		var inputParent = $(this).parent()[0];
		var selectUl = $(inputParent).find("ul")[0];
		var keyInput = $(inputParent).find("input")[1];
		$(selectUl).show();
		$(selectUl).find("li").bind("click",function(){
			$(selectInput).val(this.innerHTML);
			$(keyInput).val($(this).data("key"));
			$(selectUl).hide();
		});
		$(inputParent).bind("mouseleave",function(){
			$(selectUl).hide();
		})
	})
	/*将ome_lanner下的li初始化好*/
	var ome_lanner_li_count= $("#ome_lanner").find("li").size();
	for( var i=0;i<ome_lanner_li_count;i++ ){
		$("#ome_lanner li:eq("+i+")").css({left:i*100+"%"});
	}
	$(".ome-index-lanner").hover(
		function () {
			$(".ome-index-lanner .arrL").animate({ left: 20}, { duration: 300 });
			$(".ome-index-lanner .arrR").animate({ right: 20}, { duration: 300 });
		}, function () {
			$(".ome-index-lanner .arrL").animate({ left: -42}, { duration: 300 });
			$(".ome-index-lanner .arrR").animate({ right: -42}, { duration: 300 });
		}
	);
})

OmeOpenMenu = function() {
	var flag = $(".ome-menu").css("left");
	if (flag == "0px") {
		$(".ome-menu").css("left", "-100%");
	} else {
		$(".ome-menu").css("left", "0%");
	}
}
OmeOpenUserPanel = function(obj){
	var openStatus = $(obj).data("status");
	if( openStatus==1 ){ 
		$(".ome-user-info").hide();
		$(obj).data("status","0");
	}else{
		$(".ome-user-info").show();
		$(obj).data("status","1");
	}
}
OmeOpenSearchMind = function(obj){
	var keywords = $(obj).val();
	if (keywords != "") {
		$("#ome_head_search_mind").show();
	} else {
		$("#ome_head_search_mind").hide();
	}
}
OmeLannerLeftPage = function(){
	var ome_lanner_li_count= $("#ome_lanner").find("li").size();
	var currIndex = parseInt($("#ome_lanner").data("index"));
	if( currIndex==0 ){
		return;
	}
	for( var i=0;i<ome_lanner_li_count;i++ ){
		$("#ome_lanner li:eq("+i+")").css({left:(i-currIndex+1)*100+"%"});
	}
	$("#ome_lanner").data("index", ""+(--currIndex));
	$(".lanner-sequence").find("a").removeClass("active");
	$(".lanner-sequence a:eq("+currIndex+")").addClass("active");
}
OmeLannerRightPage = function(){
	var ome_lanner_li_count= $("#ome_lanner").find("li").size();
	var currIndex = parseInt($("#ome_lanner").data("index"));
	if( currIndex==ome_lanner_li_count-1 ){
		return;
	}
	for( var i=0;i<ome_lanner_li_count;i++ ){
		$("#ome_lanner li:eq("+i+")").css({left:(i-currIndex-1)*100+"%"});
	}
	$("#ome_lanner").data("index", (++currIndex)+"");
	$(".lanner-sequence").find("a").removeClass("active");
	$(".lanner-sequence a:eq("+currIndex+")").addClass("active");
}
OmeLannerMoveTo = function(index){
	var ome_lanner_li_count= $("#ome_lanner").find("li").size();
	for( var i=0;i<ome_lanner_li_count;i++ ){
		$("#ome_lanner li:eq("+i+")").css({left:(i-index)*100+"%"});
		$("#ome_lanner").data("index", index+"");
	}
	$(".lanner-sequence").find("a").removeClass("active");
	$(".lanner-sequence a:eq("+index+")").addClass("active");
}
MyWdatePicker = function(obj){
	var width = parseInt($(obj).css("width"))+2;
	WdatePicker();
	$("iframe").css("width",width+"px");
	$(".WdateDiv").css("width",width+"px");
}