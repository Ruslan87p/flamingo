import { Component, OnInit } from '@angular/core';
import { LazyLoadingImg } from '../../app/counter/inters.observble'


@Component({
  selector: 'app-about-company',
  templateUrl: './about-company.component.html',
  styleUrls: ['./about-company.component.css']
})
export class AboutCompanyComponent implements OnInit {

  bg;
  constructor() { }

  ngOnInit() {

    this.bg = document.querySelector('.bg-view');
    new LazyLoadingImg(this.bg);

  }

}
