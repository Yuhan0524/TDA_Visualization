//mds 点图
function displayChart9(){
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
                        32.30101114247948,
                        -30.793624779974017
                    ],
                    [
                        32.18143581534144,
                        -30.457915921823588
                    ],
                    [
                        30.499474022075624,
                        -28.815895672336286
                    ],
                    [
                        28.5525313530845,
                        -27.079721425650167
                    ],
                    [
                        22.01928353877341,
                        -21.15764564959681
                    ],
                    [
                        27.65747993699775,
                        -21.087604033186057
                    ],
                    [
                        14.35145401667417,
                        -13.914947944251173
                    ],
                    [
                        11.427900315065967,
                        -11.473472977595392
                    ],
                    [
                        12.08742048458513,
                        -11.601790998047107
                    ],
                    [
                        29.693042210505105,
                        -18.628320959282924
                    ],
                    [
                        9.356960330188805,
                        -9.133753373954711
                    ],
                    [
                        9.0760601866158,
                        -8.248376197446857
                    ],
                    [
                        8.464453345985074,
                        -7.989102519853688
                    ],
                    [
                        -16.34817663695752,
                        14.0255355770939
                    ],
                    [
                        -29.96703996029454,
                        26.79607882751461
                    ],
                    [
                        -29.25129590584918,
                        26.539667054688273
                    ],
                    [
                        -29.265994659075908,
                        26.545509002995505
                    ],
                    [
                        -29.851982136369326,
                        26.780225587890524
                    ],
                    [
                        -29.647354359335473,
                        26.708109295917026
                    ],
                    [
                        -30.005858950138112,
                        27.144403508743
                    ],
                    [
                        -36.16033786382848,
                        32.43105081468732
                    ],
                    [
                        -37.170466226523665,
                        33.411592783468635
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
                        1.9277127746191363,
                        -29.55125445155454
                    ],
                    [
                        0.4750813047491438,
                        -20.81319870073338
                    ],
                    [
                        81.78607235928092,
                        -48.292649263336564
                    ],
                    [
                        3.2576320758416006,
                        -21.323300277588356
                    ],
                    [
                        4.2505156547836656,
                        -19.851824896684537
                    ],
                    [
                        0.0007117386785471754,
                        -15.787659343784512
                    ],
                    [
                        1.8363379825466488,
                        -15.803999900380417
                    ],
                    [
                        -1.2547305966661624,
                        -14.365073766019936
                    ],
                    [
                        43.800751861065976,
                        -28.575615876690037
                    ],
                    [
                        -9.409530528007961,
                        6.075548048795603
                    ],
                    [
                        -6.625240291891321,
                        14.303803649574576
                    ],
                    [
                        -10.405638088246883,
                        16.310333936723534
                    ],
                    [
                        -10.87271469139239,
                        17.55482140665536
                    ],
                    [
                        -11.414834627218674,
                        17.938933012585718
                    ],
                    [
                        -11.347597883879196,
                        18.684635908895142
                    ],
                    [
                        -12.814819873771444,
                        19.909515135594624
                    ],
                    [
                        -14.084158010853631,
                        24.211068960337975
                    ],
                    [
                        -15.2802830706448,
                        24.709716372854313
                    ],
                    [
                        -16.912634044498287,
                        27.33310002239318
                    ],
                    [
                        -16.91263404449487,
                        27.333100022362245
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
                        21.434549291418048,
                        22.99216786964175
                    ],
                    [
                        19.311827018092988,
                        22.026631672452254
                    ],
                    [
                        18.53586100016726,
                        20.679434439766148
                    ],
                    [
                        9.026998384475807,
                        13.032883664351555
                    ],
                    [
                        94.59041676348733,
                        -3.93572087381178
                    ],
                    [
                        11.157541521881436,
                        11.69317724284449
                    ],
                    [
                        5.046331122274606,
                        12.253952439237889
                    ],
                    [
                        10.096766262723877,
                        10.735970736276276
                    ],
                    [
                        11.990771205717913,
                        9.295527998291698
                    ],
                    [
                        55.49157532423437,
                        0.6722806846482293
                    ],
                    [
                        8.180148780075664,
                        9.443315897914525
                    ],
                    [
                        9.120914021290591,
                        8.700656319112111
                    ],
                    [
                        -18.255561374887908,
                        -4.70022623717012
                    ],
                    [
                        -25.143749721644543,
                        -12.29552727430982
                    ],
                    [
                        -26.671023334238647,
                        -12.070833220625316
                    ],
                    [
                        -25.44983357696766,
                        -12.314839466691902
                    ],
                    [
                        -23.46068657399226,
                        -13.689506140601019
                    ],
                    [
                        -22.842329263204444,
                        -14.061702268052285
                    ],
                    [
                        -24.15195085041739,
                        -14.551992643944503
                    ],
                    [
                        -33.999684291714516,
                        -17.492608362540103
                    ],
                    [
                        -35.409255018439104,
                        -17.190865349328796
                    ],
                    [
                        -38.599626690333444,
                        -19.222177127461272
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
                        -28.866127417844254,
                        9.358930025768442
                    ],
                    [
                        -19.752863461067125,
                        10.429258117089272
                    ],
                    [
                        -22.637882319240678,
                        8.391205458285963
                    ],
                    [
                        -20.643589221263824,
                        9.273421010987688
                    ],
                    [
                        -15.574121344407695,
                        11.215654162425766
                    ],
                    [
                        -13.814392533042591,
                        7.054418763594846
                    ],
                    [
                        -65.62803231401162,
                        -24.295526933649604
                    ],
                    [
                        -4.5966613441461,
                        9.550346079546593
                    ],
                    [
                        -7.305588381166097,
                        7.808824317300864
                    ],
                    [
                        -7.9828954086625,
                        6.286818550263672
                    ],
                    [
                        -7.75003686141553,
                        4.79777794722958
                    ],
                    [
                        -9.29530049368122,
                        3.713277563040106
                    ],
                    [
                        -99.04122926214373,
                        -50.90321301147031
                    ],
                    [
                        -10.770852907779771,
                        2.1123038173106563
                    ],
                    [
                        23.188416592643446,
                        2.329940972924233
                    ],
                    [
                        23.736200985255277,
                        2.6637085128237925
                    ],
                    [
                        22.21324257689597,
                        -1.2678411567430932
                    ],
                    [
                        22.06163002970786,
                        -2.5232852526073186
                    ],
                    [
                        25.744753728492444,
                        -2.0012023933324854
                    ],
                    [
                        25.597176740696394,
                        -2.1036673564090336
                    ],
                    [
                        26.34691085060992,
                        -3.048124313978988
                    ],
                    [
                        27.020365983010166,
                        -2.6827602460903526
                    ],
                    [
                        34.022489497489744,
                        -0.7188614267235786
                    ],
                    [
                        32.50247286129882,
                        -2.597828670737949
                    ],
                    [
                        36.58295543921889,
                        -0.44253147650366503
                    ],
                    [
                        34.642957984553846,
                        -2.4010430603450965
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
                        33.56779532311287,
                        27.01420104850838
                    ],
                    [
                        31.465395147184047,
                        24.824570326983018
                    ],
                    [
                        29.55469832765656,
                        23.683365844290233
                    ],
                    [
                        23.980310539104938,
                        18.92681832056892
                    ],
                    [
                        8.268902173052473,
                        -12.692096487339487
                    ],
                    [
                        14.920355635822897,
                        2.348587682648702
                    ],
                    [
                        15.792397452895749,
                        13.153902383821904
                    ],
                    [
                        13.774085168631666,
                        11.048894678903464
                    ],
                    [
                        13.128007190825176,
                        10.109656694362062
                    ],
                    [
                        13.555110423796021,
                        11.017462442714491
                    ],
                    [
                        9.38005572794374,
                        7.0617243313285885
                    ],
                    [
                        -5.637216256636976,
                        -2.1929309635578207
                    ],
                    [
                        -17.52329099752279,
                        -12.22859311177245
                    ],
                    [
                        -17.54318831842555,
                        -12.25660329002557
                    ],
                    [
                        -18.075589609809718,
                        -12.906977686568542
                    ],
                    [
                        -17.909416356345467,
                        -11.910670943912056
                    ],
                    [
                        -17.996793262706607,
                        -12.103359647403375
                    ],
                    [
                        -18.022165588141974,
                        -12.13619783201143
                    ],
                    [
                        -21.886643008916472,
                        -14.337419311325787
                    ],
                    [
                        -21.688092467004328,
                        -14.001903466120313
                    ],
                    [
                        -25.118797043591073,
                        -15.875021826544808
                    ],
                    [
                        -25.985920200925154,
                        -16.54740918754811
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
                        24.772830926407647,
                        -34.28205338340277
                    ],
                    [
                        23.726948739412002,
                        -34.26245573435407
                    ],
                    [
                        20.98789260033709,
                        -35.8597109986913
                    ],
                    [
                        22.196873576107215,
                        -32.654700734374146
                    ],
                    [
                        19.081739139800852,
                        -25.256638364867094
                    ],
                    [
                        -12.930988898888359,
                        -87.63146637903029
                    ],
                    [
                        12.85510179442914,
                        -7.16169259825083
                    ],
                    [
                        9.98726184188917,
                        -10.588121151745472
                    ],
                    [
                        -42.09576617139273,
                        -122.32491298082559
                    ],
                    [
                        8.710104438689093,
                        -10.410737560343518
                    ],
                    [
                        3.652851172574749,
                        -10.559862027724995
                    ],
                    [
                        2.078207969813606,
                        -10.221601952965079
                    ],
                    [
                        -0.33034743639108627,
                        30.522272415268166
                    ],
                    [
                        -10.949279404179684,
                        44.38249138287633
                    ],
                    [
                        -10.8924379755803,
                        44.55263208727897
                    ],
                    [
                        -10.769029351801805,
                        47.100410490882666
                    ],
                    [
                        -12.140723077698125,
                        44.954318598887326
                    ],
                    [
                        -11.132803487102242,
                        48.447333664636595
                    ],
                    [
                        -11.766189342122019,
                        47.079382671766155
                    ],
                    [
                        -11.91621944568683,
                        57.31439568142072
                    ],
                    [
                        -13.126027608617408,
                        56.86071687355819
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
                        44.21036380924286,
                        36.75886580678192
                    ],
                    [
                        41.461117109170395,
                        34.25022368646452
                    ],
                    [
                        40.04513137978932,
                        33.15317549437453
                    ],
                    [
                        107.18889607896456,
                        27.944497032884858
                    ],
                    [
                        33.060700014936366,
                        28.38802320109464
                    ],
                    [
                        27.711552520452376,
                        24.240527899128157
                    ],
                    [
                        26.472331197298153,
                        22.403034358471725
                    ],
                    [
                        26.753491480151855,
                        22.380257179358534
                    ],
                    [
                        29.107094473553946,
                        21.980035923741344
                    ],
                    [
                        66.34612392727442,
                        19.88277026658379
                    ],
                    [
                        24.538063243355616,
                        17.471703542596426
                    ],
                    [
                        15.15333492783239,
                        11.244905663785687
                    ],
                    [
                        -23.94860449858672,
                        -11.225910973417532
                    ],
                    [
                        -34.99132356222439,
                        -24.374996733223867
                    ],
                    [
                        -39.69018735848605,
                        -24.296527703480685
                    ],
                    [
                        -39.506855077130794,
                        -24.29883087555954
                    ],
                    [
                        -35.42311312471325,
                        -24.381598456519708
                    ],
                    [
                        -41.544010049013295,
                        -24.582682505135935
                    ],
                    [
                        -37.71102545113257,
                        -25.174867007636426
                    ],
                    [
                        -51.27318727543215,
                        -31.321153590097058
                    ],
                    [
                        -52.12001920295583,
                        -31.33440189559319
                    ],
                    [
                        -62.968788772170896,
                        -39.57032764385113
                    ],
                    [
                        -62.87108579017637,
                        -39.53672267075107
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