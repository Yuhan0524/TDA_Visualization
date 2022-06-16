function displayLine1(){
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
                        25.09002685546875
                    ],
                    [
                        2,
                        8.921321868896484
                    ],
                    [
                        3,
                        23.927993774414062
                    ],
                    [
                        4,
                        19.835845947265625
                    ],
                    [
                        5,
                        21.660938262939453
                    ],
                    [
                        6,
                        27.02794647216797
                    ],
                    [
                        7,
                        23.87548065185547
                    ],
                    [
                        8,
                        4.717926025390625
                    ],
                    [
                        9,
                        12.116260528564453
                    ],
                    [
                        10,
                        29.798439025878906
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
                        7.25103759765625
                    ],
                    [
                        2,
                        1.2810516357421875
                    ],
                    [
                        3,
                        2.7071380615234375
                    ],
                    [
                        4,
                        1.924346923828125
                    ],
                    [
                        5,
                        3.087646484375
                    ],
                    [
                        6,
                        2.6977691650390625
                    ],
                    [
                        7,
                        4.1118316650390625
                    ],
                    [
                        8,
                        2.588104248046875
                    ],
                    [
                        9,
                        3.1133880615234375
                    ],
                    [
                        10,
                        1.7052001953125
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
                        14.004974365234375
                    ],
                    [
                        2,
                        6.9258270263671875
                    ],
                    [
                        3,
                        6.804225921630859
                    ],
                    [
                        4,
                        4.920673370361328
                    ],
                    [
                        5,
                        10.213470458984375
                    ],
                    [
                        6,
                        5.691341400146484
                    ],
                    [
                        7,
                        16.120777130126953
                    ],
                    [
                        8,
                        8.184078216552734
                    ],
                    [
                        9,
                        4.792026519775391
                    ],
                    [
                        10,
                        23.535816192626953
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
                        4.2263031005859375
                    ],
                    [
                        2,
                        5.1987457275390625
                    ],
                    [
                        3,
                        21.37456512451172
                    ],
                    [
                        4,
                        7.031917572021484
                    ],
                    [
                        5,
                        8.992866516113281
                    ],
                    [
                        6,
                        23.243484497070312
                    ],
                    [
                        7,
                        19.223464965820312
                    ],
                    [
                        8,
                        4.9281005859375
                    ],
                    [
                        9,
                        3.2098121643066406
                    ],
                    [
                        10,
                        18.698890686035156
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
                        3.90341854095459
                    ],
                    [
                        3,
                        3.90341854095459
                    ],
                    [
                        4,
                        1.0477867126464844
                    ],
                    [
                        5,
                        3.9348068237304688
                    ],
                    [
                        6,
                        3.214773178100586
                    ],
                    [
                        7,
                        4.445352554321288
                    ],
                    [
                        8,
                        1.3449287414550781
                    ],
                    [
                        9,
                        1.803975639187353e-308
                    ],
                    [
                        10,
                        3.8983688354492188
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
                        7.346107482910156
                    ],
                    [
                        2,
                        1.0
                    ],
                    [
                        3,
                        3.5619993209838867
                    ],
                    [
                        4,
                        2.1879806518554688
                    ],
                    [
                        5,
                        4.139430999755859
                    ],
                    [
                        6,
                        5.024232864379883
                    ],
                    [
                        7,
                        4.385126113891602
                    ],
                    [
                        8,
                        1.609823226928711
                    ],
                    [
                        9,
                        2.0294227600097656
                    ],
                    [
                        10,
                        4.770469665527344
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