import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Vehicle } from 'src/app/models/vehicle';
import { VehicleService } from 'src/app/services/vehicle.service';
import { ModalAddVehicleComponent } from './modal-add-vehicle/modal-add-vehicle.component';

@Component({
  selector: 'app-vehicle-details',
  templateUrl: './vehicle-details.component.html',
  styleUrls: ['./vehicle-details.component.css']
})
export class VehicleDetailsComponent implements OnInit {

  
 /* constructor(public dialog:MatDialog) { }

  open(){
    
    const dialogRef= this.dialog.open(ModalAddVehicleComponent);

    dialogRef.afterClosed().subscribe(res=>{
      alert('result...'+res);
    });
  }

  ngOnInit(): void {
    
  }

  onSubmit(){}*/
  vehicle : Vehicle = new Vehicle();
  myReactiveForm!: FormGroup;
  submitMessage!:boolean;
  vehicles=[];

  //new variables for cascaded dropdown
  isAddVehicleBtnTouched:boolean=false;
  years: any;
  makes: any;
  models: any;
  nameYear: any;
  /*selectedYear: any={
    id:0, name:''
  };*/
  
  
  
  constructor(private fb:FormBuilder,private router:Router,
              private vehicleService:VehicleService  /*,@Inject(MAT_DIALOG_DATA) public data:{msg:string}, public dialogRef: MatDialogRef<ModalAddVehicleComponent>*/) {
    this.submitMessage=true;
   }

  ngOnInit(): void {
    this.myReactiveForm = this.fb.group({
      /*'year':[null,[Validators.required]],
      'make':[null,[Validators.required]],
      'model':[null,[Validators.required]],
      'engineNo':[null,[Validators.required]],
      'vehicleFinance':[null,[Validators.required]],
      'vehiclePrimaryUse':[null,[Validators.required]]*/
      'vehicles':this.fb.array([this.initVehicles()])
    });
    this.showAll();
    /*this.onSelectYear(this.selectedYear.id);*/
  }


  showAll() {     //new method
    /*this.vehicleService.getAll().subscribe(
      (data:any)=>{
        this.years=data,
        console.log(this.years)
      }
    )  */
    this.years=[{name:'2000'},{name:'2001'},{name:'2002'},{name:'2003'},{name:'2004'},{name:'2005'},{name:'2006'},{name:'2007'},{name:'2008'},{name:'2009'},{name:'2010'},
                {name:'2011'},{name:'2012'},{name:'2013'},{name:'2014'},{name:'2015'},{name:'2016'},{name:'2017'},{name:'2018'},{name:'2019'},{name:'2020'},{name:'2021'}];
  }

  onSelectYear(year_name:any){      //new method
    this.vehicleService.getMake(year_name).subscribe(
      (data:any)=>{
        this.makes=data,
        console.log(this.makes)
    })
      
    /*this.vehicleService.getMake(year_name).subscribe((response:any)=>{
      this.makes=response['makes'].filter(
        (response:any)=>response.year_id== year_id
      ),
      console.log(this.makes)
      
    })*/
    this.nameYear=year_name;
  }
    
  

  onSelectMake(make_name:any){
    /*this.vehicleService.getAll().subscribe((response:any)=>{
      this.models=response['models'].filter(
        (response:any)=>(response.make_id==make_id && response.year_id==this.idYear)
      ),
      console.log(this.models)
    })*/
    this.vehicleService.getModel(this.nameYear,make_name).subscribe((response:any)=>{
      this.models=response,
      console.log(this.models)
    })
  }

  initVehicles(){
    return this.fb.group({
      'year':[null,[Validators.required]],
      'make':[null,[Validators.required]],
      'model':[null,[Validators.required]],
      'vinNo':[null,[Validators.required,Validators.pattern('^[A-HJ-NPR-Za-hj-npr-z0-9]{17}')]],
      'vehicleFinance':[null,[Validators.required]]
    })
  }

  get vehiclesArr():FormArray {
    return this.myReactiveForm.get('vehicles') as FormArray;
  }

 /* get year(){
    return this.myReactiveForm.controls.year;
  }

  get make(){
    return this.myReactiveForm.controls.make;
  }

  get model(){
    return this.myReactiveForm.controls.model;
  }

  get engineNo(){
    return this.myReactiveForm.controls.engineNo;
  }

  get vehicleFinance(){
    return this.myReactiveForm.controls.vehicleFinance;
  }

  get vehiclePrimaryUse(){
    return this.myReactiveForm.controls.vehiclePrimaryUse;
  }*/

  addVehicle(){
    /*if(this.year.valid && this.make.valid && this.model.valid && this.engineNo.valid 
      && this.vehicleFinance.valid && this.vehiclePrimaryUse.valid){
        //this.dialogRef.close('Add success');
        
       }
    else{
      this.submitMessage=false;
    }*/
    this.isAddVehicleBtnTouched=true;
    if (this.vehiclesArr.valid) {
      this.isAddVehicleBtnTouched=false;
      this.vehiclesArr.push(this.initVehicles());
      
    }
   
  }

  deleteVehicle(index:number){
    //this.dialogRef.close('cancel');
    this.vehiclesArr.removeAt(index);
  }

  onSubmit(){
    this.isAddVehicleBtnTouched=true;
    if (this.vehiclesArr.valid) {
      this.router.navigate(['/driverDetails']);
      this.isAddVehicleBtnTouched=false;
    }
  }

  

}