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



function getEleByClass(parent,classStr) {

    var elements = parent.getElementsByTagName("*");//获取所有的标签
    console.log(elements);

    var arr = []; //装class是classStr的元素的 数组
    for(var i=0;i<elements.length;i++){//把所有元素拿过来循环

        var aClass = elements[i].className.split(" ");
        for(var i=0;i<aClass.length;i++){

            if(aClass[i] ==classStr){
                arr.push(elements[i])
            }
        }
    }
    return arr
}