function displayLinew3(){
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
                        234.9790263473619
                    ],
                    [
                        2,
                        58.24192646748724
                    ],
                    [
                        3,
                        178.62543954935603
                    ],
                    [
                        4,
                        124.34043714497977
                    ],
                    [
                        5,
                        123.90511415701901
                    ],
                    [
                        6,
                        151.0581293564282
                    ],
                    [
                        7,
                        121.25289740375811
                    ],
                    [
                        8,
                        93.87935660390454
                    ],
                    [
                        9,
                        154.0339595701613
                    ],
                    [
                        10,
                        152.07692777255286
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
                        12.835386409816994
                    ],
                    [
                        2,
                        2.2938459391280768
                    ],
                    [
                        3,
                        8.876317811673918
                    ],
                    [
                        4,
                        2.8704280102508433
                    ],
                    [
                        5,
                        9.366812719400059
                    ],
                    [
                        6,
                        5.157911090275927
                    ],
                    [
                        7,
                        13.029655891979496
                    ],
                    [
                        8,
                        9.166859977869464
                    ],
                    [
                        9,
                        10.185268102604507
                    ],
                    [
                        10,
                        5.870337140919338
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
                        145.41398239135742
                    ],
                    [
                        2,
                        11.773719787597656
                    ],
                    [
                        3,
                        58.305015563964844
                    ],
                    [
                        4,
                        10.92147445678711
                    ],
                    [
                        5,
                        16.780439376831055
                    ],
                    [
                        6,
                        54.72457695007324
                    ],
                    [
                        7,
                        21.97420883178711
                    ],
                    [
                        8,
                        16.647743225097656
                    ],
                    [
                        9,
                        62.19711494445801
                    ],
                    [
                        10,
                        54.468719482421875
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
                        108.51811027526855
                    ],
                    [
                        2,
                        10.633708000183105
                    ],
                    [
                        3,
                        47.07403564453125
                    ],
                    [
                        4,
                        13.039287567138672
                    ],
                    [
                        5,
                        16.385101318359375
                    ],
                    [
                        6,
                        52.500189781188965
                    ],
                    [
                        7,
                        12.810684204101562
                    ],
                    [
                        8,
                        11.407769203186035
                    ],
                    [
                        9,
                        46.548988342285156
                    ],
                    [
                        10,
                        53.14628028869629
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
                        26.295622439518795
                    ],
                    [
                        2,
                        2.326387171072347
                    ],
                    [
                        3,
                        8.309871042873356
                    ],
                    [
                        4,
                        1.7683973879859765
                    ],
                    [
                        5,
                        7.026587267864124
                    ],
                    [
                        6,
                        12.734976264997563
                    ],
                    [
                        7,
                        3.4860558078145067
                    ],
                    [
                        8,
                        9.737520075239416
                    ],
                    [
                        9,
                        13.908927080247029
                    ],
                    [
                        10,
                        15.284416150994435
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
                        25.056554935530308
                    ],
                    [
                        2,
                        13.012525434823193
                    ],
                    [
                        3,
                        40.05103348976833
                    ],
                    [
                        4,
                        22.41809441465583
                    ],
                    [
                        5,
                        32.63328876287524
                    ],
                    [
                        6,
                        27.080561938301347
                    ],
                    [
                        7,
                        20.795536400620684
                    ],
                    [
                        8,
                        24.63695381967129
                    ],
                    [
                        9,
                        25.04852130196677
                    ],
                    [
                        10,
                        27.32676711994346
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