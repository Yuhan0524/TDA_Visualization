function displayLinew5(){
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
                        173.7113669413969
                    ],
                    [
                        2,
                        223.43398520883804
                    ],
                    [
                        3,
                        260.84838090665386
                    ],
                    [
                        4,
                        223.93694656385688
                    ],
                    [
                        5,
                        242.99003231673098
                    ],
                    [
                        6,
                        288.5655337163388
                    ],
                    [
                        7,
                        321.19824028198525
                    ],
                    [
                        8,
                        274.6469559752599
                    ],
                    [
                        9,
                        178.3661301564499
                    ],
                    [
                        10,
                        227.46147940145593
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
                        13.307711642562694
                    ],
                    [
                        2,
                        0.6197758136736704
                    ],
                    [
                        3,
                        7.568122792268642
                    ],
                    [
                        4,
                        15.909341517849942
                    ],
                    [
                        5,
                        9.683077275829199
                    ],
                    [
                        6,
                        7.501561791701933
                    ],
                    [
                        7,
                        15.665928294834067
                    ],
                    [
                        8,
                        8.940494312139274
                    ],
                    [
                        9,
                        4.731085572133857
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
                        57.87981414794922
                    ],
                    [
                        2,
                        132.63509941101074
                    ],
                    [
                        3,
                        132.33619689941406
                    ],
                    [
                        4,
                        88.39023971557617
                    ],
                    [
                        5,
                        127.33389854431152
                    ],
                    [
                        6,
                        196.24065017700195
                    ],
                    [
                        7,
                        161.1244773864746
                    ],
                    [
                        8,
                        140.91534233093262
                    ],
                    [
                        9,
                        90.72720336914062
                    ],
                    [
                        10,
                        99.57283782958984
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
                        58.54028129577637
                    ],
                    [
                        2,
                        105.12734603881836
                    ],
                    [
                        3,
                        115.02686500549316
                    ],
                    [
                        4,
                        72.03400802612305
                    ],
                    [
                        5,
                        105.69269561767578
                    ],
                    [
                        6,
                        167.6403694152832
                    ],
                    [
                        7,
                        111.81840515136719
                    ],
                    [
                        8,
                        112.91112041473389
                    ],
                    [
                        9,
                        67.2586441040039
                    ],
                    [
                        10,
                        76.1407470703125
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
                        8.908411020959983
                    ],
                    [
                        2,
                        22.761292921929105
                    ],
                    [
                        3,
                        20.911235090182185
                    ],
                    [
                        4,
                        15.55445864103742
                    ],
                    [
                        5,
                        12.702225898387434
                    ],
                    [
                        6,
                        22.162113093010948
                    ],
                    [
                        7,
                        30.159953014404294
                    ],
                    [
                        8,
                        19.214877711235218
                    ],
                    [
                        9,
                        16.80055381077807
                    ],
                    [
                        10,
                        8.311246272327987
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
                        27.929342446187608
                    ],
                    [
                        2,
                        38.39841532344181
                    ],
                    [
                        3,
                        36.533839669768135
                    ],
                    [
                        4,
                        40.664033753919135
                    ],
                    [
                        5,
                        37.498130398732876
                    ],
                    [
                        6,
                        44.94991962230296
                    ],
                    [
                        7,
                        47.99045054152049
                    ],
                    [
                        8,
                        41.88229970314019
                    ],
                    [
                        9,
                        30.61773011441377
                    ],
                    [
                        10,
                        34.006564557503
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