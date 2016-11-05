/**
 * Created by hasee on 2016/8/23.
 */

var userName = $("username");

var userNameReg = /^[\w-]{4,20}$/;
var notNumberReg = /\D/;

var mobileReg = /^[1]{1}[3|5|7|8]{1}\d{9}$/;
var eMailReg = /^([a-zA-Z]+\.)?\w+@\w+\.[a-z]{2,5}$/;
var str = "www.164@eere.com";
//7788665@qq.com


userName.onfocus=function () {
    console.log(this.parentNode.nextElementSibling)
    /*让提示显示*/
    var tip = this.parentNode.nextElementSibling;
    tip.style.visibility="visible";

};

userName.onblur=function () {
    console.log(this.parentNode.nextElementSibling)
    /*让提示显示*/
    var oParent = this.parentNode;
    var tip = oParent.nextElementSibling;
    var icon = this.nextElementSibling;
    //判断输入的内容是否满足要求

    if(userNameReg.test(this.value)){
        //看看是不是纯数字
        if(this.value.search(notNumberReg)!=-1){
            //找到了不是数字的字符

            //如果通过验证

            //隐藏提示
            tip.style.visibility="hidden";
            //让对号显示
            icon.style.display="block";

            /*去掉错误的样式*/
            oParent.className="form-item";
            tip.className="input-tip";
        }else {
            /*去掉正确的样式*/
            icon.style.display="none";
            /*添加错误的样式*/
            oParent.className="form-item  error-item";
            tip.className="input-tip error-tip";
            tip.getElementsByTagName("span")[0].innerHTML = "用户名不能输纯数字";
        }


    }else {
        /*去掉正确的样式*/
        icon.style.display="none";
        /*添加错误的样式*/
        oParent.className="form-item  error-item";
        tip.className="input-tip error-tip";
        tip.getElementsByTagName("span")[0].innerHTML = "格式错误，仅支持汉字、字母、数字、“-”“_”的组合";
        //格式错误，仅支持汉字、字母、数字、“-”“_”的组合
    }

};

userName.onkeyup=function () {
    //this.value
    /*干掉错误的提示*/
    var oParent = this.parentNode;
    var tip = oParent.nextElementSibling;
    var icon = this.nextElementSibling;

    /*去掉错误的样式*/
    oParent.className="form-item";
    tip.className="input-tip";

    /*去掉正确的样式*/
    icon.style.display="none";

    /*显示提示信息*/
    tip.style.visibility="visible";
    tip.getElementsByTagName("span")[0].innerHTML ="支持中文、字母、数字、“-”“_”的组合，4-20个字符"
};