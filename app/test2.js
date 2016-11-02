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
		typeof window.a = 'undefined';
	};


	return bee;
})(bee||{});

bee.caseB03();






















