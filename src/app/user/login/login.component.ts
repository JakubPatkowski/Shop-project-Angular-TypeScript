import { Component } from '@angular/core';

import { DataBase} from "../../../../firebase-config";

import { loginUser } from "../../../../firebase-config";


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
  constructor(private formBuilder: FormBuilder) {}

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

  validate(){
    if(this.loginForm.valid){
      loginUser(
        this.loginForm.get('email')?.value?? '',
        this.loginForm.get('password')?.value?? ''
      );
    }
  }
}
