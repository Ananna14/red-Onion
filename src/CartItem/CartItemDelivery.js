import React from 'react'
import './cartItemDelivery.css'

const CartItemDelivery = (props) => {
    // console.log(props)
    // const { state, dispatch } = useStore();
    const {img, name, price, quantity} = props.item;
    
    // console.log(state);
  return (
    <div className="res-plaza">
        <p className='text-start'>FromGulsan Plaza Restaurant GPR<br/>
                        Arriving in 20 - 30 min<br/>
                        107 Rd No 8</p>
       <div className='row align-items-center item-design py-2 my-3'>
         
          <div className="col-3">
            <img src={img} className="img-cart" alt="" />
          </div>
          <div className="col-3">
            <p>{name}</p>
            <p>{price}</p>
            </div>
            <div className="col-1">
              <h5><i class="fa fa-trash"></i></h5>
            </div>
            <div className="col-5">
             <div className='d-flex align-items-center justify-content-between rounded-pill border-added px-3'>
              <button className='border-area'><i class="fa fa-minus"></i></button>
                <h5 className=''>0</h5>
                <button className='border-area'><i class="fa fa-plus"></i></button>
             </div>
            </div>
        </div>
     </div>
  )
}

export default CartItemDelivery