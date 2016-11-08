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