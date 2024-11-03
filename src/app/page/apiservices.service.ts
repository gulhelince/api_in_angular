import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiservicesService {

  constructor(private http:HttpClient) { }

  apiurl="https://api.npoint.io/49f69b6608800aec2b2e";

  homeapi():Observable<any>{
    return this.http.get(`${this.apiurl}`);
  }

}
