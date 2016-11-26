/***********************************
 * 第四章节 
 * DOM 加载专题研究
 ***********************************/

var bee = (function(bee){

	//实例1:
	//简单的开始，下面这个可以区分吧~
	bee.caseD01 = function(){
		window.onload = function(){
			l('页面全部加载完毕');
		}
		$(function(){
			l('DOM加载完毕');
		})
	}

	//实例2:
	//下面这三个表示的是相同的意思
	bee.caseD02 = function(){
		$(function(){l('ok1');})
		$(document).ready(function(){l('ok2')})
		$(document).on('ready',function(){l('ok3')})
		//这个是不行的
		$('body').on('ready',function(){l('不会显示。')})
	}

	//实例3: document.readyState
	//其实是非常简单的，只是我比较陌生而已，自己实践中很少使用到。
	//readyState会实施的记录当前window的加载情况
	//下面就是三种情况
	bee.caseD03 = function(){
		l('刚开始：'+document.readyState)
		$(function(){
			//interactive 代表已经可以交互
			l('DOM：'+document.readyState)
		})
		window.onload=function(){
			l('全部完成：'+document.readyState)
		}
	}

	//实例4:DOMContentLoaded
	//这个其实也是jquery DOM加载完毕的内部实现
	//DOMContentLoaded 是个事件的名字和“click”查不多用法,无非一个是自动触发，一个是点击的时候触发
	bee.caseD04 = function(){
		//注意：这里仅window
		window.onload = function(){
			l('全部加载完毕')
		}
		//注意：这里window\document都可以
		document.addEventListener('DOMContentLoaded',function(){
			l('DOM加载完毕')
		})
	}

	//实例5: 基础知识，onclick是原生的写法，c不用大写！！
	//这几个要是搞不清楚就不应该了
	bee.caseD05 = function(){
		document.onclick=function(){l('原生');}
		document.addEventListener('click',function(){l('原生2')})
		$(document).click(function(){l('jquery');})
		$(document).on('click',function(){l('jquery2');})
	}

	//实例6: DOMContentLoaded 事件没有 onDOMContentLoaded 的写法
	bee.caseD06 = function(){
		document.addEventListener('DOMContentLoaded',function(){l('DOM加载完毕')})
		//下面这个是无效的
		window.onDOMContentLoaded=function(){l('DOM加载完毕2');}
	}

	//实例7: 研究jquery DOM加载源码 【BOSS】
	//$(function(){}); 这个jq源码处理在 185 行
	//内部又调用了 jQuery(document).ready(function(){})  在240行
	//jQuery.ready.promise().done(fn); 这个是最终的调用   在819行
	//研究jQuery.ready.promise 可以发现，内部维护了一个 readyList 的变量
	//第一次进会这个上面函数的时候，readyList为undefined
	//之后就被赋予为：jQuery.Deferred() 这个对象了，这个其实就是我之前研究过的promise对象。（原理差不多，在baseTask中） 
	//最后执行的是 jQuery.ready（注意这个和 jQuery(document).ready 的区别）
	//jQuery.ready中的 resolveWith 是关键，表明异步中的内容已经完成，开始触发done中的函数
	//于是执行 l('xxx'); 
	
	//总的来说，内部实现也是使用的是 DOMContentLoaded
	//然后用了promise的实现原理，等到一切准备完毕才执行。
	bee.caseD07 = function(){
		$(function(){
			l('xxx');
		})
	}

	//实例8: holdReady
	bee.caseD08 = function(){
		$.holdReady(true);
		//被hold住了之后，下面的就执行不了了，
		//原理也很简单，jQuery.ready内部有相关条件限制。
		$(function(){
			l('xxx');
		})
	}

	//实例9: holdReady
	bee.caseD09 = function(){
		$.holdReady(true);
		//hold解除了~
		$.holdReady(false);
		$(function(){
			l('xxx');
		})
	}

	//实例10: holdReady 的应用场合：
	bee.caseD10 = function(){
		$.holdReady(true);
		$.getScript('./app/a.js',function(){$.holdReady(false);})
		$(function(){
			l('a.js加载完毕后,我才执行呢~~');
		})
	}

	/*
	 * 
	 */
	bee.caseD99 = function(){

	}
	
	return bee;
})(bee||{});

bee.caseD10();

















