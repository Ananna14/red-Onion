import React from 'react'
import { useStore } from '../App';
import CalculationCart from './CalculationCart';
import CartItemDelivery from './CartItemDelivery';

const CartItem = () => {
    const { state, dispatch } = useStore();
    // console.log(state);

  return (
    <div className='row container d-flex justify-content-center'>
        {/* 1st-part */}
     

        {/* <div className='col-lg-6'>
            <div className="mt-5 mb-3">
                <h6 className='mb-3 delivery-text'>Edit Delivery Details</h6>
                <input type="text" placeholder='Deliver to door' className='w-75 h-5 input-btn p-2' name="" id="" />
            </div>
            <div className="mb-3">
                <input type="text" placeholder='Road No. 12' className='w-75 h-5 input-btn p-2' name="" id="" />
            </div>
            <div className="mb-3">
                <input type="text" placeholder='Flat site or floor' className='w-75 h-5 input-btn p-2' name="" id="" />
            </div>
            <div className="mb-3">
                <input type="text" placeholder='Business Name' className='w-75 h-5 input-btn p-2' name="" id="" />
            </div>
            <div className="mb-3">
                <input type="type" placeholder='Add Delivery Instructor' className='w-75 input-btn p-2' name="" id="" />
            </div>
                <button className="btn w-75 btn-form">SAVE AND CONTINUE</button>
        </div> */}
        {/* 2nd-part */}
        <div className="col-lg-6 mt-5">
        <p className='text-start'>From<span className='fw-bold'>Gulsan Plaza Restaurant GPR</span><br/>
                        Arriving in 20 - 30 min<br/>
                        107 Rd No 8</p>
                <div>
                   {
                        state.cart.map(item=><CartItemDelivery 
                        item={item}
                        state={state}
                        key={item.id}
                        ></CartItemDelivery>)
                   }
                </div>
                {/* total-calculation */}
                <CalculationCart/>
        </div>

    </div>
  )
}

export default CartItem