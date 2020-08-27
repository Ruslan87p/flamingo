import { ChartOptions, ChartType, ChartDataSets, Chart } from 'chart.js';
import { Label } from 'ng2-charts'

export class Canva {

  barChartLabels: Label[] = ['2018Q1', '2018Q2', '2018Q3', '2018Q4', '2019Q1', '2019Q2', '2019Q3', '2019Q4', '2020Q1'];
  barChartType: ChartType = 'bar';
  barChartLegend = false;
  barChartPlugins = [];


    barChartOptions: ChartOptions = {
        maintainAspectRatio: true,
        tooltips: {
            enabled: false
        },
        hover: {
            // mode: null,
            "animationDuration": 0
        },
        spanGaps: true,
        responsive: true,
        legend: {
          display: false
      },
        scales: {
          xAxes: [{
            ticks: {
              fontSize: 15,
              fontColor: 'black',
              fontStyle: 'bold',
              beginAtZero: true,
            },
              gridLines: {
                display:false,
                drawBorder: false,
                lineWidth: 0
              }
          }],
          yAxes: [{
              ticks: {
                display: false,
                beginAtZero: true
              },
              gridLines: {
                display:false,
                drawBorder: false,
                lineWidth: 0
              }   
          }]
      },
      animation: {
        // duration: 1,
        onComplete: function () {
          let chartInstance = this.chart,
          ctx = chartInstance.ctx;
          ctx.font = Chart.helpers.fontString(
            Chart.defaults.global.defaultFontSize = 15,
            Chart.defaults.global.defaultFontStyle = 'bold',
            Chart.defaults.global.defaultFontFamily = 'Montserrat');
          ctx.textAlign = 'center';
          ctx.textBaseline = 'bottom';
          ctx.fillStyle = '#8bc925';
         
          this.data.datasets.forEach(function (dataset) {
            if (dataset.stack === 'a') {
              let meta = chartInstance.controller.getDatasetMeta(1);
              meta.data.forEach(function (bar, index) {
                let data = dataset.data[index];
                // let dataL = ['2018Q1', '2018Q2', '2018Q3', '2018Q4', '2019Q1', '2019Q2', '2019Q3', '2019Q4', '2020Q1'][index];
                // console.log(dataL);
                ctx.fillText(data, bar._model.x, bar._model.y + 70);
                // ctx.fillText(dataL, bar._model.x, bar._model.y - 10);
              });
            }
    
          });
        },
      },
      };
    

    
    
    
      barChartData: ChartDataSets[] = [
        {
          data: [2750, 2850, 3050, 3250, 3450, 3650, 3750, 3950, 4100], label: '', type: 'line',
          borderColor: '#0c3c60',
          backgroundColor: '#fcf4f4',
          fill: false,
          pointBackgroundColor: 'white',
          pointBorderColor: '#0c3c60',
          pointHoverBackgroundColor: 'white',
          pointHoverBorderColor: '#0c3c60',
          pointRadius: 15,
          hitRadius: 1,
          hoverRadius: 20,
          borderWidth: 3,
          pointHoverBorderWidth: 3,
        },
        {
          data: [3100, 3200, 3400, 3600, 3800, 4000, 4100, 4300, 4450], label: '', stack: 'a',
          backgroundColor: '#fcf4f4',
          hoverBackgroundColor: '#ffe0e0'
        }
      ];

}