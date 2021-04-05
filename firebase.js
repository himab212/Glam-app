import * as firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyCMfE9oR41x6wYw3vt6nBNYN2FSw2i93Cg",
  authDomain: "glamindia-feedback.firebaseapp.com",
  databaseURL: "https://glamindia-feedback-default-rtdb.firebaseio.com",
  projectId: "glamindia-feedback",
  storageBucket: "glamindia-feedback.appspot.com",
  messagingSenderId: "641208386215",
  appId: "1:641208386215:web:8818edcc52ae5fb4551182",
  measurementId: "G-10Y3C87XS0"
};


  let app;

  if(firebase.apps.length === 0){
    app= firebase.initializeApp(firebaseConfig);
  }

  else{
    app= firebase.app();
  }

  const db = app.firestore();
  const auth = firebase.auth();

  export {db,auth};
  

 