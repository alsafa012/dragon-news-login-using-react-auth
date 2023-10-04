import { createContext, useEffect, useState } from "react";
import {
     createUserWithEmailAndPassword,
     getAuth,
     onAuthStateChanged,
     sendPasswordResetEmail,
     signInWithEmailAndPassword,
     signOut,
} from "firebase/auth";
import app from "../Firebase/firebase.config";

export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProviders = ({ children }) => {
     const [user, setUser] = useState(null);
     const [loading,setLoading] = useState(true);

     // create a new user
     const createUser = (email, password) => {
          setLoading(true);
          return createUserWithEmailAndPassword(auth, email, password);
     };
     // sign in using email and password
     const signIn = (email, password) => {
          setLoading(true);
          return signInWithEmailAndPassword(auth, email, password);
     }

     // Sign out
     const logOut = () => {
          setLoading(true);
          return signOut(auth);
          // .then(()=>{

          // })
          // .catch((error) => {
          //      console.log(error);
          // });
     };

     // Rest password
     const resetPassword = (email)=>{
          setLoading(true);
        return sendPasswordResetEmail(auth,email)
     }


     useEffect(() => {
          const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
               console.log(currentUser);
               setUser(currentUser);
               setLoading(false);
          });
          return () => {
               unSubscribe();
          };
     }, []);

     const authInfo = {
          user,
          createUser,
          logOut,
          signIn,
          resetPassword,
          loading
     };

     return (
          <AuthContext.Provider value={authInfo}>
               {children}
          </AuthContext.Provider>
     );
};

export default AuthProviders;
// import React, {  createContext, useState } from 'react';
// import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
// import app from '../Firebase/firebase.config';

// export const AuthContext = createContext(null);
// const auth = getAuth(app);

// const AuthProviders = ({children}) => {

//      const [user,setUser]=useState(null)

//      // create
//      const createUser = (email,password)=>{
//          return createUserWithEmailAndPassword(auth, email, password)

//      }

//      const authInfo = {
//           user,
//           createUser
//      }
//      return (
//           <AuthContext.Provider value={authInfo}>

//            {children}

//           </AuthContext.Provider>
//      );
// };

// export default AuthProviders;
