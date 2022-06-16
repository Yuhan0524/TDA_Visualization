//mds 点图
function displayChart13(){
    //1实例化对象
    var myChart = echarts.init(document.querySelector('.panel  .chart'));
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
            "EDD8AB",
            "#F7BC99",
            "#C5C4BC",
            "#B79981",
            "#7D8590",
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
                "type": "scatter",
                "name": "angry",
                "symbolSize": 10,
                "data": [
                    [
                        312.4735107421875,
                        -68.11590576171875
                    ],
                    [
                        -212.23265075683594,
                        75.67559051513672
                    ],
                    [
                        306.9330139160156,
                        437.31768798828125
                    ],
                    [
                        301.23199462890625,
                        -209.4026336669922
                    ],
                    [
                        -190.6233673095703,
                        95.14071655273438
                    ],
                    [
                        301.5264892578125,
                        -206.9298553466797
                    ],
                    [
                        -74.62550354003906,
                        -555.9135131835938
                    ],
                    [
                        322.06011962890625,
                        -278.5438232421875
                    ],
                    [
                        339.1403503417969,
                        1115.99072265625
                    ],
                    [
                        -39.671913146972656,
                        361.302734375
                    ],
                    [
                        -57.550716400146484,
                        -523.3657836914062
                    ],
                    [
                        -49.73383712768555,
                        370.0898742675781
                    ],
                    [
                        -22.89692497253418,
                        632.4510498046875
                    ],
                    [
                        -7.727417945861816,
                        562.3745727539062
                    ],
                    [
                        28.54305076599121,
                        -673.2876586914062
                    ],
                    [
                        39.6075553894043,
                        -221.7247314453125
                    ],
                    [
                        35.0839729309082,
                        -534.6083984375
                    ],
                    [
                        46.52958297729492,
                        -311.7030334472656
                    ],
                    [
                        -371.8768005371094,
                        1215.0667724609375
                    ],
                    [
                        -354.4949645996094,
                        -116.2757339477539
                    ],
                    [
                        -398.2016906738281,
                        -3330.863525390625
                    ],
                    [
                        -192.4786834716797,
                        2350.08740234375
                    ],
                    [
                        -175.3907470703125,
                        -1359.7301025390625
                    ],
                    [
                        -81.659912109375,
                        584.7844848632812
                    ],
                    [
                        -95.4544448852539,
                        640.3502197265625
                    ]
                ],
                "label": {
                    "show": false,
                    "position": "top",
                    "margin": 8
                },
                "rippleEffect": {
                    "show": true,
                    "brushType": "stroke",
                    "scale": 2.5,
                    "period": 4
                }
            },
            {
                "type": "scatter",
                "name": "disgust",
                "symbolSize": 10,
                "data": [
                    [
                        -61.15668487548828,
                        36.7677001953125
                    ],
                    [
                        -57.03712844848633,
                        92.09666442871094
                    ],
                    [
                        -54.566253662109375,
                        125.07715606689453
                    ],
                    [
                        -65.06851196289062,
                        -15.891769409179688
                    ],
                    [
                        -99.89647674560547,
                        181.25608825683594
                    ],
                    [
                        -133.5087127685547,
                        141.6135711669922
                    ],
                    [
                        -942.6749267578125,
                        176.33168029785156
                    ],
                    [
                        -92.37381744384766,
                        186.27847290039062
                    ],
                    [
                        -167.309326171875,
                        107.75824737548828
                    ],
                    [
                        -68.73912048339844,
                        -64.28946685791016
                    ],
                    [
                        -44.9212646484375,
                        237.10238647460938
                    ],
                    [
                        310.3962097167969,
                        -21.916786193847656
                    ],
                    [
                        287.56805419921875,
                        -54.62477111816406
                    ],
                    [
                        221.16943359375,
                        -146.6772003173828
                    ],
                    [
                        236.84580993652344,
                        -125.64290618896484
                    ],
                    [
                        262.9517822265625,
                        -89.8766860961914
                    ],
                    [
                        151.92469787597656,
                        -413.3380432128906
                    ],
                    [
                        173.18418884277344,
                        -396.8721923828125
                    ],
                    [
                        436.33038330078125,
                        4.754673480987549
                    ],
                    [
                        434.88983154296875,
                        -27.01665496826172
                    ],
                    [
                        -521.3507080078125,
                        -135.52304077148438
                    ],
                    [
                        -525.4037475585938,
                        -425.58428955078125
                    ]
                ],
                "label": {
                    "show": false,
                    "position": "top",
                    "margin": 8
                },
                "rippleEffect": {
                    "show": true,
                    "brushType": "stroke",
                    "scale": 2.5,
                    "period": 4
                }
            },
            {
                "type": "scatter",
                "name": "fear",
                "symbolSize": 10,
                "data": [
                    [
                        64.12635803222656,
                        -371.884765625
                    ],
                    [
                        43.0913200378418,
                        -390.8707275390625
                    ],
                    [
                        19.759056091308594,
                        -450.8746032714844
                    ],
                    [
                        5.665772438049316,
                        -486.088623046875
                    ],
                    [
                        495.7761535644531,
                        -190.8704833984375
                    ],
                    [
                        -326.38201904296875,
                        -150.1433868408203
                    ],
                    [
                        -307.0885925292969,
                        124.8631362915039
                    ],
                    [
                        739.7302856445312,
                        -919.5877075195312
                    ],
                    [
                        -380.7188415527344,
                        -1037.059326171875
                    ],
                    [
                        -319.511962890625,
                        143.0419158935547
                    ],
                    [
                        -314.6622009277344,
                        134.63768005371094
                    ],
                    [
                        485.297607421875,
                        -318.01348876953125
                    ],
                    [
                        250.0769500732422,
                        710.7374267578125
                    ],
                    [
                        117.07881927490234,
                        -508.5888671875
                    ],
                    [
                        203.77992248535156,
                        1087.898193359375
                    ],
                    [
                        168.62405395507812,
                        -613.2145385742188
                    ],
                    [
                        225.42501831054688,
                        1295.271484375
                    ],
                    [
                        -247.69882202148438,
                        -875.2172241210938
                    ],
                    [
                        -216.69793701171875,
                        943.811767578125
                    ],
                    [
                        -654.9238891601562,
                        -103.21321105957031
                    ],
                    [
                        -644.0479736328125,
                        350.09515380859375
                    ],
                    [
                        143.6497039794922,
                        677.717529296875
                    ],
                    [
                        115.4193344116211,
                        807.4423828125
                    ]
                ],
                "label": {
                    "show": false,
                    "position": "top",
                    "margin": 8
                },
                "rippleEffect": {
                    "show": true,
                    "brushType": "stroke",
                    "scale": 2.5,
                    "period": 4
                }
            },
            {
                "type": "scatter",
                "name": "happy",
                "symbolSize": 10,
                "data": [
                    [
                        237.99996948242188,
                        140.63909912109375
                    ],
                    [
                        278.6127624511719,
                        90.1866226196289
                    ],
                    [
                        337.05224609375,
                        35.93331527709961
                    ],
                    [
                        351.5971374511719,
                        28.86542320251465
                    ],
                    [
                        34.94941711425781,
                        172.9232940673828
                    ],
                    [
                        368.44000244140625,
                        -39.18320083618164
                    ],
                    [
                        4.778582572937012,
                        258.92840576171875
                    ],
                    [
                        57.8829231262207,
                        -330.010009765625
                    ],
                    [
                        44.758079528808594,
                        -125.43377685546875
                    ],
                    [
                        108.02027893066406,
                        -141.06130981445312
                    ],
                    [
                        359.4656982421875,
                        -311.1265869140625
                    ],
                    [
                        -375.0931396484375,
                        312.15185546875
                    ],
                    [
                        -367.40887451171875,
                        275.69195556640625
                    ],
                    [
                        348.8337097167969,
                        -351.4856872558594
                    ],
                    [
                        476.1700744628906,
                        291.8141784667969
                    ],
                    [
                        488.67681884765625,
                        290.1151123046875
                    ],
                    [
                        -387.0619812011719,
                        -6.749846458435059
                    ],
                    [
                        -397.2242126464844,
                        33.86937713623047
                    ],
                    [
                        -693.4546508789062,
                        -460.736572265625
                    ],
                    [
                        -764.8656616210938,
                        -442.2216796875
                    ],
                    [
                        -88.15293884277344,
                        623.5792236328125
                    ],
                    [
                        -70.81954193115234,
                        617.9334716796875
                    ],
                    [
                        215.2024383544922,
                        -371.66656494140625
                    ],
                    [
                        200.1707763671875,
                        -409.8012390136719
                    ],
                    [
                        657.6095581054688,
                        -52.40789794921875
                    ],
                    [
                        -1164.5584716796875,
                        -58.25043487548828
                    ]
                ],
                "label": {
                    "show": false,
                    "position": "top",
                    "margin": 8
                },
                "rippleEffect": {
                    "show": true,
                    "brushType": "stroke",
                    "scale": 2.5,
                    "period": 4
                }
            },
            {
                "type": "scatter",
                "name": "neutral",
                "symbolSize": 10,
                "data": [
                    [
                        -4.9195475578308105,
                        245.63766479492188
                    ],
                    [
                        -4.4871087074279785,
                        286.3048400878906
                    ],
                    [
                        -4.188266754150391,
                        313.5627136230469
                    ],
                    [
                        -499.52899169921875,
                        539.5765380859375
                    ],
                    [
                        -3.7254836559295654,
                        353.7793884277344
                    ],
                    [
                        -514.8486938476562,
                        441.9692077636719
                    ],
                    [
                        -518.3167114257812,
                        461.5032653808594
                    ],
                    [
                        -524.1690673828125,
                        494.0524597167969
                    ],
                    [
                        -560.8837890625,
                        46.33172607421875
                    ],
                    [
                        -589.495849609375,
                        -18.34332275390625
                    ],
                    [
                        -560.0117797851562,
                        105.93509674072266
                    ],
                    [
                        -41.53179168701172,
                        -285.96820068359375
                    ],
                    [
                        -59.817352294921875,
                        -296.1846008300781
                    ],
                    [
                        424.9256896972656,
                        65.49398040771484
                    ],
                    [
                        -312.4719543457031,
                        -500.6911926269531
                    ],
                    [
                        414.1301574707031,
                        16.471158981323242
                    ],
                    [
                        -329.58636474609375,
                        -496.8415222167969
                    ],
                    [
                        399.7718505859375,
                        -45.100528717041016
                    ],
                    [
                        420.5796203613281,
                        -112.07989501953125
                    ],
                    [
                        380.78192138671875,
                        -39.25668716430664
                    ],
                    [
                        560.9891357421875,
                        113.59247589111328
                    ],
                    [
                        547.0377807617188,
                        -754.1895751953125
                    ],
                    [
                        21.740930557250977,
                        -545.6146240234375
                    ],
                    [
                        3.450115919113159,
                        -549.3080444335938
                    ]
                ],
                "label": {
                    "show": false,
                    "position": "top",
                    "margin": 8
                },
                "rippleEffect": {
                    "show": true,
                    "brushType": "stroke",
                    "scale": 2.5,
                    "period": 4
                }
            },
            {
                "type": "scatter",
                "name": "sad",
                "symbolSize": 10,
                "data": [
                    [
                        -95.05591583251953,
                        -230.955810546875
                    ],
                    [
                        -43.711158752441406,
                        -121.8862533569336
                    ],
                    [
                        -8.403607368469238,
                        -133.85140991210938
                    ],
                    [
                        490.0322570800781,
                        -640.1317749023438
                    ],
                    [
                        44.79540252685547,
                        -237.52793884277344
                    ],
                    [
                        492.9991760253906,
                        -333.7889099121094
                    ],
                    [
                        -218.13755798339844,
                        1191.8885498046875
                    ],
                    [
                        -525.1339721679688,
                        176.6774444580078
                    ],
                    [
                        -14.243131637573242,
                        2101.426513671875
                    ],
                    [
                        -522.8480224609375,
                        -324.37457275390625
                    ],
                    [
                        19.623044967651367,
                        -1353.76123046875
                    ],
                    [
                        -555.7277221679688,
                        529.6782836914062
                    ],
                    [
                        -525.0156860351562,
                        420.1830139160156
                    ],
                    [
                        -233.5335235595703,
                        -577.4683227539062
                    ],
                    [
                        1774.69091796875,
                        -77.8828125
                    ],
                    [
                        -1044.559814453125,
                        45.73249053955078
                    ],
                    [
                        -231.1311492919922,
                        845.3621826171875
                    ],
                    [
                        -229.95591735839844,
                        540.7075805664062
                    ],
                    [
                        -207.78762817382812,
                        658.4039916992188
                    ],
                    [
                        -144.69264221191406,
                        682.34130859375
                    ],
                    [
                        127.9341049194336,
                        -1073.549072265625
                    ],
                    [
                        91.45100402832031,
                        220.42941284179688
                    ],
                    [
                        216.1640625,
                        -391.8004455566406
                    ],
                    [
                        179.9677276611328,
                        -479.1918640136719
                    ]
                ],
                "label": {
                    "show": false,
                    "position": "top",
                    "margin": 8
                },
                "rippleEffect": {
                    "show": true,
                    "brushType": "stroke",
                    "scale": 2.5,
                    "period": 4
                }
            },
            {
                "type": "scatter",
                "name": "surprise",
                "symbolSize": 10,
                "data": [
                    [
                        653.2301025390625,
                        -679.526123046875
                    ],
                    [
                        655.2163696289062,
                        1533.8890380859375
                    ],
                    [
                        650.2640991210938,
                        -588.0887451171875
                    ],
                    [
                        658.1824340820312,
                        1293.0855712890625
                    ],
                    [
                        234.4573974609375,
                        220.16644287109375
                    ],
                    [
                        240.36708068847656,
                        938.520263671875
                    ],
                    [
                        -233.21299743652344,
                        -790.6016845703125
                    ],
                    [
                        -234.2133331298828,
                        -527.095947265625
                    ],
                    [
                        -532.0794067382812,
                        397.86175537109375
                    ],
                    [
                        -538.0020751953125,
                        688.2552490234375
                    ],
                    [
                        -264.315673828125,
                        -1714.567138671875
                    ],
                    [
                        -255.51434326171875,
                        65.28703308105469
                    ],
                    [
                        -242.46473693847656,
                        1689.9927978515625
                    ],
                    [
                        -244.17701721191406,
                        -848.13623046875
                    ],
                    [
                        -237.02008056640625,
                        -727.687744140625
                    ],
                    [
                        131.2882080078125,
                        1030.6654052734375
                    ],
                    [
                        125.79911804199219,
                        -1246.7252197265625
                    ],
                    [
                        321.22064208984375,
                        4643.2529296875
                    ],
                    [
                        319.45587158203125,
                        -5218.05615234375
                    ],
                    [
                        -359.80987548828125,
                        299.6051940917969
                    ],
                    [
                        -365.7370300292969,
                        401.706298828125
                    ]
                ],
                "label": {
                    "show": false,
                    "position": "top",
                    "margin": 8
                },
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
                    "neutral",
                    "sad",
                    "surprise"
                ],
                "selected": {
                    "angry": true,
                    "disgust": true,
                    "fear": true,
                    "happy": true,
                    "neutral": true,
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
                "data": [
                    653.2301025390625,
                    655.2163696289062,
                    650.2640991210938,
                    658.1824340820312,
                    234.4573974609375,
                    240.36708068847656,
                    -233.21299743652344,
                    -234.2133331298828,
                    -532.0794067382812,
                    -538.0020751953125,
                    -264.315673828125,
                    -255.51434326171875,
                    -242.46473693847656,
                    -244.17701721191406,
                    -237.02008056640625,
                    131.2882080078125,
                    125.79911804199219,
                    321.22064208984375,
                    319.45587158203125,
                    -359.80987548828125,
                    -365.7370300292969
                ]
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

}