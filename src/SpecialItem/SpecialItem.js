import React from 'react'
import logo from "../images/line-one-about.png"

const SpecialItem = () => {
  return (
    <div>
        <div className="text-start my-5 container">
            <h2 className='text-about'>Special Recipes</h2>
            <h3>TASTE OF PRECIOUS</h3>
            <img src={logo} alt="" />
            <p className='mt-3'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br/>
            Lorem Ipsum has been the industry's stan</p>
        </div>
    </div>
  )
}

export default SpecialItem