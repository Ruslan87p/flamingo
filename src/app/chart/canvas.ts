import { ChartOptions, ChartType, ChartDataSets, Chart } from 'chart.js';
import { Label } from 'ng2-charts'

export class Canva {

  barChartLabels: Label[] = ['2018Q1', '2018Q2', '2018Q3', '2018Q4', '2019Q1', '2019Q2', '2019Q3', '2019Q4', '2020Q1'];
  barChartType: ChartType = 'bar';
  barChartLegend = false;
  barChartPlugins = [];
  draw;


    barChartOptions: ChartOptions = {
          elements: {
            line: {
                tension: 0, // disables bezier curves
            }
        },
        legend: {
          position: 'top',
          display: false
        },
        maintainAspectRatio: false,
        tooltips: {
            enabled: false
        },
        hover: {
            mode: null,
            "animationDuration": 0
        },
        // spanGaps: true,
        responsive: true,
        scales: {
          xAxes: [{
            stacked: false,
            ticks: {
              fontSize: 15,
              fontColor: 'black',
              fontStyle: 'bold',
              display: false,
              beginAtZero: true,
              padding: 0
            },
              gridLines: {
                display:false,
                drawBorder: false,
                lineWidth: 0
            },
            position: 'top',
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
        onProgress: function () {
          let chartInstance = this.chart,
          ctx = chartInstance.ctx;

          let originalStroke = ctx.stroke;
          ctx.stroke = function () {
            ctx.save();
            ctx.shadowColor = '#333333';
            ctx.shadowBlur = 2;
            ctx.shadowOffsetX = 1;
            ctx.shadowOffsetY = 1;
            originalStroke.apply(this)
            ctx.restore();
          }

        },
        easing: "easeOutCubic",
        // duration: 1,
        onComplete: function () {
          let chartInstance = this.chart,
          ctx = chartInstance.ctx;
          ctx.font = Chart.helpers.fontString(
            Chart.defaults.global.defaultFontSize = 17,
            Chart.defaults.global.defaultFontStyle = 'bold',
            Chart.defaults.global.defaultFontFamily = 'Catamaran');

         
          this.data.datasets.forEach(function (dataset) {
            if (dataset.stack === 'a') {
              let meta = chartInstance.controller.getDatasetMeta(1);
              ctx.textAlign = 'center';
              ctx.textBaseline = 'bottom';
              ctx.fillStyle = '#8bc925';
              
              meta.data.forEach(function (bar, index) {
                let data = dataset.data[index];
                ctx.fillText(data, bar._model.x, bar._model.y + 60);
              });
            }
          });
        },
      },
      };
    

    
    
    
      barChartData: ChartDataSets[] = [
        {
          data: [2800, 2900, 3100, 3300, 3500, 3700, 3800, 4000, 4150], label: '', type: 'line',
          borderColor: '#0c3c60', // line
          backgroundColor: '#fcf4f4',
          fill: false,
          pointBackgroundColor: 'white',
          pointBorderColor: 'white',
          pointBorderWidth: 2,
          // pointHoverBackgroundColor: '#0c3c60',
          // pointHoverBorderColor: 'purple',
          pointRadius: 6,
          hitRadius: 1,
          hoverRadius: 20,
          borderWidth: 3,
          pointHoverBorderWidth: 3,
        },
        {
          data: [2800, 2900, 3100, 3300, 3500, 3700, 3800, 4000, 4150], label: '', type: 'line',
          // borderColor: 'red',
          // backgroundColor: 'red',
          fill: false,
          pointBackgroundColor: '#0c3c60',
          pointBorderColor: 'white',
          pointRadius: 17,
          pointBorderWidth: 6,
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