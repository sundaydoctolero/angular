import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';
import { TokenService } from '../../services/token.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public loggedIn : boolean;

  constructor(
      private Auth : AuthService,
      private router : Router,
      private Token : TokenService,
    ) { }

  ngOnInit() {
    this.Auth.authStatus.subscribe(value=>this.loggedIn = value);
  }

  logout(event: MouseEvent){
    event.preventDefault();
    this.Auth.changeAuthStatus(false);
    this.Token.remove();
    this.removeUser();
    this.router.navigateByUrl('/login');
  }

  removeUser(){
    localStorage.removeItem('user');
  }

 



}
