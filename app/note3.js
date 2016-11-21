//笔记3

//实例属性和方法
jQuery.fn = jQuery.prototype = {
	jquery 版本
	constructor 指向jQery
	init() 初始化、参数
    //之前的内容在笔记2，下面是新的内容
    selector
    length
    toArray 转数组 和makeArray比较类似
    get 转原生集合 
    pushStack jQ对象入栈
    each 遍历集合。就是加强版的for循环，它既是实例方法也是工具方法。
    ready Dom加载接口
    slice 背部实现用了pushStack
    first 集合的第一项
    last 集合的最后一项
    eq   集合的最后一项
    map  返回新集合 对集合二次处理。也是调用工具方法map
    end  找到栈的下一个
    push 内部使用, 其实就是原生数组的方法！
    pull 内部使用
    splice 内部使用
}

//静态方法
jQuery.extend = jQuery.fn.extend = function(){}
$.extend(ob); //扩展工具方法
$.fn.extend(ob); //扩展实例方法
$.extend(a,{xx},{yy})//多个参数，扩展到a
$.extend(true,a,{xx},{yy})//深拷贝

extend 属于 拷贝继承
还有 类继承、原型继承


