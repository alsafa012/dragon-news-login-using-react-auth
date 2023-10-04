import React from 'react';
import logo from '../../../assets/logo.png'
import moment from 'moment';
const Header = () => {
     return (
          <div className='font-poppins text-center'>
               
               <img className='mx-auto' src={logo} alt="" />
               <p>Journalism Without Fear or Favour</p>
               <p className='text-xl'>{moment().format("dddd, MMMM YYYY")}</p>
          </div>
     );
};

export default Header;