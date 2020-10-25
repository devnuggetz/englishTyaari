import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyA2HkXq6TnoqVFsYGNgSmJCTKB7o8PJEbY",
    authDomain: "englishtyaari.firebaseapp.com",
    databaseURL: "https://englishtyaari.firebaseio.com",
    projectId: "englishtyaari",
    storageBucket: "englishtyaari.appspot.com",
    messagingSenderId: "587216882099",
    appId: "1:587216882099:web:607b192fc0cda0d657a3c6",
    measurementId: "G-G7X0E38S5E"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db= firebaseApp.firestore();

  const auth= firebase.auth()

  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth, provider};
  export default db;