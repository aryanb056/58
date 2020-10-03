import firebase from 'firebase';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDbcaWtKF4QtxVqINUqiDW5QM_cHQpovHI",
  authDomain: "wireless-buzzer-70e1e.firebaseapp.com",
  databaseURL: "https://wireless-buzzer-70e1e.firebaseio.com",
  projectId: "wireless-buzzer-70e1e",
  storageBucket: "wireless-buzzer-70e1e.appspot.com",
  messagingSenderId: "274384841428",
  appId: "1:274384841428:web:6c4486160f8d349a82e941",
  measurementId: "G-P5TQ9R77P1"
};
// Initialize Firebase
 if(!firebase.apps.length){ 
   firebase.initializeApp(firebaseConfig); } 
   export default firebase.database()