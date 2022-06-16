function displayLinew4(){
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
                        90.83538380670834
                    ],
                    [
                        2,
                        99.79604699533665
                    ],
                    [
                        3,
                        180.26928974406556
                    ],
                    [
                        4,
                        97.1352302615211
                    ],
                    [
                        5,
                        165.86770662423365
                    ],
                    [
                        6,
                        240.3686243102179
                    ],
                    [
                        7,
                        124.90025710212525
                    ],
                    [
                        8,
                        244.68432212367247
                    ],
                    [
                        9,
                        75.6668028527302
                    ],
                    [
                        10,
                        82.91856246582958
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
                        13.436172539425595
                    ],
                    [
                        2,
                        0.0
                    ],
                    [
                        3,
                        9.437009812881499
                    ],
                    [
                        4,
                        4.454537624469944
                    ],
                    [
                        5,
                        7.653058470086947
                    ],
                    [
                        6,
                        7.710189366180435
                    ],
                    [
                        7,
                        10.275469101913583
                    ],
                    [
                        8,
                        11.388890384533283
                    ],
                    [
                        9,
                        5.6373721674723845
                    ],
                    [
                        10,
                        7.445531434116762
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
                        26.339950561523438
                    ],
                    [
                        2,
                        20.57143783569336
                    ],
                    [
                        3,
                        52.76344680786133
                    ],
                    [
                        4,
                        11.535335540771484
                    ],
                    [
                        5,
                        48.44357490539551
                    ],
                    [
                        6,
                        134.1662826538086
                    ],
                    [
                        7,
                        43.232688903808594
                    ],
                    [
                        8,
                        87.75860786437988
                    ],
                    [
                        9,
                        10.054615020751953
                    ],
                    [
                        10,
                        9.834461212158203
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
                        18.971782684326172
                    ],
                    [
                        2,
                        26.887773513793945
                    ],
                    [
                        3,
                        56.702415466308594
                    ],
                    [
                        4,
                        14.930164337158203
                    ],
                    [
                        5,
                        35.33325386047363
                    ],
                    [
                        6,
                        121.07894325256348
                    ],
                    [
                        7,
                        40.55564498901367
                    ],
                    [
                        8,
                        74.20787143707275
                    ],
                    [
                        9,
                        18.817190170288086
                    ],
                    [
                        10,
                        25.941865921020508
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
                        14.250858173298948
                    ],
                    [
                        2,
                        9.868932914833042
                    ],
                    [
                        3,
                        5.884883186715985
                    ],
                    [
                        4,
                        7.5808726086370175
                    ],
                    [
                        5,
                        16.65141332456113
                    ],
                    [
                        6,
                        21.235988359076202
                    ],
                    [
                        7,
                        4.034291582346974
                    ],
                    [
                        8,
                        21.45946999280039
                    ],
                    [
                        9,
                        2.588001505986478
                    ],
                    [
                        10,
                        14.713835636550371
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
                        27.976800099344853
                    ],
                    [
                        2,
                        25.714765992524033
                    ],
                    [
                        3,
                        43.855324551704584
                    ],
                    [
                        4,
                        42.36365238372013
                    ],
                    [
                        5,
                        25.180999636672656
                    ],
                    [
                        6,
                        51.755970966997275
                    ],
                    [
                        7,
                        38.79341164073359
                    ],
                    [
                        8,
                        42.67266087908757
                    ],
                    [
                        9,
                        20.64235985892059
                    ],
                    [
                        10,
                        29.854844552312336
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