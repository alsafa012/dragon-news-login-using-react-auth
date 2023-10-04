import {
     FaGoogle,
     FaGithub,
     FaFacebook,
     FaTwitter,
     FaInstagram,
} from "react-icons/fa";
import qZone1 from "../../../assets/qZone1.png";
import qZone2 from "../../../assets/qZone2.png";
import qZone3 from "../../../assets/qZone3.png";

const RightSideNav = () => {
     return (
          <div>
               <div className="p-4 mb-5">
                    <div className="space-y-3">
                         <h2 className="text-3xl">Login With</h2>
                         <button className="w-full btn btn-outline">
                              <FaGoogle></FaGoogle>
                              Login With Google
                         </button>
                         <button className="w-full btn btn-outline">
                              <FaGithub></FaGithub>
                              Login With Github
                         </button>
                    </div>
               </div>
               {/* find us */}
               <div className="p-4 mb-6">
                    <div className="">
                         <h2 className="mb-2 text-3xl">Find Us On</h2>
                         <a
                              className="flex items-center text-lg gap-2 border rounded-t-lg p-3"
                              href=""
                         >
                              <FaFacebook></FaFacebook>
                              Facebook
                         </a>
                         <a
                              className="flex items-center text-lg gap-2 border-x p-3"
                              href=""
                         >
                              <FaTwitter></FaTwitter>
                              Twitter
                         </a>
                         <a
                              className="flex items-center text-lg gap-2 border rounded-b-lg p-3"
                              href=""
                         >
                              <FaInstagram></FaInstagram>
                              Instagram
                         </a>
                    </div>
               </div>
               {/* Q-zone */}
               <div>
                    <div className="px-4 border  my-6">
                        <div className=" bg-[#F3F3F3]">
                        <h2 className="p-4 text-2xl font-bold">Q-Zone</h2>
                         <img className="mx-auto" src={qZone1} alt="" />
                         <img className="mx-auto" src={qZone2} alt="" />
                         <img className="mx-auto" src={qZone3} alt="" />
                        </div>
                    </div>
               </div>
          </div>
     );
};

export default RightSideNav;
