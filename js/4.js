//mds 点图
function displayChart4(){
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
                        36.93345869894999,
                        14.022016073659245
                    ],
                    [
                        35.63834791560113,
                        14.354395629676866
                    ],
                    [
                        36.54684304725178,
                        12.671380706809666
                    ],
                    [
                        34.314488115749995,
                        12.416607102096641
                    ],
                    [
                        35.26976315769603,
                        11.121955506314205
                    ],
                    [
                        35.66759640543395,
                        9.678035153306297
                    ],
                    [
                        91.96066518380034,
                        -29.594707685402756
                    ],
                    [
                        85.85812300921886,
                        -40.36081247129925
                    ],
                    [
                        8.09793755280697,
                        7.327389340041067
                    ],
                    [
                        7.9664403925655005,
                        5.5500001697530585
                    ],
                    [
                        5.3445643208802345,
                        5.456882427137091
                    ],
                    [
                        7.719329250430877,
                        2.7975247901231497
                    ],
                    [
                        1.532688099558311,
                        5.628459183978975
                    ],
                    [
                        5.332084839531346,
                        2.6016595088645165
                    ],
                    [
                        -28.539437576578475,
                        -5.673391356924815
                    ],
                    [
                        -29.502352023359386,
                        -0.3424437260553402
                    ],
                    [
                        -29.004200911229024,
                        0.12179905797729718
                    ],
                    [
                        -36.568089346340656,
                        -4.470750402460785
                    ],
                    [
                        -36.586959851229224,
                        -3.4785410128841825
                    ],
                    [
                        -34.87847750450838,
                        -2.331265511242252
                    ],
                    [
                        -33.68846734909837,
                        -0.5720318727487932
                    ],
                    [
                        -47.16200826643943,
                        -4.164474541571328
                    ],
                    [
                        -47.17366054144501,
                        -4.15620703216503
                    ],
                    [
                        -51.74803176299218,
                        -4.233026279013562
                    ],
                    [
                        -53.33064485625518,
                        -4.370452757970007
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
                        28.602220575762413,
                        14.80433299735186
                    ],
                    [
                        22.302203661365194,
                        12.104832886347818
                    ],
                    [
                        17.610708462712015,
                        7.67074687652531
                    ],
                    [
                        21.74601773445934,
                        11.823528041403408
                    ],
                    [
                        18.203173853901475,
                        8.921550903139126
                    ],
                    [
                        16.63854992334128,
                        8.367731149200544
                    ],
                    [
                        91.75206255237745,
                        81.56021422264826
                    ],
                    [
                        105.82761424530578,
                        96.03447073999325
                    ],
                    [
                        6.007552991919996,
                        2.2259371557055516
                    ],
                    [
                        2.301618863693623,
                        -1.0418575957312686
                    ],
                    [
                        3.4678199243160304,
                        0.23103430926376292
                    ],
                    [
                        -0.8075902438430638,
                        -2.969647553933176
                    ],
                    [
                        4.524136456841462,
                        2.2235482544519565
                    ],
                    [
                        3.5742443549803755,
                        1.3557522692641422
                    ],
                    [
                        -25.177247255587403,
                        -20.04038158518702
                    ],
                    [
                        -28.15876328330383,
                        -20.470667596070193
                    ],
                    [
                        -29.305108756268844,
                        -21.556092872364502
                    ],
                    [
                        -26.46869352401497,
                        -18.832846693104095
                    ],
                    [
                        -25.74675304810307,
                        -17.564739761886262
                    ],
                    [
                        -25.794729735812588,
                        -17.24734819885576
                    ],
                    [
                        -26.596007057887263,
                        -18.015535589505575
                    ],
                    [
                        -38.023313720303435,
                        -27.38349022265703
                    ],
                    [
                        -39.43486541430749,
                        -28.732172824122596
                    ],
                    [
                        -38.85989259731363,
                        -27.206158894057932
                    ],
                    [
                        -38.18495896423081,
                        -26.26274041781955
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
                        -12.038257623041225,
                        -16.76055627079292
                    ],
                    [
                        -9.190581424589244,
                        -16.614432680668546
                    ],
                    [
                        -7.221500457963306,
                        -15.987961668193927
                    ],
                    [
                        -8.526997439967417,
                        -14.893042685437884
                    ],
                    [
                        -7.398454718769256,
                        -14.332555559920365
                    ],
                    [
                        -11.197718422588695,
                        -12.087984730902727
                    ],
                    [
                        -74.74544137191366,
                        23.92828683181317
                    ],
                    [
                        -78.36372728601776,
                        30.633217453253636
                    ],
                    [
                        1.0757979970747016,
                        -6.106815141667042
                    ],
                    [
                        0.05445044662317346,
                        -6.5850187316916875
                    ],
                    [
                        3.014215011378293,
                        -3.819792007664209
                    ],
                    [
                        1.2553176288661803,
                        -4.902900271257588
                    ],
                    [
                        3.776489275236191,
                        -3.281189122827386
                    ],
                    [
                        0.6275423026347693,
                        -5.244804559607902
                    ],
                    [
                        15.02142856681516,
                        7.249924992088598
                    ],
                    [
                        14.376930666697948,
                        7.63970820695881
                    ],
                    [
                        19.486885175233482,
                        4.944527404178477
                    ],
                    [
                        20.053423637393728,
                        4.644229203486342
                    ],
                    [
                        15.763427848708272,
                        6.9391309790759275
                    ],
                    [
                        14.947619362972016,
                        7.967824803187675
                    ],
                    [
                        26.078431319522366,
                        5.493608999816834
                    ],
                    [
                        23.08963460113407,
                        7.735312746832548
                    ],
                    [
                        26.34536484615424,
                        6.023332617556453
                    ],
                    [
                        23.715720058405985,
                        7.417949192383718
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
                        -39.43320047910608,
                        32.43191478251093
                    ],
                    [
                        -37.00648580215217,
                        30.629506394663906
                    ],
                    [
                        -35.22524210104407,
                        28.934978269064086
                    ],
                    [
                        -35.08863958843111,
                        28.13173990953164
                    ],
                    [
                        -34.115316625998055,
                        28.027853018159757
                    ],
                    [
                        -30.06720619852207,
                        23.086193332430266
                    ],
                    [
                        -29.53405261013813,
                        10.480436495849156
                    ],
                    [
                        -24.157611601286053,
                        4.743628330137923
                    ],
                    [
                        -3.6702220229297744,
                        8.596842917906638
                    ],
                    [
                        -8.78207854058584,
                        7.150544484609398
                    ],
                    [
                        -7.614630185974916,
                        6.801883422011982
                    ],
                    [
                        -5.36863505426405,
                        6.456891181701743
                    ],
                    [
                        -7.058755600211254,
                        4.163606405510748
                    ],
                    [
                        -3.9117661878018586,
                        1.988474011740716
                    ],
                    [
                        19.130399162469555,
                        -15.381438735744531
                    ],
                    [
                        19.549202312179926,
                        -15.868776923892952
                    ],
                    [
                        21.250610662922984,
                        -14.258748256814986
                    ],
                    [
                        22.248920633094077,
                        -15.236375192234568
                    ],
                    [
                        25.25025819246778,
                        -18.272296708913558
                    ],
                    [
                        25.269829897723646,
                        -18.325192392778924
                    ],
                    [
                        25.269829897723646,
                        -18.325192392778924
                    ],
                    [
                        26.24440417412002,
                        -19.93637211155769
                    ],
                    [
                        26.25473682279144,
                        -20.116144348547508
                    ],
                    [
                        26.249527270039692,
                        -19.27334305265259
                    ],
                    [
                        32.10622192767811,
                        -23.292511198447954
                    ],
                    [
                        32.209901645234545,
                        -23.338101641464714
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
                        -32.60004587634634,
                        45.83283553122547
                    ],
                    [
                        -31.770225853406405,
                        43.63577617341082
                    ],
                    [
                        -28.790531696308854,
                        41.240504563444205
                    ],
                    [
                        -30.1324489908715,
                        41.72437902380514
                    ],
                    [
                        -30.1060922668396,
                        41.20041360753932
                    ],
                    [
                        -28.487712244316718,
                        39.21077377496712
                    ],
                    [
                        -92.032069217177,
                        65.39633467804272
                    ],
                    [
                        -94.8867302214093,
                        65.2965968874223
                    ],
                    [
                        -9.704611764919452,
                        13.775554607723963
                    ],
                    [
                        -1.6500042887736068,
                        9.945009358685
                    ],
                    [
                        -8.19323040561631,
                        12.039776083967377
                    ],
                    [
                        -7.354530772895183,
                        10.888502965243662
                    ],
                    [
                        -4.695915074412071,
                        7.058426315564468
                    ],
                    [
                        28.258076929613498,
                        -25.690575055473904
                    ],
                    [
                        27.662572527989102,
                        -33.026251264563385
                    ],
                    [
                        28.6074973116228,
                        -34.33443860192038
                    ],
                    [
                        31.66317394438245,
                        -36.41387524881708
                    ],
                    [
                        35.47914528342339,
                        -38.09666141922469
                    ],
                    [
                        35.859021053856125,
                        -38.38161058901383
                    ],
                    [
                        30.739480574019527,
                        -36.124071574214334
                    ],
                    [
                        43.009166244104506,
                        -44.107447129181494
                    ],
                    [
                        43.235432476814964,
                        -45.074118843659605
                    ],
                    [
                        48.255631539478784,
                        -53.1008035448492
                    ],
                    [
                        47.634950787987194,
                        -52.89503030012359
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
                        -57.1025796330323,
                        55.28566294818319
                    ],
                    [
                        -52.23853785925003,
                        50.15385568998093
                    ],
                    [
                        -51.67764666877324,
                        51.01019458444284
                    ],
                    [
                        -50.857496310624846,
                        49.55906505317379
                    ],
                    [
                        -51.2069211342855,
                        50.369606970458676
                    ],
                    [
                        -50.48387442518225,
                        49.80038043220108
                    ],
                    [
                        -77.82144246482538,
                        111.12047011435634
                    ],
                    [
                        -67.88748621748812,
                        106.03773274520614
                    ],
                    [
                        -13.943511490217702,
                        13.974596695213815
                    ],
                    [
                        -7.907154131585064,
                        2.999081601079044
                    ],
                    [
                        -11.469375497969494,
                        10.737250185526284
                    ],
                    [
                        -10.466332859573443,
                        9.335580416004419
                    ],
                    [
                        -12.799119734483462,
                        14.23669270885054
                    ],
                    [
                        -6.902885981311883,
                        3.162715476048882
                    ],
                    [
                        30.04431120941689,
                        -36.377643472922784
                    ],
                    [
                        44.557854227834724,
                        -50.098687930830124
                    ],
                    [
                        42.409148304812454,
                        -44.59104967269611
                    ],
                    [
                        43.71838781268245,
                        -47.251616625009675
                    ],
                    [
                        45.01365555270857,
                        -49.80503285131096
                    ],
                    [
                        42.83573543851883,
                        -45.3126419629145
                    ],
                    [
                        44.19562317754675,
                        -48.077693832482346
                    ],
                    [
                        53.8927771394211,
                        -61.030582017149584
                    ],
                    [
                        53.320249610718555,
                        -59.89469794761434
                    ],
                    [
                        60.85585850804467,
                        -67.26676176823075
                    ],
                    [
                        61.92076342689779,
                        -68.07647753956473
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
                        60.04103506955961,
                        57.84232630556457
                    ],
                    [
                        44.23655044823357,
                        41.45630219302329
                    ],
                    [
                        46.73665909294951,
                        45.49887765285821
                    ],
                    [
                        42.01289290303484,
                        39.637439542943746
                    ],
                    [
                        39.89685599204692,
                        37.85286608592022
                    ],
                    [
                        100.92657703691793,
                        115.14484256715197
                    ],
                    [
                        35.229288800181514,
                        33.08797012630602
                    ],
                    [
                        88.53949738202364,
                        100.59148983749091
                    ],
                    [
                        17.39721407476017,
                        16.774922515476987
                    ],
                    [
                        11.953021686820499,
                        10.498874493153801
                    ],
                    [
                        8.668192929114536,
                        6.458753457184953
                    ],
                    [
                        12.380908410215376,
                        11.425442834658892
                    ],
                    [
                        5.603658009062016,
                        5.22380345626197
                    ],
                    [
                        -34.85146115280679,
                        -36.77181116537455
                    ],
                    [
                        -44.18116104318458,
                        -45.1182397728619
                    ],
                    [
                        -44.95108610227417,
                        -46.0711332892897
                    ],
                    [
                        -42.912612803762585,
                        -43.44236654788091
                    ],
                    [
                        -40.0424996515503,
                        -39.64685353439504
                    ],
                    [
                        -43.96279994179642,
                        -43.74186833179742
                    ],
                    [
                        -43.394771802834,
                        -43.02809215847806
                    ],
                    [
                        -50.89455170737206,
                        -52.008664145843
                    ],
                    [
                        -51.621685372877046,
                        -52.21171964660531
                    ],
                    [
                        -58.46496893033505,
                        -59.98900344054998
                    ],
                    [
                        -58.344753326127105,
                        -59.46415903491968
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

}