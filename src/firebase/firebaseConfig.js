import { initializeApp } from 'firebase/app';
import 'firebase/auth'
import 'firebase/firestore'
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAKQoNmAFNej8wPn3bDX2d33Ljd9OGlgyI",
  authDomain: "olx-clone-4608f.firebaseapp.com",
  projectId: "olx-clone-4608f",
  storageBucket: "olx-clone-4608f.appspot.com",
  messagingSenderId: "37283570824",
  appId: "1:37283570824:web:00593867fa845b74bdeb3d",
  measurementId: "G-959W68Z5WM"
};

 export default  initializeApp(firebaseConfig)