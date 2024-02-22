import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from "./auth_guard/auth.guard";
import {UnauthGuard} from "./auth_guard/unauth.guard";

//import subpages
import { HomeComponent} from "./main/home/home.component";
import { ContactComponent} from "./main/contact/contact.component";
import { LoginComponent} from "./user/login/login.component";
import { RegisterComponent} from "./user/register/register.component";
import { UserHomeComponent } from "./user/user-home/user-home.component";

const routes: Routes = [
  {path: ``, redirectTo: `/home`, pathMatch: `full`},
  {path: `home`, component: HomeComponent},
  {path: `contact`, component: ContactComponent},
  {path: `register`, component: RegisterComponent, canActivate: [UnauthGuard]},
  {path: `login`, component: LoginComponent, canActivate: [UnauthGuard]},
  {path: 'user/home', component: UserHomeComponent, canActivate: [UnauthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}

