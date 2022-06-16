//mds 点图
function displayLinepw3(){
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
                        38.377777099609375
                    ],
                    [
                        2,
                        130.19731521606445
                    ],
                    [
                        3,
                        66.72322082519531
                    ],
                    [
                        4,
                        86.7420425415039
                    ],
                    [
                        5,
                        215.3649787902832
                    ],
                    [
                        6,
                        164.56386756896973
                    ],
                    [
                        7,
                        217.12138175964355
                    ],
                    [
                        8,
                        136.68003273010254
                    ],
                    [
                        9,
                        82.87557220458984
                    ],
                    [
                        10,
                        183.1305694580078
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
                        102.69946098327637
                    ],
                    [
                        2,
                        65.60086822509766
                    ],
                    [
                        3,
                        130.76768493652344
                    ],
                    [
                        4,
                        85.13337707519531
                    ],
                    [
                        5,
                        125.94792366027832
                    ],
                    [
                        6,
                        85.72529220581055
                    ],
                    [
                        7,
                        80.36697006225586
                    ],
                    [
                        8,
                        152.31450271606445
                    ],
                    [
                        9,
                        159.7340431213379
                    ],
                    [
                        10,
                        186.9014072418213
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
                        156.60314559936523
                    ],
                    [
                        2,
                        117.49777793884277
                    ],
                    [
                        3,
                        52.96351623535156
                    ],
                    [
                        4,
                        86.15925216674805
                    ],
                    [
                        5,
                        189.21294784545898
                    ],
                    [
                        6,
                        152.66630363464355
                    ],
                    [
                        7,
                        137.25530624389648
                    ],
                    [
                        8,
                        145.98808097839355
                    ],
                    [
                        9,
                        144.3751735687256
                    ],
                    [
                        10,
                        156.82415771484375
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
                        51.171875
                    ],
                    [
                        2,
                        113.23742866516113
                    ],
                    [
                        3,
                        58.50508499145508
                    ],
                    [
                        4,
                        90.26602554321289
                    ],
                    [
                        5,
                        231.61928176879883
                    ],
                    [
                        6,
                        73.2245979309082
                    ],
                    [
                        7,
                        107.24571990966797
                    ],
                    [
                        8,
                        46.7718391418457
                    ],
                    [
                        9,
                        76.82240295410156
                    ],
                    [
                        10,
                        112.18989944458008
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
                        24.831924438476562
                    ],
                    [
                        2,
                        123.53487968444824
                    ],
                    [
                        3,
                        111.2685317993164
                    ],
                    [
                        4,
                        78.7306900024414
                    ],
                    [
                        5,
                        183.17570686340332
                    ],
                    [
                        6,
                        207.3908805847168
                    ],
                    [
                        7,
                        150.47840881347656
                    ],
                    [
                        8,
                        134.5304470062256
                    ],
                    [
                        9,
                        82.17805862426758
                    ],
                    [
                        10,
                        102.35543823242188
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
                        46.690650939941406
                    ],
                    [
                        2,
                        14.748733520507812
                    ],
                    [
                        3,
                        21.067665100097656
                    ],
                    [
                        4,
                        18.688236236572266
                    ],
                    [
                        5,
                        57.76308822631836
                    ],
                    [
                        6,
                        22.836158752441406
                    ],
                    [
                        7,
                        12.93301010131836
                    ],
                    [
                        8,
                        23.27935028076172
                    ],
                    [
                        9,
                        46.8548698425293
                    ],
                    [
                        10,
                        66.07001495361328
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