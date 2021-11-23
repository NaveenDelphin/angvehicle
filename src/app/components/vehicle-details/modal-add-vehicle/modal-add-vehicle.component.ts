import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-modal-add-vehicle',
  templateUrl: './modal-add-vehicle.component.html',
  styleUrls: ['./modal-add-vehicle.component.css']
})
export class ModalAddVehicleComponent implements OnInit {
  
  myReactiveForm!: FormGroup;
  submitMessage!:boolean;
  
  constructor(private fb:FormBuilder,@Inject(MAT_DIALOG_DATA) public data:{msg:string}, public dialogRef: MatDialogRef<ModalAddVehicleComponent>) {
    this.submitMessage=true;
   }

  ngOnInit(): void {
    this.myReactiveForm = this.fb.group({
      'year':[null,[Validators.required]],
      'make':[null,[Validators.required]],
      'model':[null,[Validators.required]],
      'engineNo':[null,[Validators.required]],
      'vehicleFinance':[null,[Validators.required]],
      'vehiclePrimaryUse':[null,[Validators.required]]
    });
  }

  get year(){
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
  }

  addVehicle(){
    if(this.year.valid && this.make.valid && this.model.valid && this.engineNo.valid 
      && this.vehicleFinance.valid && this.vehiclePrimaryUse.valid){
        this.dialogRef.close('Add success');
       }
    else{
      this.submitMessage=false;
    }
    
  }

  onCancel(){
    this.dialogRef.close('cancel');
  }

}