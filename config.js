import firebase from 'firebase';


const firebaseConfig = {
    apiKey: "AIzaSyBlop8NJvVJ4i87NqRY-3c7fJ38GTwtlNQ",
    authDomain: "complaint-forum---71.firebaseapp.com",
    projectId: "complaint-forum---71",
    storageBucket: "complaint-forum---71.appspot.com",
    messagingSenderId: "749941493976",
    appId: "1:749941493976:web:86a1bf92254b1991a707ad"
  };
  

  firebase.initializeApp(firebaseConfig);
  
  export default firebase.firestore();
