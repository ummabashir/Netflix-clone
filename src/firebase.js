import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDy5l5Weqoyn30vT03znCkZ4lQvmGGeWlE",
  authDomain: "netflix-clone-54fc4.firebaseapp.com",
  projectId: "netflix-clone-54fc4",
  storageBucket: "netflix-clone-54fc4.appspot.com",
  messagingSenderId: "562270908671",
  appId: "1:562270908671:web:f373d9afef09a40199dcca",
  measurementId: "G-15T1GY39QC"
};

const firebaseApp = firebase.initializeApp(firebaseConfig); //firebase is declared but its value is never read
const db = firebaseApp.firestore(); //firestore will allow us to keep track of the users
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider()

export { auth,provider };
export default db;