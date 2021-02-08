// For Firebase JS SDK v7.20.0 and later, measurementId is optional
  import firebase from "firebase";

  const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDpt3CdKnt6GiH80ITY2i8mEgM46GitBjQ",
    authDomain: "todo-react-app-cb855.firebaseapp.com",
    projectId: "todo-react-app-cb855",
    storageBucket: "todo-react-app-cb855.appspot.com",
    messagingSenderId: "529133452648",
    appId: "1:529133452648:web:9aba2eca033ec17cfb2add",
    measurementId: "G-E6P1QE06JW"
  });

  const db = firebaseApp.firestore();

  export default db;