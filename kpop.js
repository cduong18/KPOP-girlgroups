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
        },subtitle: {
            text: 'Source: <a href="https://kworb.net/youtube/topvideos_korean.html">KWORB</a>'
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
