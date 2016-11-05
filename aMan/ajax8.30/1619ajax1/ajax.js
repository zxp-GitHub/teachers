function ajax(url,type,sendData,fnSucc) {


	/*1、创建对象*/
	var oAjax = null;
	if(window.XMLHttpRequest){
		oAjax = new XMLHttpRequest()
	}else {
		oAjax = ActiveXObject("Microsoft.XMLHTTP")
	}

	/*2、打开服务器连接*/
	if(type=="get"){
		//get方式，url后面要就参数
		//1.php?filename=1.txt
		//url=>1.php
		//sendData = filename=1.txt
		oAjax.open("get",url+"?"+sendData,true);
		/*3.1、get的发送*/
		oAjax.send()
	}else {
		oAjax.open("post",url,true);

		/*3.2、post的send*/
		//设置post发送数据的格式
		oAjax.setRequestHeader('content-type','application/x-www-form-urlencoded');
		//post方式，参数要放在send里面
		oAjax.send(sendData)

	}

	/*4、监听状态*/
	oAjax.onreadystatechange=function () {
		if(oAjax.readyState==4){
			//说明ajax要干的事，干完了
			console.log("ok");

			console.log(oAjax.status);//到底有么有找文件,服务器返回的状态
			if(oAjax.status==200){
				/*成功*/
				//console.log(oAjax.responseText);//ajax获取到的内容
				fnSucc&&fnSucc(oAjax.responseText)
			}else {
				/*出问题了*/
				console.log("出问题了 "+oAjax.status)
			}

		}
	}


}
