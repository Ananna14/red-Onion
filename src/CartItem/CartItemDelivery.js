import React from 'react'
import { useState } from 'react';
import { useStore } from '../App';
import { INCREMENT_NUMBER, REMOVE_FROM_CART, DECREMENT_NUMBER } from '../store/constant';
// import CalculationCart from './CalculationCart';
import './cartItemDelivery.css';
// import { breakfastsData } from '../FilterData/Breakfast';


const CartItemDelivery = (props) => {
    const {img, name, price, deliveryFee, quantity} = props.item;
    // console.log(props)

    const {state, dispatch } = useStore();
   
    const handleDelete = (id)=>{
      // e.preventDefault()
      // console.log(id)
      dispatch({type:REMOVE_FROM_CART, paylod: id})
    }
    const increment = (id)=>{
      dispatch({type: INCREMENT_NUMBER, paylod: id});
    }
    const decrement = (id)=>{
      dispatch({type: DECREMENT_NUMBER, paylod: id});
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
              <button onClick={()=>handleDelete(props.item.id)} className='plus-minus-design trash-color'><h5><i class="fa fa-trash"></i></h5></button>
            </div>
            <div className="col-5">
             <div className='d-flex align-items-center justify-content-between rounded-pill border-added px-3'>
                <button onClick={()=>decrement(props.item.id)}  className='plus-minus-design trash-color'><i class="fa fa-minus"></i></button>
                <h5>{quantity}</h5>
                <button onClick={()=>increment(props.item.id)} className='plus-minus-design trash-color'><i class="fa fa-plus"></i></button>
             </div>
            </div>
        </div> 
    
     </div>
    </>
      
  )
}

export default CartItemDelivery