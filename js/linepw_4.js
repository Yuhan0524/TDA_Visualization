//mds 点图
function displayLinepw4(){
    //1实例化对象
    var myChart = echarts.init(document.querySelector('.facial_information  .chart'));
    //2指定配置项和数据
    var option= {
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
                        41.85697937011719
                    ],
                    [
                        2,
                        122.69843292236328
                    ],
                    [
                        3,
                        62.144222259521484
                    ],
                    [
                        4,
                        53.083683013916016
                    ],
                    [
                        5,
                        147.9682445526123
                    ],
                    [
                        6,
                        119.8823709487915
                    ],
                    [
                        7,
                        154.40244960784912
                    ],
                    [
                        8,
                        89.59987258911133
                    ],
                    [
                        9,
                        63.01107406616211
                    ],
                    [
                        10,
                        121.85402870178223
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
                        104.60989379882812
                    ],
                    [
                        2,
                        69.1118049621582
                    ],
                    [
                        3,
                        121.1469898223877
                    ],
                    [
                        4,
                        54.121891021728516
                    ],
                    [
                        5,
                        73.10044479370117
                    ],
                    [
                        6,
                        66.51077079772949
                    ],
                    [
                        7,
                        39.17369270324707
                    ],
                    [
                        8,
                        111.30847549438477
                    ],
                    [
                        9,
                        120.2868185043335
                    ],
                    [
                        10,
                        130.0366439819336
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
                        152.19328689575195
                    ],
                    [
                        2,
                        111.98320865631104
                    ],
                    [
                        3,
                        64.72504043579102
                    ],
                    [
                        4,
                        57.88264274597168
                    ],
                    [
                        5,
                        151.62882804870605
                    ],
                    [
                        6,
                        121.39255619049072
                    ],
                    [
                        7,
                        98.34250259399414
                    ],
                    [
                        8,
                        95.40732192993164
                    ],
                    [
                        9,
                        117.95947265625
                    ],
                    [
                        10,
                        127.82345390319824
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
                        53.24491310119629
                    ],
                    [
                        2,
                        104.43359565734863
                    ],
                    [
                        3,
                        57.0654182434082
                    ],
                    [
                        4,
                        54.483694076538086
                    ],
                    [
                        5,
                        173.59146118164062
                    ],
                    [
                        6,
                        52.81380271911621
                    ],
                    [
                        7,
                        68.64786148071289
                    ],
                    [
                        8,
                        33.432647705078125
                    ],
                    [
                        9,
                        62.952096939086914
                    ],
                    [
                        10,
                        69.07041358947754
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
                        43.6751766204834
                    ],
                    [
                        2,
                        116.63445281982422
                    ],
                    [
                        3,
                        109.80008316040039
                    ],
                    [
                        4,
                        60.21533393859863
                    ],
                    [
                        5,
                        141.9363498687744
                    ],
                    [
                        6,
                        173.8927459716797
                    ],
                    [
                        7,
                        109.20350646972656
                    ],
                    [
                        8,
                        105.69751071929932
                    ],
                    [
                        9,
                        71.41048431396484
                    ],
                    [
                        10,
                        74.67717361450195
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
                        14.865104675292969
                    ],
                    [
                        2,
                        16.97124481201172
                    ],
                    [
                        3,
                        30.78401756286621
                    ],
                    [
                        4,
                        11.818674087524414
                    ],
                    [
                        5,
                        36.24365425109863
                    ],
                    [
                        6,
                        11.588817596435547
                    ],
                    [
                        7,
                        15.456611633300781
                    ],
                    [
                        8,
                        9.504079818725586
                    ],
                    [
                        9,
                        16.238475799560547
                    ],
                    [
                        10,
                        21.68117904663086
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