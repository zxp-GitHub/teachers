 function ajax(url,type.sendDate,fnSucc) {
        /*1、创建对象*/
        var oAjax = null;

        /*如果window有XMLHttpRequest，就使用*/
        if(window.XMLHttpRequest){
            oAjax = new XMLHttpRequest() //w3c标准的方法
        }else {
            oAjax = new ActiveXObject("Microsoft.XMLHTTP");
        }
        if (type=="get") {
        	  /*2、打开服务器链接*/
        oAjax.open("get",url,true);

        	
        } else{
        	
        }

      
        /*3、发送请求(提交数据）*/
        oAjax.send();

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

    };

    ajax("ajax.js",function (data) {
        alert("ok");
        console.log(data)
    })