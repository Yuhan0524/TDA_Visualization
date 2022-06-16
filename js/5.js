//mds 点图
function displayChart5(){
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
                        14.543709722279887,
                        1.3125723144888382
                    ],
                    [
                        11.972209290728047,
                        2.659397282798146
                    ],
                    [
                        14.819232369372608,
                        0.36975391840817756
                    ],
                    [
                        11.661567946494348,
                        1.7644471161488042
                    ],
                    [
                        10.71151004747703,
                        2.1874112505096193
                    ],
                    [
                        4.30349273197879,
                        4.18428725060547
                    ],
                    [
                        11.399747711486082,
                        -1.4179078230969981
                    ],
                    [
                        64.19278009086625,
                        -41.78437622584019
                    ],
                    [
                        71.09684741052423,
                        -46.89742351863657
                    ],
                    [
                        4.329361522896248,
                        2.8473460905828873
                    ],
                    [
                        -1.65615962836569,
                        6.476314673948309
                    ],
                    [
                        -1.5190171090403606,
                        5.714550768243882
                    ],
                    [
                        0.7330866771343922,
                        3.827216799403442
                    ],
                    [
                        0.04376333391065746,
                        3.5762018674213696
                    ],
                    [
                        -11.68987718247217,
                        3.2872980036277015
                    ],
                    [
                        -11.653444529798112,
                        2.877833800951763
                    ],
                    [
                        -19.11691398688749,
                        5.254425611319579
                    ],
                    [
                        -19.60718522109846,
                        5.563496333276526
                    ],
                    [
                        -20.67654694404368,
                        5.594913671803397
                    ],
                    [
                        -20.130838875764137,
                        4.374322851208937
                    ],
                    [
                        -26.81807075238067,
                        6.676340756233895
                    ],
                    [
                        -30.298094985310534,
                        8.294835189185086
                    ],
                    [
                        -26.695320943576377,
                        5.516430556781744
                    ],
                    [
                        -29.945838696410874,
                        7.740311460626161
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
                        53.18426457784949,
                        33.81455757281432
                    ],
                    [
                        45.69733597437156,
                        28.636888708327422
                    ],
                    [
                        40.12890659711377,
                        19.911289755907706
                    ],
                    [
                        86.07041795042446,
                        117.82967568502443
                    ],
                    [
                        56.587881546939,
                        69.56724078063402
                    ],
                    [
                        19.6449169866842,
                        6.752433429588805
                    ],
                    [
                        20.747796123238277,
                        9.582388586384726
                    ],
                    [
                        20.878132835001747,
                        11.483680849935345
                    ],
                    [
                        15.925957825267622,
                        5.06424928800138
                    ],
                    [
                        12.90105179980523,
                        5.628803928380457
                    ],
                    [
                        -17.225188695258147,
                        -20.001335184937993
                    ],
                    [
                        -20.086522862400045,
                        -15.271473387459057
                    ],
                    [
                        -29.94291290316179,
                        -23.967504535318366
                    ],
                    [
                        -32.76271396058199,
                        -26.42128559866472
                    ],
                    [
                        -35.528296050833056,
                        -29.9125216375527
                    ],
                    [
                        -33.98278088727996,
                        -27.11289733761897
                    ],
                    [
                        -36.35461081975417,
                        -29.781603572556786
                    ],
                    [
                        -39.61893957387792,
                        -31.22289743023893
                    ],
                    [
                        -40.47063382511467,
                        -32.641265573321185
                    ],
                    [
                        -42.81260915449959,
                        -36.24785147534354
                    ],
                    [
                        -42.98145348393404,
                        -35.69057285198637
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
                        15.918277254561715,
                        -28.33611427936863
                    ],
                    [
                        15.355308578229481,
                        -27.8060004011361
                    ],
                    [
                        14.492050843628276,
                        -27.963635526737733
                    ],
                    [
                        14.685112886647696,
                        -24.446754537498713
                    ],
                    [
                        9.369559572447862,
                        -24.27457495800963
                    ],
                    [
                        -10.298542731639182,
                        -49.074329294406475
                    ],
                    [
                        9.950296897380822,
                        -18.344206202364223
                    ],
                    [
                        8.35033397500462,
                        -16.041614837406378
                    ],
                    [
                        8.420434126754625,
                        -15.609506413214433
                    ],
                    [
                        7.223016689098352,
                        -13.83091529994544
                    ],
                    [
                        -21.754390764871875,
                        -46.216355304170285
                    ],
                    [
                        -4.757864752057277,
                        14.662547099556079
                    ],
                    [
                        -1.2769709511920504,
                        19.523792169510912
                    ],
                    [
                        -4.576258249182335,
                        15.155825175356725
                    ],
                    [
                        -7.919510150021248,
                        27.062297811928374
                    ],
                    [
                        -7.052777379961932,
                        28.265154553256593
                    ],
                    [
                        -6.58552279875019,
                        29.071119604097426
                    ],
                    [
                        -6.304315070830197,
                        29.428385942992414
                    ],
                    [
                        -8.002650734167915,
                        27.137755639636193
                    ],
                    [
                        -7.6399091043537455,
                        29.496764551098085
                    ],
                    [
                        -8.730418631184895,
                        35.498263233111416
                    ],
                    [
                        -8.865259505540616,
                        36.642101273713834
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
                        15.546920710750106,
                        -9.99932971275174
                    ],
                    [
                        15.239768353765927,
                        -10.831026534431706
                    ],
                    [
                        11.341335307804398,
                        -6.382020163877176
                    ],
                    [
                        10.096463457102187,
                        -4.940735195428216
                    ],
                    [
                        10.76000525528748,
                        -6.088336541882577
                    ],
                    [
                        -5.783589563113342,
                        18.446998016543542
                    ],
                    [
                        4.243999871016467,
                        -6.155263783556606
                    ],
                    [
                        4.117443886348368,
                        -6.145641521482837
                    ],
                    [
                        4.749296011950501,
                        -5.223896744106578
                    ],
                    [
                        5.755363713075371,
                        -4.407117856066176
                    ],
                    [
                        6.246761774859516,
                        -3.1518987001395353
                    ],
                    [
                        6.722928659374168,
                        -2.3261870567898937
                    ],
                    [
                        -17.838193695156377,
                        29.357075986028637
                    ],
                    [
                        -0.047541502476112336,
                        -1.6113139803011247
                    ],
                    [
                        -0.8274975831068665,
                        -0.9016503171923236
                    ],
                    [
                        -2.81216573095498,
                        -0.43510977692759767
                    ],
                    [
                        -6.435015500370489,
                        2.100613101610151
                    ],
                    [
                        -6.4604366901605985,
                        2.138167188519914
                    ],
                    [
                        -6.248101707147887,
                        3.8525179814547386
                    ],
                    [
                        -7.571515460407069,
                        1.7331129486428003
                    ],
                    [
                        -7.930557271706956,
                        1.9782373722814641
                    ],
                    [
                        -7.953859819780725,
                        1.9932044606075616
                    ],
                    [
                        -8.786003559932958,
                        2.6409422554087802
                    ],
                    [
                        -8.205495932126855,
                        2.148031783460412
                    ],
                    [
                        -7.920312984893274,
                        2.210626790376079
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
                        15.187535247039918,
                        -28.05123975974977
                    ],
                    [
                        16.68071099101551,
                        -29.15255645123758
                    ],
                    [
                        16.335527823527535,
                        -28.5849805017823
                    ],
                    [
                        18.582511441530574,
                        -30.448158406474583
                    ],
                    [
                        15.570136137122013,
                        -27.306716465268842
                    ],
                    [
                        17.35915842438955,
                        -27.950813935637573
                    ],
                    [
                        71.56960849327797,
                        -74.5498167789763
                    ],
                    [
                        1.4602396211817628,
                        -6.137819772972237
                    ],
                    [
                        0.13904606067327657,
                        -4.933032089581934
                    ],
                    [
                        -0.39783285349432074,
                        -3.776784248749609
                    ],
                    [
                        0.12868317667044815,
                        -4.118432987616737
                    ],
                    [
                        76.95104240183491,
                        -70.3422792346827
                    ],
                    [
                        1.2145604379882635,
                        -4.255918645334994
                    ],
                    [
                        2.2600574101853894,
                        -5.109046318555492
                    ],
                    [
                        -21.049561769115737,
                        25.114071971951976
                    ],
                    [
                        -21.02232342841994,
                        29.776562189712678
                    ],
                    [
                        -25.543314707295345,
                        33.70503452352277
                    ],
                    [
                        -22.429806032282947,
                        31.496513221155272
                    ],
                    [
                        -23.748930424374098,
                        32.69096683502537
                    ],
                    [
                        -21.593512063994485,
                        30.854562624918348
                    ],
                    [
                        -20.488291616088112,
                        29.894480827946346
                    ],
                    [
                        -34.1760815078955,
                        45.24265397178275
                    ],
                    [
                        -30.656217314800106,
                        42.234873442338426
                    ],
                    [
                        -32.33294594867654,
                        43.707875988266736
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
                        -27.59369512647811,
                        13.852129910525237
                    ],
                    [
                        -27.090001336081766,
                        12.000439272750592
                    ],
                    [
                        -24.992309871883894,
                        7.326273656613377
                    ],
                    [
                        -24.214735350230832,
                        9.983526806240912
                    ],
                    [
                        -23.789710504733062,
                        9.720963013383422
                    ],
                    [
                        -21.6037957692857,
                        1.7570772118083928
                    ],
                    [
                        -21.661036180168058,
                        0.47402182696036915
                    ],
                    [
                        -20.338403794646055,
                        11.603618312057295
                    ],
                    [
                        -12.508192159560936,
                        89.21164075537858
                    ],
                    [
                        -19.259168435964813,
                        2.204390618881712
                    ],
                    [
                        -17.30825065710963,
                        -0.3571594679082923
                    ],
                    [
                        -11.00107496925008,
                        8.90244420179287
                    ],
                    [
                        -9.668166511698399,
                        7.670581583796804
                    ],
                    [
                        -0.05150383239997475,
                        93.6016513749184
                    ],
                    [
                        16.991351492853507,
                        -21.221302640528343
                    ],
                    [
                        14.269104924773822,
                        -14.582372724648085
                    ],
                    [
                        15.556830062586805,
                        -15.558487139270854
                    ],
                    [
                        21.634545411096074,
                        -22.910234831677318
                    ],
                    [
                        21.36803879396273,
                        -22.304931461577112
                    ],
                    [
                        25.5541122681049,
                        -26.704383484334443
                    ],
                    [
                        25.52863210060124,
                        -27.069863622549537
                    ],
                    [
                        29.689777016732545,
                        -28.856044935820073
                    ],
                    [
                        30.02488958872613,
                        -26.730794421874013
                    ],
                    [
                        29.91319504219764,
                        -31.1040226917546
                    ],
                    [
                        30.54956779785592,
                        -30.909161123165354
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
                        -39.87114896309389,
                        -26.17047448936316
                    ],
                    [
                        -36.513142291601966,
                        -23.2074203708577
                    ],
                    [
                        -121.40408857110803,
                        -124.74903436303218
                    ],
                    [
                        -37.08671647113923,
                        -26.598867027793727
                    ],
                    [
                        -31.146789591472764,
                        -19.715593379877223
                    ],
                    [
                        -97.23832164740763,
                        -102.33643723945319
                    ],
                    [
                        -28.437522890168744,
                        -21.26124994697763
                    ],
                    [
                        -25.295463960827217,
                        -19.00697164081969
                    ],
                    [
                        23.348587145493987,
                        21.140181456018112
                    ],
                    [
                        29.196184067229595,
                        27.579539034339852
                    ],
                    [
                        29.663092123295954,
                        27.90599641475556
                    ],
                    [
                        29.454972998481143,
                        26.74476499859735
                    ],
                    [
                        34.93186771873429,
                        32.61942924983202
                    ],
                    [
                        38.94415438213291,
                        34.43137381724053
                    ],
                    [
                        38.10536866791918,
                        32.79460591126044
                    ],
                    [
                        38.9182715124439,
                        30.846196985861546
                    ],
                    [
                        41.08863549488239,
                        32.93261740841398
                    ],
                    [
                        56.85418060615235,
                        48.64651733131878
                    ],
                    [
                        56.487879670053786,
                        47.404825850536334
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