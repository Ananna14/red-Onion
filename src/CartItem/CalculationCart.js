import React, { useState } from 'react'
import { useStore } from '../App';
import { DECREMENT_NUMBER, INCREMENT_NUMBER } from '../store/constant';

const CalculationCart = (props) => {
    // const {price, quantity} = props.item;
    // console.log(props)
    const {state, dispatch } = useStore();
    // const [num, setNum] = useState(1);

    // const incNum = () =>{
    //     setNum(num+1)
    //   }
    //   const decNum = () =>{
    //     if(num>1){
    //       setNum(num-1)
    //     }else{
    //       setNum(1)
    //     }
    //   }
    const increment = (id)=>{
      dispatch({type: INCREMENT_NUMBER, paylod: id});
    }
    // const decrement = (id)=>{
    //   dispatch({type: DECREMENT_NUMBER, paylod: id});
    // }
  return (
    <div>
            <div className='d-flex justify-content-center'>
          <p className='text-start'>Subtotal<br/>
            Tax<br/>
            Delivery Fee<br/>
            Total<br/>
          </p>
          <p className='cartNumber'>${increment}<br/>
            {/* {quantity}<br/> */}
            {/* {deliveryFee}<br/> */}
            {/* {price * num + num + deliveryFee}<br/> */}
          </p>
      </div>
     <div className='d-flex justify-content-end'>
        <button className="btn w-75 btn-form pl-5">PLEASE   PAY</button>
     </div>
    </div>
  )
}

export default CalculationCart