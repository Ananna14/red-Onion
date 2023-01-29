import React, { useReducer } from 'react'
import icon from '../images/icon.png'
import { FaShoppingBasket } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { FaCartPlus } from 'react-icons/fa';
import { useStore } from '../App';

const Header = (props) => {
  
  const { state, dispatch } = useStore();
  // console.log(state);

  return (
   <>
   <div className="container-fluid">
      <div className="row p-3 shadow">
        <div className="col-6">
        <Link className="bg-white" to="/">
          <img className='w-25 d-flex justify-content-start' src={icon} alt="" />
        </Link>
        {/* <Link onClick={()=>props.handleShow(false)} className="bg-white" to="/">
          <img className='w-25 d-flex justify-content-start' src={icon} alt="" />
        </Link> */}
        </div>
        <div className="col-6  d-flex justify-content-end">
       
        <Link  className='fs-5 text-decoration-none px-2 cart-color' to="/cartItem"><FaCartPlus/><sup>{state.cart.length}</sup></Link>


      
        {/* <Link onClick={()=>props.handleShow(true)} className='fs-5 text-decoration-none px-2 cart-color' to="/"><FaCartPlus/><sup>{props.count}</sup></Link> */}
       
       <Link to="/login" className='text-decoration-none text-secondary mt-1'>Login</Link>
       
        </div>   
      </div>
    </div>
    
  </>
  )
}

export default Header