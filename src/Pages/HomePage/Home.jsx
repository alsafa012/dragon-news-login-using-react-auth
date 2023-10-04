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
     console.log(news);
     return (
          <div>
               <Header></Header>
               <BrakingNews></BrakingNews>
               <Navbar></Navbar>
               this is home
               <div className="grid md:grid-cols-4 gap-5">
                    <div className="border">
                         <LeftSideNav></LeftSideNav>
                    </div>
                    <div className="border lg:col-span-2">
                         {news.map((singleNews) => (
                              <News
                                   key={singleNews.id}
                                   singleNews={singleNews}
                              ></News>
                         ))}
                    </div>
                    <div className="border">
                         
                         <RightSideNav></RightSideNav>
                    </div>
               </div>
          </div>
     );
};

export default Home;
