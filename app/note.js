//笔记

/*(function(){

	(21,94)  定义了一些变量和函数 jQuery = function(){}  (61行定义jQuery)
	(96,283) 给JQ对象，添加一些对象和属性。
	(285,347) extend : JQ的继承方法
	(349,817) jQuery.extend():扩展一些工具方法 （比如：$.trim、$.xxx 静态方法）
	(877,2856) sizzlejs : 复杂选择器的实现，这个是jQuery中比较难的。
	(2880,3042) Callbacks : 回调对象，函数的统一管理的方法。这个也是静态方法
	(3043,3180) Deffer : 延迟对象，对异步操作的统一管理的方法。
	(3184,3295) support: 功能检测（传统的做法叫做浏览器检测，改进后叫做功能检测，获取浏览器支持情况） 
	(3308,3652) data(): 数据缓存。数据挂载机制不是简单地将数据放在元素上。避免在元素身上添加大量数据。防止内存泄漏（怎么说）。
	(3653,3797) queue()、unqueue()，队列管理。（哪里用到呢，动画）
	(3808,4299) attr、prop、val、addclass 对元素属性的操作，平时我们用的比较多
	(4300,5128) on trigger 事件操作的相关方法、事件委托（这部分代码也比较多）
	(5140,6057) dom操作：添加 删除 获取 包装 dom筛选
	(6058,6620) css样式操作，为何这里那么多呢，因为涉及浏览器兼容、支持程度（boxsize）、像素、百分比啥的
	(6621,7854) 提交数据和ajax的操作。load、getJson 
	(7855,8584) animate 动画   show\hide\fadeIn (据说也很复杂)
	(8585,8792) offset 位置和尺寸的方法  
	(8804,8821) jQery 支持模块化 amd commandjs (还不支持sea、可以改一改)
	(8826)   window.jQuery = window.$ = jQuery;   对外提供接口

})();*/

//静态方法可以认为是最底层的东西，它可以提供给原生js使用。实例方法是更加高级层面的，比如实例方法调用工具方法。


/*
function fn1(){alert(1)}
function fn2(){alert(2)}
var cb = $.Callbacks(); //参数：调用一次啊、去重复啊
cb.add(fn1);
cb.add(fn2);
cb.fire(); //调用1、2
cb.remove(fn2);
cb.fire(); //调用1
*/

//异步操作有哪些：定时器、ajax、创建标签、dom加载

//Deffer延时对象如何使用
//这里会按顺序来弹出数字。
/*
var dfd = $.Deferred();
setTimeout(function(){
	alert(1);
	dfd.resolve();
},1000);
dfd.done(function(){
	alert(2);
})
*/
//我觉得和下面的模式没有区别吧,其实还是回调的形式吧？（没错，讲解的人也是这么说的）
/*
setTimeout(function(){
	alert(1);
	fun();
},1000);
function fun(){
	alert(2);
}
*/

//这个我在DAD项目中的时间控件中也有看过。
/*
$('xx').data('name','xxx');
$('xx').data('name');
*/

//出队入队的应用场合，其实原理也是很简单的，就是把操作放到queue之中，完成一个（出队）继续下一个。如果
//前面那个没有走的话，下面也不会执行。 
/*
$('xx').animate({left:100})
$('xx').animate({top:100})
*/

