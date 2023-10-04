import React, { useContext, useRef } from "react";
import Navbar from "../Shared/Navber/Navar";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProviders";

const Login = () => {
     const { signIn, resetPassword } = useContext(AuthContext);
     const location = useLocation()
     console.log(location);
     const navigate = useNavigate()


     const emailRef = useRef(null);

     const handleLogin = (e) => {
          e.preventDefault();
          // const email = e.target.email.value;
          // console.log("Login", email);
          const form = new FormData(e.currentTarget);
          const email = form.get("email");
          const password = form.get("password");
          console.log(email, password);
          // user sign in using email && password
          signIn(email, password)
               .then((result) => {
                    console.log(result.user);

                    // navigate after login
                    // user j page theke login page a gache sei page a niye jabe 

                    navigate(location?.state ? location.state : "/")



               })
               .catch((error) => {
                    console.log(error);
               });
     };

     // resetPassword
     const handleResetPassword = () => {
          const email = emailRef.current.value;
          if(!email){
               alert("please enter your email first");
               return;
          }
          resetPassword(email)
               .then(() => {
                    alert("Password reset please check email");
               })
               .catch((error) => {
                    console.log(error);
               });
     };

     return (
          <div>
               <Navbar></Navbar>
               <p className="text-3xl font-bold mb-6 text-center">
                    Login your account
               </p>
               <form onSubmit={handleLogin} className="w-1/2 mx-auto">
                    <div className="form-control">
                         <label className="label">
                              <span className="label-text">Email</span>
                         </label>
                         <input
                              type="text"
                              ref={emailRef}
                              name="email"
                              placeholder="Email"
                              className="input input-bordered"
                              required
                         />
                    </div>
                    <div className="form-control">
                         <label className="label">
                              <span className="label-text">Password</span>
                         </label>
                         <input
                              type="password"
                              name="password"
                              placeholder="Password"
                              className="input input-bordered"
                              required
                         />
                         <label className="label">
                              <a
                                   onClick={handleResetPassword}
                                   href="#"
                                   className="label-text-alt link link-hover"
                              >
                                   Forgot password?
                              </a>
                         </label>
                    </div>
                    <div className="form-control mt-6">
                         <button className="btn btn-primary">Login</button>
                    </div>
               </form>
               <p className="text-center py-4">
                    Do not Have An Account ?
                    <Link
                         className="text-green-500 font-bold hover:underline ml-1"
                         to="/register"
                    >
                         Register
                    </Link>
               </p>
          </div>
     );
};

export default Login;
