// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDqcfxjYGBJocnZT6X1COJNqCliZThmmyI",
  authDomain: "dragon-news-login-react-auth.firebaseapp.com",
  projectId: "dragon-news-login-react-auth",
  storageBucket: "dragon-news-login-react-auth.appspot.com",
  messagingSenderId: "997512007095",
  appId: "1:997512007095:web:a1a7da1cd0905c1584ec32"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);
export default app;
// export default auth;
