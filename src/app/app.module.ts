import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule, NgModel, ReactiveFormsModule} from "@angular/forms";



import { HomeComponent } from './main/home/home.component';
import { NavComponent } from './main/nav/nav.component';
import { ContactComponent } from './main/contact/contact.component';
import { UserComponent } from './user/user.component';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';
import {UserSession} from "../../firebase-config";



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    ContactComponent,
    UserComponent,



  ],
  imports: [
    BrowserModule,
    //subpages routing
    AppRoutingModule,
    FormsModule,
    RegisterComponent,
    LoginComponent,
    ReactiveFormsModule,

    //firebase

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
