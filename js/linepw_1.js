//mds 点图
function displayLinepw1(){
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
                        134.66591996412794
                    ],
                    [
                        2,
                        255.2780068810777
                    ],
                    [
                        3,
                        205.89861595499957
                    ],
                    [
                        4,
                        218.64647061362948
                    ],
                    [
                        5,
                        285.2309622273136
                    ],
                    [
                        6,
                        294.12888809641544
                    ],
                    [
                        7,
                        319.0601847111239
                    ],
                    [
                        8,
                        269.72573916335574
                    ],
                    [
                        9,
                        196.56171246128423
                    ],
                    [
                        10,
                        256.69822534074314
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
                        225.5215633205349
                    ],
                    [
                        2,
                        196.29712154249788
                    ],
                    [
                        3,
                        252.1299289745211
                    ],
                    [
                        4,
                        218.20310425771294
                    ],
                    [
                        5,
                        209.1082769812165
                    ],
                    [
                        6,
                        222.51730184310793
                    ],
                    [
                        7,
                        157.21211461480016
                    ],
                    [
                        8,
                        219.22602155753668
                    ],
                    [
                        9,
                        249.44147384055378
                    ],
                    [
                        10,
                        288.02162827957716
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
                        273.8177231020835
                    ],
                    [
                        2,
                        247.27497666713433
                    ],
                    [
                        3,
                        198.09968855308927
                    ],
                    [
                        4,
                        229.8335330366647
                    ],
                    [
                        5,
                        302.2320063264218
                    ],
                    [
                        6,
                        290.0232797605614
                    ],
                    [
                        7,
                        232.43990854579118
                    ],
                    [
                        8,
                        247.59565516716384
                    ],
                    [
                        9,
                        249.98632060478013
                    ],
                    [
                        10,
                        284.09539768737005
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
                        177.93289098686995
                    ],
                    [
                        2,
                        251.3997436708501
                    ],
                    [
                        3,
                        209.79661656698906
                    ],
                    [
                        4,
                        216.84822347317814
                    ],
                    [
                        5,
                        291.5014671307873
                    ],
                    [
                        6,
                        194.93305011314905
                    ],
                    [
                        7,
                        227.7229158162994
                    ],
                    [
                        8,
                        140.23912568888127
                    ],
                    [
                        9,
                        190.9149085274579
                    ],
                    [
                        10,
                        211.64822355388438
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
                        170.217723923609
                    ],
                    [
                        2,
                        235.01702635572485
                    ],
                    [
                        3,
                        242.84806409176628
                    ],
                    [
                        4,
                        214.1530873300143
                    ],
                    [
                        5,
                        283.2925149789277
                    ],
                    [
                        6,
                        311.4523756058166
                    ],
                    [
                        7,
                        280.7918430393797
                    ],
                    [
                        8,
                        268.85768849814923
                    ],
                    [
                        9,
                        180.67866051205826
                    ],
                    [
                        10,
                        223.72181628235256
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
                        109.89622448502551
                    ],
                    [
                        2,
                        139.64720563819628
                    ],
                    [
                        3,
                        134.17568389214372
                    ],
                    [
                        4,
                        104.6123690710793
                    ],
                    [
                        5,
                        179.24090800090866
                    ],
                    [
                        6,
                        139.9069072418124
                    ],
                    [
                        7,
                        142.4092796988465
                    ],
                    [
                        8,
                        137.29214318225462
                    ],
                    [
                        9,
                        89.32879993154272
                    ],
                    [
                        10,
                        137.41308052122514
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