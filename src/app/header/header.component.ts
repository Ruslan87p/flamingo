import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AnchorService } from '../anchor.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor( private anchorSvc: AnchorService) { }

  ngOnInit() {
  }


  isOnClick(name) {
    this.anchorSvc.isAnchorName.next(name);
  }
}
