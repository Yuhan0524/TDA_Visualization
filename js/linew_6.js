function displayLinew6(){
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
                        170.21772392360893
                    ],
                    [
                        2,
                        235.0170263557249
                    ],
                    [
                        3,
                        242.84806409176633
                    ],
                    [
                        4,
                        214.15308733001433
                    ],
                    [
                        5,
                        283.2925149789278
                    ],
                    [
                        6,
                        311.45237560581654
                    ],
                    [
                        7,
                        280.79184303937956
                    ],
                    [
                        8,
                        268.8576884981492
                    ],
                    [
                        9,
                        180.67866051205823
                    ],
                    [
                        10,
                        223.72181628235253
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
                        13.07569222998586
                    ],
                    [
                        2,
                        5.815482848995015
                    ],
                    [
                        3,
                        10.54605052065437
                    ],
                    [
                        4,
                        17.4484338321373
                    ],
                    [
                        5,
                        16.744218661933388
                    ],
                    [
                        6,
                        7.9741675538713235
                    ],
                    [
                        7,
                        14.295239951505565
                    ],
                    [
                        8,
                        8.701396926410911
                    ],
                    [
                        9,
                        12.394717843575219
                    ],
                    [
                        10,
                        13.165785333362747
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
                        43.6751766204834
                    ],
                    [
                        2,
                        116.63445281982422
                    ],
                    [
                        3,
                        109.80008316040039
                    ],
                    [
                        4,
                        60.21533393859863
                    ],
                    [
                        5,
                        141.9363498687744
                    ],
                    [
                        6,
                        173.8927459716797
                    ],
                    [
                        7,
                        109.20350646972656
                    ],
                    [
                        8,
                        105.69751071929932
                    ],
                    [
                        9,
                        71.41048431396484
                    ],
                    [
                        10,
                        74.67717361450195
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
                        25.343140078049704
                    ],
                    [
                        9,
                        27.104595975508154
                    ],
                    [
                        10,
                        30.209345074761604
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
                        40.488933818231004
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
                        44.973136249466094
                    ],
                    [
                        5,
                        44.124786504536694
                    ],
                    [
                        6,
                        58.153297042062654
                    ],
                    [
                        7,
                        40.74924345413865
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