//mds 点图
function displayLinepw5(){
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
                        26.382620563122423
                    ],
                    [
                        2,
                        25.432952652002896
                    ],
                    [
                        3,
                        25.74401587783626
                    ],
                    [
                        4,
                        17.31553886859119
                    ],
                    [
                        5,
                        25.070550446271067
                    ],
                    [
                        6,
                        25.77322270464469
                    ],
                    [
                        7,
                        28.66806786784744
                    ],
                    [
                        8,
                        24.006583264169684
                    ],
                    [
                        9,
                        27.104595975508154
                    ],
                    [
                        10,
                        27.523702031876255
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
                        26.072971091254168
                    ],
                    [
                        2,
                        24.192324762731985
                    ],
                    [
                        3,
                        21.362416766316514
                    ],
                    [
                        4,
                        21.952682061141438
                    ],
                    [
                        5,
                        28.097702996319214
                    ],
                    [
                        6,
                        27.81494282423272
                    ],
                    [
                        7,
                        16.715580944352745
                    ],
                    [
                        8,
                        21.421412913337704
                    ],
                    [
                        9,
                        24.001563405924642
                    ],
                    [
                        10,
                        24.61046061223547
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
                        26.691872947877116
                    ],
                    [
                        2,
                        27.296904782417315
                    ],
                    [
                        3,
                        26.187049460356427
                    ],
                    [
                        4,
                        19.731812829956137
                    ],
                    [
                        5,
                        29.208621093312154
                    ],
                    [
                        6,
                        27.772655711009982
                    ],
                    [
                        7,
                        30.934918244742107
                    ],
                    [
                        8,
                        21.893283634469064
                    ],
                    [
                        9,
                        26.348035585977364
                    ],
                    [
                        10,
                        30.478436180939042
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
                        26.024565776769926
                    ],
                    [
                        2,
                        24.473908869157633
                    ],
                    [
                        3,
                        24.83265744888575
                    ],
                    [
                        4,
                        25.717374859050896
                    ],
                    [
                        5,
                        24.0947113128816
                    ],
                    [
                        6,
                        25.368489526605295
                    ],
                    [
                        7,
                        27.183390169560738
                    ],
                    [
                        8,
                        18.02450243890299
                    ],
                    [
                        9,
                        25.67066627240095
                    ],
                    [
                        10,
                        24.150609497949844
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
                        11.941415402061779
                    ],
                    [
                        2,
                        28.095487083611907
                    ],
                    [
                        3,
                        26.334327407792895
                    ],
                    [
                        4,
                        18.147338937663967
                    ],
                    [
                        5,
                        29.23245530473246
                    ],
                    [
                        6,
                        26.411421748739443
                    ],
                    [
                        7,
                        30.327234867668395
                    ],
                    [
                        8,
                        25.3431400780497
                    ],
                    [
                        9,
                        27.104595975508154
                    ],
                    [
                        10,
                        30.2093450747616
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
                        3.0763479618735476
                    ],
                    [
                        2,
                        15.200024341995405
                    ],
                    [
                        3,
                        12.334610942686844
                    ],
                    [
                        4,
                        2.685620925428646
                    ],
                    [
                        5,
                        25.988879699105233
                    ],
                    [
                        6,
                        13.481012700251846
                    ],
                    [
                        7,
                        1.6184204830752125
                    ],
                    [
                        8,
                        16.910902513626773
                    ],
                    [
                        9,
                        11.614147521036882
                    ],
                    [
                        10,
                        25.621413649205273
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