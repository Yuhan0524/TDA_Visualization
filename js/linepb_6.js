//mds 点图
function displayLinepb6(){
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
                        2.768199920654297
                    ],
                    [
                        2,
                        4.271960258483887
                    ],
                    [
                        3,
                        4.613914489746094
                    ],
                    [
                        4,
                        6.648050308227539
                    ],
                    [
                        5,
                        3.826284408569336
                    ],
                    [
                        6,
                        7.535848617553711
                    ],
                    [
                        7,
                        5.370410919189453
                    ],
                    [
                        8,
                        5.297996520996094
                    ],
                    [
                        9,
                        4.911993026733398
                    ],
                    [
                        10,
                        4.613473892211914
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
                        6.951547622680664
                    ],
                    [
                        2,
                        5.503705024719238
                    ],
                    [
                        3,
                        5.196359634399414
                    ],
                    [
                        4,
                        6.648050308227539
                    ],
                    [
                        5,
                        5.713924407958984
                    ],
                    [
                        6,
                        7.535848617553711
                    ],
                    [
                        7,
                        4.9474945068359375
                    ],
                    [
                        8,
                        5.734582901000977
                    ],
                    [
                        9,
                        4.911993026733398
                    ],
                    [
                        10,
                        5.301535606384277
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
                        6.951547622680664
                    ],
                    [
                        2,
                        4.215003967285156
                    ],
                    [
                        3,
                        5.852151870727539
                    ],
                    [
                        4,
                        6.648050308227539
                    ],
                    [
                        5,
                        4.7570037841796875
                    ],
                    [
                        6,
                        7.535848617553711
                    ],
                    [
                        7,
                        5.370410919189453
                    ],
                    [
                        8,
                        5.297996520996094
                    ],
                    [
                        9,
                        4.911993026733398
                    ],
                    [
                        10,
                        5.6907501220703125
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
                        6.4439697265625
                    ],
                    [
                        2,
                        3.8876285552978516
                    ],
                    [
                        3,
                        6.825052261352539
                    ],
                    [
                        4,
                        3.4924259185791016
                    ],
                    [
                        5,
                        3.826284408569336
                    ],
                    [
                        6,
                        4.747509002685547
                    ],
                    [
                        7,
                        2.3569984436035156
                    ],
                    [
                        8,
                        5.297996520996094
                    ],
                    [
                        9,
                        4.911993026733398
                    ],
                    [
                        10,
                        4.613473892211914
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
                        6.951547622680664
                    ],
                    [
                        2,
                        3.931720733642578
                    ],
                    [
                        3,
                        3.399629592895508
                    ],
                    [
                        4,
                        6.648050308227539
                    ],
                    [
                        5,
                        4.489587783813477
                    ],
                    [
                        6,
                        7.535848617553711
                    ],
                    [
                        7,
                        5.370410919189453
                    ],
                    [
                        8,
                        5.297996520996094
                    ],
                    [
                        9,
                        4.911993026733398
                    ],
                    [
                        10,
                        4.613473892211914
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
                        5.198860168457031
                    ],
                    [
                        2,
                        6.18861198425293
                    ],
                    [
                        3,
                        5.550792694091797
                    ],
                    [
                        4,
                        6.612529754638672
                    ],
                    [
                        5,
                        6.434776306152344
                    ],
                    [
                        6,
                        5.944038391113281
                    ],
                    [
                        7,
                        4.544991493225098
                    ],
                    [
                        8,
                        5.297996520996094
                    ],
                    [
                        9,
                        2.890392303466797
                    ],
                    [
                        10,
                        4.613473892211914
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