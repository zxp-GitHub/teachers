/**
 * Created by hasee on 2016/8/30.
 */
function ajax(url,fnSucc) {
    /*1、创建对象*/
    var oAjax = null;

    /*如果window有XMLHttpRequest，就使用*/
    if(window.XMLHttpRequest){
        oAjax = new XMLHttpRequest() //w3c标准的方法
    }else {
        oAjax = new ActiveXObject("Microsoft.XMLHTTP");
    }

    /*2、打开服务器链接*/
    oAjax.open("get",url,true);

    /*3、发送请求(提交数据）*/
    oAjax.send();

    /*4、监听状态*/
    oAjax.onreadystatechange=function () {
        console.log(oAjax.readyState)
    }

}