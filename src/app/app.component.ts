import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { AnchorService } from './anchor.service';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {

  @ViewChild('home', {static: false}) home: ElementRef;
  @ViewChild('services', {static: false}) services: ElementRef;
  @ViewChild('mission', {static: false}) mission: ElementRef;
  @ViewChild('maps', {static: false}) maps: ElementRef;
  @ViewChild('contact', {static: false}) contact: ElementRef;
  childs: any[] = [];

  constructor(private anchorSvc: AnchorService) {}

  ngAfterViewInit() {
    this.childs = [this.home, this.services, this.mission, this.maps, this.contact];
    this.anchorSvc.isAnchorName.subscribe( item => {
      this.childs.map( elem => {
        if (elem.nativeElement.id === item) {
          elem.nativeElement.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
        }
      });
    });
  }
}
