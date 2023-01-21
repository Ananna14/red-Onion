import React from 'react'
import icon from '../images/icon.png'
import { FaShoppingBasket } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
   <>
    <div className="container-fluid">
      <div className="row p-3 shadow">
        <div className="col-6">
        <Link className="bg-white" to="/">
          <img className='w-25 d-flex justify-content-start' src={icon} alt="" />
        </Link>
        </div>
        <div className="col-6  d-flex justify-content-end">
       <Link to="/login" className='text-decoration-none text-secondary'>Login</Link>
       
        </div>   
      </div>
    </div>
   </>
  )
}

export default Header