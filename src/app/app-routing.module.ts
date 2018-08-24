import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { ProfileComponent } from './components/profile/profile.component';
import { AfterLoginService } from './services/after-login.service';
import { BeforeLoginService } from './services/before-login.service';
import { RequestResetComponent } from './components/password/request-reset/request-reset.component';
import { ResponseResetComponent } from './components/password/response-reset/response-reset.component';


const appRoutes : Routes = [
{
  path: 'login',
  component: LoginComponent,
  canActivate: [BeforeLoginService]
},

{
  path: 'signup',
  component: SignupComponent,
  canActivate: [BeforeLoginService]
},

{
  path: 'profile',
  component: ProfileComponent,
  canActivate: [AfterLoginService]
},

{
  path: 'request-password-reset',
  component: RequestResetComponent,
  canActivate: [BeforeLoginService]
},

{
  path: 'request-password-response',
  component: ResponseResetComponent,
  canActivate: [BeforeLoginService]
},


];


@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(appRoutes)],
})



export class AppRoutingModule { }
