// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase, ref, set, onValue, } from "firebase/database";
// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

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
const db = getDatabase();

export class DataBase{

  writeUserData(userName: string, name: string, surname: string, email: string, password: string, telNumber: string) {
    const reference = ref(db, 'users/' + userName);
    set(reference, {
      username: userName,
      name: name,
      surname: surname,
      email: email,
      password: password,
      telNumber : telNumber
    });
  }

  readUserData(username: string): Promise<any> {
    return new Promise((resolve, reject) => {
      const distanceRef = ref(db, "users/" + username);
      onValue(distanceRef, (snapshot) => {
        const data = snapshot.val();
        if (data !== null) {
          resolve(data);
        } else {
          reject("Brak danych dla użytkownika: " + username);
        }
      }, (error) => {
        reject(error);
      });
    });
  }

  returnUserData(userId: string){
    //wczytywanie danych

    const distanceRef = ref(db, "users/" + userId + "/email");
    onValue(distanceRef, (snapshot) => {
      const data = snapshot.val();

      return data;
    })
  }
}






