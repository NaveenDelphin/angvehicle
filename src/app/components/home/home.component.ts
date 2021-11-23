import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../../services/data.service';
import { HomeService } from '../../services/home.service';
//import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private login: boolean = false;
  myReactiveForm!: FormGroup;
  submitMessage!:boolean;
  message ="Hai hello from home";
  myArray:  string[] | undefined;  

  constructor(private fb:FormBuilder,private router:Router,private homeservice : HomeService,private data : DataService) {
    this.submitMessage=true;
   }

 //  home1 : string[] | undefined;
   ngOnInit(): void {
   // this.data.communicateMessage(this.login);
   this.login = false;
   this.data.communicateMessage(this.login);
    this.myReactiveForm = this.fb.group({
      'zipCode':[null,[Validators.required,Validators.pattern('^[0-9]{5}')]],
      'product':['Auto']
    });

  }
  get zipCode(){
    return this.myReactiveForm.controls.zipCode;
  }
 
  sendZipcode(zipcode : string){
    this.homeservice.fetchZipcode(zipcode).subscribe(data =>{
   //   this.home1 = data;
 //     console.log(this.home1);
      this.data.communicateMessage1(data);
    },
    error => console.log(error));
  }

  submitHandler(zipCode1 : string){
    if(this.zipCode.valid){
      this.router.navigate(['/personalDetails']);
      this.login = true;
      this.data.communicateMessage(this.login);
    }
    else{
      this.submitMessage=false;
    }
    this.sendZipcode(zipCode1);
}
}



