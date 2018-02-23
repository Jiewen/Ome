var delObj;
$(document).ready(function() {
	blInit();
	document.getElementById('file').onchange = function(evt) {

		// 如果浏览器不支持FileReader，则不处理

		if (!window.FileReader) return;

		var files = evt.target.files;

		for (var i = 0, f; f = files[i]; i++) {

			if (!f.type.match('image.*')) {
				continue;
			}
			var reader = new FileReader();
			reader.onload = (function(theFile) {
				return function(e) {
					var tmp = document.getElementById("bl_addphoto").innerHTML;
					var tmp1 = "<div class='bl-photo'><h1><font>" + e.target.name + "</font>" +
						"<a href='javascript:void(0)' class='icon-del' title='删除'></a></h1>" +
						"<img src='" + e.target.result + "' /></div>";
					document.getElementById("bl_addphoto").innerHTML = tmp + tmp1;
					blInit();
				};
			})(f);
			reader.readAsDataURL(f);
		}

	}

})

blInit = function(){
	$(".bl-photo").hover(
		function () {
			$(this).find("h1").css("height","2em");
		}, function () {
			$(this).find("h1").css("height","0");
		}
	);
	$(".bl-photo").find("a").click(function() {
		delObj = $(this).closest("div");
		confirmOpen();
	})
}

confirmOpen = function(obj) {
	$(".ome-overlap").show();
	$("#ome_del_photo").show();
}

confirmClose = function() {
	$(".ome-overlap").hide();
	$("#ome_del_photo").hide();
}

confirmDel = function() {
	$(delObj).remove();
	confirmClose();
}