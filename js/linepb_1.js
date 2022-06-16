//mds 点图
function displayLinepb1(){
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
                        29.208023071289062
                    ],
                    [
                        2,
                        59.12382507324219
                    ],
                    [
                        3,
                        44.448944091796875
                    ],
                    [
                        4,
                        42.44123840332031
                    ],
                    [
                        5,
                        53.192928314208984
                    ],
                    [
                        6,
                        51.60451126098633
                    ],
                    [
                        7,
                        54.15195083618164
                    ],
                    [
                        8,
                        61.05524444580078
                    ],
                    [
                        9,
                        40.99085998535156
                    ],
                    [
                        10,
                        52.27888488769531
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
                        50.32828903198242
                    ],
                    [
                        2,
                        40.01139831542969
                    ],
                    [
                        3,
                        52.0390625
                    ],
                    [
                        4,
                        29.661468505859375
                    ],
                    [
                        5,
                        47.59130859375
                    ],
                    [
                        6,
                        38.216094970703125
                    ],
                    [
                        7,
                        41.76202392578125
                    ],
                    [
                        8,
                        49.86091613769531
                    ],
                    [
                        9,
                        60.99368667602539
                    ],
                    [
                        10,
                        52.27888488769531
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
                        64.41730499267578
                    ],
                    [
                        2,
                        55.03546142578125
                    ],
                    [
                        3,
                        46.21073913574219
                    ],
                    [
                        4,
                        43.08062744140625
                    ],
                    [
                        5,
                        53.192928314208984
                    ],
                    [
                        6,
                        51.60451126098633
                    ],
                    [
                        7,
                        50.86405563354492
                    ],
                    [
                        8,
                        59.296783447265625
                    ],
                    [
                        9,
                        60.99368667602539
                    ],
                    [
                        10,
                        52.27888488769531
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
                        34.2059326171875
                    ],
                    [
                        2,
                        59.12382507324219
                    ],
                    [
                        3,
                        35.18757629394531
                    ],
                    [
                        4,
                        42.69987487792969
                    ],
                    [
                        5,
                        53.192928314208984
                    ],
                    [
                        6,
                        32.70234680175781
                    ],
                    [
                        7,
                        40.943511962890625
                    ],
                    [
                        8,
                        22.285446166992188
                    ],
                    [
                        9,
                        48.01031494140625
                    ],
                    [
                        10,
                        37.18418884277344
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
                        30.341934204101562
                    ],
                    [
                        2,
                        55.07989501953125
                    ],
                    [
                        3,
                        60.521385192871094
                    ],
                    [
                        4,
                        39.89994812011719
                    ],
                    [
                        5,
                        53.192928314208984
                    ],
                    [
                        6,
                        51.60451126098633
                    ],
                    [
                        7,
                        54.15195083618164
                    ],
                    [
                        8,
                        61.05524444580078
                    ],
                    [
                        9,
                        36.80531311035156
                    ],
                    [
                        10,
                        44.92132568359375
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
                        6.5169219970703125
                    ],
                    [
                        2,
                        13.538772583007812
                    ],
                    [
                        3,
                        13.108871459960938
                    ],
                    [
                        4,
                        8.310455322265625
                    ],
                    [
                        5,
                        28.865371704101562
                    ],
                    [
                        6,
                        9.410934448242188
                    ],
                    [
                        7,
                        22.572906494140625
                    ],
                    [
                        8,
                        17.911483764648438
                    ],
                    [
                        9,
                        13.324798583984375
                    ],
                    [
                        10,
                        15.097366333007812
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