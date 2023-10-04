// import { useContext } from "react";
// import { AuthContext } from "../Providers/AuthProviders";
// import { Navigate, useLocation } from "react-router-dom";

// const PrivateRoute = ({ children }) => {
//      const { user, loading } = useContext(AuthContext);
//      const location = useLocation()
     
//      if(loading){
//           return <span className="loading loading-spinner text-warning ml-[50%] mt-[30%]"></span>
//      }
//      if (user) {
//           return children;
//      }
//      return <Navigate state={location.pathname} to="/login"></Navigate>;
// };

// export default PrivateRoute;
import React, { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProviders';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
     const location = useLocation()
     const {user ,loading} = useContext(AuthContext)
     if(loading){
          return <p>loader</p>
     }
     if(user){
          return children
     }
     return <Navigate state={location.pathname} to="/login"></Navigate>
};

export default PrivateRoute;
