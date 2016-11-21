/***********************************
 * 第二章节
 ***********************************/

var bee = (function(bee){

	/*
	 * 实例1: getElementsByTagName 返回的是伪数组([object HTMLCollection])
	 * 我以前以为只有arguments是伪数组，原来还有这个。。
	 */
	bee.caseC01 = function(){
		
		//注意操作元素，要等dom加载完毕
		$(function(){

			var a = document.getElementsByTagName('li');
			l(a);
			l(typeof a);
			l(Object.prototype.toString.apply(a));

			//makeArray可以将伪数组转换为数组
			var arr = $.makeArray(a);
			l(arr);
			l(arr.length);
			l(typeof arr);
			l(Object.prototype.toString.apply(arr));

			//另外，这样子用的时候和merge是一样的！！
			var obj={
				'0':'小鸟',
				length:1,
				fun:function(){
					$.makeArray(['小鱼'],this);
				}
			}
			obj.fun();
			l(obj)

			//和上面的是同样的道理，写法稍微不一样而已。
			l($.makeArray(['小鱼'],{length:0}))
		})
	};

	/*
	 * 实例2: toArray 
	 */
	bee.caseC02 = function(){
		//注意操作元素，要等dom加载完毕
		$(function(){
			l($('li'))
			l($('li').toArray());
		})		
	};

	/*
	 * 实例3: 伪素组转数组的原理
	 * 
	 */
	bee.caseC03 = function(){
		//注意操作元素，要等dom加载完毕
		$(function(){
			var a = $('li')
		    var arr = Array.prototype.slice.call(a)
		    l(arr)
		})		
	};

	/*
	 * 实例4: get
	 * 
	 */
	bee.caseC04 = function(){
		//注意操作元素，要等dom加载完毕
		$(function(){
			//获取原生集合
			var arr = $('li').get();
		    l(arr)
		    //获取jquery对象中的‘0’属性对应Dom元素
	    	var ele = $('li').get(0);
	        l(Object.prototype.toString.call(ele))
		})		
	};

	/*
	 * 实例5: pushStack
	 * 栈 
	 * 这个方法在内部使用比较多，比如，实例方法slice、eq、map就是用的这个
	 */
	bee.caseC05 = function(){
	
		$(function(){
			//这里得到的其实是span的实例对象，不过在该实例上多了一个属性prevObject，指向$('div')这个实例。
			//注意这个prevObject是自己的实例方法，并不是在原型上的。pushStack给加的呢
			var a = $('div').pushStack($('span'))
			
			a.css('color','red');
			l(a);
			a.prevObject.css('color','blue');

			//也可以使用end来调转到栈下面的元素。和上面的是等效的。
			//$('div').pushStack($('span')).css('color','red').end().css('color','yellow');	
		})
	};

	

	return bee;
})(bee||{});

//bee.caseC05();

















