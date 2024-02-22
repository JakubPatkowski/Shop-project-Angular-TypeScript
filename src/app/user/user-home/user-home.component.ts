import { Component } from '@angular/core';
import { UserSession} from "../../../../firebase-config";

import { OnInit} from "@angular/core";

import { User} from "../user.class";

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  standalone: true,
  styleUrl: './user-home.component.css'
})
export class UserHomeComponent implements OnInit{
  name = "";
  surname= "";
  email= "";
  telNumber= "";

  constructor(private userSession: UserSession) {}

  async ngOnInit(){
    let user: User | undefined;
    user = await this.userSession.readUserData() as User;
    this.name = user.getName();
    this.surname = user.getSurname();
    this.email = user.getEmail();
    this.telNumber = user.getTelNumber();
  }

  protected readonly UserSession = UserSession;
}



