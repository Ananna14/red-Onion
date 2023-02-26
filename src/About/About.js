import React from 'react'
import logo from '../images/line-one-about.png'
import divider from '../images/divider-1.png'
import './About.css'

const About = () => {
  return (
    <div className='container py-5 d-flex'>
      <div className="row gx-5">
        <div className="col-12 col-lg-6">
          <img className='img-add img-fluid' src="https://i.ibb.co/ZVnGgd4/about-us-image.png" alt="" />
         
        </div>
        {/* 2nd-part */}
        <div className="col-12 col-lg-6 d-flex justify-content-center align-items-center">
          <div className="text-start about-gap">
          <h2 className='text-about'>About Us</h2>
          <h3>WE ARE TASTY</h3>
          <img className="mb-4" src={logo} alt="" />
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br/> Lorem Ipsum has been the industry's stan<br/><br/>
          dard dummy text ever since the 1500s,when an unknown printer took a<br/>
          galley of type and scrambled it to make a type specimen book. It has<br/>
          survived not only five centuries, but also the leap into electronic<br/>
          typesetting.
          </p>
          <div className='btn-gap'>
              <button className="rounded-pill px-5 py-3 btn-add">READ MORE</button>
          </div>
          </div>
        </div>
       {/* <div className='mt-5'>
       <img className='img-fluid img-diveder' src={divider} alt="" />
       </div> */}
      </div>
    
    </div>
  )
}

export default About