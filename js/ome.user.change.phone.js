SwitchCheckMode = function(index){
	if( index==0 ){
		$("#cp_oldphone").hide();
		$("#cp_password").show();
	}else{
		$("#cp_password").hide();
		$("#cp_oldphone").show();
	}
}
