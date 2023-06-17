// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCJKgNSaM_MGvpb1PKupLRtHQslP866jDU",
  authDomain: "para-marker.firebaseapp.com",
  projectId: "para-marker",
  storageBucket: "para-marker.appspot.com",
  messagingSenderId: "589232245730",
  appId: "1:589232245730:web:2a493404313c5fc20887bb"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);