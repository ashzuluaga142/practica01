import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyDXSSHz56UXGuENLiXbszHtPaY17luLf6Y",
    authDomain: "practica01-ffbef.firebaseapp.com",
    projectId: "practica01-ffbef",
    storageBucket: "practica01-ffbef.appspot.com",
    messagingSenderId: "864444704797",
    appId: "1:864444704797:web:57fc7eb398c1181a4e3ef4"
  }
  
export const firebaseApp = firebase.initializeApp(firebaseConfig)