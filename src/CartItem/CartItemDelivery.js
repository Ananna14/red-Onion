import React from 'react'
import { useState } from 'react';
import './cartItemDelivery.css'

const CartItemDelivery = (props) => {
    // console.log(props)
    const {img, name, price, deliveryFee} = props.item;
    const [num, setNum] = useState(1);

    const incNum = () =>{
      setNum(num+1)
    }
    const decNum = () =>{
      if(num>1){
        setNum(num-1)
      }else{
        setNum(1)
      }
    }
  return (
    <>
      <div className="res-plaza">
        <div className='row align-items-center item-design py-2 my-3'>
         
          <div className="col-3">
            <img src={img} className="img-cart" alt="" />
          </div>
          <div className="col-3">
            <p>{name}</p>
            <h6 className='trash-color'>$ {price}</h6>
            </div>
            <div className="col-1">
              <button className='plus-minus-design trash-color'><h5><i class="fa fa-trash"></i></h5></button>
            </div>
            <div className="col-5">
             <div className='d-flex align-items-center justify-content-between rounded-pill border-added px-3'>
                <button onClick={decNum}  className='plus-minus-design trash-color'><i class="fa fa-minus"></i></button>
                <h5>{num}</h5>
                <button onClick={incNum} className='plus-minus-design trash-color'><i class="fa fa-plus"></i></button>
             </div>
            </div>
        </div> 
        <div className='d-flex justify-content-center'>
          <p className='text-start'>Subtotal<br/>
            Tax<br/>
            Delivery Fee<br/>
            Total<br/>
          </p>
          <p className='cartNumber'>${price * num}<br/>
            {num}<br/>
            {deliveryFee}<br/>
            {price * num + num + deliveryFee}<br/>
          </p>
      </div>
     <div className='d-flex justify-content-end'>
        <button className="btn w-75 btn-form pl-5">PLEASE PAY</button>
     </div>
     </div>

   
    </>
      
  )
}

export default CartItemDelivery