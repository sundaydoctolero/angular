import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class SuburbService {

  private baseUrl = 'http://localhost:8080/api/';

  constructor(private http:HttpClient) { }

  getPostCode(state,suburb){
    return this.http.get(this.baseUrl+'get_suburb?suburb='+ suburb +'&state='+state);
  }
}
