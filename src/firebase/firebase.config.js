// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDnv4AdAdv6fllEkIP4tk40TV9mpzIJ84w",
  authDomain: "chef-recipe-hunter-24b22.firebaseapp.com",
  projectId: "chef-recipe-hunter-24b22",
  storageBucket: "chef-recipe-hunter-24b22.appspot.com",
  messagingSenderId: "749335752988",
  appId: "1:749335752988:web:fd15796b266eb3964dcad9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;