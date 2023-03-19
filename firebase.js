import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCTg2RvwSdF0jv3mKhWiWhHlx0bhh3I1Ug",
  authDomain: "ms-mart-56809.firebaseapp.com",
  projectId: "ms-mart-56809",
  storageBucket: "ms-mart-56809.appspot.com",
  messagingSenderId: "571051781459",
  appId: "1:571051781459:web:24a0a840803f6187acc5a6",
};

// const app = !firebase.apps.length
//   ? firebase.initializeApp(firebaseConfig)
//   : firebase.app();
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
export const db = firebase.firestore();
