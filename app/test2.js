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
		console.log(typeof rootjQuery);
		console.log(rootjQuery['0']==rootjQuery['context']);
	};

	/*
	 * 实例4:判断undefined
	 * 这两个方法其实都是可以的。
	 * 但是后者才是全部兼容的。
	 * 前者略有小的bug,发生概率非常的小：（xmlNode.method）
	 * bugs中也有对xmlNode.method的描述
	 * jquery中用 core_strundefined 变量保存了 'undefined'字符串形式的值
	 */
	bee.caseB04 = function(){
		
		l(window.noThisValue == undefined);
		l(typeof window.noThisValue == 'undefined');
	};

	/*
	 * 实例5:$.type
	 * 注意 class2type 的写法也值得学习，一般有“2”代表的是“to”，其实就是个映射表
	 */
	bee.caseB05 = function(){
		
		//这个对象中保存的是映射关系，一看就明白了的。
		/*
		var class2type ={
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
	 * 实例6: 物尽其用
	 * 这个思想非常的好，减少了变量引用的次数
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

	/*
	 * 实例7: 正则
	 */
	bee.caseB07 = function(){
		//这个用来匹配数字（什么正负数啊、科学计数法啥的都支持...）的正则表达式（的字符串形式）
		//注意，后面的source，是正则表达式对象的一个属性。
		var core_pnum = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/;

		//(?:...)表示不捕获分组，不捕获分组和反向引用有关，这里暂不解释。
		//xxx(xxxx)(?:xxxx)，你用这个正则表达式去匹配如果被匹配上可以得到()中被匹配文档的值
		//l(core_pnum.exec('qw-234.1e-1a'));

		l(/(a|)[1-9]+/.exec('11'));
		l(/(red|blue|green)/.exec('green'));
	};

	/*
	 * 实例8: jQuery.parseHTML 
	 */
	bee.caseB08 = function(){

		var htmlString = '<div>我是动态创建的</div><div>haha</div><script>alert("lala")</script>';
		var arr  = jQuery.parseHTML(htmlString,document,true);
		var arr2 = jQuery.parseHTML(htmlString,document,false); //这种结果下，会把script元素过滤掉
		//返回的结果是jquey的实例。
		l(arr);
		l(arr2);
		$(function(){
			$('body').append(arr[0]);
		});
	};

	/*
	 * 实例9: jQuery.merge 
	 */
	bee.caseB09 = function(){

		//合并数组用的
		var arr = [1,2,3];
		var arr2 = [4,5];
		l($.merge(arr,arr2)); 

		//还可以对对象合并操作
		//这里arr为对象，length是必须的
		//这样子arr2的添加是基于这个length的。
		var arr = {'1':'a',length:1}; 
		var arr2 = ['4','5'];
		l($.merge(arr,arr2)); 
	};


	/*
	 * 实例10: 正则
	 */
	bee.caseB10 = function(){

		//来看看jquery中的这个正则
		var rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/;
		l(rquickExpr.exec( '<div>你好' ));

	};


	return bee;
})(bee||{});

//bee.caseB10();
























