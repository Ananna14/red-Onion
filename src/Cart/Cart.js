import React from 'react'

const Cart = (props) => {

    const {cart} = props;
    let total = 0;
    for(const breakfast of cart){
        total = total + breakfast.price;
    }
  return (
    <div>
        <h3>Order Summary</h3>
      <h5>Items Orderd:{props.cart.length}</h5>
      <p>Total: ${total}</p>
    </div>
  )
}

export default Cart