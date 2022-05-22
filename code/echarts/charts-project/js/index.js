// 监控区域模块
(function() {
    // 事件委托 a
    $(".monitor .tabs").on('click', 'a', function() {
        $(this).addClass('active').siblings('a').removeClass('active');

        //jquery中可以通过index获取tab的索引号
        // console.log($(this).index());
        // 选取对应索引号的content
        $(".monitor .content").eq($(this).index()).show().siblings(".content").hide();
    });
})();
// 点位分布统计模块
(function() {
    // 1.实例化对象
    var myChart = echarts.init(document.querySelector(".pie"));
    // 2.指定配置项和数据
    var option = {
        tooltip: {
            //trigger触发方式，非轴图形，使用item的意思是放到数据对应图形上触发提示
            trigger: 'item',
            //格式化提示内容：
            //a代表series系列图表名称
            //b代表series数据名称data里面的name
            //c代表series数据值data里面的value
            //d代表 当前数据/总数据的比例
            formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        // 注意颜色写的位置 8个颜色对应8条数据
        color: [
            "#006cff",
            "#60cda0",
            "#ed8884",
            "#ff9f7f",
            "#0096ff",
            "#9fe6b8",
            "#32c5e9",
            "#1d9dff"
        ],
        series: [{
            // 图表名称
            name: '点位统计',
            // 图表类型
            type: 'pie',
            // 饼形图半径，可以是像素，也可以是百分比（基于DOM容器大小的百分比），第一个是内半径，第二个是外半径（*通过它可以实现饼形图大小*）
            //如果第一个为0  则内圆就没有了
            // 如果radius是百分比，则必须要加引号
            radius: ["10%", "70%"],
            // 图表中心位置left 50% top 50% 距离图表DOM容器 这个可以调整饼图位置
            center: ['50%', '50%'],
            // radius 半径模式，另外一种是area面积模式
            roseType: 'radius',
            data: [
                { value: 40, name: '云南' },
                { value: 33, name: '北京' },
                { value: 28, name: '山东' },
                { value: 22, name: '安徽' },
                { value: 20, name: '江西' },
                { value: 15, name: '河北' },
                { value: 12, name: '江苏' },
                { value: 10, name: '深圳' }
            ],
            // 修饰饼形图文字相关的样式 label对象
            label: {
                fontSize: 10
            },
            // length第一条线 length2第二条线
            labelLine: {
                length: 6,
                length2: 8
            }
        }]
    };
    // 3. 配置项和数据给我们的实例化对象
    myChart.setOption(option);
    //4.当我们浏览器缩放的时候，图表也等比例缩放
    // 屏幕缩放事件resize
    window.addEventListener('resize', function() {
        // 让我们图表调用resize()这个方法
        myChart.resize();
    });
})();
(function() {
    var item = {
        name: '',
        value: 1200,
        // 修改当前柱形的样式
        itemStyle: {
            color: "#254065"
        },
        // 鼠标放到柱子上不想高亮显示
        emphasis: {
            itemStyle: {
                color: "#254065"
            }
        },
        // 3. 鼠标经过柱子不显示提示框组件
        tooltip: {
            extraCssText: "opacity: 0"
        }
    };
    //1.实例化对象
    var myChart = echarts.init(document.querySelector(".bar"));
    // 2.指定配置和数据
    var option = {
        color: new echarts.graphic.LinearGradient(
            // (x1,y2) 点到点 (x2,y2) 之间进行渐变
            0,
            0,
            0,
            1, [
                { offset: 0, color: "#00fffb" }, // 0 起始颜色
                { offset: 1, color: "#0061ce" } // 1 结束颜色
            ]
        ),
        tooltip: {
            // axis鼠标放到x轴上触发，item鼠标放到图形上触发
            trigger: 'item',
            // 只有trigger为axis 会有阴影 当type为line 会有一条线
            axisPointer: {
                type: 'line'
            }
        },
        grid: {
            left: '0%',
            right: '3%',
            bottom: '3%',
            top: '3%',
            // 当我们把left设置为0%，按理说应该刻度没有了，所以把containLabel设置为true来显示刻度
            containLabel: true,
            // 是否显示坐标轴网格
            show: true,
            // 设置边框颜色 网格四条边颜色
            borderColor: "rgba(0, 240, 255, 0.3)"
        },
        xAxis: [{
            // 类目必须和data相结合使用
            type: 'category',
            data: ["上海",
                "广州",
                "北京",
                "深圳",
                "合肥",
                "",
                "......",
                "",
                "杭州",
                "厦门",
                "济南",
                "成都",
                "重庆"
            ],
            // 刻度，如果为true 刻度与柱子对齐，如果false，柱子在刻度中间显示
            axisTick: {
                alignWithLabel: false,
                // show为false 把x轴的刻度 隐藏起来
                show: false
            },
            //设置x轴刻度标签文字
            // 饼图设置文字为 labe
            axisLabel: {
                color: "#4c9bfd"
            },
            // x轴这条线的颜色样式
            axisLine: {
                lineStyle: {
                    color: "rgba(0, 240, 255, 0.3)"
                }
            }
        }],
        yAxis: [{
            type: 'value',
            axisTick: {
                alignWithLabel: false,
                show: false
            },
            axisLabel: {
                color: "#4c9bfd"
            },
            axisLine: {
                lineStyle: {
                    color: "rgba(0, 240, 255, 0.3)"
                }
            },
            // y轴分割线 的颜色 样式
            splitLine: {
                lineStyle: {
                    color: "rgba(0, 240, 255, 0.3)"
                }
            }
        }],
        series: [{
            name: 'Direct',
            type: 'bar',
            barWidth: '60%',
            data: [2100,
                1900,
                1700,
                1560,
                1400,
                item,
                item,
                item,
                900,
                750,
                600,
                480,
                240
            ]
        }]
    };
    // 3.把配置给对象
    myChart.setOption(option);
    window.addEventListener('resize', function() {
        // 让我们图表调用resize()这个方法
        myChart.resize();
    });
})();
// 销售统计模块
(function() {
    // (1)准备数据
    var data = {
        year: [
            [24, 40, 101, 134, 90, 230, 210, 230, 120, 230, 210, 120],
            [40, 64, 191, 324, 290, 330, 310, 213, 180, 200, 180, 79]
        ],
        quarter: [
            [23, 75, 12, 97, 21, 67, 98, 21, 43, 64, 76, 38],
            [43, 31, 65, 23, 78, 21, 82, 64, 43, 60, 19, 34]
        ],
        month: [
            [34, 87, 32, 76, 98, 12, 32, 87, 39, 36, 29, 36],
            [56, 43, 98, 21, 56, 87, 43, 12, 43, 54, 12, 98]
        ],
        week: [
            [43, 73, 62, 54, 91, 54, 84, 43, 86, 43, 54, 53],
            [32, 54, 34, 87, 32, 45, 62, 68, 93, 54, 54, 24]
        ]
    };
    //1. 实例化对象
    var myChart = echarts.init(document.querySelector(".line"));
    // 2. 指定配置项和数据
    var option = {
        // 线的颜色
        color: ["#00f2f1", "#ed3f35"],
        tooltip: {
            // 通过坐标轴来触发
            trigger: 'axis'
        },
        legend: {
            // 图例距离容器是 10%
            right: "10%",
            // 修饰图例文字的颜色
            textStyle: {
                color: "#4c9bfd"
            },
            // 如果series 里面设置了name， 此时图例组件的data可以省略
            // data: ['预期销售额', '实际销售额']
        },
        grid: {
            top: "20%",
            left: '3%',
            right: '4%',
            bottom: '3%',
            //是否显示网格边框
            show: true,
            // 边框颜色
            borderColor: "#012f4a",
            // 显示刻度标签
            containLabel: true
        },
        xAxis: {
            type: 'category',
            // 坐标轴两边留白策略，false线紧贴着y轴
            boundaryGap: false,
            // 去除刻度
            axisTick: {
                show: false
            },
            // 修饰刻度标签的颜色
            axisLabel: {
                color: "#4c9bfd"
            },
            // 是否显示坐标轴轴线
            axisLine: {
                show: false
            },
            data: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12']
        },
        yAxis: {
            type: 'value',
            // 去除y轴刻度线
            axisTick: {
                show: false
            },
            // 修饰刻度标签的颜色
            axisLabel: {
                color: "#4c9bfd"
            },
            // 修改y轴分割线的颜色
            splitLine: {
                lineStyle: {
                    color: "#012f4a"
                }
            }
        },
        series: [{
                name: '预期销售额',
                type: 'line',
                stack: 'Total',
                // 是否平滑曲线显示
                smooth: true,
                data: data.year[0],
            },
            {
                name: '实际销售额',
                type: 'line',
                stack: 'Total',
                smooth: true,
                data: data.year[1]
            }
        ]
    };
    // 3. 把配置项和数据给实例对象
    myChart.setOption(option);
    // 4. tab切换效果制作
    // (2) 点击切换效果
    $(".sales .caption").on('click', 'a', function() {
        // 点击事件之后 一定要把索引号给index 下一次定时器播放从下一个开始
        // 此时要注意这个索引号问题
        index = $(this).index() - 1;
        // 点击当前a 高亮显示 调用active
        $(this).addClass("active").siblings("a").removeClass("active");
        // 根据拿到的数据重新渲染 series里面的data值
        option.series[0].data = data[this.dataset.type][0];
        option.series[1].data = data[this.dataset.type][1];
        // 重新把设置好的新数据给实例对象
        myChart.setOption(option);
    });
    var as = $(".caption a");
    var index = 0;
    var timer = setInterval(function() {
        index++;
        // 当大于4的时候  将index赋值为0   从头开始
        if (index >= 4) index = 0;
        as.eq(index).click();
    }, 1000);
    // 鼠标移动到图表上  停止定时器
    $(".sales").hover(function() {
        clearInterval(timer);
    }, function() {
        // 开启定时器前 先清除定时器
        clearInterval(timer);
        timer = setInterval(function() {
            // 当大于4的时候  将index赋值为0   从头开始
            if (index >= 4) index = 0;
            as[index].click();
            index++;
        }, 1000);
    });
})();
// 销售渠道模块 雷达图
(function() {
    // 1. 实例化对象
    var myChart = echarts.init(document.querySelector(".radar"));
    var option = {
        tooltip: {
            show: true,
            // 控制提示框组件显示位置
            position: ["60%", "10%"]
        },
        radar: {
            indicator: [
                { name: "机场", max: 100 },
                { name: "商场", max: 100 },
                { name: "火车站", max: 100 },
                { name: "汽车站", max: 100 },
                { name: "地铁", max: 100 }
            ],
            // 修改雷达图的大小
            radius: "65%",
            // 分割的圆圈的个数
            splitNumber: 4,
            // 修饰雷达图文字的颜色
            name: {
                textStyle: {
                    color: "#4c9bfd"
                }
            },
            shape: 'circle',
            axisName: {
                color: 'rgb(238, 197, 102)'
            },
            // 分割的圆圈线条的样式
            splitLine: {
                lineStyle: {
                    color: "rgba(255, 255, 255, 0.5)"
                }
            },
            splitArea: {
                show: false
            },
            // 坐标轴的线修改为白色半透明
            axisLine: {
                lineStyle: {
                    color: 'rgba(255, 255, 255, 0.5)'
                }
            }
        },
        series: [{
            name: 'Beijing',
            type: 'radar',
            // 填充区域的线条颜色
            lineStyle: {
                normal: {
                    color: "#fff",
                    width: 1,
                    opacity: 0.5
                }
            },
            data: [
                [90, 19, 56, 11, 34]
            ],
            // 设置图形标记 （拐点）
            symbol: 'circle',
            // 设置小圆点大小
            symbolSize: 5,
            // 设置小圆点颜色
            itemStyle: {
                color: '#fff'
            },
            // 让小圆点显示数据
            label: {
                show: true,
                fontSize: 10
            },
            // 修饰区域填充样式
            areaStyle: {
                color: "rgba(238, 197, 102, 0.6)"
            }
        }]
    };
    // 3.把配置项和数据给实例对象
    myChart.setOption(option);
    window.addEventListener('resize', function() {
        // 让我们图表调用resize()这个方法
        myChart.resize();
    });
})();
// 销售模块饼形图 半圆形 设置方式
(function() {
    //1. 实例化对象
    var myChart = echarts.init(document.querySelector(".gauge"));
    //2.指定数据和配置
    var option = {
        series: [{
            name: '销售进度',
            type: 'pie',
            radius: ['130%', '150%'],
            // 移动饼图位置 水平 垂直
            center: ["48%", "80%"],
            // 是否启用防止标签重叠
            // avoidLabelOverlap: false,
            labelLine: {
                normal: {
                    show: false
                }
            },
            // 饼形图的 起始角度 为180度  注意不是旋转角度
            startAngle: 180,
            // 鼠标经过不需要放大偏移图形(鼠标经过不放大)
            hoverOffset: 0,
            data: [{
                    value: 100,
                    // 渐变色
                    itemStyle: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                            { offset: 0, color: "#00c9e0" },
                            { offset: 1, color: "#005fc1" }
                        ])
                    }
                },
                {
                    value: 100,
                    itemStyle: {
                        color: "#12274d"
                    }
                },
                // 修改饼图颜色
                { value: 200, itemStyle: { color: "transparent" } }
            ]
        }]
    };
    // 3.数据和配置给实例对象
    myChart.setOption(option);
    window.addEventListener('resize', function() {
        // 让我们图表调用resize()这个方法
        myChart.resize();
    });
})();
// 全国热榜模块
(function() {
    //1. 准备相关数据
    var hotData = [{
            city: "北京", // 城市
            sales: "25, 179", // 销售额
            flag: true, //  上升还是下降
            brands: [
                //  品牌种类数据
                { name: "可爱多", num: "9,086", flag: true },
                { name: "娃哈哈", num: "8,341", flag: true },
                { name: "喜之郎", num: "7,407", flag: false },
                { name: "八喜", num: "6,080", flag: false },
                { name: "小洋人", num: "6,724", flag: false },
                { name: "好多鱼", num: "2,170", flag: true }
            ]
        },
        {
            city: "河北",
            sales: "23,252",
            flag: false,
            brands: [
                { name: "可爱多", num: "3,457", flag: false },
                { name: "娃哈哈", num: "2,124", flag: true },
                { name: "喜之郎", num: "8,907", flag: false },
                { name: "八喜", num: "6,080", flag: true },
                { name: "小洋人", num: "1,724", flag: false },
                { name: "好多鱼", num: "1,170", flag: false }
            ]
        },
        {
            city: "上海",
            sales: "20,760",
            flag: true,
            brands: [
                { name: "可爱多", num: "2,345", flag: true },
                { name: "娃哈哈", num: "7,109", flag: true },
                { name: "喜之郎", num: "3,701", flag: false },
                { name: "八喜", num: "6,080", flag: false },
                { name: "小洋人", num: "2,724", flag: false },
                { name: "好多鱼", num: "2,998", flag: true }
            ]
        },
        {
            city: "江苏",
            sales: "23,252",
            flag: false,
            brands: [
                { name: "可爱多", num: "2,156", flag: false },
                { name: "娃哈哈", num: "2,456", flag: true },
                { name: "喜之郎", num: "9,737", flag: true },
                { name: "八喜", num: "2,080", flag: true },
                { name: "小洋人", num: "8,724", flag: true },
                { name: "好多鱼", num: "1,770", flag: false }
            ]
        },
        {
            city: "山东",
            sales: "20,760",
            flag: true,
            brands: [
                { name: "可爱多", num: "9,567", flag: true },
                { name: "娃哈哈", num: "2,345", flag: false },
                { name: "喜之郎", num: "9,037", flag: false },
                { name: "八喜", num: "1,080", flag: true },
                { name: "小洋人", num: "4,724", flag: false },
                { name: "好多鱼", num: "9,999", flag: true }
            ]
        }
    ];
    // 2.根据数据渲染各省热销 sup 模块内容
    // (1)变量hotData对象
    var supHTML = "";
    $.each(hotData, function(index, item) {
        supHTML += '<li><span>' + item.city + '</span><span>' + item.sales;
        if (item.flag) {
            supHTML += ' <s class="icon-up"></s>';
        } else {
            supHTML += ' <s class="icon-down"></s>';
        }
        supHTML += '</span></li>';
    });
    $(".sup").html(supHTML);
    //3. 当鼠标进入 tab的时候，小li高亮显示
    $(".province .sup").on('mouseenter', 'li', function() {
        index = $(this).index();
        render($(this));
    });

    // 声明一个函数 里面设置sup当前小li高亮 还有对应品牌对象渲染
    function render(that) {
        that.addClass("active").siblings().removeClass("active");
        // console.log($(this).index());
        // 可以通过hotData[$(this).index()]得到当前的城市
        // console.log(hotData[$(this).index()].brands);
        // 开始遍历品牌数组
        var subHTML = "";
        $.each(hotData[that.index()].brands, function(index, item) {
            subHTML += '<li><span>' + item.name + '</span><span>' + item.num;
            if (item.flag) {
                subHTML += '<s class="icon-up"></s>';
            } else {
                subHTML += '<s class="icon-down"></s>';
            }
            subHTML += '</span></li>';
        });
        $(".sub").html(subHTML);

    }
    // 4. 默认把第一个小li处于鼠标经过状态(重点)
    var lis = $(".province .sup li");
    lis.eq(0).mouseenter();
    //5. 开启定时器
    var index = 0;
    var timer = setInterval(function() {
        index++;
        if (index >= 5) index = 0;
        // lis.eq(index).mouseenter();
        render(lis.eq(index));
    }, 2000);
    $(".province .sup").hover(function() {
        // 鼠标经过事件
        clearInterval(timer);
    }, function() {
        // 鼠标离开事件
        clearInterval(timer);
        timer = setInterval(function() {
            index++;
            if (index >= 5) index = 0;
            // lis.eq(index).mouseenter();
            render(lis.eq(index));
        }, 2000);
    });
})();