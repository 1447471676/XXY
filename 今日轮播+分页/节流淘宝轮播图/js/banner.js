$(function () {

    var index = 1; //初始位置为 1 将 index 设置为全局变量


    var banner = throttle(bannerTo, 1000); //通过节流函数返回一个节流过的函数

    // 给左边的耳朵添加点击事件
    $(".left-btn").click(function () {

        banner(index - 1);
    });

    // 给右边的耳朵添加点击事件
    $(".right-btn").click(function () {
        banner(index + 1);
    });

    // 给小点添加点击事件
    $(".dotted-box li").click(function () {
        banner($(this).index() + 1);
    });

    // 设置banner位置
    function bannerTo(currentIndex) {
        // 方法内部更改 index;
        index = currentIndex;
        // 保证 index 一定正确
        if (currentIndex == 5) {
            index = 1;
        } else if (currentIndex == 0) {
            index = 4;
        }
        // 从此以后我们的index正确


        // 实际执行的动画
        $(".banner ul").stop(true, true).animate({
            marginLeft: -520 * currentIndex
        }, 400, function () {

            $(".banner ul").css({
                marginLeft: -520 * index
            });

        });


        $(".dotted-box li").eq(index - 1).addClass("active").siblings().removeClass("active");

    }

    setInterval(function () {
        banner(index + 1);
    }, 3000);


// 节流函数
    function throttle(fn, time) {
        var beforeTime = +new Date();
        return function () {
            var now = +new Date();
            if (now - beforeTime >= time) {
                fn.apply(this, arguments);
                beforeTime = now;
            }
        }
    }

});
