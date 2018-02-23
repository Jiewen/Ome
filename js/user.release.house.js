SwitchPanel = function(index){
	$(".menu-warp").find("li").removeClass("active");
	$(".menu-warp").find("li:eq("+index+")").addClass("active");
	$(".user-content-warp").find("form").hide();
	$(".user-content-warp").find("form:eq("+index+")").show();	
}


