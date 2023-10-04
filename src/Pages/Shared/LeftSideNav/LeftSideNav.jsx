import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftSideNav = () => {

     const [categories,setCategories]=useState([])

     useEffect(()=>{
          fetch('categories.json')
          .then(res=>res.json())
          .then(data=>setCategories(data))
     },[])

     return (
          <div>
               <p>Categories length: {categories.length}</p>
               {
                    categories.map(category => <Link className='block my-3 pl-10' key={category.id}>{category.name} </Link>)
               }
          </div>
     );
};

export default LeftSideNav;