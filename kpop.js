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
