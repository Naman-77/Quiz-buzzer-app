import firebase from 'firebase';

 const firebaseConfig = {
    apiKey: "AIzaSyAxKHvFp6FHOZk3SozqJtFqQsD1pE4gUcc",
    authDomain: "quizmasterapp-39483.firebaseapp.com",
    databaseURL: "https://quizmasterapp-39483-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "quizmasterapp-39483",
    storageBucket: "quizmasterapp-39483.appspot.com",
    messagingSenderId: "239840282361",
    appId: "1:239840282361:web:c33e030471216397fb4428"
  };


// Initialize Firebase
if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
}

export default  firebase.database()