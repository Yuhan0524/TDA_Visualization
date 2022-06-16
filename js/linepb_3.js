//mds 点图
function displayLinepb3(){
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
                        10.267051696777344
                    ],
                    [
                        2,
                        27.966594696044922
                    ],
                    [
                        3,
                        15.716365814208984
                    ],
                    [
                        4,
                        18.01010513305664
                    ],
                    [
                        5,
                        48.12743377685547
                    ],
                    [
                        6,
                        33.583885192871094
                    ],
                    [
                        7,
                        45.105430603027344
                    ],
                    [
                        8,
                        34.654144287109375
                    ],
                    [
                        9,
                        23.83727264404297
                    ],
                    [
                        10,
                        48.19232177734375
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
                        16.87796401977539
                    ],
                    [
                        2,
                        20.763694763183594
                    ],
                    [
                        3,
                        27.740333557128906
                    ],
                    [
                        4,
                        17.790668487548828
                    ],
                    [
                        5,
                        31.062843322753906
                    ],
                    [
                        6,
                        21.52419662475586
                    ],
                    [
                        7,
                        19.883056640625
                    ],
                    [
                        8,
                        35.90073776245117
                    ],
                    [
                        9,
                        34.657196044921875
                    ],
                    [
                        10,
                        48.0110969543457
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
                        20.945236206054688
                    ],
                    [
                        2,
                        22.760723114013672
                    ],
                    [
                        3,
                        8.257110595703125
                    ],
                    [
                        4,
                        17.927330017089844
                    ],
                    [
                        5,
                        40.68509292602539
                    ],
                    [
                        6,
                        31.573577880859375
                    ],
                    [
                        7,
                        32.119083404541016
                    ],
                    [
                        8,
                        31.543418884277344
                    ],
                    [
                        9,
                        30.201904296875
                    ],
                    [
                        10,
                        35.25363540649414
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
                        7.867122650146484
                    ],
                    [
                        2,
                        23.60866928100586
                    ],
                    [
                        3,
                        8.976299285888672
                    ],
                    [
                        4,
                        17.087982177734375
                    ],
                    [
                        5,
                        48.12743377685547
                    ],
                    [
                        6,
                        12.499900817871094
                    ],
                    [
                        7,
                        25.805892944335938
                    ],
                    [
                        8,
                        14.379653930664062
                    ],
                    [
                        9,
                        19.648582458496094
                    ],
                    [
                        10,
                        30.692214965820312
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
                        4.729930877685547
                    ],
                    [
                        2,
                        21.040767669677734
                    ],
                    [
                        3,
                        15.489547729492188
                    ],
                    [
                        4,
                        13.325424194335938
                    ],
                    [
                        5,
                        44.39929962158203
                    ],
                    [
                        6,
                        37.18943786621094
                    ],
                    [
                        7,
                        29.671619415283203
                    ],
                    [
                        8,
                        26.47006607055664
                    ],
                    [
                        9,
                        19.053550720214844
                    ],
                    [
                        10,
                        28.49102783203125
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
                        12.118370056152344
                    ],
                    [
                        2,
                        2.977367401123047
                    ],
                    [
                        3,
                        3.6588897705078125
                    ],
                    [
                        4,
                        2.4901580810546875
                    ],
                    [
                        5,
                        25.42407989501953
                    ],
                    [
                        6,
                        9.248725891113281
                    ],
                    [
                        7,
                        2.73297119140625
                    ],
                    [
                        8,
                        6.0393829345703125
                    ],
                    [
                        9,
                        9.62237548828125
                    ],
                    [
                        10,
                        17.28343963623047
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