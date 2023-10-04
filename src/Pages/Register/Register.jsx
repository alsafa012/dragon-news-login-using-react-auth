import { useContext } from "react";
import Navbar from "../Shared/Navber/Navar";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProviders";

const Register = () => {

     const {createUser} = useContext(AuthContext)

     const handleRegister = (e) => {
          e.preventDefault();
          // const email = e.target.email.value;
          // console.log("Login", email);
          const form = new FormData(e.currentTarget)
          const name = form.get("name")
          const photo = form.get("photo")
          const email = form.get("email")
          const password = form.get("password")
          console.log("Register", name,email, photo, password);
          // create a new user
          createUser(email,password)
          .then(result=>{
               console.log(result.user);
          })
          .catch(error=>{
               console.log(error.message);
          })
          
     };

     return (
          <div>
               <div>
                    <Navbar></Navbar>
                    <p className="text-3xl font-bold mb-6 text-center">Register your account</p>

                    <form onSubmit={handleRegister} className="w-1/2 mx-auto">
                         <div className="form-control">
                              <label className="label">
                                   <span className="label-text">Name</span>
                              </label>
                              <input
                                   type="text"
                                   name="name"
                                   placeholder="Name"
                                   className="input input-bordered"
                                   required
                              />
                         </div>
                         <div className="form-control">
                              <label className="label">
                                   <span className="label-text">Photo URL</span>
                              </label>
                              <input
                                   type="text"
                                   name="photo"
                                   placeholder="Photo URL"
                                   className="input input-bordered"
                                   required
                              />
                         </div>
                         <div className="form-control">
                              <label className="label">
                                   <span className="label-text">Email</span>
                              </label>
                              <input
                                   type="text"
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
                              {/* <label className="label">
                                   <a
                                        href="#"
                                        className="label-text-alt link link-hover"
                                   >
                                        Forgot password?
                                   </a>
                              </label> */}
                         </div>
                         <div className="form-control mt-6">
                              <button className="btn btn-primary">Login</button>
                         </div>
                    </form>
                    <p className="text-center py-4">
                         Already Have An Account ?
                         <Link className="text-green-500 font-bold hover:underline ml-1" to="/login">Login</Link>
                    </p>
               </div>
          </div>
     );
};

export default Register;
