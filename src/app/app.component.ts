import { Component } from '@angular/core';
import { onAuthStateChanged} from "firebase/auth";

import { AuthenticationServiceComponent } from "./user/authentication-service/authentication-service.component";


import { auth } from "../../firebase-config";
import { user } from "../../firebase-config";
import {Subject} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',


})



export class AppComponent {
  public loginStatusChange: Subject<boolean | null> = new Subject<boolean | null>();
  user1 = user;
  title = 'sklep-projekt-JP';
  Auth = new AuthenticationServiceComponent();
  checkLogin(){
    onAuthStateChanged(auth, (user) => {
      if(user){
        this.user1 = user;
        this.Auth.setLoggedIn(true)
        console.log("zalogowano")

      }else {
        console.log("wylogowano")
        this.Auth.setLoggedIn(false)
        this.user1 = null;
      }
      this.loginStatusChange.next(this.Auth.getLoggedIn());
      //AuthenticationService.setCurrentUser(user);
    })
  }
  constructor() {
    this.checkLogin();

  }

  getUser(){
    return this.user1;
  }

  getLoginStatusChange(){
    return this.loginStatusChange;
  }


}
