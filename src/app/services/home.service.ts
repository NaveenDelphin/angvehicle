import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
  })
export class HomeService
{
    private baseUrl ="https://sfprojectzipvalidautofill.herokuapp.com/api/auth/pinverify";

     requestOptions: Object = {
      responseType: 'text'
    }

    constructor(private http: HttpClient) { }

    fetchZipcode(zipcode :string) : Observable<string[]>
    {
        return this.http.get<string[]>(`${this.baseUrl}/${zipcode}`,this.requestOptions);
        
    }
}