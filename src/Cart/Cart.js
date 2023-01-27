import React from 'react'

const Cart = ({cart}) => {
  return (
    <div>
      {
        cart.map((cartItem, cartindex)=>{
          return (
            <div>
              <img src={cartItem.img} width={40} alt="" />
              <span>{cartItem.name}</span>
              <button>-</button>
              <span>{cartItem.quantity}</span>
              <button>+</button>
              <span>{cartItem.price}</span>
            </div>
          )
        })
      }
    </div>
  )
}

export default Cart
// import React from 'react'
// const Cart = (props) => {

//     const {cart} = props;
//     let total = 0;
//     for(const breakfast of cart){
//         total = total + breakfast.price;
//     }
//   return (
//     <div>
//         <h3>Order Summary</h3>
//       <h5>Items Orderd:{props.cart.length}</h5>
//       <p>Total: ${total}</p>
//     </div>
//   )
// }

// export default Cart