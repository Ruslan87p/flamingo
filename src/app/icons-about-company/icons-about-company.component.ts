import { Component, AfterViewInit } from '@angular/core';
import { LazyLoadingImg } from '../../app/counter/inters.observble'


@Component({
  selector: 'app-icons-about-company',
  templateUrl: './icons-about-company.component.html',
  styleUrls: ['./icons-about-company.component.css']
})
export class IconsAboutCompanyComponent implements AfterViewInit {
  icon;
  constructor() { }
  icons: any[] = [
    {
      img: "https://captiva-test.plotkinruslan.com/assets/imgs/icon1.png",
      name: "Property Type",
      description: "Residential & commercial"
    },
    {
      img: "https://captiva-test.plotkinruslan.com/assets/imgs/icon2.png",
      name: "Experience",
      description: "Hundreds of satisfied customers"
    },
    {
      img: "https://captiva-test.plotkinruslan.com/assets/imgs/icon3.png",
      name: "Professional",
      description: "Hundreds of satisfied customers"
    },
    {
      img: "https://captiva-test.plotkinruslan.com/assets/imgs/icon4.png",
      name: "Location",
      description: "All across Israel"
    }
  ];

  ngAfterViewInit() {

    this.icon = document.querySelectorAll('.icons-wrapper').forEach( (item) => {
      new LazyLoadingImg(item);
    });


  }

}
