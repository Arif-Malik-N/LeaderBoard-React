// // import * as firebase from 'firebase'
// import { initializeApp } from "firebase/app";
// import { Database } from 'firebase/database'

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyAf9M2p6xerF3VQRBPvG3EIao4qJXNwUhc",
//   authDomain: "leaders-a0eed.firebaseapp.com",
//   projectId: "leaders-a0eed",
//   storageBucket: "leaders-a0eed.appspot.com",
//   messagingSenderId: "469112981045",
//   appId: "1:469112981045:web:c00d9553b7d9a5a12c937c"
// };

// // // Initialize Firebase
  // export default  firebaseApp = initializeApp(firebaseConfig);

// // export  const   db = Database (firebaseApp)  ;


import { initializeApp } from 'firebase/app';
import {  getDatabase } from 'firebase/database'



const firebaseConfig = {
  apiKey: "AIzaSyAf9M2p6xerF3VQRBPvG3EIao4qJXNwUhc",

  authDomain: "leaders-a0eed.firebaseapp.com",

  databaseURL: "https://leaders-a0eed-default-rtdb.firebaseio.com",

  projectId: "leaders-a0eed",

  storageBucket: "leaders-a0eed.appspot.com",

  messagingSenderId: "469112981045",

  appId: "1:469112981045:web:c00d9553b7d9a5a12c937c"

};

const app = initializeApp(firebaseConfig);
// const db = getDatabase(app)
export default app;