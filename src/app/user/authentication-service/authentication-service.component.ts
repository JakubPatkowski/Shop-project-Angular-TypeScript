import {Component, Injectable} from '@angular/core';
import { UserSession} from "../../../../firebase-config";

@Injectable({
  providedIn: 'root'
})

export class AuthenticationServiceComponent {
  loggedIn : boolean | null;
  public setLoggedIn(value: boolean){
    this.loggedIn = value;
  }
  public getLoggedIn(){
    return this.loggedIn;
  }

  constructor() {
    this.loggedIn = false;
  }
}


