import firebase from "firebase/app"
import "firebase/firestore"
const firebaseConfig = {
  apiKey: "AIzaSyCPgMh8P9_-73JHsAzKuJu8ymzsAh_Ts-A",
  authDomain: "tripnxt-2462a.firebaseapp.com",
  databaseURL: "https://tripnxt-2462a-default-rtdb.firebaseio.com",
  projectId: "tripnxt-2462a",
  storageBucket: "tripnxt-2462a.appspot.com",
  messagingSenderId: "852721647837",
  appId: "1:852721647837:web:ae1d1fe9705de7647cdb34",
  measurementId: "G-1SFLM8RQX5"
}
// Initialize Firebase
firebase.initializeApp(firebaseConfig)
// firebase.analytics();
export default firebase