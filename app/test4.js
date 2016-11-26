/***********************************
 * 第四章节 
 * DOM 加载专题研究
 ***********************************/

var bee = (function(bee){

	//简单的开始
	bee.caseD01 = function(){
		window.onload = function(){
			l('页面全部加载完毕');
		}
		$(function(){
			l('DOM加载完毕');
		})
	}

	/*
	 * 
	 */
	bee.caseD02 = function(){

	}
	
	return bee;
})(bee||{});

bee.caseD01();

















