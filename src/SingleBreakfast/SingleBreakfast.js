import React from 'react'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { FaCartPlus } from 'react-icons/fa';
import './SingleBreakfast.css'
import { ADD_TO_CART } from '../store/constant';
import { useStore } from '../App';

const SingleBreakfast = (props) => {
  // console.log(props);
    const { price, img, name, discription, id } = props.breakfast;

    const {state, dispatch } = useStore();
    const handleAddToCart=()=>{
      dispatch({type: ADD_TO_CART, paylod: props.breakfast})
    }

  return (
    <div className="col-lg-4 col-md-6 col-12 d-flex justify-content-center">
      {/* <Col> */}
      <Card style={{ width: '21rem' }}  className="inner">
            <Link to={`/details/${id}`}>
              <Card.Img variant="top" src={img} className="inner" />
              {/* carousel */}
            </Link>
            <div className='d-flex justify-content-end'>
              {/* btn-added */}
                <button
                onClick={handleAddToCart}
                className='btn-color'><FaCartPlus/></button>
            
              </div><br/>
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                  {discription}
                </Card.Text>
                <h2 className='d-flex justify-content-start price-text'>${price}</h2>
              </Card.Body>
            </Card>
      
      {/* </Col> */}
    </div>
  )
}

export default SingleBreakfast