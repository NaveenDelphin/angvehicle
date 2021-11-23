import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  sendMessage  = new Subject();

  sendMessage1 = new Subject();

  constructor() { }

  communicateMessage(msg : boolean)
  {
    this.sendMessage.next(msg);
  }

  communicateMessage1(msg : string[])
  {
    this.sendMessage1.next(msg);
  }
}
