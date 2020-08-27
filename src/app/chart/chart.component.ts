import { Component, AfterViewInit } from '@angular/core';
import { LazyLoadingImg } from '../../app/counter/inters.observble'

import {Canva} from './../chart/canvas'




@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements AfterViewInit {


  barChartData;
  barChartLabels;
  barChartOptions;
  barChartPlugins;
  barChartLegend;
  barChartType;


  constructor() {
    this.barChartData = new Canva().barChartData;
    this.barChartLabels = new Canva().barChartLabels;
    this.barChartOptions = new Canva().barChartOptions;
    this.barChartPlugins = new Canva().barChartPlugins;
    this.barChartLegend = new Canva().barChartLegend;
    this.barChartType = new Canva().barChartType;
  }





  ngAfterViewInit() {
    console.log(this.barChartData);
    new LazyLoadingImg(document.querySelector('#chart-wrapper'));
  }



}
