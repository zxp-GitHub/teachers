/**
 * Created by hasee on 2016/8/22.
 */

/*获取cookie*/
function getCookie(name) {
    var str = document.cookie; //获取到所有的cookie
    var arr = str.split("; "); //["a=5","b=10","user=sdsd"]

    for(var i=0;i<arr.length;i++){
        // arr[i]  //"a=5" "b=10"  "user=sdsd"
        var arr2 = arr[i].split("="); //"a=5" => ["a","5"]

        //"a=5"
        if(arr2[0] == name){ //对比，看看等号前面的值是否等于name
            return arr2[1] ;  ///如果等于name就返回等号后面的值
        }
    }
}

function setCookie(name,value,path,time) {
    var oDate = new Date();
    oDate.setDate(oDate.getDate()+time);
    console.log(oDate.getDate());
    //如果没有传路径path 或者time，那么无效的路径和时间会变成默认的是路径和时间
    var str = ""+name+"="+value+";path="+path+";expires="+oDate;
    console.log(str);
    document.cookie = str;
    
}


function removeCookie(name,path) {
    setCookie(name,"",path,-1);
   /* var oDate = new Date();
    oDate.setDate(oDate.getDate()-1);

    document.cookie =name+"=123;expires="+oDate;*/
}


/*
Math.random()
Math.round()*/
/*var local = {
    fnGet:function () {

    }
}
local.fnGet()*/
/*命名空间*/
var cookie = {
    fnGet:function (name) {
        var str = document.cookie; //获取到所有的cookie
        var arr = str.split("; "); //["a=5","b=10","user=sdsd"]

        for(var i=0;i<arr.length;i++){
            // arr[i]  //"a=5" "b=10"  "user=sdsd"
            var arr2 = arr[i].split("="); //"a=5" => ["a","5"]

            //"a=5"
            if(arr2[0] == name){ //对比，看看等号前面的值是否等于name
                return arr2[1] ;  ///如果等于name就返回等号后面的值
            }
        }
    },
    fnSet:function (name,value,path,time) {
        var oDate = new Date();
        oDate.setDate(oDate.getDate()+time);
        console.log(oDate.getDate());
        //如果没有传路径path 或者time，那么无效的路径和时间会变成默认的是路径和时间
        var str = ""+name+"="+value+";path="+path+";expires="+oDate;
        console.log(str);
        document.cookie = str;
    },
    fnRemove:function (name,path) {
        setCookie(name,"",path,-1);
    }
};
/*var obj = {a:11,b:2,c:[2,3,4],d:function () {

}}*/
/*var cookie = new Object();
cookie.fnGet=function (name) {
    alert(name)
};
cookie.fnSet=function () {

};*/

/*
cookie.fnGet("username");
cookie.fnSet("username");
cookie.fnRemove("username")*/
