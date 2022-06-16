//mds 点图
function displayLinepb5(){
    //1实例化对象
    var myChart = echarts.init(document.querySelector('.facial_information  .chart'));
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
            "#EDD8AB",
            "#F7BC99",
            "#C5C4BC",
            "#B79981",
            "#83978C",
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
                "type": "line",
                "name": "angry",
                "connectNulls": false,
                "symbolSize": 4,
                "showSymbol": true,
                "smooth": false,
                "clip": true,
                "step": false,
                "data": [
                    [
                        1,
                        6.302043914794922
                    ],
                    [
                        2,
                        6.223167419433594
                    ],
                    [
                        3,
                        5.827383041381836
                    ],
                    [
                        4,
                        6.4580078125
                    ],
                    [
                        5,
                        6.785520553588867
                    ],
                    [
                        6,
                        6.190715789794922
                    ],
                    [
                        7,
                        6.439365386962891
                    ],
                    [
                        8,
                        5.683773040771484
                    ],
                    [
                        9,
                        6.183574676513672
                    ],
                    [
                        10,
                        7.146205902099609
                    ]
                ],
                "hoverAnimation": true,
                "label": {
                    "show": false,
                    "position": "top",
                    "margin": 8
                },
                "lineStyle": {
                    "show": true,
                    "width": 1,
                    "opacity": 1,
                    "curveness": 0,
                    "type": "solid"
                },
                "areaStyle": {
                    "opacity": 0
                },
                "zlevel": 0,
                "z": 0,
                "rippleEffect": {
                    "show": true,
                    "brushType": "stroke",
                    "scale": 2.5,
                    "period": 4
                }
            },
            {
                "type": "line",
                "name": "disgust",
                "connectNulls": false,
                "symbolSize": 4,
                "showSymbol": true,
                "smooth": false,
                "clip": true,
                "step": false,
                "data": [
                    [
                        1,
                        6.302043914794922
                    ],
                    [
                        2,
                        6.223167419433594
                    ],
                    [
                        3,
                        5.827383041381836
                    ],
                    [
                        4,
                        6.4580078125
                    ],
                    [
                        5,
                        6.785520553588867
                    ],
                    [
                        6,
                        6.190715789794922
                    ],
                    [
                        7,
                        6.439105987548828
                    ],
                    [
                        8,
                        5.683773040771484
                    ],
                    [
                        9,
                        6.183574676513672
                    ],
                    [
                        10,
                        7.146205902099609
                    ]
                ],
                "hoverAnimation": true,
                "label": {
                    "show": false,
                    "position": "top",
                    "margin": 8
                },
                "lineStyle": {
                    "show": true,
                    "width": 1,
                    "opacity": 1,
                    "curveness": 0,
                    "type": "solid"
                },
                "areaStyle": {
                    "opacity": 0
                },
                "zlevel": 0,
                "z": 0,
                "rippleEffect": {
                    "show": true,
                    "brushType": "stroke",
                    "scale": 2.5,
                    "period": 4
                }
            },
            {
                "type": "line",
                "name": "fear",
                "connectNulls": false,
                "symbolSize": 4,
                "showSymbol": true,
                "smooth": false,
                "clip": true,
                "step": false,
                "data": [
                    [
                        1,
                        6.302043914794922
                    ],
                    [
                        2,
                        6.223167419433594
                    ],
                    [
                        3,
                        5.827383041381836
                    ],
                    [
                        4,
                        6.4580078125
                    ],
                    [
                        5,
                        6.785520553588867
                    ],
                    [
                        6,
                        6.190715789794922
                    ],
                    [
                        7,
                        6.439365386962891
                    ],
                    [
                        8,
                        5.683773040771484
                    ],
                    [
                        9,
                        6.183574676513672
                    ],
                    [
                        10,
                        7.146205902099609
                    ]
                ],
                "hoverAnimation": true,
                "label": {
                    "show": false,
                    "position": "top",
                    "margin": 8
                },
                "lineStyle": {
                    "show": true,
                    "width": 1,
                    "opacity": 1,
                    "curveness": 0,
                    "type": "solid"
                },
                "areaStyle": {
                    "opacity": 0
                },
                "zlevel": 0,
                "z": 0,
                "rippleEffect": {
                    "show": true,
                    "brushType": "stroke",
                    "scale": 2.5,
                    "period": 4
                }
            },
            {
                "type": "line",
                "name": "happy",
                "connectNulls": false,
                "symbolSize": 4,
                "showSymbol": true,
                "smooth": false,
                "clip": true,
                "step": false,
                "data": [
                    [
                        1,
                        6.302043914794922
                    ],
                    [
                        2,
                        6.223167419433594
                    ],
                    [
                        3,
                        5.827383041381836
                    ],
                    [
                        4,
                        6.4580078125
                    ],
                    [
                        5,
                        6.785520553588867
                    ],
                    [
                        6,
                        6.190715789794922
                    ],
                    [
                        7,
                        6.439365386962891
                    ],
                    [
                        8,
                        5.683773040771484
                    ],
                    [
                        9,
                        6.183574676513672
                    ],
                    [
                        10,
                        7.146205902099609
                    ]
                ],
                "hoverAnimation": true,
                "label": {
                    "show": false,
                    "position": "top",
                    "margin": 8
                },
                "lineStyle": {
                    "show": true,
                    "width": 1,
                    "opacity": 1,
                    "curveness": 0,
                    "type": "solid"
                },
                "areaStyle": {
                    "opacity": 0
                },
                "zlevel": 0,
                "z": 0,
                "rippleEffect": {
                    "show": true,
                    "brushType": "stroke",
                    "scale": 2.5,
                    "period": 4
                }
            },
            {
                "type": "line",
                "name": "sad",
                "connectNulls": false,
                "symbolSize": 4,
                "showSymbol": true,
                "smooth": false,
                "clip": true,
                "step": false,
                "data": [
                    [
                        1,
                        4.36640167236328
                    ],
                    [
                        2,
                        6.223167419433594
                    ],
                    [
                        3,
                        5.827383041381836
                    ],
                    [
                        4,
                        6.4580078125
                    ],
                    [
                        5,
                        6.785520553588867
                    ],
                    [
                        6,
                        6.190715789794922
                    ],
                    [
                        7,
                        6.439365386962891
                    ],
                    [
                        8,
                        5.683773040771484
                    ],
                    [
                        9,
                        6.183574676513672
                    ],
                    [
                        10,
                        7.146205902099609
                    ]
                ],
                "hoverAnimation": true,
                "label": {
                    "show": false,
                    "position": "top",
                    "margin": 8
                },
                "lineStyle": {
                    "show": true,
                    "width": 1,
                    "opacity": 1,
                    "curveness": 0,
                    "type": "solid"
                },
                "areaStyle": {
                    "opacity": 0
                },
                "zlevel": 0,
                "z": 0,
                "rippleEffect": {
                    "show": true,
                    "brushType": "stroke",
                    "scale": 2.5,
                    "period": 4
                }
            },
            {
                "type": "line",
                "name": "surprise",
                "connectNulls": false,
                "symbolSize": 4,
                "showSymbol": true,
                "smooth": false,
                "clip": true,
                "step": false,
                "data": [
                    [
                        1,
                        1.2017021179199219
                    ],
                    [
                        2,
                        6.223167419433594
                    ],
                    [
                        3,
                        5.827383041381836
                    ],
                    [
                        4,
                        1.1105003356933592
                    ],
                    [
                        5,
                        6.785520553588867
                    ],
                    [
                        6,
                        6.05543327331543
                    ],
                    [
                        7,
                        0.8084068298339843
                    ],
                    [
                        8,
                        5.683773040771484
                    ],
                    [
                        9,
                        5.980949401855469
                    ],
                    [
                        10,
                        7.146205902099609
                    ]
                ],
                "hoverAnimation": true,
                "label": {
                    "show": false,
                    "position": "top",
                    "margin": 8
                },
                "lineStyle": {
                    "show": true,
                    "width": 1,
                    "opacity": 1,
                    "curveness": 0,
                    "type": "solid"
                },
                "areaStyle": {
                    "opacity": 0
                },
                "zlevel": 0,
                "z": 0,
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
                    "angry",
                    "disgust",
                    "fear",
                    "happy",
                    "sad",
                    "surprise"
                ],
                "selected": {
                    "angry": true,
                    "disgust": true,
                    "fear": true,
                    "happy": true,
                    "sad": true,
                    "surprise": true
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
    //3配置项给实例对象
    myChart.setOption(option);
    window.addEventListener("resize", function () {
        myChart.resize();
      });

};