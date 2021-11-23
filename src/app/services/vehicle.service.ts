//new service created for cascaded dropdown
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Vehicle } from '../models/vehicle';

const baseUrl='https://sfprojectmakeofvehicle.herokuapp.com/api/vehicledetails/';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {
  //https://sfprojectmakeofvehicle.herokuapp.com/api/vehicledetails/vehicleMake/2021
  //https://sfprojectmakeofvehicle.herokuapp.com/api/vehicledetails/vehicleModel/honda/2021

  constructor(private http:HttpClient) { }

  private baseurl1 = 'https://sfprojectmakeofvehicle.herokuapp.com/api/vehicledetails/vehicle';

  getMake(year:any):any{
    return this.http.get<any>(baseUrl.concat('vehicleMake/'+year));
  }

  getModel(year:any,make:any){
    return this.http.get<any>(baseUrl.concat('vehicleModel/'+make+'/'+year));
  }

  createVehicle(vehicle : Vehicle):Observable<object>{
    console.log( this.http.post(`${this.baseurl1}`,vehicle));
    return this.http.post(`${this.baseurl1}`,vehicle);
  
  }
}
