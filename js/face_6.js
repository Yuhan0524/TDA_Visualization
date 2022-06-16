function displayFace6(){
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
            "#83978C",
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
                        159,
                        -38
                    ],
                    [
                        161,
                        -88
                    ],
                    [
                        169,
                        -138
                    ],
                    [
                        181,
                        -186
                    ],
                    [
                        201,
                        -231
                    ],
                    [
                        229,
                        -271
                    ],
                    [
                        263,
                        -305
                    ],
                    [
                        302,
                        -332
                    ],
                    [
                        344,
                        -339
                    ],
                    [
                        384,
                        -330
                    ],
                    [
                        419,
                        -303
                    ],
                    [
                        451,
                        -269
                    ],
                    [
                        476,
                        -231
                    ],
                    [
                        493,
                        -188
                    ],
                    [
                        503,
                        -141
                    ],
                    [
                        509,
                        -93
                    ],
                    [
                        511,
                        -45
                    ],
                    [
                        194,
                        -1
                    ],
                    [
                        216,
                        23
                    ],
                    [
                        249,
                        33
                    ],
                    [
                        284,
                        31
                    ],
                    [
                        315,
                        18
                    ],
                    [
                        373,
                        19
                    ],
                    [
                        404,
                        32
                    ],
                    [
                        437,
                        34
                    ],
                    [
                        467,
                        24
                    ],
                    [
                        486,
                        0
                    ],
                    [
                        343,
                        -35
                    ],
                    [
                        343,
                        -69
                    ],
                    [
                        343,
                        -103
                    ],
                    [
                        343,
                        -138
                    ],
                    [
                        308,
                        -164
                    ],
                    [
                        325,
                        -168
                    ],
                    [
                        342,
                        -173
                    ],
                    [
                        359,
                        -168
                    ],
                    [
                        376,
                        -163
                    ],
                    [
                        228,
                        -41
                    ],
                    [
                        249,
                        -28
                    ],
                    [
                        275,
                        -29
                    ],
                    [
                        296,
                        -48
                    ],
                    [
                        273,
                        -53
                    ],
                    [
                        247,
                        -52
                    ],
                    [
                        386,
                        -48
                    ],
                    [
                        406,
                        -29
                    ],
                    [
                        432,
                        -28
                    ],
                    [
                        452,
                        -41
                    ],
                    [
                        434,
                        -52
                    ],
                    [
                        409,
                        -53
                    ],
                    [
                        279,
                        -232
                    ],
                    [
                        301,
                        -216
                    ],
                    [
                        325,
                        -206
                    ],
                    [
                        342,
                        -211
                    ],
                    [
                        358,
                        -205
                    ],
                    [
                        381,
                        -216
                    ],
                    [
                        402,
                        -233
                    ],
                    [
                        383,
                        -261
                    ],
                    [
                        360,
                        -275
                    ],
                    [
                        342,
                        -277
                    ],
                    [
                        324,
                        -275
                    ],
                    [
                        301,
                        -261
                    ],
                    [
                        291,
                        -233
                    ],
                    [
                        325,
                        -226
                    ],
                    [
                        341,
                        -227
                    ],
                    [
                        358,
                        -225
                    ],
                    [
                        391,
                        -233
                    ],
                    [
                        359,
                        -245
                    ],
                    [
                        342,
                        -248
                    ],
                    [
                        326,
                        -245
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
