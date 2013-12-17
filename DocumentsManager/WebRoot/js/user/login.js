$(document).ready(function(){
	var hiddenUsername = $("#hiddenUsername");
	var usernameInLogin = $("#loginDialog #username");
	var passwordInLogin = $("#loginDialog #password");
	passwordInLogin.hide();
	$("#txt").show();
	var rightUsername = hiddenUsername.val();
	if(rightUsername =="" || rightUsername == undefined){
		usernameInLogin.blur(
			function(){
				if(usernameInLogin.val()==""){
					usernameInLogin.val("请输入用户名");
			}
	    }
	).focus(function(){
	    if(usernameInLogin.val()=="请输入用户名"){
	    	usernameInLogin.val("");
	    }
	  });
  }else{
	  usernameInLogin.val(rightUsername);
  }
  
  passwordInLogin.blur(
    function(){
      if(passwordInLogin.val()==""){
    	  passwordInLogin.hide();
        $("#txt").show();
      }
    }
  );

  $("#txt").focus(function(){
	  passwordInLogin.show().focus();
    $("#txt").hide();
  });
});