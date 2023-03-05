import React, { useEffect, useState } from 'react'
import { Row } from 'react-bootstrap';
import logo from "../images/line-one-about.png"
import SpecialRecipe from '../SpecialRecipe/SpecialRecipe';
import './SpecialItem.css'

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
// import React from 'react'
// import { Link } from 'react-router-dom'
// import logo from "../images/line-one-about.png"
// import five from "../images/special-item/image-5.jpg"
// import seven from "../images/special-item/image-7.jpg"
// import six from "../images/special-item/image-6.jpg"
// import four from "../images/special-item/image-4.jpg"
// import twenty from "../images/special-item/image-21.jpg"
// import therty from "../images/special-item/image-31.jpg"
// import './SpecialItem.css'

// const SpecialItem = () => {
//   return (
//     <div>
//         <div className="text-start my-5 container">
//             <h2 className='text-about'>Special Recipes</h2>
//             <h3>TASTE OF PRECIOUS</h3>
//             <img src={logo} alt="" />
//             <p className='mt-3'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br/>
//             Lorem Ipsum has been the industry's stan</p>
//         </div>
//         {/* grid-eight-added-start */}
//         <div class="container">
//           <div class="row bg-image row-cols-3">
//             {/* 1st-part */}
//             <div class="col"><img className='middle-img'  src={five} alt="" /></div>
//             <div class="col hot-img">
//               <h4>Hot dog 5</h4>
//               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, aliquam?</p>
//               <h2 className='price'>$2.65</h2>
//               <Link to="/" className="order-btn rounded-pill">ORDER NOW</Link>
//             </div>
//             <div class="col"><img className='middle-img' src={seven} alt="" /></div>
//             {/* 2nd-part */}
//             <div class="col">
//               <div class="col hot-img">
//                 <h4>Hot dog 5</h4>
//                 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, aliquam?</p>
//                 <h2 className='price'>$2.65</h2>
//                 <Link to="/" className="order-btn rounded-pill">ORDER NOW</Link>
//               </div>
//             </div>
//             <div class="col"><img className='middle-img' src={six} alt="" /></div>
//             <div class="col">
//             <div class="col hot-img">
//                 <h4>Hot dog 5</h4>
//                 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, aliquam?</p>
//                 <h2 className='price'>$2.65</h2>
//                 <Link to="/" className="order-btn rounded-pill">ORDER NOW</Link>
//               </div>
//             </div>
//             {/* 3rd-part */}
//             <div class="col"><img className='middle-img' src={four} alt="" /></div>
//               <div class="col">
//                 <div class="col hot-img">
//                   <h4>Hot dog 5</h4>
//                   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, aliquam?</p>
//                   <h2 className='price'>$2.65</h2>
//                   <Link to="/" className="order-btn rounded-pill">ORDER NOW</Link>
//                 </div>
//               </div>
//             <div class="col"><img  className='middle-img' src={twenty} alt="" /></div>
//             {/* 4th-part */}
//             <div class="col">
//               <div class="col hot-img">
//                 <h4>Hot dog 5</h4>
//                 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, aliquam?</p>
//                 <h2 className='price'>$2.65</h2>
//                 <Link to="/" className="order-btn rounded-pill">ORDER NOW</Link>
//               </div>
//             </div>
//               <div class="col">
//                 <img className='middle-img' src={therty} alt="" />
//               </div>
//             <div class="col">
//               <div class="col hot-img">
//                 <h4>Hot dog 5</h4>
//                 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, aliquam?</p>
//                 <h2 className='price'>$2.65</h2>
//                 <Link to="/" className="order-btn rounded-pill">ORDER NOW</Link>
//               </div>
//             </div>
//           </div>
//         </div>
//          {/* grid-eight-added-end */}
//     </div>
//   )
// }

// export default SpecialItem