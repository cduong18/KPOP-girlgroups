// BarChart
document.addEventListener('DOMContentLoaded', function () {
    const chart2 = Highcharts.chart('barchart', {
      chart: {
          type: 'column'
      },
      title: {
        text: 'Instagram Following of Popular KPOP Girl Groups'
        },
      tooltip: {
          pointFormat: '<b>{data.name}</b><br>Instagram Followers: {point.y}'
      },
      subtitle: {
        text: 'Last Updated: December 12, 2020'
      },
      xAxis: {
          type: 'category',
        labels: {
            rotation: -45,
            style: {
              fontSize: '13px'
            }},
      },
      yAxis: {
          min: 0,
          title: {
              text: '# Instagram Followers'
          }
      },
      legend: {
          reversed: true
      },
      plotOptions: {
        column: {
          pointPadding: 0.2,
          borderWidth: 0
        }
      },
      series: [{
          name: 'KPOP Girl Group',
          data: [
              ['Blackpink', 32600000],
              ['Twice', 15700000],
              ['Red Velvet', 9400000],
              ['ITZY', 7300000],
              ['MAMAMOO', 5600000],
              ['(G)I-DLE', 5600000],
              ['MOMOLAND', 2200000],
              ['IZ*ONE', 2100000],
              ['EVERGLOW', 1900000],
              ['NiziU', 1700000],
              ['EXID', 1100000],
              ['Apink', 1000000],
              ['Girls\' Generation', 1000000],
              ['f(x)', 401000],
              ['2NE1', 335000],
              ['SISTAR', 185000],
              ['AOA', 157000]   
          ]
      }]
    });
    });


// Pie Chart
function draw(){
    makepie();
    makebubble();
}
function makepie(){
    Highcharts.chart('piechart', {
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie'
        },
        title: {
            text: 'Girl Groups '
        },
        tooltip: {
            pointFormat: 'Total Views: <b>{point.y}</b>'
        },
        accessibility: {
            point: {
                valueSuffix: '%'
            }
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: true,
                    format: '<b>{point.name}</b>: {point.percentage:.1f} %'
                }
            }
        },subtitle: {
            text: 'Source: <a href="https://kworb.net/youtube/topvideos_korean.html">KWORB<br>Last Updated: December 8, 2020</a>'
        },
        series: [{
            name: 'Name',
            colorByPoint: true,
            data: [{
                name: 'BLACKPINK',
                y: 9744232852,
                sliced: true,
                selected: true,
                test:'BLACKPINK'
            }, {
                name: 'TWICE',
                y: 5175671174,
                test:'TWICE'
            },{
                name: 'Red Velvet',
                y: 1667378471,
                test:'Red Velvet'
            },{
                name: 'Girls\' Generation',
                y: 1615457160,
                test: 'Girls\' Generation'
            }, {
                name: '2NE1',
                y: 1240451348,
                test:'2NE1'
            },{
                name: 'ITZY' ,
                y:791646988
            },{
                name:'MOMOLAND',
                y:681336381
            },{
                name: 'Other',
                y: 458964386+528640395+187044395+458092930+143170458+212135214+131258889+309786464+96420798+458964386+85026996+155918645+182512463,
                test:'MAMAMOO GIDLE NiziU EVERGLOW 4MINUTE IZ*ONE f(x) SISTAR WonderGirls  missA AOA Apink EXID '
            }]
        }]
    });
}

var bpv  =[1422808140, 1138378475, 1056918145,  924687515,  688990041,
    594268499,  592679755,  465844920,  435656196,  351632526,
    321024425,  286666217,  247024331,  207630206,  200511998,
    179392759,  163942130,  160946591,  133211514,   98298206,
     89689666];

var tv = [557731748, 489151020, 450828618, 419126531, 385873271, 368915726,
    352344485, 302268843, 280525722, 270478290, 260736351, 259182723,
    216702173, 166132687, 128310495,  99721756,  89550715,  87810400];
var rv =[295067782, 211319191, 187871812, 185420266, 164883332, 136032940,
    122052001, 107846782, 100364808,  83003834,  76044475];


