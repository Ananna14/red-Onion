import React from 'react'
import icon from '../images/icon.png'
import { FaShoppingBasket } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="container">
      <div className="row p-3">
        <div className="col-6">
        <a className="bg-white" href="#">
          <img className='w-25 d-flex justify-content-start' src={icon} alt="" />
        </a>
        </div>
        <div className="col-6  d-flex justify-content-end">
          {/* <a href="#"  className="d-flex justify-content-end"><h3><FaShoppingBasket/></h3></a> */}
       <a href="#" className='text-decoration-none text-secondary'>Login</a>
       
        </div>   
      </div>
    </div>
  )
}

export default Header