import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-specialization',
  templateUrl: './specialization.component.html',
  styleUrls: ['./specialization.component.css']
})
export class SpecializationComponent implements OnInit {

  constructor() { }

  listspec: any[] = [
    {
      img: "https://captiva-test.plotkinruslan.com/assets/imgs/sp1.png",
      description: "Finding real estate properties in prime locations for our clients"
    },
    {
      img: "https://captiva-test.plotkinruslan.com/assets/imgs/sp2.png",
      description: "Assuring the customer return quickly and efficiently"
    },
    {
      img: "https://captiva-test.plotkinruslan.com/assets/imgs/sp3.png",
      description: "Regular rent collection from tenants"
    },
  ];

  ngOnInit() {
  }

}
