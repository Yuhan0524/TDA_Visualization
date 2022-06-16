//
function displayFace2(){
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
            "#F7BC99",
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
                        154,
                        -80
                    ],
                    [
                        154,
                        -135
                    ],
                    [
                        158,
                        -189
                    ],
                    [
                        167,
                        -244
                    ],
                    [
                        188,
                        -292
                    ],
                    [
                        222,
                        -334
                    ],
                    [
                        264,
                        -367
                    ],
                    [
                        311,
                        -392
                    ],
                    [
                        360,
                        -399
                    ],
                    [
                        405,
                        -391
                    ],
                    [
                        445,
                        -364
                    ],
                    [
                        482,
                        -331
                    ],
                    [
                        512,
                        -292
                    ],
                    [
                        531,
                        -247
                    ],
                    [
                        540,
                        -197
                    ],
                    [
                        545,
                        -148
                    ],
                    [
                        547,
                        -98
                    ],
                    [
                        208,
                        -36
                    ],
                    [
                        236,
                        -9
                    ],
                    [
                        275,
                        3
                    ],
                    [
                        315,
                        0
                    ],
                    [
                        352,
                        -15
                    ],
                    [
                        410,
                        -16
                    ],
                    [
                        443,
                        -3
                    ],
                    [
                        478,
                        -2
                    ],
                    [
                        510,
                        -14
                    ],
                    [
                        528,
                        -42
                    ],
                    [
                        380,
                        -68
                    ],
                    [
                        380,
                        -103
                    ],
                    [
                        381,
                        -138
                    ],
                    [
                        382,
                        -174
                    ],
                    [
                        336,
                        -202
                    ],
                    [
                        356,
                        -207
                    ],
                    [
                        377,
                        -213
                    ],
                    [
                        396,
                        -208
                    ],
                    [
                        414,
                        -203
                    ],
                    [
                        249,
                        -74
                    ],
                    [
                        272,
                        -62
                    ],
                    [
                        299,
                        -63
                    ],
                    [
                        320,
                        -81
                    ],
                    [
                        297,
                        -83
                    ],
                    [
                        271,
                        -83
                    ],
                    [
                        425,
                        -83
                    ],
                    [
                        447,
                        -66
                    ],
                    [
                        472,
                        -67
                    ],
                    [
                        491,
                        -80
                    ],
                    [
                        473,
                        -87
                    ],
                    [
                        448,
                        -87
                    ],
                    [
                        294,
                        -277
                    ],
                    [
                        324,
                        -260
                    ],
                    [
                        354,
                        -251
                    ],
                    [
                        373,
                        -257
                    ],
                    [
                        392,
                        -252
                    ],
                    [
                        416,
                        -264
                    ],
                    [
                        435,
                        -283
                    ],
                    [
                        414,
                        -307
                    ],
                    [
                        390,
                        -317
                    ],
                    [
                        369,
                        -318
                    ],
                    [
                        348,
                        -315
                    ],
                    [
                        320,
                        -303
                    ],
                    [
                        306,
                        -277
                    ],
                    [
                        353,
                        -273
                    ],
                    [
                        372,
                        -275
                    ],
                    [
                        391,
                        -274
                    ],
                    [
                        424,
                        -283
                    ],
                    [
                        390,
                        -287
                    ],
                    [
                        371,
                        -288
                    ],
                    [
                        351,
                        -286
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
                }
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