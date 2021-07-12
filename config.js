import firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
    apiKey: "AIzaSyCxvoY9vWdMEN9woCntunTq9sYYLHo6FpQ",
    authDomain: "promptitude-67ab5.firebaseapp.com",
    projectId: "promptitude-67ab5",
    storageBucket: "promptitude-67ab5.appspot.com",
    messagingSenderId: "111448392689",
    appId: "1:111448392689:web:89987e0e7fe5db618c7a50"
};
  

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
