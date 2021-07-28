import firebase from "firebase";
import "firebase/firestore";

const firebaseApp = {
    apiKey: "AIzaSyB5Uprj04y7YSAay70G-MsTTq4C4k_zY0s",
    authDomain: "instagram-clone-8e9a8.firebaseapp.com",
    projectId: "instagram-clone-8e9a8",
    storageBucket: "instagram-clone-8e9a8.appspot.com",
    messagingSenderId: "1094423714296",
    appId: "1:1094423714296:web:d6d9d72a572848b4985e0d",
    measurementId: "G-B9RW2NZXHT"
};

firebase.initializeApp(firebaseApp);
// var db=firebase.firestore();
// var auth=firebase.auth();

export default firebase;