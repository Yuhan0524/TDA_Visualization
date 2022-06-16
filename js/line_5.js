function displayLine5(){
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
                        31.91253662109375
                    ],
                    [
                        2,
                        47.93345260620117
                    ],
                    [
                        3,
                        48.25971984863281
                    ],
                    [
                        4,
                        33.389312744140625
                    ],
                    [
                        5,
                        45.734619140625
                    ],
                    [
                        6,
                        55.25014114379883
                    ],
                    [
                        7,
                        47.53134536743164
                    ],
                    [
                        8,
                        52.71503448486328
                    ],
                    [
                        9,
                        35.32060623168945
                    ],
                    [
                        10,
                        40.44792175292969
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
                        4.855438232421875
                    ],
                    [
                        2,
                        0.4382476806640625
                    ],
                    [
                        3,
                        2.7071380615234375
                    ],
                    [
                        4,
                        7.1843109130859375
                    ],
                    [
                        5,
                        3.7593231201171875
                    ],
                    [
                        6,
                        4.829498291015625
                    ],
                    [
                        7,
                        6.9656524658203125
                    ],
                    [
                        8,
                        3.7337799072265625
                    ],
                    [
                        9,
                        2.9547119140625
                    ],
                    [
                        10,
                        1.7052001953125
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
                        9.034912109375
                    ],
                    [
                        2,
                        18.573089599609375
                    ],
                    [
                        3,
                        15.989112854003906
                    ],
                    [
                        4,
                        11.301239013671875
                    ],
                    [
                        5,
                        18.9752197265625
                    ],
                    [
                        6,
                        28.05498504638672
                    ],
                    [
                        7,
                        30.47650146484375
                    ],
                    [
                        8,
                        20.430683135986328
                    ],
                    [
                        9,
                        11.350502014160156
                    ],
                    [
                        10,
                        13.334827423095703
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
                        23.768280029296875
                    ],
                    [
                        2,
                        39.14130401611328
                    ],
                    [
                        3,
                        46.09534454345703
                    ],
                    [
                        4,
                        26.451065063476562
                    ],
                    [
                        5,
                        38.22252655029297
                    ],
                    [
                        6,
                        65.70893096923828
                    ],
                    [
                        7,
                        46.16522216796875
                    ],
                    [
                        8,
                        44.327880859375
                    ],
                    [
                        9,
                        25.189956665039062
                    ],
                    [
                        10,
                        26.209136962890625
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
                        3.416248321533203
                    ],
                    [
                        2,
                        4.5104732513427725
                    ],
                    [
                        3,
                        3.90341854095459
                    ],
                    [
                        4,
                        6.297534942626952
                    ],
                    [
                        5,
                        3.9348068237304688
                    ],
                    [
                        6,
                        4.854835510253905
                    ],
                    [
                        7,
                        6.810749053955078
                    ],
                    [
                        8,
                        3.760374069213867
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
                        5.469768524169922
                    ],
                    [
                        2,
                        6.18861198425293
                    ],
                    [
                        3,
                        5.821956634521484
                    ],
                    [
                        4,
                        4.991381645202637
                    ],
                    [
                        5,
                        6.69209098815918
                    ],
                    [
                        6,
                        7.445209503173828
                    ],
                    [
                        7,
                        6.33458137512207
                    ],
                    [
                        8,
                        5.699199676513672
                    ],
                    [
                        9,
                        4.268306732177734
                    ],
                    [
                        10,
                        4.770469665527344
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