function displayFace4(){
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
            "#B79981",
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
                        212,
                        -158
                    ],
                    [
                        212,
                        -222
                    ],
                    [
                        219,
                        -285
                    ],
                    [
                        233,
                        -347
                    ],
                    [
                        258,
                        -405
                    ],
                    [
                        295,
                        -455
                    ],
                    [
                        341,
                        -497
                    ],
                    [
                        391,
                        -531
                    ],
                    [
                        446,
                        -544
                    ],
                    [
                        501,
                        -533
                    ],
                    [
                        552,
                        -500
                    ],
                    [
                        601,
                        -461
                    ],
                    [
                        642,
                        -412
                    ],
                    [
                        668,
                        -356
                    ],
                    [
                        682,
                        -294
                    ],
                    [
                        690,
                        -232
                    ],
                    [
                        693,
                        -169
                    ],
                    [
                        255,
                        -93
                    ],
                    [
                        285,
                        -62
                    ],
                    [
                        328,
                        -51
                    ],
                    [
                        373,
                        -57
                    ],
                    [
                        413,
                        -78
                    ],
                    [
                        502,
                        -79
                    ],
                    [
                        542,
                        -61
                    ],
                    [
                        585,
                        -56
                    ],
                    [
                        627,
                        -67
                    ],
                    [
                        654,
                        -99
                    ],
                    [
                        455,
                        -152
                    ],
                    [
                        454,
                        -197
                    ],
                    [
                        454,
                        -242
                    ],
                    [
                        453,
                        -287
                    ],
                    [
                        403,
                        -315
                    ],
                    [
                        427,
                        -322
                    ],
                    [
                        452,
                        -330
                    ],
                    [
                        477,
                        -323
                    ],
                    [
                        501,
                        -316
                    ],
                    [
                        302,
                        -156
                    ],
                    [
                        330,
                        -138
                    ],
                    [
                        364,
                        -141
                    ],
                    [
                        393,
                        -168
                    ],
                    [
                        361,
                        -172
                    ],
                    [
                        326,
                        -170
                    ],
                    [
                        516,
                        -170
                    ],
                    [
                        545,
                        -143
                    ],
                    [
                        579,
                        -142
                    ],
                    [
                        607,
                        -160
                    ],
                    [
                        582,
                        -173
                    ],
                    [
                        547,
                        -175
                    ],
                    [
                        350,
                        -381
                    ],
                    [
                        387,
                        -368
                    ],
                    [
                        425,
                        -359
                    ],
                    [
                        450,
                        -366
                    ],
                    [
                        474,
                        -360
                    ],
                    [
                        512,
                        -370
                    ],
                    [
                        548,
                        -386
                    ],
                    [
                        513,
                        -433
                    ],
                    [
                        476,
                        -455
                    ],
                    [
                        448,
                        -458
                    ],
                    [
                        420,
                        -453
                    ],
                    [
                        384,
                        -430
                    ],
                    [
                        365,
                        -385
                    ],
                    [
                        424,
                        -383
                    ],
                    [
                        449,
                        -386
                    ],
                    [
                        474,
                        -384
                    ],
                    [
                        533,
                        -389
                    ],
                    [
                        475,
                        -419
                    ],
                    [
                        449,
                        -421
                    ],
                    [
                        423,
                        -417
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
