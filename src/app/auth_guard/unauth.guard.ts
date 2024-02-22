import {Component, Injectable} from '@angular/core';
import { AuthenticationServiceComponent} from "../user/authentication-service/authentication-service.component";
import {ActivatedRouteSnapshot, Router, RouterStateSnapshot, UrlTree} from "@angular/router";

@Injectable({
  providedIn: 'root',
})

export class UnauthGuard {
  constructor(private authService: AuthenticationServiceComponent, private router: Router) {}
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree{
    return this.checkLogin(state.url)
  }

  private checkLogin(url: string): boolean | UrlTree{
    if(!this.authService.getLoggedIn()){
      return true;
    }
    else {
      return this.router.createUrlTree(['/user'], { queryParams: { returnUrl: url}});
    }
  }
}


