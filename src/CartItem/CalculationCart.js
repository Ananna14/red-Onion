import React, { useState } from 'react'
import { useStore } from '../App';

const CalculationCart = (props) => {
    const {state, dispatch } = useStore();
    // console.log(state)

   const calculateTotal = ()=>{
    let total = 0;
    let tax = 0;
    let subTotal = 0;
    let deliveryFee= 0;
    state.cart.forEach(totalItem=>{
      total += totalItem.price * totalItem.quantity;
      subTotal = total + deliveryFee + tax;
      tax = 10;
      deliveryFee= 9.9;
     })
    return {total, tax, deliveryFee, subTotal}
   }

  return (
    <>
    {state.cart.length === 0 ? (
      <h2>You Have No Items</h2>
    ) :(
      <div>
            <div className='d-flex justify-content-center'>
          <p className='text-start'>Subtotal<br/>
            Tax<br/>
            Delivery Fee<br/>
            <span className='fw-bold'>Total</span><br/>
          </p>
          <p className='cartNumber'>${calculateTotal().total}<br/>
            ${calculateTotal().tax}<br/>
            ${calculateTotal().deliveryFee}<br/>
            ${calculateTotal().subTotal}<br/>
          </p>
      </div>
     <div className=''>
     <button className="btn w-75 btn-form mb-5">PLEASE   PAY</button>
     </div>
    </div>
    )}
    </>
  )
}

export default CalculationCart