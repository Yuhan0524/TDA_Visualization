//mds 点图
function displayChart6(){
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
                        -21.05011420024975,
                        18.18817742305414
                    ],
                    [
                        -22.362340043201854,
                        17.876238279120017
                    ],
                    [
                        -20.607239102826064,
                        17.639989074756826
                    ],
                    [
                        -21.71068446239952,
                        17.256940177421903
                    ],
                    [
                        -20.610126515625538,
                        17.22985952269633
                    ],
                    [
                        -18.03935848729855,
                        14.430526677814564
                    ],
                    [
                        -34.750104790310566,
                        13.136247195519395
                    ],
                    [
                        -10.814348336258579,
                        9.451352197379885
                    ],
                    [
                        -9.787451604128673,
                        9.448497072000958
                    ],
                    [
                        -9.388319509154057,
                        9.378048227531664
                    ],
                    [
                        -9.786564032984984,
                        8.821852058741104
                    ],
                    [
                        -26.671446335390222,
                        3.827538070511399
                    ],
                    [
                        -4.072905125298571,
                        5.012105368148126
                    ],
                    [
                        -3.427967801977236,
                        4.464088487091386
                    ],
                    [
                        17.871521367189015,
                        -12.084393277349031
                    ],
                    [
                        18.10838585238061,
                        -12.147904314870361
                    ],
                    [
                        17.370977309360565,
                        -12.412310271985904
                    ],
                    [
                        17.145725130478354,
                        -13.20305742770681
                    ],
                    [
                        20.91403317307153,
                        -15.129141659650559
                    ],
                    [
                        20.914033173071473,
                        -15.129141659650559
                    ],
                    [
                        29.55752921936507,
                        -20.811578533568227
                    ],
                    [
                        29.119000159954513,
                        -20.853169072451976
                    ],
                    [
                        30.685307139656917,
                        -21.688509871381587
                    ],
                    [
                        31.392457822576134,
                        -22.702253743172665
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
                        22.427914970404846,
                        36.577466322173485
                    ],
                    [
                        19.416410986026612,
                        27.754492108740905
                    ],
                    [
                        17.493850181507042,
                        30.05742359654123
                    ],
                    [
                        16.831864475969887,
                        26.17695827930041
                    ],
                    [
                        15.092478529115946,
                        23.178984325313664
                    ],
                    [
                        12.384970883049887,
                        24.96773641903326
                    ],
                    [
                        -10.211244064025436,
                        73.51992697462006
                    ],
                    [
                        10.7672946144286,
                        12.775852389414583
                    ],
                    [
                        10.134175887993216,
                        10.954266962696597
                    ],
                    [
                        -26.860501770550577,
                        97.47894636780877
                    ],
                    [
                        7.685788164551326,
                        11.743202094137155
                    ],
                    [
                        6.361765375485971,
                        11.185845727563104
                    ],
                    [
                        7.6538505629445055,
                        5.7285964033200765
                    ],
                    [
                        4.668262849208022,
                        8.499787720693497
                    ],
                    [
                        -1.9139816096148292,
                        -23.786146582289543
                    ],
                    [
                        -7.600012843585961,
                        -31.936622102372564
                    ],
                    [
                        -7.928216979302546,
                        -31.493199791882127
                    ],
                    [
                        -8.777243100792708,
                        -31.491108800141216
                    ],
                    [
                        -11.71927968166717,
                        -25.060008801160503
                    ],
                    [
                        -11.120971951296122,
                        -34.28320645710694
                    ],
                    [
                        -12.215300247412907,
                        -34.74923526054111
                    ],
                    [
                        -11.270581655337853,
                        -44.70490242828616
                    ],
                    [
                        -12.541978621324889,
                        -44.71736668491809
                    ],
                    [
                        -14.488346565540198,
                        -47.484249527607346
                    ],
                    [
                        -14.270968390234705,
                        -50.893439255051206
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
                        -23.74597168577954,
                        -4.112393655779339
                    ],
                    [
                        -24.170367381951834,
                        -4.707011857007027
                    ],
                    [
                        -23.392925618432585,
                        -4.184046091123584
                    ],
                    [
                        -25.648590912038067,
                        -6.289595065670829
                    ],
                    [
                        -23.826385220811463,
                        -5.589818664693024
                    ],
                    [
                        -23.896482585958044,
                        -6.070959980614181
                    ],
                    [
                        -69.14038896912797,
                        -47.02608143555321
                    ],
                    [
                        -69.29349461286435,
                        -56.37611288427153
                    ],
                    [
                        -2.7321912022610846,
                        2.8683643738907074
                    ],
                    [
                        -1.4621719853299082,
                        3.372627384191162
                    ],
                    [
                        -2.7073083346061084,
                        0.9759473894673523
                    ],
                    [
                        -1.425472089793351,
                        1.2219161437466879
                    ],
                    [
                        -2.7986684882864896,
                        -0.0671319869856347
                    ],
                    [
                        -3.140705190126482,
                        -0.5884989766014493
                    ],
                    [
                        28.11849860351497,
                        13.220341319435464
                    ],
                    [
                        21.29875637257578,
                        7.018126056433013
                    ],
                    [
                        24.105526921672173,
                        9.177435341680798
                    ],
                    [
                        24.979651095115177,
                        9.799814641290046
                    ],
                    [
                        24.97965109511562,
                        9.799814641289842
                    ],
                    [
                        27.54234167568393,
                        12.092444021272927
                    ],
                    [
                        34.91521774353698,
                        15.483245877191656
                    ],
                    [
                        34.25815951145064,
                        14.894192701324162
                    ],
                    [
                        39.00162893283139,
                        17.99340285236873
                    ],
                    [
                        38.1816923258706,
                        17.093977854717288
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
                        -0.4264560304935524,
                        -25.6874799863014
                    ],
                    [
                        -0.4903844511426916,
                        -24.86348823172761
                    ],
                    [
                        -3.859581884739619,
                        -18.673168309877354
                    ],
                    [
                        2.5335481782987888,
                        -26.13993400772638
                    ],
                    [
                        1.742164768778824,
                        -23.501211854437518
                    ],
                    [
                        5.82621666099883,
                        -27.58663765297811
                    ],
                    [
                        51.25330272589839,
                        -79.44786575034404
                    ],
                    [
                        -5.2682897606974946,
                        -9.525700110348783
                    ],
                    [
                        -5.064495114497701,
                        -8.063530701580568
                    ],
                    [
                        61.44758716668202,
                        -85.48317630328009
                    ],
                    [
                        -2.816579642517593,
                        -7.205049887747901
                    ],
                    [
                        -1.7225803892522857,
                        -7.077468545348635
                    ],
                    [
                        0.6687588797877704,
                        -9.409971607103165
                    ],
                    [
                        1.165074308355312,
                        -8.127137077286417
                    ],
                    [
                        -0.22171561976868592,
                        7.84986116864921
                    ],
                    [
                        -1.9417208791409963,
                        9.91561004379695
                    ],
                    [
                        -8.464989198755578,
                        25.049512418322372
                    ],
                    [
                        -9.151951927629156,
                        25.978396442576365
                    ],
                    [
                        -12.168141594520023,
                        35.06768352358455
                    ],
                    [
                        -12.507830672304301,
                        36.64096156051098
                    ],
                    [
                        -10.279340090556477,
                        34.85251658071477
                    ],
                    [
                        -8.554744333326394,
                        32.84095010688793
                    ],
                    [
                        -7.464371725043492,
                        32.31608776856493
                    ],
                    [
                        -8.52148494214749,
                        33.7238155498024
                    ],
                    [
                        -12.788831470731836,
                        42.95508166863364
                    ],
                    [
                        -12.923162961534556,
                        43.6013431940439
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
                        11.330179230929526,
                        -28.048870734333654
                    ],
                    [
                        11.228920593766409,
                        -22.797297328378423
                    ],
                    [
                        9.753507168437869,
                        -24.351119010949976
                    ],
                    [
                        9.38000781008101,
                        -21.714497899108487
                    ],
                    [
                        7.980562807201396,
                        -22.895227074889505
                    ],
                    [
                        8.411089263390577,
                        -22.14256243447348
                    ],
                    [
                        -10.735954224729262,
                        -44.881415559243095
                    ],
                    [
                        -19.445622098544547,
                        -52.1119513812008
                    ],
                    [
                        6.827722534764144,
                        -9.36435722166741
                    ],
                    [
                        6.601382892712452,
                        -7.768630639139384
                    ],
                    [
                        4.951594961303091,
                        -9.127007401979382
                    ],
                    [
                        2.0653467443481195,
                        -8.739814385213252
                    ],
                    [
                        2.5810997711068895,
                        -5.425062552333137
                    ],
                    [
                        1.912957471416419,
                        -6.150681700036775
                    ],
                    [
                        -0.45727722881131927,
                        16.18452262206332
                    ],
                    [
                        -4.26920399843814,
                        20.454066130970894
                    ],
                    [
                        -5.8902213854254555,
                        22.451122087969082
                    ],
                    [
                        -5.890221385425518,
                        22.4511220876606
                    ],
                    [
                        -4.360110718558001,
                        24.5589919800249
                    ],
                    [
                        -4.383278477460704,
                        24.578962963231024
                    ],
                    [
                        -5.782513948946074,
                        22.650422113196232
                    ],
                    [
                        -4.899959365556468,
                        31.447008093781534
                    ],
                    [
                        -6.121946175199396,
                        31.723360177604526
                    ],
                    [
                        -5.607884187274756,
                        34.21794859504784
                    ],
                    [
                        -5.180178055088267,
                        34.800968471396814
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
                        -9.628071877084832,
                        5.211051697300627
                    ],
                    [
                        -11.315307773601154,
                        3.3488270442256454
                    ],
                    [
                        -15.056562621605131,
                        -0.031282406830293895
                    ],
                    [
                        -10.115511322966404,
                        3.695897683785531
                    ],
                    [
                        -14.589910359828425,
                        -0.3288982492428012
                    ],
                    [
                        -11.361222483815238,
                        2.092011710803871
                    ],
                    [
                        -74.25948232423005,
                        -49.2022595614215
                    ],
                    [
                        2.353040908154448,
                        0.25844319847764147
                    ],
                    [
                        2.428075877143347,
                        0.34771735355526906
                    ],
                    [
                        -1.4237134463188061,
                        3.5004577403133785
                    ],
                    [
                        0.46382269219226474,
                        2.719027871504544
                    ],
                    [
                        -94.1912628344468,
                        -71.51818088467864
                    ],
                    [
                        -4.851232765399952,
                        7.297337529646232
                    ],
                    [
                        -5.773912511802451,
                        8.103517650870787
                    ],
                    [
                        19.032457119472706,
                        10.712544546349445
                    ],
                    [
                        22.015924713689373,
                        8.7806750106843
                    ],
                    [
                        21.065493528485167,
                        8.016611839638864
                    ],
                    [
                        18.013445972910713,
                        5.603688165132988
                    ],
                    [
                        12.782349549795706,
                        1.2447334063029127
                    ],
                    [
                        19.777746468232632,
                        5.867493196614445
                    ],
                    [
                        19.45067883581498,
                        5.232570739064056
                    ],
                    [
                        26.791082465001214,
                        8.823468556165734
                    ],
                    [
                        28.712968201997842,
                        10.32657043581784
                    ],
                    [
                        30.368308402187353,
                        10.27448086639006
                    ],
                    [
                        29.310795586021428,
                        9.623494859529043
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
                        -18.934166491229472,
                        -33.40613467853728
                    ],
                    [
                        -16.20915429147143,
                        -34.250679012784225
                    ],
                    [
                        -15.331545776158576,
                        -23.951943548235846
                    ],
                    [
                        -14.701713376020342,
                        -25.19504778067727
                    ],
                    [
                        -13.070325324285282,
                        -26.561188515079227
                    ],
                    [
                        -16.876957747137105,
                        -15.944892401729318
                    ],
                    [
                        -10.902402897795023,
                        -28.708924079801523
                    ],
                    [
                        22.208825356409662,
                        -97.35549912485435
                    ],
                    [
                        -14.714613870338805,
                        -13.558771870523197
                    ],
                    [
                        29.515966986565637,
                        -104.19601601750617
                    ],
                    [
                        -9.555104297986793,
                        -16.692687172295805
                    ],
                    [
                        -9.996471252176661,
                        -13.833140084627074
                    ],
                    [
                        -8.485087918596212,
                        -12.302261436490124
                    ],
                    [
                        -8.564837638977822,
                        -11.705248477914454
                    ],
                    [
                        2.214317340511089,
                        36.68661893698518
                    ],
                    [
                        8.08824815734,
                        30.685565512051596
                    ],
                    [
                        9.974655149813215,
                        26.619142026705937
                    ],
                    [
                        6.3755110917424895,
                        39.44986253720967
                    ],
                    [
                        7.933020605785755,
                        38.21928670800801
                    ],
                    [
                        11.150656796794001,
                        36.13829292819525
                    ],
                    [
                        11.761365295512483,
                        37.31020710872513
                    ],
                    [
                        12.723275823954355,
                        51.10192000571001
                    ],
                    [
                        10.867887000073713,
                        55.02237942553834
                    ],
                    [
                        12.445049887642988,
                        51.72375474289068
                    ],
                    [
                        12.083601390028152,
                        54.705404269036066
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