function makebubble(){
    Highcharts.chart('bubblechart', {
        chart: {
            type: 'packedbubble',
            height: '45%',
            marginTop: 80,
            marginBottom:150

        },
        title: {
            text: 'Girl Group views per video'
        },
        tooltip: {
            useHTML: true,
            pointFormat: '<b>{point.name}:</b> {point.value} views'
        },
        plotOptions: {
            packedbubble: {
                minSize: '50%',
                maxSize: '300%',
                zMin: 0,
                zMax: 1422808140,
                layoutAlgorithm: {
                    splitSeries: false,
                    gravitationalConstant: 0.02
                },
                dataLabels: {
                    enabled: true,
                    format: '{point.abr}',
                    filter: {
                        property: 'y',
                        operator: '>',
                        value: 250
                    },
                    style: {
                        color: 'black',
                        textOutline: 'none',
                        fontWeight: 'normal'
                    }
                }
            }
        },
        series: [{
            name: 'BlACKPINK',
            data: [{
                name: 'DDU-DU DDU-DU MV',
                value: bpv[0],
                abr:'BP'
            }, {
                name: 'Kill This Love MV',
                value: bpv[1],
                abr:'BP'
            },
            {
                name: "BOOMBAYAH",
                value: bpv[2],
                abr:'BP'
            },
            {
                name: "ASIFITSYOURLAST MV",
                value: bpv[3],
                abr:'BP'
            },
            {
                name: "HowYouLikeThatM/V",
                value: bpv[4],
                abr:'BP'
            },
            {
                name: "(PLAYINGWITHFIRE)M/V",
                value: bpv[5],
                abr:'BP'
            },
            {
                name: "(WHISTLE)M/V",
                value: bpv[6],
                abr:'BP'
            },
            {
                name: "HowYouLikeThatDANCEPERFORMANCE",
                value: bpv[7],
                abr:'BP'
            },
            {
                name: "IceCream(withSelenaGomez)M/V",
                value: bpv[8],
                abr:'BP'
            },
            {
                name: "(DDU-DUDDU-DU)DANCEPRACTICE",
                value: bpv[9],
                abr:'BP'
            },
            {
                name: "KillThisLoveDANCEPRACTICE",
                value: bpv[10],
                abr:'BP'
            }, {
                name: "LovesickGirlsM/V",
                value: bpv[11],
                abr:'BP'
            }, {
                name: "STAYM/V",
                value: bpv[12],
                abr:'BP'
            },
            {
                name: "(BOOMBAYAH)DANCEPRACTICE",
                value: bpv[13],
                abr:'BP'
            },
            {
                name: "ASIFITSYOURLAST)DANCEPRACTICE",
                value: bpv[14],
                abr:'BP'
            },
            {
                name: "DontKnowWhatToDoDANCEPRACTICE",
                value: bpv[15],
                abr:'BP'
            },
            {
                name: "ForeverYoungDANCEPRACTICE",
                value: bpv[16],
                abr:'BP'
            },
            {
                name: "(PLAYINGWITHFIRE)DANCEPRACTICE",
                value: bpv[17],
                abr:'BP'
            },
            {
                name: "(WHISTLE)DANCEPRACTICE",
                value: bpv[18],
                abr:'BP'
            },
            {
                name: "LovesickGirlsDANCEPRACTIC",
                value: bpv[19],
                abr:'BP'
            },
            {
                name: "IceCreamDANCEPERFORMANCE",
                value: bpv[20],
                abr:'BP'
            }]
        }, {
            name: 'TWICE',
            data: [{
                name: "TT M/V",
                value: tv[0],
                abr:'TWICE'
            },
            {
                name: "LIKEYM/V",
                value: tv[1],
                abr:'TWICE'
            },
            {
                name: "WhatisLoveM/V",
                value: tv[2],
                abr:'TWICE'
            },
            {
                name: "CHEERUPM/V",
                value: tv[3],
                abr:'TWICE'
            },
            {
                name: "OOH-AHH(OOH-AHH)M/V",
                value: tv[4],
                abr:'TWICE'
            },
            {
                name: "FANCYM/V",
                value: tv[5],
                abr:'TWICE'
            },
            {
                name: "HeartShakerM/V",
                value: tv[6],
                abr:'TWICE'
            },
            {
                name: "FeelSpecialM/V",
                value: tv[7],
                abr:'TWICE'
            },
            {
                name: "YESorYESM/V",
                value: tv[8],
                abr:'TWICE'
            },
            {
                name: "KNOCKKNOCKM/V",
                value: tv[9],
                abr:'TWICE'
            },
            {
                name: "DanceTheNightAwayM/V",
                value: tv[10],
                abr:'TWICE'
            },
            {
                name: "SIGNALM/V",
                value: tv[11],
                abr:'TWICE'
            },
            {
                name: "MOREMOREM/V",
                value: tv[12],
                abr:'TWICE'
            },
            {
                name: "ICANTSTOPMEM/V",
                value: tv[13],
                abr:'TWICE'
            },
            {
                name: "CandyPopMV",
                value: tv[14],
                abr:'TWICE'
            }, {
                name: "TT-JapaneseverMV",
                value: tv[15],
                abr:'TWICE'
            }, {
                name: "BreakthroughMV",
                value: tv[16],
                abr:'TWICE'
            }, {
                name: "OneMoreTimeMV",
                value: tv[17],
                abr:'TWICE'
            }]
        }, {
            name: 'MOMOLAND',
            data: [{
                name: "BBoomBBoom MV",
                value: 473760970,
                abr:'MOMO'
            },
            {
                name: "BAAM MV",
                value: 207897306,
                abr:'MOMO'
            }]
        }, {
            name: 'Red Velvet',
            data: [{
                name: "Bad Boy MV",
                value: rv[0],
                abr:"RV"
            },
            {
                name: "Psycho MV",
                value: rv[1],
                abr:"RV"
            },
            {
                name: "Peek-A-Boo MV",
                value: rv[2],
                abr:"RV"
            },
            {
                name: "Russian Roulette MV",
                value: rv[3],
                abr:"RV"
            },
            {
                name: "Red Flavor Music",
                value: rv[4],
                abr:"RV"
            },
            {
                name: "Dumb Dumb MV",
                value: rv[5],
                abr:"RV"
            },
            {
                name: "Ice Cream Cake MV",
                value: rv[6],
                abr:"RV"
            },
            {
                name: "Power Up MV",
                value: rv[7],
                abr:"RV"
            }, {
                name: "Happiness MV",
                value: rv[8],
                abr:"RV"
            }, {
                name: "ZIMZALABIM MV",
                value: rv[9],
                abr:"RV"
            }, {
                name: "Monster MV",
                value: rv[10],
                abr:"RV"
            }]
        }, {
            name: 'ITZY',
            data: [{
                name: "ITZYWANNABE M/V",
                value:246997469,
                abr:'ITZY'
            }]
        },{
            name: 'EVERGLOW',
            data: [{
                name: "DUNDUNMV",
                value:174073733,
                abr:'EG'
            },{
                name: "AdiosMV",
                value:128442533,
                abr:'EG'
            },{
                name: "(BonBonChocolat)MV",
                value:83493225,
                abr:'EG'
            },{
                name: "LADIDAMV",
                value:72876627,
                abr:'EG'
            }]
        },{
            name: '(G)I-DLE',
            data: [{
                name: "LATATA MV",
                value:154853219,
                abr:'GD'
            },{
                name: "Oh my god MV",
                value:123499393,
                abr:'GD'
            },{
                name: "HANN(Alone) MV",
                value:103283201,
                abr:'GD'
            },{
                name: "LION MV",
                value:74555130,
                abr:'GD'
            },{
                name: "DUMDi DUMDi MV",
                value:73292234,
                abr:'GD'
            }]
        },{
            name:'4MINUTE',
            data: [{
                name: "CRAZY MV",
                value:143242567,
                abr:'4MIN'
            }]
        },{
            name:'IZ*ONE',
            data: [{
                name: "La Vie En Rose MV",
                value:139908468,
                abr:'IZ*ONE'
            },{
                name: "Violeta",
                value:72366154,
                abr:'IZ*ONE'
            }]
        },{
            name: 'Girls\' Generation',
            data: [{
                name: 'Gee MV',
                value: 263439921,
                abr:"GG"
            },
            {
                name: "The Boys MV",
                value: 251934124,
                abr:"GG"
            },
            {
                name: "I GOT A BOY MV",
                value: 238387800,
                abr:"GG"
            },
            {
                name: "Lil' Touch MV",
                value: 138644495,
                abr:"GG"
            },
            {
                name: "Oh! MV",
                value: 128410490,
                abr:"GG"
            },
            {
                name: "Lion Heart MV",
                value: 118127902,
                abr:"GG"
            },
            {
                name: "PARTY MV",
                value: 110812489,
                abr:"GG"
            },
            {
                name: "Run Devil Run MV",
                value: 109858184,
                abr:"GG"
            }, {
                name: "Mr.Mr. MV",
                value:89773460,
                abr:"GG"
            }, {
                name: "Twinkle MV",
                value: 89718785,
                abr:"GG"
            }, {
                name: "Catch Me If You Can MV",
                value: 76701697,
                abr:"GG"
            }]
        }, {
            name: 'ITZY',
            data: [{
                name: "ITZYWANNABE M/V",
                value:246997469,
                abr:'ITZY'
            }]
        },{
            name: 'EVERGLOW',
            data: [{
                name: "DUNDUNMV",
                value:174073733,
                abr:'EG'
            },{
                name: "AdiosMV",
                value:128442533,
                abr:'EG'
            },{
                name: "(BonBonChocolat)MV",
                value:83493225,
                abr:'EG'
            },{
                name: "LADIDAMV",
                value:72876627,
                abr:'EG'
            }]
        }, {
            name: 'f(x)',
            data: [{
                name: "Electric Shock",
                value:131275255,
                abr:'f(x)'
            }]
        },{
            name: 'SISTAR',
            data: [{
                name: "Alone MV",
                value:116793224,
                abr:'SISTAR'
            },{
                name: "Ma Boy MV",
                value:97392611,
                abr:'SISTAR'
            },{
                name: "Touch my body MV",
                value:95780895,
                abr:'SISTAR'
            }]
        }, {
            name: 'Wonder Girls',
            data: [{
                name: "NOBODY MV",
                value:96472469,
                abr:'WG'
            }]
        },{
            name: 'MAMAMOO',
            data: [{
                name: "HIP MV",
                value:199082009,
                abr:'MM'
            },{
                name: "Egotistic MV",
                value:96516816,
                abr:'MM'
            },{
                name: "Starrynight MV",
                value:89150302,
                abr:'MM'
            },{
                name: "Starrynight MV",
                value:75558621,
                abr:'MM'
            }]
        },{
            name: '2NE1',
            data: [{
                name: 'DADDY(feat. CL of 2NE1) M/V',
                value: 545791833,
                abr:"2NE1"
            },
            {
                name: "I AM THE BEST MV",
                value: 279243091,
                abr:"2NE1"
            },
            {
                name: "COME BACK HOME M/V",
                value: 92571583,
                abr:"2NE1"
            },
            {
                name: " LOLLIPOP M/V",
                value: 91295852,
                abr:"2NE1"
            },
            {
                name: "LONELY M/V",
                value: 84811497,
                abr:"2NE1"
            },
            {
                name: "I LOVE YOU M/V",
                value: 75155090,
                abr:"2NE1"
            },
            {
                name: "FALLING IN LOVE M/V",
                value: 72242537,
                abr:"2NE1"
            }]
        },{
            name: 'miss A',
            data: [{
                name: "Only You MV",
                value:92227014,
                abr:'missA'
            }]
        },{
            name: 'AOA',
            data: [{
                name: "Mini SKirt MV",
                value:85073811,
                abr:'AOA'
            }]
        },{
            name: 'Apink',
            data: [{
                name: "I'm so Sick MV",
                value:82615047,
                abr:'Apink'
            },{
                name: 'Mr.Chu',
                value:73412404,
                abr:'Apink'
            }]
        },{
            name: 'EXID',
            data: [{
                name: "Ah Yeah MV",
                value:74998304,
                abr:'EXID'
            },{
                name: 'UP&DOWN MV ',
                value:107556035,
                abr:'EXID'
            }]
        }]
    });
    
}

