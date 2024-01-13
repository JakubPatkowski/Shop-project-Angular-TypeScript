import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//import subpages
import { HomeComponent} from "./main/home/home.component";
import { ContactComponent} from "./main/contact/contact.component";
import { LoginComponent} from "./user/login/login.component";
import { RegisterComponent} from "./user/register/register.component";

const routes: Routes = [
  {path: ``, redirectTo: `/home`, pathMatch: `full`},
  {path: `home`, component: HomeComponent},
  {path: `contact`, component: ContactComponent},
  {path: `register`, component: RegisterComponent},
  {path: `login`, component: LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
