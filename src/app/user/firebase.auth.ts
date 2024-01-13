import { Injectable } from '@angular/core';
import { AngularFireAuth} from "@angular/fire/compat/auth";
import { AngularFirestore} from "@angular/fire/compat/firestore";

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private afAuth: AngularFireAuth,
    private firestore: AngularFirestore
  ) {}

  // Rejestracja użytkownika
  signUp(email: string, password: string) {
    return this.afAuth.createUserWithEmailAndPassword(email, password);
  }

  // Logowanie użytkownika
  signIn(email: string, password: string) {
    return this.afAuth.signInWithEmailAndPassword(email, password);
  }

  // Wylogowanie użytkownika
  signOut() {
    return this.afAuth.signOut();
  }

  // Pobierz aktualnego użytkownika
  getCurrentUser() {
    return this.afAuth.authState;
  }
}
