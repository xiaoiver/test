$(document).ready(function(){
	String.prototype.startWith=function(str){
		if(str==null||str==""||this.length==0||str.length>this.length)
		  return false;
		if(this.substr(0,str.length)==str)
		  return true;
		else
		  return false;
		return true;
	};
	
	/**
	 * 保存信息码和对应的信息
	 */
	var messageArray = new Array();
	messageArray['failure-wrong-username']="该用户不存在";
	messageArray['failure-wrong-password']="密码错误";
	messageArray['success-create-document']="添加文献成功";
	messageArray['success-edit-document']="修改文献成功";
	messageArray['success-delete-document']="删除文献成功";
	messageArray['success-update-profile']="修改资料成功";
	/**
	 * 在messageBlock中显示反馈信息
	 * @param msgCode 信息码success开头表示成功信息，failure开头表示错误信息，warning开头表示警告信息
	 */
	function showMessage(msgCode){
		$("#messageBlock").addClass("alert");
		if(msgCode.startWith("success"))
			$("#messageBlock").addClass("alert-success");
		else if(msgCode.startWith("failure"))
			$("#messageBlock").addClass("alert-danger");
		else if(msgCode.startWith("warning"))
			$("#messageBlock").addClass("alert-warning");
		
		$("#messageBlock").append(messageArray[msgCode]);
		setTimeout(function(){
			$("#messageBlock").fadeOut(1500);
			$("#messageBlock").removeClass();
			$("#messageBlock").html("");
		},3000);
	}
	
	var msgCode = $("#msgCode").val();
	if(msgCode!=null && msgCode!=""){
		showMessage(msgCode);
	}
});