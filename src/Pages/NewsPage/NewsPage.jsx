import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import Header from '../Shared/Header/Header';
import RightSideNav from '../Shared/RightSideNav/RightSideNav';
import Navbar from '../Shared/Navber/Navar';
import NewsPageDetails from './NewsPageDetails';

const NewsPage = () => {
     const [details,setDetails]=useState({})
     // console.log(details)
     const data = useLoaderData()
     console.log(data)
     const {id} = useParams()
     useEffect(()=>{
          // const findDetails = data.find(singleDetail=> console.log(singleDetail))
          const findDetails = data.find(singleDetail=> singleDetail._id === id)
          setDetails(findDetails)
     },[data,id]);
  
     return (
          <div className='container mx-auto mt-5'>
               <Header></Header>  
               <Navbar></Navbar>
               <div className='grid grid-cols-4 my-10'>
                    <div className='border col-span-3'>
                         <NewsPageDetails details={details}></NewsPageDetails>
                    </div>     
                    <div>
                         <RightSideNav></RightSideNav>
                    </div>
               </div>    
          </div>
     );
};

export default NewsPage;