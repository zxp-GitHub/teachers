

/*通过id获取元素*/
function getEleById(str){
    return  document.getElementById(str);
    /*把获取到的元素返回出来*/
}
var $ = getEleById;

/*通过class获取元素*/


/*行间样式*/
function getStyle(obj,attr){//获取css样式
    if(obj.currentStyle){//ie
        return obj.currentStyle[attr];
    }
    else{
        return window.getComputedStyle(obj,null)[attr];
    }
}