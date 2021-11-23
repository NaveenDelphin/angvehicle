import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Observable,of } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  private msg : boolean= false;
  msg1$ : Observable<boolean> = of(false);
  constructor(private data : DataService) {
  }
  ngOnInit() {
    this.data.sendMessage.subscribe(message=>{
      if(typeof message == "boolean")
      {
        this.msg = message;
        this.msg1$ =of(this.msg);
      }
    })
  }

}
