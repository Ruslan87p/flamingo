import { Component, AfterViewInit } from '@angular/core';
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
      countTo: '100',
      from: 0,
      duration: 5,
      name: "Satisfied customers",
      symbol: "%"
    }
  ];


  constructor() {

  }




  ngAfterViewInit() {



        this.cnt = document.querySelectorAll('.counter');


        this.counter = document.querySelector('#counter');
        new LazyLoadingImg(this.counter, this.cnt);
        

  }


}
