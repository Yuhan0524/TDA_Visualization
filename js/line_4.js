function displayLine4(){
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
                        10.018310546875
                    ],
                    [
                        2,
                        9.69549560546875
                    ],
                    [
                        3,
                        29.112808227539062
                    ],
                    [
                        4,
                        7.615623474121094
                    ],
                    [
                        5,
                        27.573707580566406
                    ],
                    [
                        6,
                        42.10081100463867
                    ],
                    [
                        7,
                        17.084854125976562
                    ],
                    [
                        8,
                        46.4846076965332
                    ],
                    [
                        9,
                        11.904350280761719
                    ],
                    [
                        10,
                        7.7371368408203125
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
                        4.9462738037109375
                    ],
                    [
                        2,
                        0.0
                    ],
                    [
                        3,
                        3.9658355712890625
                    ],
                    [
                        4,
                        4.449981689453125
                    ],
                    [
                        5,
                        3.087646484375
                    ],
                    [
                        6,
                        4.977020263671875
                    ],
                    [
                        7,
                        4.1118316650390625
                    ],
                    [
                        8,
                        5.465057373046875
                    ],
                    [
                        9,
                        2.9547119140625
                    ],
                    [
                        10,
                        3.5595855712890625
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
                        4.853984832763672
                    ],
                    [
                        2,
                        2.9881362915039062
                    ],
                    [
                        3,
                        10.821327209472656
                    ],
                    [
                        4,
                        3.7625579833984375
                    ],
                    [
                        5,
                        7.651496887207031
                    ],
                    [
                        6,
                        24.689537048339844
                    ],
                    [
                        7,
                        5.8271026611328125
                    ],
                    [
                        8,
                        13.682167053222656
                    ],
                    [
                        9,
                        2.0233535766601562
                    ],
                    [
                        10,
                        2.2011871337890625
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
                        5.299407958984375
                    ],
                    [
                        2,
                        3.9462642669677734
                    ],
                    [
                        3,
                        21.37456512451172
                    ],
                    [
                        4,
                        4.599262237548828
                    ],
                    [
                        5,
                        17.955978393554688
                    ],
                    [
                        6,
                        46.68864440917969
                    ],
                    [
                        7,
                        19.047744750976562
                    ],
                    [
                        8,
                        19.90704345703125
                    ],
                    [
                        9,
                        3.8694190979003906
                    ],
                    [
                        10,
                        5.996850967407227
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
                        2.9976882934570312
                    ],
                    [
                        4,
                        2.993112564086914
                    ],
                    [
                        5,
                        3.9348068237304688
                    ],
                    [
                        6,
                        4.688196182250976
                    ],
                    [
                        7,
                        2.018512725830078
                    ],
                    [
                        8,
                        5.6470251083374015
                    ],
                    [
                        9,
                        1.3248405456542969
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
                        5.527107238769531
                    ],
                    [
                        2,
                        3.95660400390625
                    ],
                    [
                        3,
                        6.825052261352539
                    ],
                    [
                        4,
                        7.615623474121094
                    ],
                    [
                        5,
                        4.489587783813477
                    ],
                    [
                        6,
                        6.975481033325195
                    ],
                    [
                        7,
                        5.724346160888672
                    ],
                    [
                        8,
                        6.24992561340332
                    ],
                    [
                        9,
                        3.0300331115722656
                    ],
                    [
                        10,
                        3.2989349365234375
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