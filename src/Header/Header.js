import React from 'react'
import { NavLink } from 'react-router-dom'
import icon from '../images/icon.png'
import { FaShoppingBasket } from 'react-icons/fa';

const Header = () => {
  return (
    <div>
        <nav className="navbar navbar-light bg-white col-lg-12 col-md-12 col-12">
            <div className="container">
                <a className="navbar-brand" href="#">
                  <img className='w-25 d-flex justify-content-start' src={icon} alt="" />
                </a>
                <h3><FaShoppingBasket/></h3>                
            </div>
            
        </nav>
    </div>
  )
}

export default Header