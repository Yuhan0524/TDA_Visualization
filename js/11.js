//mds 点图
function displayChart11(){
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
                        -250.0300750732422,
                        176.03076171875
                    ],
                    [
                        -529.0994262695312,
                        172.57522583007812
                    ],
                    [
                        -97.38929748535156,
                        171.55197143554688
                    ],
                    [
                        -328.87908935546875,
                        174.33787536621094
                    ],
                    [
                        -856.317138671875,
                        -135.5728759765625
                    ],
                    [
                        -63.16082763671875,
                        177.71939086914062
                    ],
                    [
                        123.9755859375,
                        179.2571563720703
                    ],
                    [
                        -688.2687377929688,
                        -153.6011199951172
                    ],
                    [
                        -847.5845336914062,
                        -160.27041625976562
                    ],
                    [
                        -685.7818603515625,
                        -141.86874389648438
                    ],
                    [
                        763.2488403320312,
                        -149.213623046875
                    ],
                    [
                        748.9340209960938,
                        -111.28822326660156
                    ],
                    [
                        698.2658081054688,
                        -107.08786010742188
                    ],
                    [
                        594.0994262695312,
                        -110.5434341430664
                    ],
                    [
                        594.451904296875,
                        -104.20146942138672
                    ],
                    [
                        -15.172951698303223,
                        -48.765193939208984
                    ],
                    [
                        282.2737731933594,
                        -52.993770599365234
                    ],
                    [
                        57.974185943603516,
                        -42.20119857788086
                    ],
                    [
                        581.7029418945312,
                        -97.03044891357422
                    ],
                    [
                        571.4229125976562,
                        -92.75498962402344
                    ],
                    [
                        153.38197326660156,
                        306.42303466796875
                    ],
                    [
                        -29.099761962890625,
                        313.0714111328125
                    ],
                    [
                        -138.7608642578125,
                        317.504638671875
                    ],
                    [
                        -317.5796203613281,
                        324.14727783203125
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
                        162.43019104003906,
                        -8.109407424926758
                    ],
                    [
                        154.75062561035156,
                        -8.018318176269531
                    ],
                    [
                        150.2710723876953,
                        -7.964879512786865
                    ],
                    [
                        -36.241607666015625,
                        -313.6888427734375
                    ],
                    [
                        176.38861083984375,
                        -8.279589653015137
                    ],
                    [
                        169.7179718017578,
                        -8.197163581848145
                    ],
                    [
                        -32.65504455566406,
                        -308.43060302734375
                    ],
                    [
                        -32.70893859863281,
                        -285.4484558105469
                    ],
                    [
                        -31.188718795776367,
                        -291.1542053222656
                    ],
                    [
                        -28.067922592163086,
                        -302.2412109375
                    ],
                    [
                        -20.645519256591797,
                        -306.3858642578125
                    ],
                    [
                        -283.0471496582031,
                        335.7757263183594
                    ],
                    [
                        -278.2738952636719,
                        329.5037841796875
                    ],
                    [
                        -267.40460205078125,
                        314.2227783203125
                    ],
                    [
                        -266.60736083984375,
                        314.2995300292969
                    ],
                    [
                        -267.70751953125,
                        314.1136169433594
                    ],
                    [
                        -272.9324645996094,
                        322.4773864746094
                    ],
                    [
                        -259.5701599121094,
                        305.9455871582031
                    ],
                    [
                        203.74000549316406,
                        -206.59083557128906
                    ],
                    [
                        202.23117065429688,
                        -210.57833862304688
                    ],
                    [
                        201.22885131835938,
                        -213.24436950683594
                    ],
                    [
                        199.72959899902344,
                        -217.2293701171875
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
                        -346.79193115234375,
                        -184.5780029296875
                    ],
                    [
                        -342.5738220214844,
                        -245.60003662109375
                    ],
                    [
                        -21.11612319946289,
                        334.66265869140625
                    ],
                    [
                        -338.0281066894531,
                        -313.779052734375
                    ],
                    [
                        -337.364990234375,
                        -463.3961486816406
                    ],
                    [
                        -333.1394958496094,
                        -402.9128723144531
                    ],
                    [
                        -320.93609619140625,
                        -383.88348388671875
                    ],
                    [
                        105.39686584472656,
                        166.31907653808594
                    ],
                    [
                        103.01724243164062,
                        225.10000610351562
                    ],
                    [
                        -311.8560485839844,
                        -375.19451904296875
                    ],
                    [
                        -25.188236236572266,
                        374.1287841796875
                    ],
                    [
                        109.0397720336914,
                        77.35711669921875
                    ],
                    [
                        440.2487487792969,
                        -797.4317626953125
                    ],
                    [
                        434.11236572265625,
                        -840.0697631835938
                    ],
                    [
                        32.75672149658203,
                        -5340.2646484375
                    ],
                    [
                        27.965476989746094,
                        2757.916259765625
                    ],
                    [
                        -360.29315185546875,
                        850.2525634765625
                    ],
                    [
                        -360.11749267578125,
                        866.0619506835938
                    ],
                    [
                        -360.00286865234375,
                        876.4639892578125
                    ],
                    [
                        46.77130126953125,
                        -184.15306091308594
                    ],
                    [
                        52.75931167602539,
                        -154.29991149902344
                    ],
                    [
                        455.8085021972656,
                        327.4206848144531
                    ],
                    [
                        452.7385559082031,
                        312.7644958496094
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
                        50.943763732910156,
                        -489.5800476074219
                    ],
                    [
                        30.020328521728516,
                        -556.8407592773438
                    ],
                    [
                        74.4455337524414,
                        -685.677001953125
                    ],
                    [
                        -63.33324432373047,
                        -261.1285705566406
                    ],
                    [
                        -97.7555923461914,
                        -381.69635009765625
                    ],
                    [
                        -80.3777847290039,
                        -180.97372436523438
                    ],
                    [
                        -109.70556640625,
                        -61.41891860961914
                    ],
                    [
                        5.37026309967041,
                        233.53211975097656
                    ],
                    [
                        -698.2111206054688,
                        -4258.1923828125
                    ],
                    [
                        -712.5672607421875,
                        5755.8974609375
                    ],
                    [
                        -77.18405151367188,
                        57.86433410644531
                    ],
                    [
                        -33.37318420410156,
                        103.61908721923828
                    ],
                    [
                        -103.75281524658203,
                        8.200907707214355
                    ],
                    [
                        269.933837890625,
                        139.31187438964844
                    ],
                    [
                        -713.3129272460938,
                        204.57913208007812
                    ],
                    [
                        469.8988037109375,
                        62.5192756652832
                    ],
                    [
                        451.95526123046875,
                        137.24925231933594
                    ],
                    [
                        440.43341064453125,
                        187.4282684326172
                    ],
                    [
                        291.7750549316406,
                        -2044.2108154296875
                    ],
                    [
                        106.54190063476562,
                        639.38134765625
                    ],
                    [
                        69.64190673828125,
                        644.7136840820312
                    ],
                    [
                        258.29400634765625,
                        2166.250732421875
                    ],
                    [
                        -389.8504943847656,
                        -173.7930908203125
                    ],
                    [
                        -399.07568359375,
                        -254.44749450683594
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
                        -854.9266357421875,
                        -214.51084899902344
                    ],
                    [
                        -860.4306030273438,
                        -179.33412170410156
                    ],
                    [
                        398.28912353515625,
                        -864.50439453125
                    ],
                    [
                        367.89129638671875,
                        -853.5592041015625
                    ],
                    [
                        -63.89745330810547,
                        489.702880859375
                    ],
                    [
                        -94.12422180175781,
                        442.6199645996094
                    ],
                    [
                        -143.8449249267578,
                        367.5635681152344
                    ],
                    [
                        -188.06985473632812,
                        295.871337890625
                    ],
                    [
                        120.01699829101562,
                        -375.5379333496094
                    ],
                    [
                        96.20946502685547,
                        -383.0142517089844
                    ],
                    [
                        82.1889419555664,
                        -394.0517578125
                    ],
                    [
                        -471.3037414550781,
                        1053.2603759765625
                    ],
                    [
                        -461.62127685546875,
                        -1515.4393310546875
                    ],
                    [
                        1592.3829345703125,
                        -419.264892578125
                    ],
                    [
                        105.19830322265625,
                        618.4934692382812
                    ],
                    [
                        76.07756805419922,
                        -807.4541625976562
                    ],
                    [
                        415.3789367675781,
                        504.560546875
                    ],
                    [
                        383.4460754394531,
                        467.6592712402344
                    ],
                    [
                        362.22900390625,
                        444.5628356933594
                    ],
                    [
                        926.7413330078125,
                        176.17913818359375
                    ],
                    [
                        -493.5040283203125,
                        33.25695037841797
                    ],
                    [
                        -493.72686767578125,
                        30.17201805114746
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
                        32.70607376098633,
                        -342.7405090332031
                    ],
                    [
                        4.157546043395996,
                        2359.458740234375
                    ],
                    [
                        -14.732660293579102,
                        -3382.6201171875
                    ],
                    [
                        576.1111450195312,
                        368.2863464355469
                    ],
                    [
                        6.8812642097473145,
                        -748.4391479492188
                    ],
                    [
                        0.32848072052001953,
                        -205.84999084472656
                    ],
                    [
                        576.5635375976562,
                        217.587890625
                    ],
                    [
                        576.9021606445312,
                        341.12847900390625
                    ],
                    [
                        -235.08172607421875,
                        -344.6296691894531
                    ],
                    [
                        -219.66403198242188,
                        -324.7701721191406
                    ],
                    [
                        284.03448486328125,
                        116.84844207763672
                    ],
                    [
                        -62.86635208129883,
                        656.9594116210938
                    ],
                    [
                        265.5327453613281,
                        214.49832153320312
                    ],
                    [
                        -81.4272689819336,
                        598.697998046875
                    ],
                    [
                        98.07584381103516,
                        161.00584411621094
                    ],
                    [
                        86.02978515625,
                        180.28720092773438
                    ],
                    [
                        105.2495346069336,
                        392.75030517578125
                    ],
                    [
                        10.289422035217285,
                        -620.15576171875
                    ],
                    [
                        25.144115447998047,
                        1204.9290771484375
                    ],
                    [
                        -99.22828674316406,
                        -486.9305725097656
                    ],
                    [
                        -275.7900085449219,
                        22.205665588378906
                    ],
                    [
                        -259.18634033203125,
                        -85.84452056884766
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
                        -11.545480728149414,
                        -218.99240112304688
                    ],
                    [
                        422.0205993652344,
                        -280.32354736328125
                    ],
                    [
                        82.74996948242188,
                        736.2789916992188
                    ],
                    [
                        269.9425354003906,
                        -348.6498107910156
                    ],
                    [
                        192.9282989501953,
                        -377.02154541015625
                    ],
                    [
                        284.13604736328125,
                        -370.760498046875
                    ],
                    [
                        -1230.52587890625,
                        -138.87843322753906
                    ],
                    [
                        -52.90607833862305,
                        248.4195556640625
                    ],
                    [
                        11.557612419128418,
                        214.54281616210938
                    ],
                    [
                        481.4842834472656,
                        -106.86359405517578
                    ],
                    [
                        -616.4686889648438,
                        262.9109802246094
                    ],
                    [
                        527.255126953125,
                        235.7190704345703
                    ],
                    [
                        -277.7765808105469,
                        174.3054962158203
                    ],
                    [
                        -220.68560791015625,
                        138.45565795898438
                    ],
                    [
                        894.1953735351562,
                        391.5063171386719
                    ],
                    [
                        930.4432983398438,
                        47.90772247314453
                    ],
                    [
                        -345.73590087890625,
                        -310.0711975097656
                    ],
                    [
                        -466.4320983886719,
                        -346.46478271484375
                    ],
                    [
                        -384.17633056640625,
                        -321.5147705078125
                    ],
                    [
                        991.5445556640625,
                        0.3277568817138672
                    ],
                    [
                        -705.6077270507812,
                        163.81265258789062
                    ],
                    [
                        -648.0641479492188,
                        123.90431213378906
                    ],
                    [
                        -2410.84130859375,
                        -57.32493591308594
                    ],
                    [
                        1128.03173828125,
                        -22.631576538085938
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
                    -11.545480728149414,
                    422.0205993652344,
                    82.74996948242188,
                    269.9425354003906,
                    192.9282989501953,
                    284.13604736328125,
                    -1230.52587890625,
                    -52.90607833862305,
                    11.557612419128418,
                    481.4842834472656,
                    -616.4686889648438,
                    527.255126953125,
                    -277.7765808105469,
                    -220.68560791015625,
                    894.1953735351562,
                    930.4432983398438,
                    -345.73590087890625,
                    -466.4320983886719,
                    -384.17633056640625,
                    991.5445556640625,
                    -705.6077270507812,
                    -648.0641479492188,
                    -2410.84130859375,
                    1128.03173828125
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