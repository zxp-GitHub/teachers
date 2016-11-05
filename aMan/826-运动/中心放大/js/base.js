/**
 * Created by Administrator on 2016/2/27.
 */
function getId (str){
    return document.getElementById(str);
};

function getStyle(obj,attr){//获取css样式
    if(obj.currentStyle){//ie
        return obj.currentStyle[attr];
    }
    else{
        return getComputedStyle(obj,false)[attr];
    }
}