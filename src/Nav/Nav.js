import React from 'react'
import { NavLink } from 'react-router-dom'
import Banner from '../Banner/Banner'
import logo from '../images/line-one-about.png'
import './Nav.css'
import About from '../About/About';
import SpecialItem from '../SpecialItem/SpecialItem'
import SpecialRecipe from '../SpecialRecipe/SpecialRecipe'

const Nav = (props) => {
  return (
     <>
     <Banner/>
     <About/>
     <SpecialItem/>
     <SpecialRecipe/>
      <div className="container bg-position">
        {/* detail-text */}
         <div className="text-start my-5">
            <h2 className='text-about'>Our Services</h2>
            <h3>WHAT WE OFFER</h3>
            <img src={logo} alt="" />
            <p className='mt-3'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br/>
            Lorem Ipsum has been the industry's stan</p>
         </div>
     </div>
      <div className='my-5 col-12 col-lg-12 col-md-12 nav-bg'>
        <NavLink className="p-3 text-decoration-none text-secondary" to="/breakfast">BREAKFAST</NavLink>
        <NavLink className="p-3 text-decoration-none text-secondary" to="/lunch">LUNCH</NavLink>
        <NavLink className="p-3 text-decoration-none text-secondary" to="/dinner">DINNER</NavLink>
      </div>
     </>
  )
}

export default Nav