/***********************************
 * 第二章节
 ***********************************/

var bee = (function(bee){

	/*
	 * 实例1:构造函数
	 * 构造函数中没有this的时候，返回的对象是空对象
	 */
	bee.caseB01 = function(){
		function Fish(){
			var width = 100;
		}
		var f = new Fish();
		l(f);
		l(f.constructor === Fish);
	};

	return bee;
})(bee||{});
