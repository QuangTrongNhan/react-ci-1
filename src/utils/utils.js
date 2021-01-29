import  {firebaseConfig} from '../config/firebaseConfig'
import firebase from 'firebase/app'
import 'firebase/firestore'

try {
    firebase.initializeApp(firebaseConfig)
}catch(e) {
    console.error('firebase was installed')
}