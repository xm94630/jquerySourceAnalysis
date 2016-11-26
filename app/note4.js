//笔记4

//jQuery工具方法
jQuery.extend({
    expamdo:生成唯一的jq字符串 内部使用
    noConflict():防止冲突
    
    //这几个是和DOM加载有关的
    //还包括最后的 jQuery.ready.promise
    //内容还是比较多的。有点复杂哦
    isReady : DOM是否加载完毕 内部
    readyWait: 等待多少文件的计时器 内部
    holdReady(): 推迟DOM触发
    ready(): 准备DOM触发
    
    isFunction(): 是否为函数
    isArray()   : 是否为数组
    isWindow()  : 是否为window
    isNumeric() : 是否为数字
    type()      : 判断数据类型
    isPlainObject() : 是否为对象自变量
    isEmptyObject() : 是否为空对象
    error()  : 抛出异常
    parseHTML() : 解析节点
    parseJson() : 解析JSON
    parseXML()  : 解析xml
    noop(): 空函数
    globalEval(): 全局解析JS
    camelCase() : 转驼峰
    nodeName()  : 是否为指定节点名 内部使用
    each() : 遍历集合
    trim() : 去前后空格
    makeArray() : 类数组转为真实数组
    inArray()   : 数组版本的indexof
    merge()     : 合并数组
    grep()      : 过滤新数组
    map()       : 映射新数组
    guid()      : 唯一标识符 内部 
    proxy()     : 修改this指向
    access()    : 多功能值操作 内部
    now()       : 当前时间
    swap()      : css交换 内部
});

//检测DOM的异步操作 内部
jQuery.ready.promise = function(){}

function isArraylike() 类似数组的判断 内部






