import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { ProfileComponent } from './components/profile/profile.component';
import { RequestResetComponent } from './components/password/request-reset/request-reset.component';
import { ResponseResetComponent } from './components/password/response-reset/response-reset.component';
import { AppRoutingModule } from './/app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule}  from '@angular/common/http';
import { SnotifyModule, SnotifyService, ToastDefaults } from 'ng-snotify';
import { DataentryComponent } from './components/dataentry/dataentry.component';
import { PublicationLoginComponent } from './components/publication-login/publication-login.component';
import { BsDatepickerModule} from 'ngx-bootstrap/datepicker';
import { FooterComponent } from './components/footer/footer.component';
import { ViewPropertiesComponent } from './components/view-properties/view-properties.component';
import { EntryformComponent } from './components/entryform/entryform.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    SignupComponent,
    ProfileComponent,
    RequestResetComponent,
    ResponseResetComponent,
    DataentryComponent,
    PublicationLoginComponent,
    FooterComponent,
    ViewPropertiesComponent,
    EntryformComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    SnotifyModule,
    ReactiveFormsModule,
    BsDatepickerModule.forRoot()
    
  ],
  providers: [
    { provide: 'SnotifyToastConfig', useValue: ToastDefaults},
    SnotifyService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { 

  
}
