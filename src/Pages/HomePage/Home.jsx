import React from "react";
import Header from "../Shared/Header/Header";
import Navbar from "../Shared/Navber/Navar";
import LeftSideNav from "../Shared/LeftSideNav/LeftSideNav";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";
import BrakingNews from "./BrakingNews";
import { useLoaderData } from "react-router-dom";
import News from "./News";

const Home = () => {
     const news = useLoaderData();
     // console.log(news);
     return (
          <div>
               <Header></Header>
               <BrakingNews></BrakingNews>
               <Navbar></Navbar>
               <div className="grid md:grid-cols-4 gap-5 h-[100vh]">
                    <div className=" ">
                         <LeftSideNav></LeftSideNav>
                    </div>
                    <div className=" border-red-700 lg:col-span-2 overflow-y-auto">
                         <p>hello</p>
                         {news.map((singleNews) => (
                              <News
                                   key={singleNews.id}
                                   singleNews={singleNews}
                              ></News>
                         ))}
                    </div>
                    <div className=" ">
                         
                         <RightSideNav></RightSideNav>
                    </div>
               </div>
          </div>
     );
};

export default Home;



// import React from "react";
// import Header from "../Shared/Header/Header";
// import Navbar from "../Shared/Navber/Navar";
// import LeftSideNav from "../Shared/LeftSideNav/LeftSideNav";
// import RightSideNav from "../Shared/RightSideNav/RightSideNav";
// import BrakingNews from "./BrakingNews";
// import { useLoaderData } from "react-router-dom";
// import News from "./News";
// import "./Home.css"

// const Home = () => {
//   const news = useLoaderData();

//   return (
//     <div>
//       <Header></Header>
//       <BrakingNews></BrakingNews>
//       <Navbar></Navbar>
//       <div className="grid md:grid-cols-4 gap-5">
//         <div className="border left-nav">
//           <LeftSideNav></LeftSideNav>
//         </div>
//         <div className="border lg:col-span-2 ">
//           <div className="scrollable-content">
//             {news.map((singleNews) => (
//               <div key={singleNews.id} className="news-item">
//                 <News singleNews={singleNews}></News>
//               </div>
//             ))}
//           </div>
//         </div>
//         <div className="border right-nav">
//           <RightSideNav></RightSideNav>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Home;
