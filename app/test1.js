var l = function(){return console.log.apply(console,arguments);}

/*(function(){

	(21,94)  定义了一些变量和函数 jQuery = function(){}  (61行定义jQuery)
	(96,283) 给JQ对象，添加一些对象和属性。
	(8826)   window.jQuery = window.$ = jQuery;

})();*/

/***********************************
 * 实例
 ***********************************/
var bee = (function(bee){

	/*
	 * 实例1:构造函数
	 * 构造函数中没有this的时候，返回的对象是空对象
	 */
	bee.case01 = function(){
		function Fish(){
			var width = 100;
		}
		var f = new Fish();
		l(f);
		l(f.constructor === Fish);
	};

	/*
	 * 实例2:构造函数
	 * 构造函数中有this的时候，this就指向的是实例。
	 */
	bee.case02 = function(){
		function Fish(){
			this.with = 100;
		}
		var f = new Fish();
		l(f);
		l(f.constructor === Fish);
	};

	/*
	 * 实例3:构造函数
	 * 构造函数中使用了“return+对象”
	 * 这个时候无论如何调用函数，返回的对象都是固定的，{with:100}
	 * this在这里就是无效的，所以call\apply也是无能为力了
	 */
	bee.case03 = function(){
		function Fish(){
			this.height = 200;
			return {with:100};
		}
		var f = new Fish();
		l(f);
		l(f.constructor === Fish);
		l(f.constructor === Object);

		l('===分割线===')
		var f2 = Fish();
		l(f2);
		l(f2.constructor === Fish);
		l(f2.constructor === Object);
	};

	/*
	 * 实例4:构造函数
	 * 构造函数中使用了“return+对象”
	 * 原型继承在这样子情况下也是无能为力啊！
	 */
	bee.case04 = function(){
		function Fish(){
			return {with:100};
		}
		Fish.prototype = {height:200};
		var f = new Fish();
		l(f);
		l(f.height);
	};

	/*
	 * 实例5:构造函数 变态模式
	 * 这里return的是自身的原型...感觉一下子就变态了
	 * 仔细想想其实只是Fish.prototype 对 {height:200} 的引用而已
	 */
	bee.case05 = function(){
		function Fish(){
			return Fish.prototype;
		}
		Fish.prototype = {height:200};
		var f = new Fish();
		l(f);
		l(f.height);
	};

	/*
	 * 实例6:构造函数 变态模式
	 * 和上例基本相同，只是把实例化部分提前了
	 * 这个有点意思，可以得出的结论是：
	 * 1.原型对象的改变，不会影响之前创建的实例对象。
	 * 2.Fish.prototype在没有修改之前，就是指向了一个默认对象（含有constructor、__proto__属性）。
	 */
	bee.case06 = function(){
		function Fish(){
			return Fish.prototype;
		}
		//放到修改原型的前面
		var f = new Fish();
		l(f);
		l(f.height);
		Fish.prototype = {height:200};
		//放到修改原型的后面
		var f = new Fish();
		l(f);
		l(f.height);
	};

	/*
	 * 实例7:构造函数 变态模式
	 * 再来点恶心的
	 * 这个时候，return的是一个函数了。其实也好理解
	 */
	bee.case07 = function(){
		function Fish(){
			return Fish.prototype.init;
		}
		Fish.prototype = {
			init:function(){
				l('我是函数');
			}
		};
		var f = new Fish();
		l(f);
		f();
	};

	/*
	 * 实例8:构造函数 变态模式
	 * 再来点恶心的
	 * 这个时候，return的是一个函数了。其实也好理解
	 */
	bee.case08 = function(){
		function Fish(){
			return Fish.prototype.init;
		}
		Fish.prototype = {
			init:function(){
				l('我是函数');
			}
		};
		var f = new Fish();
		l(f);
		f();
	};

	/*
	 * 实例9:构造函数 变态模式
	 * 再加强点...
	 * 仔细观察可以发现，这种模式和第二种其实是非常类似的！
	 * 他们的结果的差别在于，他们的构造函数是不一样。
	 * 但是(jQuery)这样子做的目的是什么呢？(jQuery就是用了这个模式)
	 * 为何还要这样子包装一层，把Fish构造函数真是功能转移到了其原型上的init方法！
	 */
	bee.case09 = function(){
		function Fish(){
			return  new Fish.prototype.init;
		}
		Fish.prototype = {
			init:function xxx(){
				this.width = 100;
			}
		};
		var f = new Fish();
		l(f);
		l(f.constructor === Fish.prototype.init);
	};


	/*
	 * 实例10:构造函数
	 * 上面的让人混淆的是Fish构造函数在实例化的时候，内部是使用的自己原型对象上的一个方法。
	 * 实际上这和使用别的构造函数上的原型上的方法是一样的，如下例子：
	 * 其实举这个例子意义不是很大，只是顺手一写而已。
	 */
	bee.case10 = function(){
		
		function MyFun(){}
		MyFun.prototype = {
			Bird:function(){
				this.width=100;
			}
		}
		function Fish(){
			return new MyFun.prototype.Bird;
		}
		var f = new Fish();
		console.log(f);
	};

	/*
	 * 实例11:构造函数 变态模式
	 * 可不可以在是实例9的基础上再变态点呢
	 * 恩..可以的
	 * 我为 Fish.prototype.init 在添加一个prototype，呵呵呵
	 */
	bee.case11 = function(){
		function Fish(){
			return  new Fish.prototype.init;
		}
		Fish.prototype = {
			init:function xxx(){
				this.width = 100;
			}
		};
		//这样子写的话，constructor 就不在是 init 啦
		Fish.prototype.init.prototype = {
			height:200
		}
		var f = new Fish();
		l(f);
		//构造函数不再是init了
		l(f.constructor === Fish.prototype.init);
		//构造函数是 Objsct了
		l(f.constructor === Object);
	};







	return bee;
})(bee||{});


bee.case11();







/*function Fish(){
	return new Fish.prototype.init();
}

Fish.prototype = {
	init:function(){
		l('我是小鱼');
	}
}

Fish.prototype.init.prototype = {width:100};


*/

















