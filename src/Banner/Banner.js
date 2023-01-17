import React from 'react'
import './Banner.css'

const Banner = () => {
  return (
    <div className='banner'>
        <div>
            <h1 className='banner-text'>Best Food waiting for your Belly</h1>
            <div className='d-flex justify-content-center align-content-center flex-wrap'>
                <input className="form-control w-50" list="datalistOptions" id="exampleDataList" placeholder="Type to search..."></input>
            </div>
        </div>
    </div>
  )
}

export default Banner