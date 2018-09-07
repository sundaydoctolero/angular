import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuServiceService {

  private baseUrl = 'http://localhost:8080/api/';

  constructor(private http:HttpClient) { }

  getDetails(data){
    return this.http.post(this.baseUrl+'find-property',data);
  }

  saveProperty(data){
    return this.http.post(this.baseUrl+'storeProperty',data);
  }

}
