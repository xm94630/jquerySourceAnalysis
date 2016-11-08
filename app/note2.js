//实例属性和方法
jQuery.fn = jQuery.prototype = {
	jquery 版本
	constructor 指向jQery
	init() 初始化、参数
	   对参数的处理
	   $("") $(null) $(undefined) $(false)
	   对字符串的参数处理
	       选择
		   $('#div') $('.box') $('div') $('#div div.box')
		   还可以创建元素
		   $('<li>')
	   对dom元素处理了
	   $(this) $(document)
	   传函数
	   $(function(){})
	   传数组 传对象
	   $([]) $({})

}

//init中传入参数之后，根据类型进行if分类处理。
//下面是可能有的所有类型
$("") $(null) $(undefined) $(false)
$('#div') $('.box') $('div') $('#div div.box')
$('<li>') $('<li>1</li><li>2</li>') 
$('<li>Hello') 
$(this) $(document)
$(function(){})
$([]) $({})

//对上面的进行条件处理之后呢，得到的结果活存放在 match 的变量之中
if(){

	match = [null,'<li>',null]  //$('<li>')
	match = [null,'<li>1</li><li>2</li>',null]  //$('<li>1</li><li>2</li>')

}else{
	match = null ; //$('.box') $('div') $('#div div.box')
	
	//这个其实是进行了 /正则/.exec('参数') 的操作
	//之前我已经研究过 exec 的用法，所以非常好理解结果
	match = ['#div',null,'div1'] ; //$('#div')
	match = ['<li>Hello','<li>','null'] ; //$('<li>Hello')
}

if(){ //能进入的是创建标签的和id的 $('#div') $('<li>')

	//进一步判断 
	if(){ $('<li>') }else{ $('#div') }

}else{

}































