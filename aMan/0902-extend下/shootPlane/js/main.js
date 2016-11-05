var main = document.getElementById("main");
var mainWid = main.offsetWidth;
var mainLeft = main.offsetLeft;
var mainHei = main.offsetHeight;
var mainTop = main.offsetTop;
main.onmouseover = function(){
	main.style.cursor = "none";
}
main.onmouseout = function(){
	main.style.cursor = "";
}
main.onmousemove = function(e){
	var e = e||window.event;	
	var oX = e.clientX - mainLeft;
	var oY = e.clientY - mainTop;
	if(oX<=33){
		oX = 33;
	}else if(oX>=(mainWid-33)){
		oX = mainWid-33;
	}
	if(oY<=40){
		oY = 40;
	}else if(oY>=(mainHei-40)){
		oY = mainHei-40;
	}
	selfPlane.moveMyPlane(oX,oY);
}
main.onmousedown = function(){
	selfPlane.shoot();
	return false;
}
document.onmouseup = function(){
	selfPlane.stopShoot();
	return false;
}

function ranNum(min,max){
	return Math.floor(Math.random()*(max-min+1))+min;
}

//本方飞机类
function myPlane(oX,oY,imgSrc,boomImg){
	this.oX = oX;
	this.oY = oY;
	this.imgSrc = imgSrc;
	this.boomImg = boomImg;
	this.createMyPlane();
}
//创建飞机节点
myPlane.prototype.createMyPlane = function(){
	this.myPlaneNode = document.createElement("img");
	this.myPlaneNode.src = this.imgSrc;
	this.myPlaneNode.style.cssText = "position:absolute;left:"+this.oX+"px;top:"+this.oY+"px;width:66px;height:80px;";
	main.appendChild(this.myPlaneNode);
}
//飞机移动方法
myPlane.prototype.moveMyPlane = function(oX,oY){
	this.oX = oX;
	this.oY = oY;
	this.myPlaneNode.style.left = this.oX - 33 + "px";
	this.myPlaneNode.style.top = this.oY - 40 + "px";
	this.crash();
}

//飞机撞击
myPlane.prototype.crash = function(){
	var enemys = document.getElementsByClassName("enemy");
	var myPlaneLeft = parseInt(this.myPlaneNode.style.left);
	var myPlaneTop = parseInt(this.myPlaneNode.style.top);
	if(enemys[0]){
		for(var i=0;i<enemys.length;i++){
			if(myPlaneLeft<=(parseInt(enemys[i].style.left)+parseInt(enemys[i].style.width))&&(myPlaneLeft+parseInt(this.myPlaneNode.style.width))>=parseInt(enemys[i].style.left)&&myPlaneTop<=(parseInt(enemys[i].style.top)+parseInt(enemys[i].style.height))&&(myPlaneTop+parseInt(this.myPlaneNode.style.height)>=parseInt(enemys[i].style.top))){
				this.myPlaneNode.src = this.boomImg;
				main.onmousemove = null;
				setTimeout(function(){
					alert("游戏结束");
					location.reload();
				},1000)
			}
		}
	}
}

//飞机射击
myPlane.prototype.shoot = function(){
	var that = this;
	var newBullet = new bullet(that.oX-3,that.oY-40-14,"img/bullet1.png");
	newBullet.createBullet();
	this.time = setInterval(function(){
		var newBullet = new bullet(that.oX-3,that.oY-40-14,"img/bullet1.png");
		newBullet.createBullet();
	},100)
}
myPlane.prototype.stopShoot = function(){
	clearInterval(this.time);
}

function bullet(oX,oY,imgSrc){
	this.oX = oX;
	this.oY = oY;
	this.imgSrc = imgSrc;
}
//创建子弹节点
bullet.prototype.createBullet=function(){
	this.bulletNode = document.createElement("img");
	this.bulletNode.className = "bullets";
	this.bulletNode.src = this.imgSrc;
	this.bulletNode.style.cssText = "position:absolute;left:"+this.oX+"px;top:"+this.oY+"px;width:6px;height:14px;";
	main.appendChild(this.bulletNode);
	this.moveBullet();
}
//创建子弹移动方法
bullet.prototype.moveBullet=function(){
	var that = this;
	this.bulletNode.time = setInterval(function(){
		that.oY-=5;
		that.bulletNode.style.top = that.oY + "px";
		if(that.oY<=-14){
			clearInterval(that.bulletNode.time);
			main.removeChild(that.bulletNode);
		}
	},10)
}

