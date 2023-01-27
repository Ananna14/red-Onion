import React from 'react'
import { NavLink } from 'react-router-dom'
import Banner from '../Banner/Banner'
import { Link } from 'react-router-dom';
import { FaCartPlus } from 'react-icons/fa';
import './Nav.css'

const Nav = (props) => {
  return (
     <>
     <Banner/>
      <div className="container router-fixed">
        <div className='my-5 col-12 col-lg-12 col-md-12'>
        <NavLink onClick={()=>props.handleShow(false)} className="p-3 text-decoration-none text-secondary" to="/breakfast">BREAKFAST</NavLink>
        <NavLink className="p-3 text-decoration-none text-secondary" to="/lunch">LUNCH</NavLink>
        <NavLink className="p-3 text-decoration-none text-secondary" to="/dinner">DINNER</NavLink>
        {/* <div className="col-6  d-flex justify-content-end"> */}
        <Link onClick={()=>props.handleShow(true)} className='fs-5 text-decoration-none' to="/"><FaCartPlus/><sup>{props.count}</sup></Link>
        {/* </div> */}
      </div>
      </div>
     </>
  )
}

export default Nav