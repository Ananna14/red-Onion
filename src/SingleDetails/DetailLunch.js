import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { lunchData } from '../FilterData/lunchData';
import { FaCartPlus } from 'react-icons/fa';
import './DetailLunch.css'

const DetailLunch = () => {
    const {id} = useParams();
    const [bodyData, setBodyData] = useState(null);

    useEffect(()=>{
      const filtered =lunchData.filter(lunch => lunch.id == id)
      if(filtered.length){
        setBodyData(filtered[0]);
      }
    },[])
  return (
  <div className='mt-5'>
  {
    bodyData !== null &&
    <div class="container">
      <div class="row mt-5">
        <div class="col-12 col-lg-6 p-5 mt-5">
          <p className="card-title fs-2 fw-bold text-start">{bodyData.name}</p>
          <p className="card-text text-start">{bodyData.details}</p>
          <p className='fs-2 price-text text-start'>${bodyData.price}</p>
          {/* btn-added-start */}
         <div className='text-start'>
            <button className="mx-1 single-btn p-1 rounded"><span className="mx-1"><FaCartPlus/></span><span  className="mx-1">ADD</span></button>
            <button className="mx-1 single-btn p-1 rounded blue-btn"><span  className="mx-1">ADD MORE</span></button>
         </div>
          {/* btn-added-end */}
        </div>
        <div class="col-12 col-lg-6">
          <img className='w-100' src={bodyData.img} alt="" />
        </div>
      </div>
    </div>
  }
  </div>
  )
}

export default DetailLunch