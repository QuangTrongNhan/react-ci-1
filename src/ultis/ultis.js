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
            res(data);
            alert("Sign up success !");
            console.log(data.id);
          });
      })
      .catch((err) => {
        reject(err);
      });
  });
}

export function signIn(userIn4mation) {
  return new Promise((res, reject) => {
    const { username, password } = userIn4mation;
    db.collection("users")
      //chỉ lấy kết quả truy vấn là 1 kết quả ==> limit(1)
      .where("username", "==", username)
      .limit(1)
      .get()
      .then((querysnapshot) => {
        const data = [];
        querysnapshot.forEach(
          (doc) => {
          // user.data() is never undefined for query doc snapshots
          data.push(doc.data());
         }
        )
    
        if(data[0]['password']== password) {
          // console.log(data[0]['password'])
          alert('login success')
        }else {
          throw new Error('Login fail !')
        }
        res(data);
        
      })
    
      .catch((err) => {
        reject(err);
      });
  });
}

// export async function getToDo(userID,todo) {
//   const {content , title} = todo;

//   db.collection('todos').add({
//       content: content,
//       created: created,
//       isComplete: isComplete,
//       title: title,
//       userID: userID,
//   })

//   db.collection("todos")
//   .where('userID',"==",userID)
//   .get()
//   .then(data => {
//       console.log(data)
//   })
//   // let toDos = {

//   // };
// }
