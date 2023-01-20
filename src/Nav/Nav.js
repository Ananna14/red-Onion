import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = () => {
  return (
      <div className='my-5 col-12 col-lg-12 col-md-12'>
        <NavLink className="p-5 text-decoration-none text-secondary" to="/breakfast">BREAKFAST</NavLink>
        <NavLink className="p-5 text-decoration-none text-secondary" to="/lunch">LUNCH</NavLink>
        <NavLink className="p-5 text-decoration-none text-secondary" to="/dinner">DINNER</NavLink>
      </div>
  )
}

export default Nav