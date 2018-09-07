import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class JarwisService {

  private baseUrl = 'http://localhost:8000/api';

  constructor(private http:HttpClient) { }

  login(data){
    return this.http.post(this.baseUrl+'/login',data);
  }

  signup(data){
    return this.http.post(this.baseUrl+'/signup',data);
  }


  sendPasswordResetLink(data){
    return this.http.post(this.baseUrl+'/sendPasswordResetLink',data);
  }

  changePassword(data){
    return this.http.post(this.baseUrl+'/resetPassword',data);
  }

  profile(user,token){
    return this.http.get(this.baseUrl + '/profile/' + user.id +'?token='+ token);
  }
}
