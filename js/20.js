//mds 点图
function displayChart20(){
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
                        -142.57920837402344,
                        216.70399475097656
                    ],
                    [
                        -149.2071075439453,
                        157.95169067382812
                    ],
                    [
                        -153.51272583007812,
                        118.78522491455078
                    ],
                    [
                        449.2217102050781,
                        238.3986053466797
                    ],
                    [
                        444.6242980957031,
                        222.52218627929688
                    ],
                    [
                        -363.7479553222656,
                        717.6939697265625
                    ],
                    [
                        -368.18841552734375,
                        729.2415161132812
                    ],
                    [
                        -126.63044738769531,
                        210.80441284179688
                    ],
                    [
                        437.55218505859375,
                        198.5152587890625
                    ],
                    [
                        -133.70558166503906,
                        158.8472900390625
                    ],
                    [
                        -138.31155395507812,
                        124.38182067871094
                    ],
                    [
                        140.47959899902344,
                        -197.3709259033203
                    ],
                    [
                        136.7637176513672,
                        -241.6963653564453
                    ],
                    [
                        -580.3006591796875,
                        -370.03094482421875
                    ],
                    [
                        -581.1314697265625,
                        -301.2350158691406
                    ],
                    [
                        -581.6697387695312,
                        -255.73297119140625
                    ],
                    [
                        278.8368225097656,
                        -181.83934020996094
                    ],
                    [
                        278.65447998046875,
                        -224.51229858398438
                    ],
                    [
                        278.3736877441406,
                        -288.9429626464844
                    ],
                    [
                        -10.595314979553223,
                        1488.2916259765625
                    ],
                    [
                        -5.991285800933838,
                        -689.7483520507812
                    ],
                    [
                        1.0819928646087646,
                        -675.8743286132812
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
                        -277.187255859375,
                        389.5389709472656
                    ],
                    [
                        -401.1708068847656,
                        376.8068542480469
                    ],
                    [
                        -323.9006042480469,
                        378.8550720214844
                    ],
                    [
                        -363.40850830078125,
                        382.1566467285156
                    ],
                    [
                        -70.43132019042969,
                        388.6588439941406
                    ],
                    [
                        168.75860595703125,
                        397.52923583984375
                    ],
                    [
                        -182.00953674316406,
                        113.09567260742188
                    ],
                    [
                        -279.4400329589844,
                        138.24240112304688
                    ],
                    [
                        388.68670654296875,
                        126.26956939697266
                    ],
                    [
                        514.7128295898438,
                        108.12887573242188
                    ],
                    [
                        -864.0247802734375,
                        102.65416717529297
                    ],
                    [
                        233.79086303710938,
                        -206.7971954345703
                    ],
                    [
                        133.43153381347656,
                        -178.4765625
                    ],
                    [
                        316.1574401855469,
                        182.68682861328125
                    ],
                    [
                        -2235.0146484375,
                        -467.14410400390625
                    ],
                    [
                        1081.560302734375,
                        -461.9650573730469
                    ],
                    [
                        3561.34619140625,
                        -463.48333740234375
                    ],
                    [
                        -1601.10693359375,
                        14782.330078125
                    ],
                    [
                        2964.81396484375,
                        -8413.9296875
                    ],
                    [
                        -8393.4775390625,
                        -22.40851402282715
                    ],
                    [
                        8084.3876953125,
                        -46.11400604248047
                    ],
                    [
                        -797.9585571289062,
                        -67.0101089477539
                    ],
                    [
                        -737.342529296875,
                        -216.10107421875
                    ],
                    [
                        -939.0935668945312,
                        -140.30130004882812
                    ],
                    [
                        489.9656677246094,
                        -107.22994232177734
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
                        -43.599117279052734,
                        222.77890014648438
                    ],
                    [
                        -64.37838745117188,
                        -101.93948364257812
                    ],
                    [
                        -2.2865095138549805,
                        -124.5854263305664
                    ],
                    [
                        -16.7605037689209,
                        -151.49803161621094
                    ],
                    [
                        -2.709933280944824,
                        -42.84031295776367
                    ],
                    [
                        26.33642578125,
                        -149.9696807861328
                    ],
                    [
                        -358.9830017089844,
                        596.4207763671875
                    ],
                    [
                        858.2869873046875,
                        279.7088928222656
                    ],
                    [
                        -367.8612365722656,
                        559.6054077148438
                    ],
                    [
                        344.56121826171875,
                        639.381103515625
                    ],
                    [
                        357.8976135253906,
                        637.8203125
                    ],
                    [
                        860.7032470703125,
                        321.997314453125
                    ],
                    [
                        162.97190856933594,
                        -590.1929931640625
                    ],
                    [
                        153.08538818359375,
                        -584.4971923828125
                    ],
                    [
                        146.6766815185547,
                        -581.5421752929688
                    ],
                    [
                        -20.597747802734375,
                        103.24141693115234
                    ],
                    [
                        488.2563171386719,
                        -351.7602233886719
                    ],
                    [
                        -36.42644500732422,
                        101.7033920288086
                    ],
                    [
                        489.09466552734375,
                        -369.3334655761719
                    ],
                    [
                        -399.3276062011719,
                        11.282987594604492
                    ],
                    [
                        -401.5118103027344,
                        31.364927291870117
                    ],
                    [
                        -405.1951599121094,
                        68.27268981933594
                    ],
                    [
                        -408.4878845214844,
                        80.91650390625
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
                        330.1078186035156,
                        900.2732543945312
                    ],
                    [
                        2058.180908203125,
                        844.474365234375
                    ],
                    [
                        -257.0664367675781,
                        807.8946533203125
                    ],
                    [
                        -227.2092742919922,
                        -201.07342529296875
                    ],
                    [
                        -193.6277313232422,
                        -188.71206665039062
                    ],
                    [
                        -173.2537078857422,
                        -175.8274383544922
                    ],
                    [
                        -257.8421630859375,
                        -209.42904663085938
                    ],
                    [
                        -143.49008178710938,
                        -141.4960479736328
                    ],
                    [
                        230.3131103515625,
                        -4952.24609375
                    ],
                    [
                        224.6561737060547,
                        7472.681640625
                    ],
                    [
                        326.3280944824219,
                        344.88470458984375
                    ],
                    [
                        362.616943359375,
                        381.4021911621094
                    ],
                    [
                        61.12071990966797,
                        134.98529052734375
                    ],
                    [
                        31.78929328918457,
                        205.69065856933594
                    ],
                    [
                        -410.7203369140625,
                        -474.2595520019531
                    ],
                    [
                        -400.7460632324219,
                        -399.0693359375
                    ],
                    [
                        500.96258544921875,
                        -546.574951171875
                    ],
                    [
                        478.2809143066406,
                        674.5484619140625
                    ],
                    [
                        801.3623657226562,
                        68.16217803955078
                    ],
                    [
                        779.3922729492188,
                        87.0250015258789
                    ],
                    [
                        -636.2869262695312,
                        -379.6816101074219
                    ],
                    [
                        -618.8568725585938,
                        -308.4839782714844
                    ],
                    [
                        191.8179931640625,
                        -912.3519897460938
                    ],
                    [
                        179.75389099121094,
                        -888.9115600585938
                    ],
                    [
                        -135.82676696777344,
                        442.66436767578125
                    ],
                    [
                        -98.28849792480469,
                        410.91363525390625
                    ],
                    [
                        -264.42242431640625,
                        -1953.284912109375
                    ],
                    [
                        -227.34967041015625,
                        1780.7274169921875
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
                        566.8364868164062,
                        11.148987770080566
                    ],
                    [
                        566.7888793945312,
                        1.3149497509002686
                    ],
                    [
                        89.0057144165039,
                        62.166507720947266
                    ],
                    [
                        101.11857604980469,
                        35.715755462646484
                    ],
                    [
                        78.25255584716797,
                        85.76085662841797
                    ],
                    [
                        115.22789001464844,
                        6.821739196777344
                    ],
                    [
                        124.13528442382812,
                        -10.093223571777344
                    ],
                    [
                        142.39202880859375,
                        -45.13811111450195
                    ],
                    [
                        165.81307983398438,
                        -59.02799606323242
                    ],
                    [
                        186.80300903320312,
                        -77.3414077758789
                    ],
                    [
                        -631.6287231445312,
                        -703.9771118164062
                    ],
                    [
                        164.8773651123047,
                        -62.04399108886719
                    ],
                    [
                        -632.588623046875,
                        -704.2367553710938
                    ],
                    [
                        71.84083557128906,
                        218.18350219726562
                    ],
                    [
                        284.46820068359375,
                        -431.7205505371094
                    ],
                    [
                        94.9650650024414,
                        241.59580993652344
                    ],
                    [
                        268.94671630859375,
                        -432.1263427734375
                    ],
                    [
                        121.01742553710938,
                        268.14544677734375
                    ],
                    [
                        136.72097778320312,
                        284.150146484375
                    ],
                    [
                        -330.4684143066406,
                        840.6315307617188
                    ],
                    [
                        -330.05096435546875,
                        841.3610229492188
                    ],
                    [
                        -329.38360595703125,
                        842.498046875
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
                        -178.4097442626953,
                        94.78446197509766
                    ],
                    [
                        -599.54150390625,
                        64.26071166992188
                    ],
                    [
                        -78.57780456542969,
                        147.7296905517578
                    ],
                    [
                        -306.88482666015625,
                        205.3905792236328
                    ],
                    [
                        -339.6942443847656,
                        200.99978637695312
                    ],
                    [
                        1046.237548828125,
                        8.663633346557617
                    ],
                    [
                        -304.2590026855469,
                        265.3570861816406
                    ],
                    [
                        -696.2350463867188,
                        -160.2296142578125
                    ],
                    [
                        1053.2435302734375,
                        -28.41657066345215
                    ],
                    [
                        585.933837890625,
                        -665.6234741210938
                    ],
                    [
                        592.4304809570312,
                        -642.6317138671875
                    ],
                    [
                        -622.77001953125,
                        327.8984069824219
                    ],
                    [
                        27.557830810546875,
                        -11.349296569824219
                    ],
                    [
                        66.62399291992188,
                        -69.13934326171875
                    ],
                    [
                        130.92503356933594,
                        -198.20004272460938
                    ],
                    [
                        102.2558822631836,
                        -132.136962890625
                    ],
                    [
                        146.55792236328125,
                        -237.3911590576172
                    ],
                    [
                        -829.4546508789062,
                        -419.9100341796875
                    ],
                    [
                        -751.9730224609375,
                        -409.41021728515625
                    ],
                    [
                        346.4623107910156,
                        617.2740478515625
                    ],
                    [
                        418.62835693359375,
                        641.0377807617188
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
                        250.82394409179688,
                        -169.44491577148438
                    ],
                    [
                        260.49505615234375,
                        -105.86520385742188
                    ],
                    [
                        -67.12151336669922,
                        -205.12635803222656
                    ],
                    [
                        237.25955200195312,
                        -263.3346862792969
                    ],
                    [
                        -20.093639373779297,
                        776.0409545898438
                    ],
                    [
                        -39.101837158203125,
                        -120.298583984375
                    ],
                    [
                        -64.61946105957031,
                        643.5355224609375
                    ],
                    [
                        -95.65422821044922,
                        551.6558227539062
                    ],
                    [
                        -122.59283447265625,
                        436.3975524902344
                    ],
                    [
                        -125.25247955322266,
                        491.4988708496094
                    ],
                    [
                        51.65932083129883,
                        -6611.9228515625
                    ],
                    [
                        56.900150299072266,
                        6469.2939453125
                    ],
                    [
                        -102.53001403808594,
                        3.3014509677886963
                    ],
                    [
                        -134.89007568359375,
                        -924.3648681640625
                    ],
                    [
                        -138.72796630859375,
                        -43.14304733276367
                    ],
                    [
                        -161.21705627441406,
                        -944.1553955078125
                    ],
                    [
                        -164.27874755859375,
                        -73.69154357910156
                    ],
                    [
                        -95.4970474243164,
                        -894.6920166015625
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
                    250.82394409179688,
                    260.49505615234375,
                    -67.12151336669922,
                    237.25955200195312,
                    -20.093639373779297,
                    -39.101837158203125,
                    -64.61946105957031,
                    -95.65422821044922,
                    -122.59283447265625,
                    -125.25247955322266,
                    51.65932083129883,
                    56.900150299072266,
                    -102.53001403808594,
                    -134.89007568359375,
                    -138.72796630859375,
                    -161.21705627441406,
                    -164.27874755859375,
                    -95.4970474243164
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