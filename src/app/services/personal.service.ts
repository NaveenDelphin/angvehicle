import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Personal } from '../models/personal';


@Injectable({
  providedIn : 'root'
})
export class PersonalService {

//  private baseUrl ="http://localhost:8805/api/auth/user";

  private baseUrl ="https://sfprojectzipvalidautofill.herokuapp.com/api/auth/user";
  constructor(private http: HttpClient) { }
 
  createCustomer(customer : Personal):Observable<object>{
    console.log( this.http.post(`${this.baseUrl}`,customer));
    return this.http.post(`${this.baseUrl}`,customer);
  
  }
}
