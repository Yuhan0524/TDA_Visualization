function displayLine3(){
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
            "#83978C",
            "#7D8590",
            "#B79981",
            "#C5C4BC",
            "#F7BC99",
            "#EDD8AB",
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
                "name": "face",
                "connectNulls": false,
                "symbolSize": 4,
                "showSymbol": true,
                "smooth": false,
                "clip": true,
                "step": false,
                "data": [
                    [
                        1,
                        46.10506820678711
                    ],
                    [
                        2,
                        5.1109466552734375
                    ],
                    [
                        3,
                        31.329010009765625
                    ],
                    [
                        4,
                        15.55255126953125
                    ],
                    [
                        5,
                        15.187759399414062
                    ],
                    [
                        6,
                        25.26549530029297
                    ],
                    [
                        7,
                        16.54140853881836
                    ],
                    [
                        8,
                        16.275482177734375
                    ],
                    [
                        9,
                        28.651016235351562
                    ],
                    [
                        10,
                        29.04723358154297
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
                "name": "cheek",
                "connectNulls": false,
                "symbolSize": 4,
                "showSymbol": true,
                "smooth": false,
                "clip": true,
                "step": false,
                "data": [
                    [
                        1,
                        4.554534912109375
                    ],
                    [
                        2,
                        1.6219940185546875
                    ],
                    [
                        3,
                        3.569366455078125
                    ],
                    [
                        4,
                        2.86798095703125
                    ],
                    [
                        5,
                        3.5356903076171875
                    ],
                    [
                        6,
                        3.1722869873046875
                    ],
                    [
                        7,
                        5.5838775634765625
                    ],
                    [
                        8,
                        3.8938446044921875
                    ],
                    [
                        9,
                        4.2473602294921875
                    ],
                    [
                        10,
                        2.4457550048828125
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
                "name": "eyebrow",
                "connectNulls": false,
                "symbolSize": 4,
                "showSymbol": true,
                "smooth": false,
                "clip": true,
                "step": false,
                "data": [
                    [
                        1,
                        24.68315887451172
                    ],
                    [
                        2,
                        1.9506988525390625
                    ],
                    [
                        3,
                        7.2324371337890625
                    ],
                    [
                        4,
                        4.601905822753906
                    ],
                    [
                        5,
                        3.7142066955566406
                    ],
                    [
                        6,
                        6.764213562011719
                    ],
                    [
                        7,
                        4.375553131103516
                    ],
                    [
                        8,
                        5.073352813720703
                    ],
                    [
                        9,
                        12.302749633789062
                    ],
                    [
                        10,
                        8.208736419677734
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
                "name": "nose",
                "connectNulls": false,
                "symbolSize": 4,
                "showSymbol": true,
                "smooth": false,
                "clip": true,
                "step": false,
                "data": [
                    [
                        1,
                        44.073509216308594
                    ],
                    [
                        2,
                        2.0559844970703125
                    ],
                    [
                        3,
                        16.04071044921875
                    ],
                    [
                        4,
                        4.220813751220703
                    ],
                    [
                        5,
                        10.807014465332031
                    ],
                    [
                        6,
                        20.365615844726562
                    ],
                    [
                        7,
                        5.6154327392578125
                    ],
                    [
                        8,
                        3.945556640625
                    ],
                    [
                        9,
                        23.407791137695312
                    ],
                    [
                        10,
                        26.386131286621094
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
                "name": "eye",
                "connectNulls": false,
                "symbolSize": 4,
                "showSymbol": true,
                "smooth": false,
                "clip": true,
                "step": false,
                "data": [
                    [
                        1,
                        6.158596038818359
                    ],
                    [
                        2,
                        1.3805599212646484
                    ],
                    [
                        3,
                        3.0
                    ],
                    [
                        4,
                        0.9978561401367188
                    ],
                    [
                        5,
                        2.929271697998047
                    ],
                    [
                        6,
                        3.696042060852051
                    ],
                    [
                        7,
                        1.4715690612792969
                    ],
                    [
                        8,
                        3.5459365844726562
                    ],
                    [
                        9,
                        3.725222587585449
                    ],
                    [
                        10,
                        3.9348068237304688
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
                "name": "mouth",
                "connectNulls": false,
                "symbolSize": 4,
                "showSymbol": true,
                "smooth": false,
                "clip": true,
                "step": false,
                "data": [
                    [
                        1,
                        4.929103851318359
                    ],
                    [
                        2,
                        2.0
                    ],
                    [
                        3,
                        5.852151870727539
                    ],
                    [
                        4,
                        2.7014970779418945
                    ],
                    [
                        5,
                        5.014562606811523
                    ],
                    [
                        6,
                        5.1224870681762695
                    ],
                    [
                        7,
                        2.3656387329101562
                    ],
                    [
                        8,
                        4.006923675537109
                    ],
                    [
                        9,
                        4.243183135986328
                    ],
                    [
                        10,
                        2.760883331298828
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
                    "face",
                    "cheek",
                    "eyebrow",
                    "nose",
                    "eye",
                    "mouth"
                ],
                "selected": {
                    "face": true,
                    "cheek": true,
                    "eyebrow": true,
                    "nose": true,
                    "eye": true,
                    "mouth": true
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
    myChart.setOption(option);
    window.addEventListener("resize", function () {
      myChart.resize();
    });
};