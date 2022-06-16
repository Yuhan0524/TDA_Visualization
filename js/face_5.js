//mds 点图
function displayFace5(){
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
            "#7D8590",
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
                        198,
                        -108
                    ],
                    [
                        202,
                        -163
                    ],
                    [
                        212,
                        -217
                    ],
                    [
                        226,
                        -270
                    ],
                    [
                        248,
                        -320
                    ],
                    [
                        280,
                        -362
                    ],
                    [
                        320,
                        -398
                    ],
                    [
                        364,
                        -426
                    ],
                    [
                        411,
                        -433
                    ],
                    [
                        459,
                        -426
                    ],
                    [
                        503,
                        -398
                    ],
                    [
                        543,
                        -363
                    ],
                    [
                        575,
                        -320
                    ],
                    [
                        595,
                        -270
                    ],
                    [
                        607,
                        -216
                    ],
                    [
                        614,
                        -161
                    ],
                    [
                        616,
                        -105
                    ],
                    [
                        229,
                        -55
                    ],
                    [
                        255,
                        -27
                    ],
                    [
                        294,
                        -17
                    ],
                    [
                        334,
                        -23
                    ],
                    [
                        370,
                        -41
                    ],
                    [
                        442,
                        -39
                    ],
                    [
                        479,
                        -20
                    ],
                    [
                        519,
                        -14
                    ],
                    [
                        558,
                        -23
                    ],
                    [
                        584,
                        -51
                    ],
                    [
                        406,
                        -101
                    ],
                    [
                        407,
                        -142
                    ],
                    [
                        407,
                        -182
                    ],
                    [
                        407,
                        -223
                    ],
                    [
                        370,
                        -253
                    ],
                    [
                        389,
                        -258
                    ],
                    [
                        408,
                        -263
                    ],
                    [
                        428,
                        -257
                    ],
                    [
                        446,
                        -252
                    ],
                    [
                        270,
                        -108
                    ],
                    [
                        295,
                        -91
                    ],
                    [
                        327,
                        -92
                    ],
                    [
                        353,
                        -118
                    ],
                    [
                        324,
                        -125
                    ],
                    [
                        292,
                        -124
                    ],
                    [
                        461,
                        -117
                    ],
                    [
                        486,
                        -91
                    ],
                    [
                        518,
                        -89
                    ],
                    [
                        543,
                        -106
                    ],
                    [
                        522,
                        -122
                    ],
                    [
                        489,
                        -124
                    ],
                    [
                        339,
                        -324
                    ],
                    [
                        366,
                        -311
                    ],
                    [
                        391,
                        -301
                    ],
                    [
                        408,
                        -307
                    ],
                    [
                        425,
                        -301
                    ],
                    [
                        451,
                        -313
                    ],
                    [
                        480,
                        -326
                    ],
                    [
                        451,
                        -348
                    ],
                    [
                        426,
                        -358
                    ],
                    [
                        408,
                        -360
                    ],
                    [
                        389,
                        -358
                    ],
                    [
                        365,
                        -347
                    ],
                    [
                        353,
                        -325
                    ],
                    [
                        391,
                        -325
                    ],
                    [
                        408,
                        -327
                    ],
                    [
                        425,
                        -325
                    ],
                    [
                        466,
                        -327
                    ],
                    [
                        425,
                        -326
                    ],
                    [
                        408,
                        -328
                    ],
                    [
                        390,
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