import { Component } from '@angular/core';

import { DataBase} from "../../../../firebase-config";

import { registerUser} from "../../../../firebase-config";



import {
  FormGroup,
  Validators,
  FormBuilder,
  ReactiveFormsModule,
  FormControl,
  ValidatorFn,
  AbstractControl, ValidationErrors
} from '@angular/forms';


import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {NgIf} from "@angular/common";

@Component({
  standalone: true,
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  imports: [ReactiveFormsModule, NgIf],
})

  export class RegisterComponent {

  db = new DataBase();
  constructor(private formBuilder: FormBuilder) {} //private authService: AuthService

  nameError:string = ' ';
  surnameError:string = ' ';
  emailError:string = '';
  telError:string = '';
  password1Error:string = '';
  password2Error:string = '';

  nameValidation(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const nameRe: RegExp = /^[A-Za-ząęłńśćźżó_-]{2,25}$/;
      const forbidden = nameRe.test(control.value);

      if (!forbidden) {
        this.nameError = "Imie musi mieć więcej niż 2 litery"
        return { forbiddenName: { value: control.value } };

      } else {
        this.nameError='';
        return null;
      }
    };
  }

  surnameValidation(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const surnameRe: RegExp = /^[A-Za-ząćęłńóśźżĄĘŁŃÓŚŹŻ\s]{2,50}$/;
      const forbidden = surnameRe.test(control.value);

      if (!forbidden) {
        this.surnameError = "Nazwisko musi mieć więcej niż 2 litery"
        return { forbiddenName: { value: control.value } };

      } else {
        this.surnameError='';
        return null;
      }
    };
  }

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

  telNumberValidation(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const telRe: RegExp = /^([1-9]{1}[0-9]{8})$/;
      const forbidden = telRe.test(control.value);

      if (!forbidden) {
        this.telError = "Niepoprawny nr telefonu"
        return { forbiddenName: { value: control.value } };

      } else {
        this.telError='';
        return null;
      }
    };
  }

  password1Validation(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const password1Re: RegExp = /^(?=.*\d)(?=.*[A-Z])(?=.*[!@#$%^&*])[0-9A-Za-z!@#$%^&*]{12,}$/;
      const forbidden = password1Re.test(control.value);

      if (!forbidden) {
        this.password1Error = "Niepoprawny hasło"
        return { forbiddenName: { value: control.value } };

      } else {
        this.password1Error='';
        return null;
      }
    };
  }

  password2Validation(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {

      console.log(control.parent?.get('password1')?.value);
      if (control.parent?.get('password1')?.value != control.value) {
        this.password2Error = "hasła różnią się"
        return { forbiddenName: { value: control.value } };

      } else {
        this.password2Error='';
        return null;
      }
    };
  }

  registerForm = this.formBuilder.group({
    name: ['', [Validators.required, this.nameValidation()]],
    surname: ['', [Validators.required, this.surnameValidation()]],
    email: ['', [Validators.required, this.emailValidation()]],
    telNumber: ['', [Validators.required, this.telNumberValidation()]],
    password1: ['', [Validators.required, this.password1Validation()]],
    password2: ['', [Validators.required , this.password2Validation()]],


  });
validate(){
  if(this.registerForm.valid){
    registerUser(
      this.registerForm.get('name')?.value ?? '',
      this.registerForm.get('surname')?.value ?? '',
      this.registerForm.get('email')?.value ?? '',
      this.registerForm.get('telNumber')?.value ?? '',
      this.registerForm.get('password1')?.value ?? ''
    );
  }
}

  printName() {

  }

  // addUser() {
  //   console.log("dodawanie");
  //
  //   if (this.registerForm.valid) {
  //     const { name, surname, email, passwor d1, telNumber } = this.registerForm.value;
  //     console.log(name)
  //     this.dataBase.writeUserData(name, surname, email, password1, telNumber);
  //     this.registerForm.reset();
  //   }
  // }
}


