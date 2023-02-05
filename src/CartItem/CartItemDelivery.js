import React from 'react'
import { useState } from 'react';
import { useStore } from '../App';
import { INCREMENT_NUMBER, REMOVE_FROM_CART, DECREMENT_NUMBER } from '../store/constant';
// import CalculationCart from './CalculationCart';
import './cartItemDelivery.css';
// import { breakfastsData } from '../FilterData/Breakfast';


const CartItemDelivery = (props) => {
    // console.log(props)
    const {img, name, price, deliveryFee, quantity} = props.item;
    // console.log(props)
    const [num, setNum] = useState(1);
    const {state, dispatch } = useStore();
   
   
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
    {/* <div>
    <table class="table caption-top">
  <caption>List of users</caption>
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
      <th scope="col">Delete</th>
      <th scope="col">Increse &</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td><img src={img} className="img-cart" alt="" /></td>
      <td>{name}</td>
      <td>$ {price}</td>
      <td><button onClick={()=>handleDelete(props.item.id)} className='plus-minus-design trash-color'><h5><i class="fa fa-trash"></i></h5></button></td>
      <td>
      <button onClick={decNum}  className='plus-minus-design trash-color'><i class="fa fa-minus"></i></button>
                <h5>{num}</h5>
                <button onClick={incNum} className='plus-minus-design trash-color'><i class="fa fa-plus"></i></button>
      </td>
    </tr>
  </tbody>
</table>
    </div> */}
   {/* {props.item.length === 0 ? (
    // console.log(props.length)
        <h5>no item</h5>
      ):( */}
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
      {/* )} */}
     {/* <div className='d-flex justify-content-center'>
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
        <button className="btn w-75 btn-form pl-5">PLEASE   PAY</button>
     </div> */}
    </>
      
  )
}

export default CartItemDelivery