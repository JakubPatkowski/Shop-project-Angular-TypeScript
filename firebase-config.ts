import {initializeApp} from "firebase/app";
import {getDatabase, ref, set, onValue} from "firebase/database";
import { AuthenticationServiceComponent} from "./src/app/user/authentication-service/authentication-service.component";
import { Injectable } from '@angular/core';


// https://firebase.google.com/docs/web/setup#available-libraries
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  browserSessionPersistence,
  setPersistence,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";

import { User} from "./src/app/user/user.class";
//import { AuthenticationService} from "./src/app/user/authentication-service/authentication-service.component";
//import { User } from "./src/app/user/user.component";






// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCFY5R_10T6tkv4OCD5Lid7nP_oETt_adg",
  authDomain: "sklep-d6b22.firebaseapp.com",
  databaseURL: "https://sklep-d6b22-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "sklep-d6b22",
  storageBucket: "sklep-d6b22.appspot.com",
  messagingSenderId: "559467956939",
  appId: "1:559467956939:web:02b06a0ce46c1dd5a1694e"
};



// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const db = getDatabase();
var checkLogin = new AuthenticationServiceComponent();
export const user = auth.currentUser


export const registerUser = async (name: string, surname: string, email: string, telNumber: string, password: string) => {
  const user = await createUserWithEmailAndPassword(auth, email, password);
  writeUserData(user.user.uid, name, surname, email, telNumber);
}

function writeUserData(uid: string, name: string, surname: string, email: string, telNumber: string) {
  const reference = ref(db, 'users/' + uid);
  set(reference, {
    name: name,
    surname: surname,
    email: email,
    telNumber : telNumber
  });
}


@Injectable({
  providedIn: 'root'
})
export class UserSession{

  async readUserData(){
    const reference = ref(db, 'users/' + auth.currentUser?.uid);
    return new Promise((resolve) => {
      onValue(reference, (snapshot) => {
        const data = snapshot.val();
        const user = new User(data.name, data.surname, data.email, data.telNumber);
        resolve(user);
      });
    })
  }

  static loginUser = async (email: string, password: string) => {
    try {
      await setPersistence(auth, browserSessionPersistence);
      const user = await signInWithEmailAndPassword(auth, email, password);
      //console.log(user.user.uid);
      return true;
    } catch (error: any) {
      console.log(error);
      return false;
    }
  }

  static isLoggedIn(){
    return checkLogin.getLoggedIn();
  }




  static logout(): Promise<boolean> {
    return signOut(auth)
      .then(() => {
        // Powodzenie - zwróć true
        return true;
      })
      .catch((error) => {
        // Niepowodzenie - zwróć false
        console.error(error);
        return false;
      });
  }


}

export class DataBase{

}






