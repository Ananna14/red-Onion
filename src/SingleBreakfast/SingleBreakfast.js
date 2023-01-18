import React from 'react'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
import './SingleBreakfast.css'
import { FaCartPlus } from 'react-icons/fa';

const SingleBreakfast = (props) => {
  // console.log(props);
    const { price, img, name, discription, id } = props.breakfast;
  return (
    <div className="col-lg-4 col-md-6 col-12">
          <Col>
            <Card style={{ width: '20rem' }}  className="inner">
            {/* <Link> */}
              <Card.Img variant="top" src={img} className="inner" />
              <div className='d-flex justify-content-end'>
                <button
                onClick={() => props.handleAddToCart(props.breakfast)}
                className='btn-color'><FaCartPlus/></button>
              </div><br/>
            {/* </Link> */}
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

export default SingleBreakfast