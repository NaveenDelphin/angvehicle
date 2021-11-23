import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PersonalService } from 'src/app/services/personal.service';
import { Personal } from 'src/app/models/personal';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-personal-details',
  templateUrl: './personal-details.component.html',
  styleUrls: ['./personal-details.component.css']
})
export class PersonalDetailsComponent  {

  myReactiveForm!:FormGroup;
  submitMessage!:boolean;
  isDisabled!:boolean;

  customer : Personal = new Personal();
  home1 : string ='';
  home2 : string[] | undefined ;
  zipcode : string | undefined;
  state1 : string | undefined;
  city1 : string | undefined;


  constructor(private fb:FormBuilder,private router:Router,private personal : PersonalService,private data : DataService) {
    this.submitMessage=true;
    this.isDisabled=true;
   }

  ngOnInit(): void {

      this.data.sendMessage1.subscribe(home=>{
        if(typeof home == "string" )
        {
          this.home2 = home.split(",");
          this.zipcode = this.home2[0].slice(2,(this.home2[0].length)-1);
          console.log(this.zipcode);
          this.state1 = this.home2[1].slice(1,(this.home2[1].length)-1);
          console.log(this.state1);
          this.city1 = this.home2[2].slice(1,(this.home2[2].length)-2);
          console.log(this.city1);          
        }
      })
     this.myReactiveForm = this.fb.group({
       'firstName':[null,[Validators.required]],
       'middleName':[null],
       'lastName':[null,[Validators.required]],
       'emailId':[null,[Validators.required,Validators.email]],
       'phoneNo':[null,[Validators.required,Validators.pattern('^[0-9]{10}')]],
       'dob':[null,[Validators.required]],
       'streetAdd':[null,[Validators.required]],
       'city':[{value:null,disabled:this.isDisabled}],
       'state':[{value:null,disabled:this.isDisabled}],
       'zipCode':[{value:null,disabled:this.isDisabled}]
     });
 }

 saveCustomer(){
   this.personal.createCustomer(this.customer).subscribe(data =>{
    // console.log(data);
   },
   error => console.log(error));
 }

 goToNextPage(){
   this.router.navigate(['/vehicleDetails']);
 }

 get firstName(){
  return this.myReactiveForm.controls.firstName;
}

get lastName(){
  return this.myReactiveForm.controls.lastName;
}

get streetAdd(){
  return this.myReactiveForm.controls.streetAdd;
}

get city(){
  return this.myReactiveForm.controls.city;
}

get state(){
  return this.myReactiveForm.controls.state;
}

get phoneNo(){
  return this.myReactiveForm.controls.phoneNo;
}

get dob(){
  return this.myReactiveForm.controls.dob;
}

get zipCode(){
  return this.myReactiveForm.controls.zipCode;
}

get emailId(){
  return this.myReactiveForm.controls.emailId;
}

onSubmit(){
  if(this.firstName.valid && this.lastName.valid && this.phoneNo.valid /*&& this.state.valid && this.city.valid && this.zipCode.valid */
    && this.streetAdd.valid && this.dob.valid && this.emailId.valid){
       console.log(this.customer);
    this.router.navigate(['/vehicleDetails']);
  }
  else{
    this.submitMessage=false;
  }
  this.saveCustomer();
}

  title = 'PersonalDet';
}
