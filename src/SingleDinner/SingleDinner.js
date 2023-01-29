import React from 'react'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
import { FaCartPlus } from 'react-icons/fa';
import { useContext } from 'react';
import { CountContext, useStore } from '../App';
import { ADD_TO_CART } from '../store/constant';

const SingleDinner = (props) => {
  
    const { price, img, name, discription, id } = props.dinner;
    // const countContext = useContext(CountContext);
    // console.log(countContext)

    const {state, dispatch} = useStore()
    
   const handleAddToCard = ()=>{
    dispatch({type: ADD_TO_CART, paylod: props.dinner})
   }

  return (
    <div className="col-lg-4 col-md-6 col-12 d-flex justify-content-center">
         <Col>
          <Card style={{ width: '21rem' }} className="inner">
           <Link  to={`/dinner/${id}`}>
           <Card.Img variant="top" src={img} className="inner" />
           </Link>
            <div className='d-flex justify-content-end'>
                <button
                onClick={handleAddToCard}
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
        </Col>
    </div>
  )
}

export default SingleDinner