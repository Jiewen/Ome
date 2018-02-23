HdmOpen = function(username){
	document.getElementById("home-detail-mun").innerHTML = username;
	$(".ome-overlap").show();
    $(".ome-prompt-box").show();
}

HdmColse = function(){
	$(".ome-overlap").hide();
	$(".ome-prompt-box").hide();
}
