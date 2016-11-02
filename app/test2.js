/***********************************
 * 第二章节
 ***********************************/

var bee = (function(bee){

	/*
	 * 实例1:函数自执行
	 */
	bee.caseB01 = function(){
		
		//传入window对象有几个好处：
		//1.变量查找方便
		//2.形式参数可以改变
		//undefined传入的原因：
		//1.undefined只是window的一个属性，可以被修改！（除了IE）
		//2.这里传入的第二个参数不存在，所以那个形式参数中的undefined是真实意义上的undefined。
		(function(window,undefined){

		})(window);
	};

	/*
	 * 实例2:严格模式
	 * 兼容问题：IE低版本不支持，只有高级浏览器支持。jquery不推荐使用
	 * ASP.NET的应用、低版本火狐都有问题。
	 * (#13335)中含有详细的说明
	 */
	bee.caseB02 = function(){
		
		"use strict";
		//a = 123; 严格模式下，这样子的写法是会报错的。
		var a =123;
		//b = 010; 严格模式下，使用八进制的数字也是会有错误的。
		var b = 10;
	};


	/*
	 * 实例3:引用
	 * rootjQuery是对jQuery(document)的引用
	 * 引用我认为有几个好处：
	 * 1.一个就是缓存
	 * 2.压缩代码的时候可以减少量
	 * 3.相当于使用了别名，在意思的理解上也比较的直观
	 */
	bee.caseB03 = function(){
		
		var rootjQuery = jQuery(document);
		console.log(rootjQuery);
		console.log(rootjQuery.length);
	};

	/*
	 * 实例4:判断undefined
	 * 这两个方法其实都是可以的。
	 * 但是后者才是全部兼容的。
	 * 前者略有小的bug,发生概率非常的小：（xmlNode.method）
	 * bugs中也有对xmlNode.method的描述
	 * jquery中用 core_strundefined 变量保存了 'undefined'字符串形式的值
	 */
	bee.caseB03 = function(){
		
		window.a == undefined;
		typeof window.a == 'undefined';
	};

	/*
	 * 实例5:$.type
	 * 注意 class2type 的写法也学习，一般有“2”代表的是“to”，其实就是个映射表
	 */
	bee.caseB05 = function(){
		
		//var class2type = {};		//这是类型配对，最后会变成下面的形式
		/*
		class2type ={
			'[object String]':'string',
			...
		}
		 */
		//其实最后就是用来做类型判断的啦，为$.type所用吧。
		//这个在underscore中也有类似的实现。
		l($.type([]));
		l($.type({}));
		l($.type(''));
	};

	/*
	 * 实例5: 物尽其用
	 * 这个思想非常的好，我减少了变量引用的次数
	 */
	bee.caseB06 = function(){

		//这个是我游戏中用到的定义
		var player = '巴巴雷恩';
		var scene  = [0,1,0,1,1,1];
		var menPai = {
			'name':'兽王派',
			'addr':'黑森林'
		} 
		//我这里就物尽其用，利用上面的代码直接做了核心方法的引用(第一次看见的时候，觉得怪怪的)
		var core_concat   = scene.concat,
			core_toString = menPai.toString,
			core_trim     = player.trim;
		//等效于
		var core_concat   = [].concat,
			core_toString = {}.toString,
			core_trim     = ''.trim;
	};


	return bee;
})(bee||{});

bee.caseB06();






















