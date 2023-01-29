import React from 'react'
import { useStore } from '../App';

const CartItemDelivery = (props) => {
    // console.log(props)
    // const { state, dispatch } = useStore();
    const {img, name, price, quantity} = props.item;
    
    // console.log(state);
  return (
    <div>
       <div>
       <h1>{name}</h1>
       </div>
    </div>
  )
}

export default CartItemDelivery