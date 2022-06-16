//mds 点图
function displayLinepb4(){
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
                        15.471725463867188
                    ],
                    [
                        2,
                        50.589073181152344
                    ],
                    [
                        3,
                        26.474411010742188
                    ],
                    [
                        4,
                        18.13720703125
                    ],
                    [
                        5,
                        61.25879669189453
                    ],
                    [
                        6,
                        48.484764099121094
                    ],
                    [
                        7,
                        66.37516784667969
                    ],
                    [
                        8,
                        37.19737243652344
                    ],
                    [
                        9,
                        29.095840454101562
                    ],
                    [
                        10,
                        46.92798614501953
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
                        45.12152099609375
                    ],
                    [
                        2,
                        34.05280303955078
                    ],
                    [
                        3,
                        58.60955810546875
                    ],
                    [
                        4,
                        19.86243438720703
                    ],
                    [
                        5,
                        28.815231323242188
                    ],
                    [
                        6,
                        32.10865020751953
                    ],
                    [
                        7,
                        13.79388427734375
                    ],
                    [
                        8,
                        53.935028076171875
                    ],
                    [
                        9,
                        51.98719787597656
                    ],
                    [
                        10,
                        56.290443420410156
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
                        63.77153778076172
                    ],
                    [
                        2,
                        46.671363830566406
                    ],
                    [
                        3,
                        31.808265686035156
                    ],
                    [
                        4,
                        21.53197479248047
                    ],
                    [
                        5,
                        67.51887512207031
                    ],
                    [
                        6,
                        51.362632751464844
                    ],
                    [
                        7,
                        42.519264221191406
                    ],
                    [
                        8,
                        38.17991638183594
                    ],
                    [
                        9,
                        53.49232482910156
                    ],
                    [
                        10,
                        54.61522674560547
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
                        24.9974365234375
                    ],
                    [
                        2,
                        48.78752136230469
                    ],
                    [
                        3,
                        26.474411010742188
                    ],
                    [
                        4,
                        20.39556121826172
                    ],
                    [
                        5,
                        74.66783905029297
                    ],
                    [
                        6,
                        25.03960418701172
                    ],
                    [
                        7,
                        28.103958129882812
                    ],
                    [
                        8,
                        22.218429565429688
                    ],
                    [
                        9,
                        31.394515991210938
                    ],
                    [
                        10,
                        29.4056396484375
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
                        19.698028564453125
                    ],
                    [
                        2,
                        45.39032745361328
                    ],
                    [
                        3,
                        47.848976135253906
                    ],
                    [
                        4,
                        20.399490356445312
                    ],
                    [
                        5,
                        56.71186065673828
                    ],
                    [
                        6,
                        71.7282485961914
                    ],
                    [
                        7,
                        47.151702880859375
                    ],
                    [
                        8,
                        42.12547302246094
                    ],
                    [
                        9,
                        30.08453369140625
                    ],
                    [
                        10,
                        28.229095458984375
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
                        4.07025146484375
                    ],
                    [
                        2,
                        7.288948059082031
                    ],
                    [
                        3,
                        11.024986267089844
                    ],
                    [
                        4,
                        6.05157470703125
                    ],
                    [
                        5,
                        18.489334106445312
                    ],
                    [
                        6,
                        6.019317626953125
                    ],
                    [
                        7,
                        9.035755157470703
                    ],
                    [
                        8,
                        2.2024078369140625
                    ],
                    [
                        9,
                        4.8945770263671875
                    ],
                    [
                        10,
                        4.044422149658203
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