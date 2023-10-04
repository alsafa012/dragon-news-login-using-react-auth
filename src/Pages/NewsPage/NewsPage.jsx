import React from 'react';
import { useParams } from 'react-router-dom';
import Header from '../Shared/Header/Header';
import RightSideNav from '../Shared/RightSideNav/RightSideNav';
import Navbar from '../Shared/Navber/Navar';

const NewsPage = () => {
     const {id} = useParams()
     console.log(id)
     return (
          <div className='container mx-auto mt-5'>
               <Header></Header>  
               <Navbar></Navbar>
               <div className='grid grid-cols-4 my-10'>
                    <div className='border col-span-3'>
                         <p>news details</p>
                    </div>     
                    <div>
                         <RightSideNav></RightSideNav>
                    </div>
               </div>    
          </div>
     );
};

export default NewsPage;