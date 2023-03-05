import React from 'react'
import logo from "../images/line-one-about.png"
import five from "../images/special-item/image-5.jpg"
import seven from "../images/special-item/image-7.jpg"
import six from "../images/special-item/image-6.jpg"
import four from "../images/special-item/image-4.jpg"
import twenty from "../images/special-item/image-21.jpg"
import therty from "../images/special-item/image-31.jpg"
import { Link } from 'react-router-dom'
import './SpecialRecipe.css'

const SpecialRecipe = () => {
  return (
    <div className='recipe-bg'>
      <div className='container'>
        <div class="row justify-content-md-center">
          {/* 1st-part */}
          <div class="col col-lg-4 all-img">
            <img className="" src={seven} alt="" />
          </div>
          <div className='col col-lg-4 d-flex justify-content-center'>
            <div class="seven-img rec-img">
              <h4>Hot dog 5</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, aliquam?</p>
              <h2 className='price'>$2.65</h2>
              <Link to="/" className="order-btn rounded-pill">ORDER NOW</Link>
            </div>
          </div>
          <div class="col col-lg-4 all-img">
            <img className="" src={five} alt="" />
          </div>
          {/* 2nd-part */}
          <div></div>
          <div className='col-lg-4 d-flex justify-content-center'>
            <div class="seven-img rec-img">
              <h4>Hot dog 5</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, aliquam?</p>
              <h2 className='price'>$2.65</h2>
              <Link to="/" className="order-btn rounded-pill">ORDER NOW</Link>
            </div>
          </div>
          <div class="col col-lg-4 rec-img">
            <img src={six} alt="" />
          </div>
          <div className='col col-lg-4 d-flex justify-content-center'>
            <div class="seven-img rec-img">
              <h4>Hot dog 5</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, aliquam?</p>
              <h2 className='price'>$2.65</h2>
              <Link to="/" className="order-btn rounded-pill">ORDER NOW</Link>
            </div> 
           </div>
          {/* 3rd-part */}
          <div class="col col-lg-4 rec-img">
            <img src={four} alt="" />
          </div>
          <div className='col col-lg-4 d-flex justify-content-center'>
            <div class="seven-img rec-img">
              <h4>Hot dog 5</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, aliquam?</p>
              <h2 className='price'>$2.65</h2>
              <Link to="/" className="order-btn rounded-pill">ORDER NOW</Link>
            </div> 
           </div>
           <div class="col col-lg-4 rec-img">
            <img src={twenty} alt="" />
          </div>
          {/* 4th-part */}
          <div className='col col-lg-4 d-flex justify-content-center'>
            <div class="seven-img rec-img">
              <h4>Hot dog 5</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, aliquam?</p>
              <h2 className='price'>$2.65</h2>
              <Link to="/" className="order-btn rounded-pill">ORDER NOW</Link>
            </div> 
           </div>
           <div class="col col-lg-4 rec-img">
            <img src={therty} alt="" />
          </div>
          <div className='col col-lg-4 d-flex justify-content-center'>
            <div class="seven-img rec-img">
              <h4>Hot dog 5</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, aliquam?</p>
              <h2 className='price'>$2.65</h2>
              <Link to="/" className="order-btn rounded-pill">ORDER NOW</Link>
            </div> 
           </div>
          </div>
      </div>
    </div>

  )
}

export default SpecialRecipe