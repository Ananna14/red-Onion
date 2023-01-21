import React from 'react'
import { Link } from 'react-router-dom'
import icon from '../images/icon.png'
import './Login.css'

const Login = () => {
  return (
    <>
    <h3 className='mt-5'>Login</h3>
    <div className="container d-flex justify-content-center">
          <img className='w-25' src={icon} alt="" />
    </div>
    <div>
       <div class="mb-3 mt-5">
        <input type="email" placeholder='Your Email' className='w-50 h-5 input-btn p-2' name="" id="" />
        </div>
       <div class="mb-3">
        <input type="password" placeholder='Your Password' className='w-50 input-btn p-2' name="" id="" />
        </div>
        <button className="btn w-50 btn-form">Login</button>
        <p className='text-color mt-5'>Don't have Account? <span className='text-primary'><Link className="text-decoration-none" to="/register">Sign Up</Link></span></p>
    </div>
    
    </>
  )
}

export default Login