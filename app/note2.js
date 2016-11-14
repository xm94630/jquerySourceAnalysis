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
	if(){ 
		//$('<li>')
		
		在创建标签的时候，还有对第二个参数上下文的设置。
		为何还有上下文呢？
		其实这个时候，第二个参数默认是 document
		当有iframe（或者别的xml之类的）的时候，第二个参数可以改成对应的。但是这个不是很有用罢了。

		第二个参数，还对下面两种情况作区分
		$('<li>',document)
		$('<li>',$(document))
		它通过第二个参数是否为jQuery实例来判断的。用的 instanceof。
		在 bee.case19 中有对 jquery实例判断有说明。

		这里需要对 '<li>1</li><li>2</li>' 的参数做处理。
		比如在：$('<li>1</li><li>2</li>').appendTo('ul');之中
		$('<li>1</li><li>2</li>')应该成为：
		this = {
			0:'li',
			1:'li',
			length:2
		}

		这里会用到一个名为 parseHTML的方法

		另外还会处理这种形式：
		$('<li>',{html:'xxx',title:'hi'})   
		//这里会后面的括号中的内容会一定的形式渲染到li元素上
		//我觉得jquery选择器中，重要要区分的是“创建”、还是“选择”
		//这里的操作是创建，第二个参数是辅助创建的，一般少用
		//第二参数在第一个参数为单个标签才有效
		//第二参数还需要是对象自变量

		//这里还有一个重要的思想！！！
		//{html:'xxx',title:'hi'}中的属性，如果是jquery的方法，就会被调用
		//所以这里的“html”,就会调用，参数就是xxx






	}else{ 
		//$('#div') 
	}

}else{

}































