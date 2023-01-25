import React from 'react'
import { FaSearch } from 'react-icons/fa';
import './Banner.css'

const Banner = () => {
  return (
    <div className='banner'>
        <div>
            <h1 className='banner-text'>Best Food waiting for your Belly</h1>
            <div className='d-flex justify-content-center align-content-center flex-wrap'>
              <input  name="" id="" className='w-50 edit px-3 rounded' placeholder="Type to search..."/><button className='search-btn rounded px-3'><span><FaSearch/></span></button>
            </div>
        </div>
    </div>
  )
}

export default Banner