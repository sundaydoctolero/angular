import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DownloadService {

  private baseUrl = 'http://localhost:8000/api';

  private token = localStorage.getItem('token');

  constructor(private http: HttpClient) { }

  getDownload(data){
    return this.http.post(this.baseUrl+'/download?token='+this.token,data);
  }

}
