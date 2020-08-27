import { Component, AfterViewInit } from '@angular/core';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements AfterViewInit {

  isHidden: boolean = false;
  description: any;

  services: any[] = [
    {
      description: "High-quality relationships to assure competitive and compelling finance terms to minimize risk and optimize return",
      img: "https://captiva-test.plotkinruslan.com/assets/imgs/1.png",
      title: "DEBT"
    },
    {
      description: "Ability to secure transactions at competitive pricing",
      img: "https://captiva-test.plotkinruslan.com/assets/imgs/2.png",
      title: "ACQUISITION"
    },
    {
      description: "Ongoing management, keeping constant communication with property managers via weekly update calls, frequent on-site visits, and close professional relationships",
      img: "https://captiva-test.plotkinruslan.com/assets/imgs/3.png",
      title: "ASSET MANAGEMENT"
    },
    {
      description: "We utilize institutional best practice reporting methods to investors a convenience, secure, online access for up to date tracking of portfolio performance and distributions",
      img: "https://captiva-test.plotkinruslan.com/assets/imgs/4.png",
      title: "INVESTOR RELATIONS"
    },
  ]
  constructor() { }


  ngAfterViewInit() {
    const cards = document.querySelectorAll('.card');
    cards.forEach( item => {
      item.addEventListener( 'click', function() {
        item.classList.toggle('is-flipped');
      });
    });

  }


}
