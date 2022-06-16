//mds 点图
function displayLinepw2(){
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
                        16.88912289886172
                    ],
                    [
                        2,
                        7.6271634463618545
                    ],
                    [
                        3,
                        9.65161482200321
                    ],
                    [
                        4,
                        19.117648640643253
                    ],
                    [
                        5,
                        14.008172034326469
                    ],
                    [
                        6,
                        11.117769486131555
                    ],
                    [
                        7,
                        12.630492034592192
                    ],
                    [
                        8,
                        7.565144864540256
                    ],
                    [
                        9,
                        12.61911980333959
                    ],
                    [
                        10,
                        10.754268090590559
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
                        13.644001684005907
                    ],
                    [
                        2,
                        5.815482848995015
                    ],
                    [
                        3,
                        8.935487940885755
                    ],
                    [
                        4,
                        19.283851534585477
                    ],
                    [
                        5,
                        19.827970720609
                    ],
                    [
                        6,
                        12.779323683452166
                    ],
                    [
                        7,
                        16.74892292457678
                    ],
                    [
                        8,
                        8.694772116174576
                    ],
                    [
                        9,
                        13.848442896315518
                    ],
                    [
                        10,
                        13.892507595021053
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
                        13.02890855378919
                    ],
                    [
                        2,
                        8.109328788123092
                    ],
                    [
                        3,
                        11.765425608682577
                    ],
                    [
                        4,
                        19.560194596105095
                    ],
                    [
                        5,
                        17.377848313299985
                    ],
                    [
                        6,
                        11.788839025967349
                    ],
                    [
                        7,
                        16.377027225511565
                    ],
                    [
                        8,
                        10.547992647433752
                    ],
                    [
                        9,
                        14.222798622634617
                    ],
                    [
                        10,
                        14.213087988737708
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
                        13.629694683397794
                    ],
                    [
                        2,
                        5.815482848995015
                    ],
                    [
                        3,
                        12.326117609890158
                    ],
                    [
                        4,
                        20.737468691393588
                    ],
                    [
                        5,
                        15.664094063986873
                    ],
                    [
                        6,
                        14.341117301871856
                    ],
                    [
                        7,
                        12.940692839632373
                    ],
                    [
                        8,
                        12.770023054097571
                    ],
                    [
                        9,
                        9.87549888129308
                    ],
                    [
                        10,
                        15.788282281935132
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
                        13.501233786534893
                    ],
                    [
                        2,
                        6.435258662668685
                    ],
                    [
                        3,
                        8.244613704492291
                    ],
                    [
                        4,
                        2.9907052868708486
                    ],
                    [
                        5,
                        17.694112869729125
                    ],
                    [
                        6,
                        12.74460741046905
                    ],
                    [
                        7,
                        12.79840401949239
                    ],
                    [
                        8,
                        10.321626981703563
                    ],
                    [
                        9,
                        8.768616092163967
                    ],
                    [
                        10,
                        10.754268090590559
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