/**
 * Created by hasee on 2016/8/16.
 */
function $(str) {
    return document.getElementById(str);
};

function getStyle(obj,attr) {
    //获取谁的属性：obj
    //获取什么属性:attr
    //判断浏览器是否支持getComputedStyle属性
    if(window.getComputedStyle){
        return  window.getComputedStyle(obj,null)[attr];
    }else {
        //ie低版本的方法
        return  obj.currentStyle[attr];
    }

}