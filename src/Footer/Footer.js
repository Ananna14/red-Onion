import React from 'react'
import footer from '../images/icon.png'
import './Footer.css'

const Footer = () => {
  return (
    <div className='container-fluid py-5 mt-5 footer-bg'>
      {/* 1st-part-footer-start */}
      <div className="row">
        <div className="col-6">
          <img src={footer} className="footer-icon w-50 d-flex justify-content-start" alt="" />
        </div>
        {/* 1st-start */}
        <div className="col-3 footer text-start">
          <a href="#">About Online Blog</a><br/>
          <a href="#">Read Our Blog</a><br/>
          <a href="#">Signup to deliver</a><br/>
          <a href="#">Add Restaurant</a><br/>
        </div>
        {/* 2nd-start */}
        <div className="col-3 footer text-start">
          <a href="#">Read FAQ's</a><br/>
          <a href="#">Get Help</a><br/>
          <a href="#">View All Cities</a><br/>
          <a href="#">Restaurant near me</a><br/>
        </div>
      </div>
      {/* 1st-part-footer-end */}
      <div className="row pt-5">
        <div className="col-3 footer">Copyright Ananna, All Right Reserved</div>
        <div className="col-3 footer">Terms and condition</div>
        <div className="col-3 footer">Privacy and policy</div>
        <div className="col-3 footer">Pricing</div>
      </div>
    </div>
  )
}
export default Footer