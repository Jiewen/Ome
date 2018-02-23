SwitchSystemMessage = function(obj){
	$(".menu-warp").find("li").removeClass("active");
	$(obj).addClass("active");
	$("#user_message").hide();
	$("#system_message").show();
}


SwitchUserMessage = function(obj){
	$(".menu-warp").find("li").removeClass("active");
	$(obj).addClass("active");
	$("#system_message").hide();
	$("#user_message").show();
}

