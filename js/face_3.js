function displayFace3(){
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
            "#C5C4BC",
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
                        168,
                        -127
                    ],
                    [
                        170,
                        -186
                    ],
                    [
                        177,
                        -244
                    ],
                    [
                        190,
                        -302
                    ],
                    [
                        214,
                        -354
                    ],
                    [
                        250,
                        -398
                    ],
                    [
                        297,
                        -432
                    ],
                    [
                        348,
                        -457
                    ],
                    [
                        400,
                        -465
                    ],
                    [
                        450,
                        -455
                    ],
                    [
                        494,
                        -428
                    ],
                    [
                        534,
                        -392
                    ],
                    [
                        565,
                        -348
                    ],
                    [
                        584,
                        -297
                    ],
                    [
                        595,
                        -243
                    ],
                    [
                        602,
                        -188
                    ],
                    [
                        602,
                        -133
                    ],
                    [
                        224,
                        -55
                    ],
                    [
                        253,
                        -27
                    ],
                    [
                        292,
                        -15
                    ],
                    [
                        334,
                        -18
                    ],
                    [
                        371,
                        -36
                    ],
                    [
                        447,
                        -38
                    ],
                    [
                        481,
                        -22
                    ],
                    [
                        518,
                        -17
                    ],
                    [
                        553,
                        -29
                    ],
                    [
                        575,
                        -58
                    ],
                    [
                        408,
                        -100
                    ],
                    [
                        409,
                        -137
                    ],
                    [
                        410,
                        -174
                    ],
                    [
                        412,
                        -211
                    ],
                    [
                        369,
                        -250
                    ],
                    [
                        389,
                        -254
                    ],
                    [
                        409,
                        -258
                    ],
                    [
                        428,
                        -253
                    ],
                    [
                        446,
                        -248
                    ],
                    [
                        266,
                        -111
                    ],
                    [
                        292,
                        -92
                    ],
                    [
                        323,
                        -93
                    ],
                    [
                        348,
                        -118
                    ],
                    [
                        320,
                        -124
                    ],
                    [
                        289,
                        -123
                    ],
                    [
                        458,
                        -119
                    ],
                    [
                        482,
                        -94
                    ],
                    [
                        513,
                        -93
                    ],
                    [
                        535,
                        -112
                    ],
                    [
                        515,
                        -124
                    ],
                    [
                        484,
                        -124
                    ],
                    [
                        325,
                        -338
                    ],
                    [
                        355,
                        -312
                    ],
                    [
                        388,
                        -296
                    ],
                    [
                        408,
                        -302
                    ],
                    [
                        427,
                        -296
                    ],
                    [
                        455,
                        -311
                    ],
                    [
                        477,
                        -338
                    ],
                    [
                        455,
                        -370
                    ],
                    [
                        428,
                        -384
                    ],
                    [
                        407,
                        -386
                    ],
                    [
                        384,
                        -385
                    ],
                    [
                        353,
                        -371
                    ],
                    [
                        340,
                        -338
                    ],
                    [
                        387,
                        -325
                    ],
                    [
                        407,
                        -325
                    ],
                    [
                        426,
                        -324
                    ],
                    [
                        463,
                        -338
                    ],
                    [
                        427,
                        -348
                    ],
                    [
                        408,
                        -350
                    ],
                    [
                        386,
                        -348
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
