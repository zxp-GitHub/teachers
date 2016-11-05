
//空壳函数继承
var oob={
//	继承方法
	extend:function(Child, Parent){
//		空壳函数
		var F = function(){};
		F.prototype = Parent.prototype;
		Child.prototype = new F();
//		将子对象的指向改回为子对象本身
		Child.prototype.constructor = Child;
	}
}