//创建敌机类
function enemyPlane(oX,oY,wid,hei,imgSrc,boomImgSrc,boomTime,hp,speed){
	this.oX = oX;
	this.oY = oY;
	this.imgSrc = imgSrc;
	this.boomImgSrc = boomImgSrc;
	this.boomTime = boomTime;
	this.hp = hp;
	this.speed = speed;
	this.wid = wid;
	this.hei = hei;
	this.createEnemy();
}

enemyPlane.prototype.ranNum = function(min,max){
	return Math.floor(Math.random()*(max-min+1))+min;
}
//创建敌机方法
enemyPlane.prototype.createEnemy = function(){
	this.enemyNode = document.createElement("img");
	this.enemyNode.className = "enemy";
	this.enemyNode.src = this.imgSrc;
	this.enemyNode.style.cssText = "position:absolute;width:"+this.wid+"px;height:"+this.hei+"px;top:"+this.oY+"px;left:"+this.oX+"px;";
	main.appendChild(this.enemyNode);
	this.moveEnemy(this.enemyNode,this.speed);
}

enemyPlane.prototype.moveEnemy = function(obj,speed){
	var that = this;
	(function(obj,speed){
		obj.time = setInterval(function(){
			obj.style.top = parseInt(obj.style.top)+speed+"px";
			if(parseInt(obj.style.top)>=mainHei){
				clearInterval(obj.time);
				main.removeChild(obj);
			}
			that.hit();
		},50)
	})(obj,speed);
}

//被击中以及击毁方法
enemyPlane.prototype.hit = function(){
	var nowLeft = parseInt(this.enemyNode.style.left);
	var nowTop = parseInt(this.enemyNode.style.top);
	var bullets = document.getElementsByClassName("bullets");
	for(var i=0;i<bullets.length;i++){
		if(nowLeft<=parseInt(bullets[i].style.left)&&((nowLeft+this.wid)>=parseInt(bullets[i].style.left)+3)&&(nowTop+this.hei)>=parseInt(bullets[i].style.top)&&nowTop<=(parseInt(bullets[i].style.top)+parseInt(bullets[i].style.height))){			
			this.hp--;
			if(this.hp<=0){
				clearInterval(this.enemyNode.time);
				this.enemyNode.src = this.boomImgSrc;
				(function(obj,boomTime){
					setTimeout(function(){
						main.removeChild(obj);
					},boomTime);
				})(this.enemyNode,this.boomTime)
				
			}
			clearInterval(bullets[i].time);
			main.removeChild(bullets[i]);
		}
	}	
}

function smallEnemy(oX,oY,wid,hei,imgSrc,boomImgSrc,boomTime,hp,speed){
	enemyPlane.call(this,oX,oY,wid,hei,imgSrc,boomImgSrc,boomTime,hp,speed);
}
oob.extend(smallEnemy,enemyPlane);

function middleEnemy(oX,oY,wid,hei,imgSrc,boomImgSrc,boomTime,hp,speed){
	enemyPlane.call(this,oX,oY,wid,hei,imgSrc,boomImgSrc,boomTime,hp,speed);
}
oob.extend(middleEnemy,enemyPlane);

function bigEnemy(oX,oY,wid,hei,imgSrc,boomImgSrc,boomTime,hp,speed){
	enemyPlane.call(this,oX,oY,wid,hei,imgSrc,boomImgSrc,boomTime,hp,speed);
}
oob.extend(bigEnemy,enemyPlane);

var time = setInterval(function(){
	var flag = ranNum(1,14);
	if(flag<=9){
		for(var i=0;i<ranNum(2,3);i++){
			var newSmallEnemy = new smallEnemy(ranNum(0,mainWid-34),-24,34,24,"img/enemy1_fly_1.png","img/小飞机爆炸.gif",200,2,ranNum(2,4));
		}
	}else if(flag>9&&flag<=12){
		for(var i=0;i<ranNum(1,2);i++){
			var newMiddleEnemy = new middleEnemy(ranNum(0,mainWid-46),-60,46,60,"img/enemy2_fly_1.png","img/中飞机爆炸.gif",300,4,ranNum(1,3));
		}
	}else if(flag>=13){
		for(var i=0;i<1;i++){
			var newBigEnemy = new bigEnemy(ranNum(0,mainWid-110),-164,110,164,"img/enemy3_fly_1.png","img/大飞机爆炸.gif",500,16,1);
		}
	}
},1000)

var selfPlane = new myPlane((mainWid/2)-33,mainHei-80,"img/myplane.gif","img/本方飞机爆炸.gif");