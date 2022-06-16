//mds 点图
function displayChart16(){
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
                        371.8990783691406,
                        -479.9139404296875
                    ],
                    [
                        746.2123413085938,
                        871.54345703125
                    ],
                    [
                        357.5521240234375,
                        -578.7026977539062
                    ],
                    [
                        787.9339599609375,
                        902.8245849609375
                    ],
                    [
                        334.7283935546875,
                        -736.448486328125
                    ],
                    [
                        314.35369873046875,
                        -879.491943359375
                    ],
                    [
                        -645.9169311523438,
                        906.9279174804688
                    ],
                    [
                        -110.13314819335938,
                        -2202.51318359375
                    ],
                    [
                        65.60952758789062,
                        -312.12408447265625
                    ],
                    [
                        59.56230163574219,
                        -225.8793182373047
                    ],
                    [
                        859.0529174804688,
                        2824.364990234375
                    ],
                    [
                        -645.5870971679688,
                        -601.4832153320312
                    ],
                    [
                        -660.7810668945312,
                        969.90625
                    ],
                    [
                        -671.3768310546875,
                        1065.7109375
                    ],
                    [
                        -315.5273132324219,
                        12.764925956726074
                    ],
                    [
                        -353.5259094238281,
                        12.990370750427246
                    ],
                    [
                        -252.77955627441406,
                        10.3456392288208
                    ],
                    [
                        -196.80857849121094,
                        14.496187210083008
                    ],
                    [
                        -261.6146240234375,
                        267.7229309082031
                    ],
                    [
                        -294.1250915527344,
                        -129.0501251220703
                    ],
                    [
                        38.76029968261719,
                        62.56159973144531
                    ],
                    [
                        76.87051391601562,
                        -78.9397964477539
                    ],
                    [
                        -2.483236789703369,
                        212.60826110839844
                    ],
                    [
                        -41.32537841796875,
                        350.46710205078125
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
                        2378.61083984375,
                        -259.4443054199219
                    ],
                    [
                        -511.5528259277344,
                        -251.79774475097656
                    ],
                    [
                        -1774.7159423828125,
                        -255.92572021484375
                    ],
                    [
                        -499.192138671875,
                        -249.32981872558594
                    ],
                    [
                        -481.7704772949219,
                        -245.2008819580078
                    ],
                    [
                        -467.9156799316406,
                        -241.67898559570312
                    ],
                    [
                        -288.9825439453125,
                        401.0723876953125
                    ],
                    [
                        -6.263466835021973,
                        466.0697021484375
                    ],
                    [
                        64.36955261230469,
                        462.5821838378906
                    ],
                    [
                        886.507080078125,
                        400.284912109375
                    ],
                    [
                        -127.94172668457031,
                        126.41326904296875
                    ],
                    [
                        -129.33901977539062,
                        126.5289306640625
                    ],
                    [
                        -163.74371337890625,
                        126.88978576660156
                    ],
                    [
                        -144.1005401611328,
                        126.71925354003906
                    ],
                    [
                        380.759521484375,
                        11.380810737609863
                    ],
                    [
                        303.4288635253906,
                        0.5202851295471191
                    ],
                    [
                        374.8629150390625,
                        4.646889686584473
                    ],
                    [
                        497.3544616699219,
                        5.171590328216553
                    ],
                    [
                        586.5890502929688,
                        5.445414066314697
                    ],
                    [
                        -765.0326538085938,
                        -37.669593811035156
                    ],
                    [
                        -795.4020385742188,
                        -33.26884460449219
                    ],
                    [
                        420.8215026855469,
                        52.33205032348633
                    ],
                    [
                        404.674072265625,
                        56.90422821044922
                    ],
                    [
                        8.437137603759766,
                        64.54424285888672
                    ],
                    [
                        29.59212875366211,
                        71.32196807861328
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
                        -523.5075073242188,
                        -465.4886169433594
                    ],
                    [
                        -502.02667236328125,
                        -499.7596740722656
                    ],
                    [
                        -555.4883422851562,
                        -413.5387878417969
                    ],
                    [
                        -470.1927490234375,
                        -549.328125
                    ],
                    [
                        603.1258544921875,
                        -1361.072021484375
                    ],
                    [
                        591.759765625,
                        1634.999755859375
                    ],
                    [
                        -372.902587890625,
                        -564.0980834960938
                    ],
                    [
                        -340.1171875,
                        -600.9703979492188
                    ],
                    [
                        1127.9580078125,
                        29.618993759155273
                    ],
                    [
                        1117.400390625,
                        89.3463134765625
                    ],
                    [
                        94.40548706054688,
                        68.66793823242188
                    ],
                    [
                        -30.434751510620117,
                        -75.74369049072266
                    ],
                    [
                        10.738611221313477,
                        28.429950714111328
                    ],
                    [
                        -12.566383361816406,
                        64.01622772216797
                    ],
                    [
                        -887.752685546875,
                        -887.2989501953125
                    ],
                    [
                        143.92459106445312,
                        676.3987426757812
                    ],
                    [
                        142.7899932861328,
                        593.173095703125
                    ],
                    [
                        117.15451049804688,
                        463.6437072753906
                    ],
                    [
                        165.9996337890625,
                        490.0278625488281
                    ],
                    [
                        -857.3372192382812,
                        -938.3070678710938
                    ],
                    [
                        -668.23583984375,
                        932.1153564453125
                    ],
                    [
                        2367.85693359375,
                        899.5452880859375
                    ],
                    [
                        584.9435424804688,
                        426.5280456542969
                    ],
                    [
                        605.9945068359375,
                        389.0872802734375
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
                        98.3685302734375,
                        359.93475341796875
                    ],
                    [
                        115.73735046386719,
                        368.0230712890625
                    ],
                    [
                        -126.16836547851562,
                        299.2349548339844
                    ],
                    [
                        -73.96414947509766,
                        273.3569641113281
                    ],
                    [
                        -99.01453399658203,
                        283.8300476074219
                    ],
                    [
                        -46.81940841674805,
                        257.674560546875
                    ],
                    [
                        396.8844909667969,
                        -0.661361575126648
                    ],
                    [
                        -352.45635986328125,
                        885.3917846679688
                    ],
                    [
                        -351.9731140136719,
                        870.1927490234375
                    ],
                    [
                        396.021240234375,
                        31.833375930786133
                    ],
                    [
                        -136.63674926757812,
                        -84.3908462524414
                    ],
                    [
                        -147.7711639404297,
                        -116.98002624511719
                    ],
                    [
                        178.36318969726562,
                        259.8408203125
                    ],
                    [
                        197.49545288085938,
                        -1100.436767578125
                    ],
                    [
                        48.21268844604492,
                        590.73046875
                    ],
                    [
                        52.989200592041016,
                        591.0997314453125
                    ],
                    [
                        299.6923522949219,
                        -109.06645965576172
                    ],
                    [
                        324.4471740722656,
                        -133.023681640625
                    ],
                    [
                        393.9410400390625,
                        -31.02804946899414
                    ],
                    [
                        360.5103454589844,
                        -63.638031005859375
                    ],
                    [
                        -66.14059448242188,
                        -414.49249267578125
                    ],
                    [
                        -117.91419982910156,
                        -375.3443908691406
                    ],
                    [
                        -132.2108917236328,
                        -362.876708984375
                    ],
                    [
                        -98.10242462158203,
                        -396.006591796875
                    ],
                    [
                        -391.8313903808594,
                        -777.2543334960938
                    ],
                    [
                        -172.25143432617188,
                        -788.5194702148438
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
                        372.8178405761719,
                        -159.16078186035156
                    ],
                    [
                        353.0557861328125,
                        -240.33111572265625
                    ],
                    [
                        479.2239074707031,
                        -174.83021545410156
                    ],
                    [
                        256.34332275390625,
                        -222.98207092285156
                    ],
                    [
                        421.88372802734375,
                        -192.8266143798828
                    ],
                    [
                        -80.82222747802734,
                        -204.00619506835938
                    ],
                    [
                        -57.041133880615234,
                        284.5420837402344
                    ],
                    [
                        -94.54134368896484,
                        306.9971618652344
                    ],
                    [
                        -618.0198364257812,
                        55.29979705810547
                    ],
                    [
                        -535.7706909179688,
                        29.676746368408203
                    ],
                    [
                        -754.4607543945312,
                        94.02559661865234
                    ],
                    [
                        -180.54348754882812,
                        273.8003845214844
                    ],
                    [
                        20.664365768432617,
                        211.7108154296875
                    ],
                    [
                        -56.51137161254883,
                        236.46580505371094
                    ],
                    [
                        974.5460815429688,
                        114.2674789428711
                    ],
                    [
                        952.34521484375,
                        150.08087158203125
                    ],
                    [
                        12337.392578125,
                        -273.7821044921875
                    ],
                    [
                        -12163.8349609375,
                        -255.53726196289062
                    ],
                    [
                        926.7196655273438,
                        367.74114990234375
                    ],
                    [
                        -282.5028991699219,
                        349.78851318359375
                    ],
                    [
                        -1330.33203125,
                        -1358.42041015625
                    ],
                    [
                        861.6015014648438,
                        -493.23504638671875
                    ],
                    [
                        950.6207275390625,
                        510.6222229003906
                    ],
                    [
                        -431.6505126953125,
                        657.7906494140625
                    ],
                    [
                        -354.9217834472656,
                        683.462890625
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
                        39.95047378540039,
                        -937.206298828125
                    ],
                    [
                        73.9758529663086,
                        -814.5321655273438
                    ],
                    [
                        615.228515625,
                        -831.7006225585938
                    ],
                    [
                        -313.2260437011719,
                        658.5865478515625
                    ],
                    [
                        633.6670532226562,
                        1021.7896728515625
                    ],
                    [
                        -293.8346252441406,
                        634.8546752929688
                    ],
                    [
                        389.2796936035156,
                        -21.455839157104492
                    ],
                    [
                        -358.75146484375,
                        -470.2297058105469
                    ],
                    [
                        -351.4899597167969,
                        74.31852722167969
                    ],
                    [
                        488.61383056640625,
                        -40.647308349609375
                    ],
                    [
                        516.7367553710938,
                        70.50508117675781
                    ],
                    [
                        385.3899230957031,
                        74.0478286743164
                    ],
                    [
                        924.99658203125,
                        -77.58172607421875
                    ],
                    [
                        1535.8702392578125,
                        253.7228546142578
                    ],
                    [
                        65.18663787841797,
                        -982.8643188476562
                    ],
                    [
                        38.0007209777832,
                        -522.9041137695312
                    ],
                    [
                        32.87522888183594,
                        -550.3748168945312
                    ],
                    [
                        23.238006591796875,
                        -1147.958740234375
                    ],
                    [
                        -27.740297317504883,
                        1469.1185302734375
                    ],
                    [
                        -406.5718994140625,
                        630.7838134765625
                    ],
                    [
                        -374.4410095214844,
                        674.2381591796875
                    ],
                    [
                        43.1892204284668,
                        -2214.151611328125
                    ],
                    [
                        38.528316497802734,
                        3106.012939453125
                    ],
                    [
                        -685.6241455078125,
                        220.72669982910156
                    ],
                    [
                        -672.2927856445312,
                        90.59496307373047
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
                        697.3394775390625,
                        103.90326690673828
                    ],
                    [
                        855.8161010742188,
                        113.36767578125
                    ],
                    [
                        4883.216796875,
                        -0.9527798891067505
                    ],
                    [
                        -2136.02685546875,
                        -2.7591090202331543
                    ],
                    [
                        585.3256225585938,
                        -4.256112098693848
                    ],
                    [
                        33.548675537109375,
                        -317.5804443359375
                    ],
                    [
                        596.4541625976562,
                        -5.9443769454956055
                    ],
                    [
                        1075.0565185546875,
                        -94.34813690185547
                    ],
                    [
                        -120.94416046142578,
                        -328.4403076171875
                    ],
                    [
                        1111.6116943359375,
                        -104.07478332519531
                    ],
                    [
                        1580.710205078125,
                        296.383056640625
                    ],
                    [
                        -3146.162109375,
                        283.9156494140625
                    ],
                    [
                        -305.1899108886719,
                        269.4944763183594
                    ],
                    [
                        -161.18284606933594,
                        261.12469482421875
                    ],
                    [
                        -2379.80810546875,
                        -326.06488037109375
                    ],
                    [
                        -402.95751953125,
                        160.7467498779297
                    ],
                    [
                        -360.5644226074219,
                        170.49143981933594
                    ],
                    [
                        1947.0196533203125,
                        -337.3825988769531
                    ],
                    [
                        -1055.5133056640625,
                        -344.3970947265625
                    ],
                    [
                        -2001.6273193359375,
                        -644.576171875
                    ],
                    [
                        1911.383056640625,
                        -646.0571899414062
                    ],
                    [
                        -867.57080078125,
                        181.6480712890625
                    ],
                    [
                        135.93356323242188,
                        -336.89239501953125
                    ],
                    [
                        -810.6668090820312,
                        192.12472534179688
                    ],
                    [
                        119.61707305908203,
                        -345.5109558105469
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
                    697.3394775390625,
                    855.8161010742188,
                    4883.216796875,
                    -2136.02685546875,
                    585.3256225585938,
                    33.548675537109375,
                    596.4541625976562,
                    1075.0565185546875,
                    -120.94416046142578,
                    1111.6116943359375,
                    1580.710205078125,
                    -3146.162109375,
                    -305.1899108886719,
                    -161.18284606933594,
                    -2379.80810546875,
                    -402.95751953125,
                    -360.5644226074219,
                    1947.0196533203125,
                    -1055.5133056640625,
                    -2001.6273193359375,
                    1911.383056640625,
                    -867.57080078125,
                    135.93356323242188,
                    -810.6668090820312,
                    119.61707305908203
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