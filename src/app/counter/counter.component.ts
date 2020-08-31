import { Component, AfterViewInit, HostListener, ViewChild, ElementRef } from '@angular/core';
import { LazyLoadingImg } from '../../app/counter/inters.observble'
import counterUp from 'counterup2'


@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements AfterViewInit {

  cnt;
  counter;
  count: any[] = [
    {
      countTo: '100',
      from: 0,
      duration: 5,
      name: "Transparency",
      symbol: "%"
    },
    {
      countTo: '150,000',
      from: 0,
      duration: 5,
      name: "Min investments",
      symbol: "NIS"
    },
    {
      countTo: '20',
      from: 0,
      duration: 5,
      name: "Years of experience",
      symbol: "+"
    },
    {
      countTo: '900',
      from: 0,
      duration: 5,
      name: "Satisfied customers",
      symbol: "+"
    }
  ];
  showCount = false;

  constructor() {

  }

  @ViewChild('scroll', {static: false}) scroll: ElementRef;

  @HostListener('window:scroll', []) onScrollEvent() {

    if (window.scrollY > 350 && window.scrollY < 400) {   
      this.cnt.forEach( (item) => {
        counterUp(item, {
        duration: 2000,
        delay: 16,
        })
      });
    }
    
}

  ngAfterViewInit() {
        this.cnt = document.querySelectorAll('.counter');
  }


}
