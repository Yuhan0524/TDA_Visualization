//mds 点图
function displayFace7(){
    //1实例化对象
    var myChart = echarts.init(document.querySelector('.face  .chart'));
    //2指定配置项和数据
    var option={
        "animation": true,
        "animationThreshold": 2000,
        "animationDuration": 1000,
        "animationEasing": "cubicOut",
        "animationDelay": 0,
        "animationDurationUpdate": 300,
        "animationEasingUpdate": "cubicOut",
        "animationDelayUpdate": 0,
        "color": [
            "#AF57AC",
            "#c23531",
            "#2f4554",
            "#61a0a8",
            "#d48265",
            "#749f83",
            "#ca8622",
            "#bda29a",
            "#6e7074",
            "#546570",
            "#c4ccd3",
            "#f05b72",
            "#ef5b9c",
            "#f47920",
            "#905a3d",
            "#fab27b",
            "#2a5caa",
            "#444693",
            "#726930",
            "#b2d235",
            "#6d8346",
            "#ac6767",
            "#1d953f",
            "#6950a1",
            "#918597"
        ],
        "series": [
            {
                "type": "scatter",
                "name": "face",
                "symbolSize": 10,
                "data": [
                    [
                        183,
                        -101
                    ],
                    [
                        184,
                        -156
                    ],
                    [
                        191,
                        -212
                    ],
                    [
                        205,
                        -266
                    ],
                    [
                        228,
                        -316
                    ],
                    [
                        260,
                        -361
                    ],
                    [
                        300,
                        -398
                    ],
                    [
                        345,
                        -426
                    ],
                    [
                        393,
                        -436
                    ],
                    [
                        440,
                        -424
                    ],
                    [
                        481,
                        -394
                    ],
                    [
                        516,
                        -356
                    ],
                    [
                        545,
                        -311
                    ],
                    [
                        563,
                        -262
                    ],
                    [
                        573,
                        -209
                    ],
                    [
                        580,
                        -155
                    ],
                    [
                        580,
                        -101
                    ],
                    [
                        225,
                        -40
                    ],
                    [
                        252,
                        -18
                    ],
                    [
                        287,
                        -10
                    ],
                    [
                        323,
                        -13
                    ],
                    [
                        356,
                        -28
                    ],
                    [
                        430,
                        -30
                    ],
                    [
                        460,
                        -14
                    ],
                    [
                        494,
                        -9
                    ],
                    [
                        525,
                        -15
                    ],
                    [
                        549,
                        -38
                    ],
                    [
                        391,
                        -86
                    ],
                    [
                        392,
                        -124
                    ],
                    [
                        392,
                        -162
                    ],
                    [
                        392,
                        -200
                    ],
                    [
                        353,
                        -231
                    ],
                    [
                        371,
                        -236
                    ],
                    [
                        391,
                        -241
                    ],
                    [
                        411,
                        -236
                    ],
                    [
                        429,
                        -229
                    ],
                    [
                        261,
                        -93
                    ],
                    [
                        285,
                        -77
                    ],
                    [
                        314,
                        -78
                    ],
                    [
                        338,
                        -101
                    ],
                    [
                        311,
                        -107
                    ],
                    [
                        282,
                        -105
                    ],
                    [
                        441,
                        -101
                    ],
                    [
                        463,
                        -78
                    ],
                    [
                        492,
                        -77
                    ],
                    [
                        514,
                        -93
                    ],
                    [
                        494,
                        -106
                    ],
                    [
                        466,
                        -106
                    ],
                    [
                        319,
                        -309
                    ],
                    [
                        344,
                        -290
                    ],
                    [
                        373,
                        -277
                    ],
                    [
                        392,
                        -283
                    ],
                    [
                        410,
                        -277
                    ],
                    [
                        437,
                        -289
                    ],
                    [
                        461,
                        -309
                    ],
                    [
                        438,
                        -342
                    ],
                    [
                        412,
                        -359
                    ],
                    [
                        393,
                        -362
                    ],
                    [
                        372,
                        -359
                    ],
                    [
                        344,
                        -344
                    ],
                    [
                        333,
                        -311
                    ],
                    [
                        373,
                        -302
                    ],
                    [
                        392,
                        -303
                    ],
                    [
                        409,
                        -301
                    ],
                    [
                        449,
                        -309
                    ],
                    [
                        411,
                        -325
                    ],
                    [
                        393,
                        -327
                    ],
                    [
                        373,
                        -325
                    ]
                ],
                "label": {
                    "show": false,
                    "position": "top",
                    "margin": 8
                },
                "rippleEffect": {
                    "show": true,
                    "brushType": "stroke",
                    "scale": 2.5,
                    "period": 4
                }
            }
        ],
        "legend": [
            {
                "data": [
                    "face"
                ],
                "selected": {
                    "face": true
                }
            }
        ],
        "tooltip": {
            "show": true,
            "trigger": "item",
            "triggerOn": "mousemove|click",
            "axisPointer": {
                "type": "line"
            },
            "showContent": true,
            "alwaysShowContent": false,
            "showDelay": 0,
            "hideDelay": 100,
            "textStyle": {
                "fontSize": 14
            },
            "borderWidth": 0,
            "padding": 5
        },
        "xAxis": [
            {
                "axisLine":{
                    "show":false
                },
                axisLabel:{show:false},
                axisTick:{
                    show:false,
                    alignWithLabel:false,
                },
                "show": true,
                "scale": false,
                "nameLocation": "end",
                "nameGap": 15,
                "gridIndex": 0,
                "inverse": false,
                "offset": 0,
                "splitNumber": 5,
                "minInterval": 0,
                "splitLine": {
                    "show": false,
                    "lineStyle": {
                        "show": true,
                        "width": 1,
                        "opacity": 1,
                        "curveness": 0,
                        "type": "solid"
                    }
                },
                
            }
        ],
        "yAxis": [
            {
                "axisLine":{
                    "show":false
                },
                axisLabel:{show:false},
                axisTick:{
                    show:false,
                    alignWithLabel:false,
                },
                "show": true,
                "scale": false,
                "nameLocation": "end",
                "nameGap": 15,
                "gridIndex": 0,
                "inverse": false,
                "offset": 0,
                "splitNumber": 5,
                "minInterval": 0,
                "splitLine": {
                    "show": false,
                    "lineStyle": {
                        "show": true,
                        "width": 1,
                        "opacity": 1,
                        "curveness": 0,
                        "type": "solid"
                    }
                }
            }
        ]
    };
    
    myChart.setOption(option);
    window.addEventListener("resize", function () {
      myChart.resize();
    });
};
