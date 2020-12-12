function draw(){
    makepie();
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
        },
        series: [{
            name: 'Name',
            colorByPoint: true,
            data: [{
                name: 'BLACKPINK',
                y: 9744232852,
                sliced: true,
                selected: true
            }, {
                name: 'TWICE',
                y: 5175671174
            }, {
                name: 'MOMOLAND',
                y: 681336381
            }, {
                name: 'Red Velvet',
                y: 1667378471
            }, {
                name: 'ITZY',
                y: 791646988
            }, {
                name: 'NiziU',
                y: 187044395
            }, {
                name: 'EVERGLOW',
                y: 458092930
            }, {
                name: '4MINUTE',
                y: 143170458
            }, {
                name: 'IZ*ONE',
                y: 212135214
            },{
                name: 'Girls\' Generation',
                y: 1615457160
            },{
                name: 'f(x)',
                y: 131258889	
            },{
                name: 'SISTAR',
                y: 309786464
            },{
                name: 'Wonder Girls',
                y: 96420798
            },{
                name: 'MAMAMOO',
                y: 458964386
            },{
                name: '2NE1',
                y: 1240451348
            },{
                name: 'miss A',
                y: 92201665
            },{
                name: 'AOA',
                y: 85026996
            },{
                name: 'Apink',
                y: 155918645
            },{
                name: 'EXID',
                y: 182512463
            },{
                name: '(G)I-DLE',
                y: 528640395
            }]
        }]
    });
}
