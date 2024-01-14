import { initializeApp } from "firebase/app";
import { getDatabase, ref, set, onValue, } from "firebase/database";

// https://firebase.google.com/docs/web/setup#available-libraries

import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword} from "firebase/auth";

// import { AngularFireModule} from "@angular/fire/compat";
// import { getFirestore} from "@angular/fire/firestore";

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
const auth = getAuth(app);
const db = getDatabase();

// connectAuthEmulator(auth, "http://localhost:9099")

export const loginUser = async (email: string, password: string) => {
  const user = await signInWithEmailAndPassword(auth, email, password);
  console.log(user.user.uid);

}

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

export class DataBase{


//wszystko poniżej do póżniejszej poprawy


  // readUserData(username: string): Promise<any> {
  //   return new Promise((resolve, reject) => {
  //     const distanceRef = ref(db, "users/" + username);
  //     onValue(distanceRef, (snapshot) => {
  //       const data = snapshot.val();
  //       if (data !== null) {
  //         resolve(data);
  //       } else {
  //         reject("Brak danych dla użytkownika: " + username);
  //       }
  //     }, (error) => {
  //       reject(error);
  //     });
  //   });
  // }


}






