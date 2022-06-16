function displayLine6(){
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
                        30.341934204101562
                    ],
                    [
                        2,
                        55.07989501953125
                    ],
                    [
                        3,
                        60.521385192871094
                    ],
                    [
                        4,
                        39.89994812011719
                    ],
                    [
                        5,
                        53.192928314208984
                    ],
                    [
                        6,
                        51.60451126098633
                    ],
                    [
                        7,
                        54.15195083618164
                    ],
                    [
                        8,
                        61.05524444580078
                    ],
                    [
                        9,
                        36.80531311035156
                    ],
                    [
                        10,
                        44.92132568359375
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
                        4.691375732421875
                    ],
                    [
                        2,
                        4.1121673583984375
                    ],
                    [
                        3,
                        4.7500457763671875
                    ],
                    [
                        4,
                        8.272613525390625
                    ],
                    [
                        5,
                        8.752304077148438
                    ],
                    [
                        6,
                        5.1636810302734375
                    ],
                    [
                        7,
                        5.996429443359375
                    ],
                    [
                        8,
                        3.5647125244140625
                    ],
                    [
                        9,
                        5.8096771240234375
                    ],
                    [
                        10,
                        7.6044158935546875
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
                        4.729930877685547
                    ],
                    [
                        2,
                        21.040767669677734
                    ],
                    [
                        3,
                        15.489547729492188
                    ],
                    [
                        4,
                        13.325424194335938
                    ],
                    [
                        5,
                        44.39929962158203
                    ],
                    [
                        6,
                        37.18943786621094
                    ],
                    [
                        7,
                        29.671619415283203
                    ],
                    [
                        8,
                        26.47006607055664
                    ],
                    [
                        9,
                        19.053550720214844
                    ],
                    [
                        10,
                        28.49102783203125
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
                        19.698028564453125
                    ],
                    [
                        2,
                        45.39032745361328
                    ],
                    [
                        3,
                        47.848976135253906
                    ],
                    [
                        4,
                        20.399490356445312
                    ],
                    [
                        5,
                        56.71186065673828
                    ],
                    [
                        6,
                        71.7282485961914
                    ],
                    [
                        7,
                        47.151702880859375
                    ],
                    [
                        8,
                        42.12547302246094
                    ],
                    [
                        9,
                        30.08453369140625
                    ],
                    [
                        10,
                        28.229095458984375
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
                        4.36640167236328
                    ],
                    [
                        2,
                        6.223167419433594
                    ],
                    [
                        3,
                        5.827383041381836
                    ],
                    [
                        4,
                        6.4580078125
                    ],
                    [
                        5,
                        6.785520553588867
                    ],
                    [
                        6,
                        6.190715789794922
                    ],
                    [
                        7,
                        6.439365386962891
                    ],
                    [
                        8,
                        5.683773040771484
                    ],
                    [
                        9,
                        6.183574676513672
                    ],
                    [
                        10,
                        7.146205902099609
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
                        6.951547622680664
                    ],
                    [
                        2,
                        3.931720733642578
                    ],
                    [
                        3,
                        3.399629592895508
                    ],
                    [
                        4,
                        6.648050308227539
                    ],
                    [
                        5,
                        4.489587783813477
                    ],
                    [
                        6,
                        7.535848617553711
                    ],
                    [
                        7,
                        5.370410919189453
                    ],
                    [
                        8,
                        5.297996520996094
                    ],
                    [
                        9,
                        4.911993026733398
                    ],
                    [
                        10,
                        4.613473892211914
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