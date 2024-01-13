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
    console.log("Dodawanie");
  }
  constructor() {

  }
}
