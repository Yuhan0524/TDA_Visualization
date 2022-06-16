function displayLinew2(){
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
                        193.82277209992924
                    ],
                    [
                        2,
                        152.47883886198275
                    ],
                    [
                        3,
                        114.30216779688544
                    ],
                    [
                        4,
                        127.73160050229049
                    ],
                    [
                        5,
                        156.9249463042513
                    ],
                    [
                        6,
                        229.04227090613517
                    ],
                    [
                        7,
                        190.58115537409705
                    ],
                    [
                        8,
                        130.88073974727874
                    ],
                    [
                        9,
                        163.09990139309392
                    ],
                    [
                        10,
                        184.51335995868803
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
                        13.45047954003371
                    ],
                    [
                        2,
                        0.0
                    ],
                    [
                        3,
                        1.6908155077570433
                    ],
                    [
                        4,
                        13.333800878965727
                    ],
                    [
                        5,
                        11.816935126709074
                    ],
                    [
                        6,
                        6.148395747760746
                    ],
                    [
                        7,
                        14.083699186857991
                    ],
                    [
                        8,
                        7.313639446610287
                    ],
                    [
                        9,
                        9.810912376285408
                    ],
                    [
                        10,
                        5.549756747202682
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
                        91.51029777526855
                    ],
                    [
                        2,
                        57.934011459350586
                    ],
                    [
                        3,
                        32.871829986572266
                    ],
                    [
                        4,
                        11.37353515625
                    ],
                    [
                        5,
                        57.227783203125
                    ],
                    [
                        6,
                        121.66558837890625
                    ],
                    [
                        7,
                        70.1114387512207
                    ],
                    [
                        8,
                        32.570852279663086
                    ],
                    [
                        9,
                        77.55598449707031
                    ],
                    [
                        10,
                        84.54596900939941
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
                        60.93471717834473
                    ],
                    [
                        2,
                        49.42806625366211
                    ],
                    [
                        3,
                        18.206998825073242
                    ],
                    [
                        4,
                        16.363996505737305
                    ],
                    [
                        5,
                        68.83590507507324
                    ],
                    [
                        6,
                        107.3819751739502
                    ],
                    [
                        7,
                        70.02981376647949
                    ],
                    [
                        8,
                        19.417847633361816
                    ],
                    [
                        9,
                        48.87633419036865
                    ],
                    [
                        10,
                        55.35947036743164
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
                        25.676720582895847
                    ],
                    [
                        2,
                        3.9457945239006778
                    ],
                    [
                        3,
                        14.841780613440445
                    ],
                    [
                        4,
                        3.9037107978171104
                    ],
                    [
                        5,
                        4.127601781630343
                    ],
                    [
                        6,
                        19.5890243891857
                    ],
                    [
                        7,
                        26.79782751918811
                    ],
                    [
                        8,
                        12.880110748002876
                    ],
                    [
                        9,
                        17.466897523532953
                    ],
                    [
                        10,
                        16.062232751158486
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
                        31.064068570488086
                    ],
                    [
                        2,
                        33.061634850624586
                    ],
                    [
                        3,
                        17.68891604433608
                    ],
                    [
                        4,
                        24.009840107588808
                    ],
                    [
                        5,
                        31.848918363075917
                    ],
                    [
                        6,
                        30.93762287448233
                    ],
                    [
                        7,
                        34.955144267208404
                    ],
                    [
                        8,
                        23.447789966781738
                    ],
                    [
                        9,
                        24.14337001670502
                    ],
                    [
                        10,
                        25.25190337603035
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