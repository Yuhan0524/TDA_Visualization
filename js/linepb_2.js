//mds 点图
function displayLinepb2(){
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
                        7.25103759765625
                    ],
                    [
                        2,
                        4.1121673583984375
                    ],
                    [
                        3,
                        4.7500457763671875
                    ],
                    [
                        4,
                        8.272613525390625
                    ],
                    [
                        5,
                        8.752304077148438
                    ],
                    [
                        6,
                        5.1636810302734375
                    ],
                    [
                        7,
                        5.996429443359375
                    ],
                    [
                        8,
                        3.5647125244140625
                    ],
                    [
                        9,
                        5.8096771240234375
                    ],
                    [
                        10,
                        7.6044158935546875
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
                        4.956390380859375
                    ],
                    [
                        2,
                        4.1121673583984375
                    ],
                    [
                        3,
                        4.7500457763671875
                    ],
                    [
                        4,
                        8.272613525390625
                    ],
                    [
                        5,
                        8.752304077148438
                    ],
                    [
                        6,
                        5.1636810302734375
                    ],
                    [
                        7,
                        5.996429443359375
                    ],
                    [
                        8,
                        3.5647125244140625
                    ],
                    [
                        9,
                        5.8096771240234375
                    ],
                    [
                        10,
                        7.6044158935546875
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
                        4.691375732421875
                    ],
                    [
                        2,
                        4.1121673583984375
                    ],
                    [
                        3,
                        4.7500457763671875
                    ],
                    [
                        4,
                        8.272613525390625
                    ],
                    [
                        5,
                        8.752304077148438
                    ],
                    [
                        6,
                        5.1636810302734375
                    ],
                    [
                        7,
                        5.996429443359375
                    ],
                    [
                        8,
                        3.8938446044921875
                    ],
                    [
                        9,
                        5.8096771240234375
                    ],
                    [
                        10,
                        7.6044158935546875
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
                        4.9462738037109375
                    ],
                    [
                        2,
                        4.1121673583984375
                    ],
                    [
                        3,
                        4.7500457763671875
                    ],
                    [
                        4,
                        8.272613525390625
                    ],
                    [
                        5,
                        8.752304077148438
                    ],
                    [
                        6,
                        5.1636810302734375
                    ],
                    [
                        7,
                        5.996429443359375
                    ],
                    [
                        8,
                        5.465057373046875
                    ],
                    [
                        9,
                        5.8096771240234375
                    ],
                    [
                        10,
                        7.6044158935546875
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
                        4.691375732421875
                    ],
                    [
                        2,
                        4.1121673583984375
                    ],
                    [
                        3,
                        4.7500457763671875
                    ],
                    [
                        4,
                        8.272613525390625
                    ],
                    [
                        5,
                        8.752304077148438
                    ],
                    [
                        6,
                        5.1636810302734375
                    ],
                    [
                        7,
                        5.996429443359375
                    ],
                    [
                        8,
                        3.5647125244140625
                    ],
                    [
                        9,
                        5.8096771240234375
                    ],
                    [
                        10,
                        7.6044158935546875
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
                        4.855438232421875
                    ],
                    [
                        2,
                        4.1121673583984375
                    ],
                    [
                        3,
                        4.7500457763671875
                    ],
                    [
                        4,
                        2.901519775390624
                    ],
                    [
                        5,
                        8.752304077148438
                    ],
                    [
                        6,
                        5.1636810302734375
                    ],
                    [
                        7,
                        6.9656524658203125
                    ],
                    [
                        8,
                        3.7337799072265625
                    ],
                    [
                        9,
                        5.8096771240234375
                    ],
                    [
                        10,
                        7.6044158935546875
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