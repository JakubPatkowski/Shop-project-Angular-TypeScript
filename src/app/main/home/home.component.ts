import { Component } from '@angular/core';

import { DataBase} from "../../../../firebase-config";
import firebase from "firebase/compat";
import database = firebase.database;

import {NgModel} from "@angular/forms";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  database = new DataBase();

  write(){
    this.database.writeUserData("Adolf","Adolf","Hitler","a.h@.3r.du","ah", "666666666");
    console.log("Dodawanie");
  }
  constructor() {
    this.write();
  }
}
