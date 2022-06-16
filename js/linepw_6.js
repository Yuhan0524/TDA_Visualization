//mds 点图
function displayLinepw6(){
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
                        26.315802712040632
                    ],
                    [
                        2,
                        33.44029799007373
                    ],
                    [
                        3,
                        38.13193948280595
                    ],
                    [
                        4,
                        42.50223294196961
                    ],
                    [
                        5,
                        39.21239822580237
                    ],
                    [
                        6,
                        44.497974245439224
                    ],
                    [
                        7,
                        46.45617630195078
                    ],
                    [
                        8,
                        41.74696188646791
                    ],
                    [
                        9,
                        31.74954927499744
                    ],
                    [
                        10,
                        30.10270950193159
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
                        43.578816717535524
                    ],
                    [
                        2,
                        44.88933161734098
                    ],
                    [
                        3,
                        43.64587370147635
                    ],
                    [
                        4,
                        49.25475753951145
                    ],
                    [
                        5,
                        50.92478534137057
                    ],
                    [
                        6,
                        48.949467767116694
                    ],
                    [
                        7,
                        34.013489485684694
                    ],
                    [
                        8,
                        41.193549029085084
                    ],
                    [
                        9,
                        31.543141715345975
                    ],
                    [
                        10,
                        42.82709714034145
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
                        38.88086045721292
                    ],
                    [
                        2,
                        35.32695800352348
                    ],
                    [
                        3,
                        33.94780863957853
                    ],
                    [
                        4,
                        47.49923875971621
                    ],
                    [
                        5,
                        47.68933709951922
                    ],
                    [
                        6,
                        53.947736528223615
                    ],
                    [
                        7,
                        38.47723077463668
                    ],
                    [
                        8,
                        38.49519502143524
                    ],
                    [
                        9,
                        30.142866859990974
                    ],
                    [
                        10,
                        43.190037699755386
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
                        41.972467523993
                    ],
                    [
                        2,
                        47.63770687009824
                    ],
                    [
                        3,
                        49.74840761665661
                    ],
                    [
                        4,
                        41.57187425589671
                    ],
                    [
                        5,
                        36.73517398372504
                    ],
                    [
                        6,
                        27.263052307695148
                    ],
                    [
                        7,
                        24.12757313963536
                    ],
                    [
                        8,
                        42.6460833277398
                    ],
                    [
                        9,
                        34.316523621985894
                    ],
                    [
                        10,
                        31.238956418334382
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
                        40.488933818231
                    ],
                    [
                        2,
                        34.75711831758023
                    ],
                    [
                        3,
                        33.49219655334464
                    ],
                    [
                        4,
                        44.9731362494661
                    ],
                    [
                        5,
                        44.1247865045367
                    ],
                    [
                        6,
                        58.153297042062654
                    ],
                    [
                        7,
                        40.749243454138636
                    ],
                    [
                        8,
                        40.882872886305485
                    ],
                    [
                        9,
                        33.187675087953345
                    ],
                    [
                        10,
                        32.78732676257808
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
                        21.77478332376427
                    ],
                    [
                        2,
                        41.99415840136432
                    ],
                    [
                        3,
                        28.006309094022445
                    ],
                    [
                        4,
                        31.549809396708124
                    ],
                    [
                        5,
                        53.64809728313016
                    ],
                    [
                        6,
                        41.548445659478574
                    ],
                    [
                        7,
                        20.617000369698783
                    ],
                    [
                        8,
                        38.5327600723269
                    ],
                    [
                        9,
                        16.147384364851774
                    ],
                    [
                        10,
                        31.31841881729581
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