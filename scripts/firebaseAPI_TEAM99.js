//----------------------------------------
//  Your web app's Firebase configuration
//----------------------------------------
var firebaseConfig = {
    apiKey: "AIzaSyARJkSxlTHy9LufYzMhuBBD8HnfhaOak9A",
    authDomain: "demo07-75d8d.firebaseapp.com",
    projectId: "demo07-75d8d",
    storageBucket: "demo07-75d8d.appspot.com",
    messagingSenderId: "927596668306",
    appId: "1:927596668306:web:635e4d3f2c65038fc0cd4b",
    measurementId: "G-Y986JHTEBQ"
};

//--------------------------------------------
// initialize the Firebase app
// initialize Firestore database if using it
//--------------------------------------------
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const storage = firebase.storage();
