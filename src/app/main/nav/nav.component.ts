import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { AppComponent } from "../../app.component";
import {UserSession} from "../../../../firebase-config";
import {AuthenticationServiceComponent} from "../../user/authentication-service/authentication-service.component";
import {Router} from "@angular/router";





@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css',
  providers: [AuthenticationServiceComponent],
})
export class NavComponent {
  constructor(
    protected authService: AuthenticationServiceComponent,
    private cdr: ChangeDetectorRef,
    private appComponent: AppComponent,
    private router: Router) {}


  ngOnInit(){ // Funkcja ta pozwala sprawdzić status zalogowania użykownika w czsie rzeczywistym
    this.appComponent.loginStatusChange.subscribe(async(status: boolean | null)=> {
      this.authService.setLoggedIn(status || false);
      this.cdr.detectChanges();
      }
    )
  }

  async logout(){
    if(await UserSession.logout()){
      await this.router.navigate(['login']);
    }
  }

}
