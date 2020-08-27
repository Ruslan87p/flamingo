import { Injectable, Output, EventEmitter } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AnchorService {

  isAnchorName: BehaviorSubject<any> = new BehaviorSubject('');
  name;

  constructor() {}
}
