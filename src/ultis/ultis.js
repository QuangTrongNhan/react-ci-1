import firebase from "firebase/app";
import "firebase/firestore";
import { firebaseConfig } from "../config/config.firebase";

//bắt lỗi khi app đã đc khởi tạo vs firebaseconfig
try {
  firebase.initializeApp(firebaseConfig);
} catch (e) {
  console.log("Firebase was  installed !");
}

const db = firebase.firestore();

//khởi tạo app vs firebaseconfig của mình

//Cách 1: dùng promise
/*

  export function signUp(userIn4mation) {
  return new Promise((resolve, reject) => {
    const { username, password } = userIn4mation;

    // db.collection("users").add(userIn4mation); ==> hàm này để add

    //hàm này đế query result, mỗi result là 1 querysnapshot (check querysnapsot.empty => addnew else báo lỗi)
    db.collection("users")
      .where("username", "==", username)
      .get()
      .then((querySnapshot) => {
        if (!querySnapshot.empty) {
          throw new Error("username was existed!");
        }
      })
    .then(() => {
      db.collection("users")
        .add({
          username: username,
          password: password,
        })
        .then((data) => {
          console.log("Sign up successful !");
          resolve(data.id);
        });
    })
    .catch((err) => {
      reject(err);
    });
  });
*/

/*---------------------------------------------------------------------------------*/
/*Cách 2 dùng async 
  +ascyn auto trả về promise nên ko cần phải return promise */
//cách này khi gặp bug thì ko thể catch đc nên phải dùng try catch

export async function signUp(userIn4mation) {
  try {
    const { username, password } = userIn4mation;
    const flag = await db
      .collection("users")
      .where("username", "==", username)
      .get()
      .then((querySnapshot) => {
        return querySnapshot.empty;
      });

    // console.log(flag); ==> flag trả về false
    //nếu true sẽ đc quyền đi tiép
    if (!flag) {
      throw new Error("Username was existed !");
    }

    if (!flag) {
      throw new Error("Username was existed !");
    }

    const newUserID = await db
      .collection("users")
      .add({
        username: username,
        password: password,
      })
      .then((data) => {
        return data.id;
      });

    return newUserID;
  } catch (err) {
    throw err;
  }
}
