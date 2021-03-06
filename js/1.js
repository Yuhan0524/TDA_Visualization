//mds 点图
function displayChart1(){
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
                        -6.101107688018255,
                        -50.086806516721914
                    ],
                    [
                        -1.5702776439599422,
                        -45.11914780731815
                    ],
                    [
                        -0.5885762668180933,
                        -41.456396308388925
                    ],
                    [
                        -6.615624169270544,
                        -42.778336720671874
                    ],
                    [
                        1.482321438638352,
                        -22.864300881347578
                    ],
                    [
                        -52.464999427263294,
                        -43.82289716110233
                    ],
                    [
                        -97.58804681291781,
                        -57.277155012434065
                    ],
                    [
                        2.6298681664192536,
                        -11.246116077620112
                    ],
                    [
                        4.590165090781234,
                        -10.385116677348742
                    ],
                    [
                        0.08104715605720349,
                        -11.82949265624935
                    ],
                    [
                        0.9758456901153514,
                        -9.798533787254264
                    ],
                    [
                        1.9076192004205876,
                        -7.658500411607871
                    ],
                    [
                        0.8305829050698641,
                        -5.789373859617751
                    ],
                    [
                        13.320197504022156,
                        16.222074140729347
                    ],
                    [
                        4.846076707365097,
                        24.845660535949236
                    ],
                    [
                        13.926960406210164,
                        29.15718409994284
                    ],
                    [
                        13.337284323112323,
                        28.986230594985944
                    ],
                    [
                        14.88486413804797,
                        30.70482206963048
                    ],
                    [
                        10.45442438567432,
                        30.092282883751142
                    ],
                    [
                        10.644033539517594,
                        31.166376157589117
                    ],
                    [
                        17.001641694189654,
                        39.81220555084181
                    ],
                    [
                        18.135796439208576,
                        41.402004688376614
                    ],
                    [
                        17.066039987230603,
                        43.23250831164098
                    ],
                    [
                        18.813863236167656,
                        44.49082484424534
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
                        -44.73126609226871,
                        -22.91674098689904
                    ],
                    [
                        -37.921602081728615,
                        -19.737363397549228
                    ],
                    [
                        -33.84572289439672,
                        -19.428019999218357
                    ],
                    [
                        -20.686390299271917,
                        -12.278646209954625
                    ],
                    [
                        -47.51501005929551,
                        21.878786216276342
                    ],
                    [
                        -34.87566102566051,
                        6.371882514126992
                    ],
                    [
                        -15.983089061113848,
                        -9.866276589239934
                    ],
                    [
                        -13.50643886223487,
                        -10.200118877416951
                    ],
                    [
                        -12.247662376086822,
                        -9.287063941911752
                    ],
                    [
                        -12.311681952885554,
                        -7.017273552975408
                    ],
                    [
                        -12.300579234323436,
                        -4.21227341662588
                    ],
                    [
                        10.92870183348728,
                        -0.7031296076976015
                    ],
                    [
                        18.273153605617416,
                        6.620987641635131
                    ],
                    [
                        24.735471835927434,
                        7.247493433153787
                    ],
                    [
                        24.581924802720547,
                        7.556956743436881
                    ],
                    [
                        24.945370174729973,
                        7.129314873175223
                    ],
                    [
                        24.02092913367934,
                        8.29482012792841
                    ],
                    [
                        25.550105108312582,
                        8.50486476978183
                    ],
                    [
                        31.713717155632537,
                        9.779004615097893
                    ],
                    [
                        33.469942268076885,
                        10.21160272198378
                    ],
                    [
                        33.38634324564179,
                        11.169382309242195
                    ],
                    [
                        34.31944477544072,
                        10.881810613650323
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
                        -19.370212209416312,
                        -4.172619062483845
                    ],
                    [
                        -13.557974483194704,
                        -4.296706611195766
                    ],
                    [
                        -79.6790444840816,
                        43.09699960382377
                    ],
                    [
                        -8.474063856001063,
                        -5.289350276106362
                    ],
                    [
                        -5.780069764241907,
                        -5.633438690770037
                    ],
                    [
                        -6.966608331224653,
                        -4.466891525159817
                    ],
                    [
                        -7.402350697356146,
                        -3.0429029173495987
                    ],
                    [
                        -4.517503015221474,
                        -4.9439429522137175
                    ],
                    [
                        -3.061577681009057,
                        -5.474808192301538
                    ],
                    [
                        -9.914411071959217,
                        -0.7151583656649679
                    ],
                    [
                        -50.138622970142094,
                        27.718836446914185
                    ],
                    [
                        -6.1172163748403765,
                        -1.3799241694271906
                    ],
                    [
                        14.497629595618056,
                        -0.8321338582266865
                    ],
                    [
                        10.18640576505011,
                        -5.0586055766805575
                    ],
                    [
                        18.070129780858867,
                        -3.6686742713652287
                    ],
                    [
                        18.637019463550235,
                        -4.055185707014569
                    ],
                    [
                        18.087665708915804,
                        -2.7065919438586206
                    ],
                    [
                        17.558244397371986,
                        -1.4510662800593945
                    ],
                    [
                        17.512460906572706,
                        -0.7698521703979055
                    ],
                    [
                        25.90809679856284,
                        -1.9824584965637533
                    ],
                    [
                        24.49390880220715,
                        -2.8757885232704004
                    ],
                    [
                        25.773381799663923,
                        -3.574261494987173
                    ],
                    [
                        24.254711920316925,
                        -4.42547496564083
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
                        25.27963210657602,
                        -25.54066720241829
                    ],
                    [
                        20.12328282425336,
                        -20.35912638479259
                    ],
                    [
                        18.413966146940837,
                        -18.656474720964027
                    ],
                    [
                        20.1780865008102,
                        -20.38992633829428
                    ],
                    [
                        21.22032472580603,
                        -21.405308898465243
                    ],
                    [
                        19.241071708122533,
                        -19.441273102815146
                    ],
                    [
                        19.212224493505225,
                        -19.3698733694245
                    ],
                    [
                        15.085793186750523,
                        -15.26135122973923
                    ],
                    [
                        87.53120131185841,
                        -86.56685238231654
                    ],
                    [
                        78.21279106743403,
                        -77.43186773689236
                    ],
                    [
                        17.974706156305746,
                        -18.077065119938418
                    ],
                    [
                        16.049226838190663,
                        -16.175621298857216
                    ],
                    [
                        17.98453123473753,
                        -18.05677473487517
                    ],
                    [
                        -14.651884816425538,
                        14.655163131864768
                    ],
                    [
                        -15.744004882548165,
                        15.765970308919174
                    ],
                    [
                        -35.56561001002188,
                        35.520797373013835
                    ],
                    [
                        -34.791505046656205,
                        34.78519592558233
                    ],
                    [
                        -34.951501872625215,
                        34.96669378936775
                    ],
                    [
                        -33.83783348102531,
                        33.8950693176255
                    ],
                    [
                        -36.59411782609525,
                        36.61036182208388
                    ],
                    [
                        -37.231546696659,
                        37.23860079275759
                    ],
                    [
                        -34.485649996547174,
                        34.55963568697566
                    ],
                    [
                        -48.7704214473804,
                        48.81572844622704
                    ],
                    [
                        -49.88276222530695,
                        49.9189659253755
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
                        -19.852900035144643,
                        -11.065361084731956
                    ],
                    [
                        -19.189158860541536,
                        -10.81454023743785
                    ],
                    [
                        -17.88463364941328,
                        -10.565011868149922
                    ],
                    [
                        -17.231126575539147,
                        -9.64226147834874
                    ],
                    [
                        -18.57695839828936,
                        -8.04722897471671
                    ],
                    [
                        -18.185597496206512,
                        -7.4127068300463055
                    ],
                    [
                        -18.232250837133687,
                        -6.798520206495263
                    ],
                    [
                        -18.518769994064417,
                        -5.659898049990318
                    ],
                    [
                        -15.199004800522227,
                        -6.872821904117692
                    ],
                    [
                        -16.30484277193362,
                        -5.190758205503264
                    ],
                    [
                        -15.347255662480613,
                        -3.8634482525369616
                    ],
                    [
                        -59.72682462158392,
                        49.61177607447636
                    ],
                    [
                        -57.164457328311386,
                        46.6333177637159
                    ],
                    [
                        -13.535078539930138,
                        -3.1507517548279504
                    ],
                    [
                        32.96928169435613,
                        2.630285135142331
                    ],
                    [
                        32.56755395627783,
                        3.0995742775772457
                    ],
                    [
                        37.8445461477505,
                        -2.9538848384839183
                    ],
                    [
                        38.97469543427385,
                        -2.4914920872225355
                    ],
                    [
                        38.97986066974978,
                        -2.4707286650411695
                    ],
                    [
                        41.30568191513409,
                        0.7698663311754746
                    ],
                    [
                        51.15361987679105,
                        -2.872702549493833
                    ],
                    [
                        51.153619876761304,
                        -2.8727025949429463
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
                        -28.610086843519866,
                        27.09679818468323
                    ],
                    [
                        -23.777548728695173,
                        22.83769423936608
                    ],
                    [
                        -21.09598682610672,
                        22.05062864513895
                    ],
                    [
                        -20.353030359826192,
                        19.35627722708357
                    ],
                    [
                        -16.694327685830892,
                        18.123650421651185
                    ],
                    [
                        -17.704101420364754,
                        18.069085732077447
                    ],
                    [
                        -17.94657915180256,
                        17.202259924690935
                    ],
                    [
                        -17.55710548065337,
                        16.789813550797835
                    ],
                    [
                        -19.09164219858234,
                        16.327523126254768
                    ],
                    [
                        -17.762283327501162,
                        15.352827752144728
                    ],
                    [
                        -12.800856899197894,
                        13.277706106209477
                    ],
                    [
                        -68.75656573518762,
                        16.04174339459584
                    ],
                    [
                        -12.428745445892645,
                        10.968292638427513
                    ],
                    [
                        -81.26821149296605,
                        15.861614305411115
                    ],
                    [
                        42.658410987213806,
                        -26.966376286912283
                    ],
                    [
                        43.752611491361634,
                        -27.15723221109448
                    ],
                    [
                        43.52903718878821,
                        -28.06978155972514
                    ],
                    [
                        40.30034821166341,
                        -28.738053051978934
                    ],
                    [
                        40.75911552572266,
                        -28.77504557524006
                    ],
                    [
                        45.56873639637309,
                        -31.8908791348525
                    ],
                    [
                        59.190625285878305,
                        -38.838126797583506
                    ],
                    [
                        60.0881865091261,
                        -38.92042063114579
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
                        35.11112518101153,
                        39.05411756473117
                    ],
                    [
                        20.4801661933035,
                        23.769186916151497
                    ],
                    [
                        25.97141936537908,
                        28.809225237118742
                    ],
                    [
                        21.114396182133987,
                        23.97922799681344
                    ],
                    [
                        22.289609775510847,
                        24.780415873466858
                    ],
                    [
                        17.42968538292687,
                        19.908085997398228
                    ],
                    [
                        98.06391859494883,
                        93.04728053323774
                    ],
                    [
                        5.770265167045943,
                        7.9375860522924295
                    ],
                    [
                        8.28851686795068,
                        10.058996627954654
                    ],
                    [
                        122.6131935245652,
                        115.37251800022962
                    ],
                    [
                        3.5480193764919603,
                        5.082014618114295
                    ],
                    [
                        3.6164918939744184,
                        4.8766392047439755
                    ],
                    [
                        -2.9719116013198907,
                        -2.3388463497253245
                    ],
                    [
                        -3.657737652584748,
                        -3.1842069759137956
                    ],
                    [
                        -24.290296968753456,
                        -25.551888336444936
                    ],
                    [
                        -25.02441222864495,
                        -26.228511503701757
                    ],
                    [
                        -32.61272980135685,
                        -33.25108350602743
                    ],
                    [
                        -33.982422837630246,
                        -34.70905255244242
                    ],
                    [
                        -32.85561475669322,
                        -33.71094846211615
                    ],
                    [
                        -25.457395570707895,
                        -26.98099786861257
                    ],
                    [
                        -48.28878656884805,
                        -49.79322939634179
                    ],
                    [
                        -49.33552480855137,
                        -50.94709242121756
                    ],
                    [
                        -52.341049100644916,
                        -54.39190267901165
                    ],
                    [
                        -53.47892560950726,
                        -55.587534570697194
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
                "data": null
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