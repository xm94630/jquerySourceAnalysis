/*********************************************
 * 第一章节
 * 在这个章节中，我来研究的是jQuery的大的结构。
 * 也就是jQuery构造函数
 * 这里拆分成13个小的练习，层层深入。
 * 最后一个实例，其实就是我的最后的结论，也是整个jQuery
 * 体系中非常重要的一部分。
 *********************************************/

var l = function(){return console.log.apply(console,arguments);}

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
	 * 我为 Fish.prototype.init 再添加一个prototype，呵呵呵
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

	/*
	 * 实例12:构造函数 变态模式
	 * 这个模式有趣的,好好看两个：
	 * 1.f这个实例中包含的属性有哪些，哪些来自于继承
	 * 2.f.constructor指向的是谁？
	 */
	bee.case12 = function(){
		function Fish(){
			return  new Fish.prototype.init;
		}
		Fish.prototype = {
			init:function xxx(){
				this.width = 100;
			}
		};
		//来来，我们修改下 Fish.prototype.init.prototype 的值吧
		Fish.prototype.init.prototype = Fish.prototype;
		var f = new Fish();
		l(f);
		l(f.constructor === Fish.prototype.init);
		l(f.constructor === Object);
	};


	/*
	 * 实例13:BOSS jQuery构造函数
	 * jQuery中的基本架构模式就其实就是上面的实例12
	 * 如何？通过一步一步地进行分析，再来看这个的时候，是不是就明了多了！
	 */
	bee.case13 = function(){

		var jQuery = function(){
			return new jQuery.prototype.init(1,2,3); 
		};

		//这里这样子的写法值得注意的是，改变了jQuery原来的 constractor 的指向
		//constractor 在jQuery创建之初，就默认绑定到了自己指向的按个函数了！（这个是js自己完成的行为）
		jQuery.prototype = {
			init:function(a,b,c){

			},
			getBoy:function(){

			},
			//这里是用来矫正 constractor 指向问题的！
			constructor:jQuery
		}

		//这里主要来观察这个式子表示的意思：
		//如果没有这个的话，实例内容仅仅包含init构造函数中的内容
		//但是对init添加了jQuery.prototype之后，也继承了 jQuery.prototype的内容
		//比如这里的getBoy方法和init方法本身
		jQuery.prototype.init.prototype = jQuery.prototype;

		
		//按照原来的写法，这里就是使用new来实例的，不过呢，因为jQuery函数直接return的是一个对象
		//所以，可以不使用new。我们在使用jquery的时候，其实也是不用  new $('xxx')  这样子的写法的！
		//var j = new jQuery();
		
		var j = jQuery();
		l(j);
		l(j.constructor == jQuery);
	};

	return bee;
})(bee||{});

bee.case13();

