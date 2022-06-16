//mds 点图
function displayFace1(){
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
            "EDD8AB",
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
                        176,
                        -130
                    ],
                    [
                        182,
                        -188
                    ],
                    [
                        193,
                        -246
                    ],
                    [
                        208,
                        -301
                    ],
                    [
                        235,
                        -352
                    ],
                    [
                        275,
                        -394
                    ],
                    [
                        323,
                        -428
                    ],
                    [
                        375,
                        -454
                    ],
                    [
                        428,
                        -458
                    ],
                    [
                        476,
                        -445
                    ],
                    [
                        514,
                        -410
                    ],
                    [
                        547,
                        -369
                    ],
                    [
                        573,
                        -323
                    ],
                    [
                        589,
                        -271
                    ],
                    [
                        594,
                        -216
                    ],
                    [
                        596,
                        -162
                    ],
                    [
                        593,
                        -108
                    ],
                    [
                        227,
                        -86
                    ],
                    [
                        255,
                        -56
                    ],
                    [
                        297,
                        -43
                    ],
                    [
                        341,
                        -45
                    ],
                    [
                        383,
                        -58
                    ],
                    [
                        440,
                        -52
                    ],
                    [
                        475,
                        -34
                    ],
                    [
                        513,
                        -27
                    ],
                    [
                        549,
                        -34
                    ],
                    [
                        571,
                        -60
                    ],
                    [
                        415,
                        -106
                    ],
                    [
                        419,
                        -142
                    ],
                    [
                        423,
                        -179
                    ],
                    [
                        428,
                        -217
                    ],
                    [
                        383,
                        -251
                    ],
                    [
                        404,
                        -254
                    ],
                    [
                        426,
                        -258
                    ],
                    [
                        446,
                        -251
                    ],
                    [
                        463,
                        -245
                    ],
                    [
                        275,
                        -122
                    ],
                    [
                        299,
                        -106
                    ],
                    [
                        329,
                        -105
                    ],
                    [
                        355,
                        -124
                    ],
                    [
                        329,
                        -131
                    ],
                    [
                        299,
                        -132
                    ],
                    [
                        462,
                        -116
                    ],
                    [
                        484,
                        -93
                    ],
                    [
                        513,
                        -90
                    ],
                    [
                        535,
                        -104
                    ],
                    [
                        516,
                        -116
                    ],
                    [
                        488,
                        -119
                    ],
                    [
                        345,
                        -332
                    ],
                    [
                        375,
                        -311
                    ],
                    [
                        406,
                        -297
                    ],
                    [
                        426,
                        -302
                    ],
                    [
                        445,
                        -295
                    ],
                    [
                        470,
                        -304
                    ],
                    [
                        493,
                        -322
                    ],
                    [
                        473,
                        -350
                    ],
                    [
                        450,
                        -366
                    ],
                    [
                        429,
                        -370
                    ],
                    [
                        407,
                        -369
                    ],
                    [
                        376,
                        -359
                    ],
                    [
                        360,
                        -332
                    ],
                    [
                        406,
                        -321
                    ],
                    [
                        427,
                        -321
                    ],
                    [
                        446,
                        -318
                    ],
                    [
                        480,
                        -323
                    ],
                    [
                        447,
                        -333
                    ],
                    [
                        427,
                        -338
                    ],
                    [
                        407,
                        -337
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
