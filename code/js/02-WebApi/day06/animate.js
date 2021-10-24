function animate(obj, target, callback) {
    //callback = function() {}
    clearInterval(obj.timer);
    obj.timer = setInterval(function() {
        var step = (target - obj.offsetLeft) / 10;
        step = step > 0 ? Math.ceil(step) : Math.floor(step);
        if (obj.offsetLeft == target) {
            clearInterval(obj.timer);
            // if (callback) {
            //     callback();
            // }
            // 善用短路语法
            //如果有callback参数传进来吗？如果callback为true 则看下一个
            //如果callback为false 不再看右边了 第一个为false后面看都不看 
            //要求左边和右边都是true的时候 才会去执行
            callback && callback();

        }
        obj.style.left = obj.offsetLeft + step + 'px';

    }, 15);
}