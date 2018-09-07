import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PublicationService {
  private baseUrl = 'http://localhost:8000/api';

  private token = localStorage.getItem('token');

  constructor(private http:HttpClient ) { }

  getPublications(){
    return this.http.get(this.baseUrl+'/publications?token='+this.token);
  }

}
