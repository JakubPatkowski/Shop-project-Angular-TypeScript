import { Component } from '@angular/core';

import { DataBase} from "../../../../firebase-config";


import { UserSession } from "../../../../firebase-config";

import { AuthenticationServiceComponent } from "../authentication-service/authentication-service.component";

//import { AppComponent } from "../../app.component";

import { Router } from "@angular/router";

import {
  FormGroup,
  Validators,
  FormBuilder,
  ReactiveFormsModule,
  FormControl,
  ValidatorFn,
  AbstractControl, ValidationErrors
} from '@angular/forms';
import {NgIf} from "@angular/common";
import {AppComponent} from "../../app.component";

@Component({
  standalone: true,
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  imports: [ReactiveFormsModule, NgIf]
})



export class LoginComponent {

  emailError: string = '';
  passwordError: string = '';
  constructor(private formBuilder: FormBuilder, private appComponent: AppComponent, private router: Router) {}
  loginAuthentication = new AuthenticationServiceComponent()
  emailValidation(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const emailRe: RegExp = /^[a-z]{1}[a-z0-9_.\-]*@[a-z0-9]+.[a-z0-9]+$/;
      const forbidden = emailRe.test(control.value);

      if (!forbidden) {
        this.emailError = "Niepoprawny email"
        return { forbiddenName: { value: control.value } };

      } else {
        this.emailError='';
        return null;
      }
    };
  }

  loginForm = this.formBuilder.group({
    email: ['',[Validators.required, this.emailValidation()]],
    password: ['',[Validators.required]]
  })

  async validate(){
    if(this.loginForm.valid){
      if(await UserSession.loginUser(
        this.loginForm.get('email')?.value ?? '',
        this.loginForm.get('password')?.value ?? '')){
        await this.router.navigate(['user/home']);
      }
    }
  }

  check(){
    if(this.appComponent.getUser() != null){
      console.log("Zalogowany");
      return true;
    } else {
      console.log("Nie zalogowany");
      return false;
    }
  }



  protected readonly UserSession = UserSession;
  protected readonly AuthenticationServiceComponent = AuthenticationServiceComponent;
}
