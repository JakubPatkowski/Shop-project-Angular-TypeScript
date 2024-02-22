import {Component, Injectable} from '@angular/core';
import { AuthenticationServiceComponent} from "../user/authentication-service/authentication-service.component";
import {ActivatedRouteSnapshot, Router, RouterStateSnapshot, UrlTree} from "@angular/router";

@Injectable({
  providedIn: 'root',
})

export class AuthGuard {
  constructor(private authService: AuthenticationServiceComponent, private router: Router) {}
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree{
    return this.checkLogin(route, state.url)
  }

  private checkLogin(route: ActivatedRouteSnapshot ,url: string): boolean | UrlTree{
    if(this.authService.getLoggedIn() || this.authService.getLoggedIn() == null){
      return true;
    }
    else {
      return this.router.createUrlTree(['/login'], { queryParams: { returnUrl: url}});
    }
  }
}


