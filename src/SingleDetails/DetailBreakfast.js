import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { breakfastsData } from '../FilterData/Breakfast';
// import breakfastDetails from './breakfast.json'
import { FaCartPlus } from 'react-icons/fa';
import { FaPlus } from 'react-icons/fa';
import { FaMinus } from 'react-icons/fa';
import './DetailLunch.css'

const DetailBreakfast = () => {
  const {id} = useParams();
  const [bodyData, setBodyData] = useState(null);

useEffect(()=>{
  const filtered =breakfastsData.filter(breakfast => breakfast.id == id)
  if(filtered.length){
    setBodyData(filtered[0]);
  }
},[])
// console.log(bodyData)

// 2nd-way
//   useEffect(()=>{
// if(id){
//   const blogData = breakfastsData.find((breakfast)=> breakfast.id === id);
//   setBodyData(blogData);
// }
// },[id])
// console.log(bodyData)
 
  return (
  <div className='mt-5'>
  {
    bodyData !== null &&
    <div className="container">
    <div className="row">
      {/* 1st-part */}
      <div className="col-12 col-lg-6 p-5 mt-5">
        <p className="card-title fs-2 fw-bold text-start">{bodyData.name}</p>
        <p className="card-text text-start">{bodyData.details}</p>
        {/* icon-added-start */}
        {/* <div className='d-flex'> */}
          {/* <div> */}
            
          {/* </div> */}
          <div className='d-flex'>
            <div>
              <h6 className='fs-2 price-text text-start'>${bodyData.price}</h6>
            </div>
              <div className='rounded-pill d-flex icon-added align-items-center'>
              <h6 className=''><span className='px-4 py-1'><FaPlus/></span></h6>
              <h6 className=''><span className="px-4 py-1"><FaMinus/></span></h6>
            </div>
          </div>
        {/* </div> */}
        {/* icon-added-end */}
   
          {/* btn-added-start */}
          <div className='text-start mt-4'>
            <button className="mx-1 single-btn p-1 rounded-pill px-3"><span className="mx-1"><FaCartPlus/></span><span  className="mx-1">ADD</span></button>
           <Link to="/"><button className="mx-1 single-btn p-1 rounded-pill px-3 blue-btn"><span  className="mx-1">ADD MORE</span></button></Link>
         </div>
          {/* btn-added-end */}
      </div>
      {/* 2nd-part */}
      <div className="col-12 col-lg-6">
        <img className='w-100' src={bodyData.img} alt="" />
      </div>
    </div>
</div>
  }
  </div>
  )
}

export default DetailBreakfast