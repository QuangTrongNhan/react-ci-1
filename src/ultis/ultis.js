// import {firebaseConfig} from '../config/config.firebase'
// import firebase from 'firebase/app'
// import 'firebase/firestore'

// try {
//     firebase.initializeApp(firebaseConfig)
// }catch(e) {
//     console.error("Firebase was installed")
// }

// const db= firebase.firestore()

// export function signUp(userIn4mation) {
//     const {username, password} = userIn4mation
//     return new Promise((res,reject) => {

//     })
// }

import { firebaseConfig } from "../config/config.firebase";
import firebase from "firebase/app";
import "firebase/firestore";

try {
  firebase.initializeApp(firebaseConfig);
} catch (e) {
  console.error("firebase was installed");
}

const db = firebase.firestore();

export function signUp(userIn4mation) {
  return new Promise((res, reject) => {
    const { username, email, password } = userIn4mation;
    db.collection("users")
      .where("username", "==", username)
      .get()
      .then((querysnapshot) => {
        if (!querysnapshot.empty) {
          throw new Error("Username was existed");
        }
      })
      .then(() => {
        db.collection("users")
          .add({
            username: username,
            email: email,
            password: password,
          })
          .then((data) => {
            console.log("Added");
            console.log(data.id);
          });
      })
      .catch((err) => {
          reject(err);
      })
  });    
  
}
