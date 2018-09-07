import { Component, OnInit } from '@angular/core';
import { JarwisService } from '../../services/jarwis.service';
import { TokenService } from '../../services/token.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  
  public form = {
    email:null,
    name: null,
    password: null,
    password_confirmation: null,
  };

  public error = {
    email: null,
    password: null
  };

  constructor(
    private Jarwis: JarwisService,
    private Token: TokenService,
    private router: Router
  ) { }

  onSubmit(){
    return this.Jarwis.signup(this.form).subscribe(
      data => this.handleResponse(data),
      error => this.handleError(error)
    );
  }

  handleResponse(data){
    this.Token.handleToken(data.access_token);
    this.router.navigateByUrl('/profile');
  }

  handleError(error){
    console.log(error);
    this.error = error.error;
  }
  
  ngOnInit() {
  }

}
