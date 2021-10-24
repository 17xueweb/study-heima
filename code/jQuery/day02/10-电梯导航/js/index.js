$(function() {
    //当我们点击了小li 此时不需要执行 页面滚动事件里面的li的背景选择添加current
    //节流阀 互斥锁
    var flag = true;

    //1.显示隐藏电梯导航
    var toolTop = $(".recommend").offset().top;

    toggleTool();

    function toggleTool() {
        console.log(toolTop);
        if ($(document).scrollTop() >= toolTop) {
            $(".fixedtool").fadeIn();
        } else {
            $(".fixedtool").fadeOut();
        }
    }
    $(window).scroll(function() {
        toggleTool();
        if (flag) {
            //3. 页面滚动到某个内容区域，左侧电梯导航小li相应添加和删除current类名
            $(".floor .w").each(function(i, ele) {
                //被页面卷去的部分
                if ($(document).scrollTop() >= $(ele).offset().top) {
                    console.log(i); // 打印出滚动到区域的索引
                    $(".fixedtool li").eq(i).addClass("current").siblings().removeClass("current");
                }
            });
        }

    });
    //2. 点击电梯导航页面可以滚动到相应的内容区域
    $(".fixedtool li").click(function() {
        flag = false;
        console.log($(this).index());
        //获取到索引后，一定要记得使用eq()方法
        //获取floor对应的div到页面顶部的距离
        var currentTop = $(".floor .w").eq($(this).index()).offset().top;
        //body、html元素滚动到对应的距离
        //滚动会调用上面$(window).scroll方法，这样就会再次增加current类
        $("body,html").stop().animate({
            scrollTop: currentTop
        }, function() {
            //滚动完了以后 回调函数再次将flag变为true
            flag = true;
        });
        //点击之后，让当前的小li 添加current 类名，兄弟移除current类名
        $(this).addClass("current").siblings().removeClass("current");
    });
});