import React from 'react'
import { FaSearch } from 'react-icons/fa';
import first from "../images/banner/image-1.jpg"
import second from "../images/banner/image-2.jpg"
import third from "../images/banner/image-3.jpg"
import Carousel from 'react-bootstrap/Carousel';
import logo from '../images/banner/logo-1.png';
import './Banner.css'

const Banner = () => {
  return (
    <div className=''>
        {/* <div>
            <h1 classNameName='banner-text'>Best Food waiting for your Belly</h1>
            <div classNameName='d-flex justify-content-center align-content-center flex-wrap'>
              <input  name="" id="" classNameName='w-50 edit px-3 rounded' placeholder="Type to search..."/><button classNameName='search-btn rounded px-3'><span><FaSearch/></span></button>
            </div>
        </div> */}
        <Carousel slide={false} className="cover-add">
      <Carousel.Item>
        <img
          className="d-block w-100 banner-add"
          src={first}
          alt="First slide"
        />
        <Carousel.Caption className="">
          <img src={logo} alt="" className=""/>
            <h1 classNameName='banner-text img-added fw-bold'>We Serve qualtiy food</h1>
              <div className="d-flex justify-content-center py-3">
                <span className='styled d-flex'></span>
              </div>
              <div className='mb-3'>
                <i className="front-add img-added">Lorem Ipsum is simply dummy text of the printing and typesetting<br/> industry. Lorem Ipsum has been the industry's standard dummy<br/> text ever 1500s.</i>
              </div>
              <div className='btn-gap d-flex justify-content-center'>
              <button className="rounded-pill px-5 py-3 btn-add">LEARN MORE</button>
              </div>
               
            
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 banner-add"
          src={second}
          alt="Second slide"
        />
         <Carousel.Caption>
         <img src={logo} alt="" className=""/>
         <h1 classNameName='banner-text fw-bold'>We Serve qualtiy food</h1>
              <div className="d-flex justify-content-center py-3">
                <span className='styled d-flex'></span>
              </div>
              <div className='mb-3'>
                <i className="front-add img-added">Lorem Ipsum is simply dummy text of the printing and typesetting<br/> industry. Lorem Ipsum has been the industry's standard dummy<br/> text ever 1500s.</i>
              </div>
              <div className='btn-gap'>
                <button className="rounded-pill px-5 py-3 btn-add">LEARN MORE</button>
              </div>
            
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 banner-add"
          src={third}
          alt="Third slide"
        />
         <Carousel.Caption>
         <img src={logo} alt="" className=""/>
         <h1 classNameName='banner-text fw-bold'>We Serve qualtiy food</h1>
              <div className="d-flex justify-content-center py-3">
                <span className='styled d-flex'></span>
              </div>
              <div className='mb-3'>
                <i className="front-add img-added">Lorem Ipsum is simply dummy text of the printing and typesetting<br/> industry. Lorem Ipsum has been the industry's standard dummy<br/> text ever 1500s.</i>
              </div>
              <div className='btn-gap'>
                <button className="rounded-pill px-5 py-3 btn-add">LEARN MORE</button>
              </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  )
}

export default Banner