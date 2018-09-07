import { Component, OnInit } from '@angular/core';
import { JarwisService } from '../../services/jarwis.service';
import { SnotifyService } from 'ng-snotify';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  public profile = {
    'name' : null,
    'email' :null,
    'created_at' : null
  }

 
  public user = JSON.parse(localStorage.getItem('user'));

  constructor(
    private Jarwis: JarwisService,
    private Notify: SnotifyService
  ) { }

  handleResponse(data){
    this.profile = data.data;
    this.Notify.success(data.data.name);
  }

  handleError(error){
    this.Notify.error("Profile not found",{timeout:0})
  }

  

  ngOnInit() {
    this.Jarwis.profile(this.user,localStorage.getItem('token')).subscribe(
      data => this.handleResponse(data),
      error =>  this.handleError(error)
    );
  }


}
