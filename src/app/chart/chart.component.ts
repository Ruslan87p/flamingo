import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
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
  labels;
  imgMap;

  onSCrollShow;
  observer;
  onDestroyEvent;
  options;
  
  show = false;
  

  constructor(private graph: ElementRef) {

    this.options = {
      root: null,
      rootMargin: "0px 0px -20px 0px",
      threshold: [0, 0.8]
    };


    





  }

  ngAfterViewInit() {

    this.labels = this.graph.nativeElement.children[0].children[0].children[3].children[0];
    // this.imgMap = this.graph.nativeElement.children[1].children[0].children[0].children[1].children[0].children[0].children[0].children[0];

    this.onSCrollShow = () => {
      // Observe on scroll and show element in the middle of the screen
      const element = this.graph.nativeElement.getBoundingClientRect();

      const onIntersection = (entries) => {
          entries.forEach(entry => {
          // Are we in viewport?
          if (entry.intersectionRatio < 0.1 ) {
                  this.show = true;

                  this.barChartData = new Canva().barChartData;
                  this.barChartLabels = new Canva().barChartLabels;
                  this.barChartOptions = new Canva().barChartOptions;
                  this.barChartPlugins = new Canva().barChartPlugins;
                  this.barChartLegend = new Canva().barChartLegend;
                  this.barChartType = new Canva().barChartType;
               
              }

               if (element.top > -300 || element.top < 400) {
                this.labels.classList.add('labels-animation-add');
              }

               if (element.top < -400 || element.top > 600) {
                this.labels.classList.remove('labels-animation-add');
              }
              
              else {
                return
              }
          this.observer.unobserve(entry.target);     
          });
      }
      this.observer = new IntersectionObserver(onIntersection, this.options);
      this.observer.observe(this.graph.nativeElement);
  }

  window.addEventListener('scroll', this.onSCrollShow, {passive: false});
    this.onDestroyEvent = () => {
        window.removeEventListener('scroll', this.onSCrollShow);
    }

  }

  

}
