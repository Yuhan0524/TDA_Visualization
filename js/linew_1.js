function displayLinew1(){
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
                        150.66582714177628
                    ],
                    [
                        2,
                        55.48738377574856
                    ],
                    [
                        3,
                        126.17427107612774
                    ],
                    [
                        4,
                        124.21202229910332
                    ],
                    [
                        5,
                        129.04689568070467
                    ],
                    [
                        6,
                        145.93810931404795
                    ],
                    [
                        7,
                        166.65617163806516
                    ],
                    [
                        8,
                        65.77216553295148
                    ],
                    [
                        9,
                        54.57771683873514
                    ],
                    [
                        10,
                        190.94405449561376
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
                        16.695600754889526
                    ],
                    [
                        2,
                        1.8116805973668397
                    ],
                    [
                        3,
                        6.762507024994552
                    ],
                    [
                        4,
                        1.9731828876534765
                    ],
                    [
                        5,
                        5.997136440426544
                    ],
                    [
                        6,
                        4.486841550440134
                    ],
                    [
                        7,
                        9.965268296873404
                    ],
                    [
                        8,
                        6.184012194975967
                    ],
                    [
                        9,
                        4.973952779227962
                    ],
                    [
                        10,
                        2.411517242772188
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
                        46.166526794433594
                    ],
                    [
                        2,
                        20.091333389282227
                    ],
                    [
                        3,
                        44.99894714355469
                    ],
                    [
                        4,
                        12.023574829101562
                    ],
                    [
                        5,
                        32.18927192687988
                    ],
                    [
                        6,
                        42.82701301574707
                    ],
                    [
                        7,
                        66.64297294616699
                    ],
                    [
                        8,
                        29.207569122314453
                    ],
                    [
                        9,
                        18.453983306884766
                    ],
                    [
                        10,
                        80.77513122558594
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
                        15.812658309936523
                    ],
                    [
                        2,
                        12.329334259033203
                    ],
                    [
                        3,
                        49.62361145019531
                    ],
                    [
                        4,
                        21.195486068725586
                    ],
                    [
                        5,
                        21.047710418701172
                    ],
                    [
                        6,
                        54.010375022888184
                    ],
                    [
                        7,
                        45.19894313812256
                    ],
                    [
                        8,
                        16.09763813018799
                    ],
                    [
                        9,
                        14.819034576416016
                    ],
                    [
                        10,
                        47.17685508728027
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
                        14.638915940019334
                    ],
                    [
                        2,
                        8.643134442726842
                    ],
                    [
                        3,
                        9.605486056801869
                    ],
                    [
                        4,
                        1.1448020997804715
                    ],
                    [
                        5,
                        10.673137735146515
                    ],
                    [
                        6,
                        10.681665852668806
                    ],
                    [
                        7,
                        14.426061671260424
                    ],
                    [
                        8,
                        1.557893780615399
                    ],
                    [
                        9,
                        0.0
                    ],
                    [
                        10,
                        15.613300574240073
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
                        24.816102032473303
                    ],
                    [
                        2,
                        7.137382893849579
                    ],
                    [
                        3,
                        27.554489657123717
                    ],
                    [
                        4,
                        14.10116391045674
                    ],
                    [
                        5,
                        17.455738048507552
                    ],
                    [
                        6,
                        33.82333539824021
                    ],
                    [
                        7,
                        33.427608793948124
                    ],
                    [
                        8,
                        9.926034559179996
                    ],
                    [
                        9,
                        8.315587716897893
                    ],
                    [
                        10,
                        28.753005845904845
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