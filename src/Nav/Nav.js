import React from 'react'
import { NavLink } from 'react-router-dom'
import Banner from '../Banner/Banner'
import './Nav.css'

const Nav = () => {
  return (
     <>
     <Banner/>
      <div className="container router-fixed">
        <div className='my-5 col-12 col-lg-12 col-md-12'>
        <NavLink className="p-3 text-decoration-none text-secondary" to="/breakfast">BREAKFAST</NavLink>
        <NavLink className="p-3 text-decoration-none text-secondary" to="/lunch">LUNCH</NavLink>
        <NavLink className="p-3 text-decoration-none text-secondary" to="/dinner">DINNER</NavLink>
      </div>
      </div>
     </>
  )
}

export default Nav