function displayLine2(){
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
                        28.12652587890625
                    ],
                    [
                        3,
                        10.504684448242188
                    ],
                    [
                        4,
                        15.530525207519531
                    ],
                    [
                        5,
                        47.50300598144531
                    ],
                    [
                        6,
                        52.65818977355957
                    ],
                    [
                        7,
                        54.51671600341797
                    ],
                    [
                        8,
                        20.765602111816406
                    ],
                    [
                        9,
                        27.397441864013672
                    ],
                    [
                        10,
                        33.40208435058594
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
                        4.956390380859375
                    ],
                    [
                        2,
                        0.0
                    ],
                    [
                        3,
                        1.5028076171875
                    ],
                    [
                        4,
                        5.363128662109375
                    ],
                    [
                        5,
                        5.2681884765625
                    ],
                    [
                        6,
                        3.8726654052734375
                    ],
                    [
                        7,
                        5.8468475341796875
                    ],
                    [
                        8,
                        2.588104248046875
                    ],
                    [
                        9,
                        3.9826507568359375
                    ],
                    [
                        10,
                        2.2190704345703125
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
                        19.961421966552734
                    ],
                    [
                        2,
                        9.820568084716797
                    ],
                    [
                        3,
                        13.360279083251953
                    ],
                    [
                        4,
                        4.465244293212891
                    ],
                    [
                        5,
                        13.336456298828125
                    ],
                    [
                        6,
                        16.38477325439453
                    ],
                    [
                        7,
                        11.483642578125
                    ],
                    [
                        8,
                        10.510913848876953
                    ],
                    [
                        9,
                        15.908248901367188
                    ],
                    [
                        10,
                        20.966197967529297
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
                        25.423492431640625
                    ],
                    [
                        2,
                        11.3375244140625
                    ],
                    [
                        3,
                        10.760581970214844
                    ],
                    [
                        4,
                        5.135276794433594
                    ],
                    [
                        5,
                        27.896629333496094
                    ],
                    [
                        6,
                        39.619598388671875
                    ],
                    [
                        7,
                        33.357818603515625
                    ],
                    [
                        8,
                        11.809555053710938
                    ],
                    [
                        9,
                        21.902664184570312
                    ],
                    [
                        10,
                        28.06134796142578
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
                        1.9791755676269531
                    ],
                    [
                        3,
                        3.90341854095459
                    ],
                    [
                        4,
                        2.1699752807617188
                    ],
                    [
                        5,
                        2.0978050231933594
                    ],
                    [
                        6,
                        4.019774436950683
                    ],
                    [
                        7,
                        6.158596038818359
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
                        3.7876529693603516
                    ],
                    [
                        2,
                        5.503705024719238
                    ],
                    [
                        3,
                        2.866058349609375
                    ],
                    [
                        4,
                        3.743239402770996
                    ],
                    [
                        5,
                        5.713924407958984
                    ],
                    [
                        6,
                        6.493408203125
                    ],
                    [
                        7,
                        6.739009857177734
                    ],
                    [
                        8,
                        5.734582901000977
                    ],
                    [
                        9,
                        2.9394493103027344
                    ],
                    [
                        10,
                        2.824474334716797
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