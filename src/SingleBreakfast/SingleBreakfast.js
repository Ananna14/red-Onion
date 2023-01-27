import React from 'react'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { FaCartPlus } from 'react-icons/fa';
import './SingleBreakfast.css'

const SingleBreakfast = (props,addToCart) => {
  // console.log(props);
    const { price, img, name, discription, id } = props.breakfast;
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
                onClick={() => props.handleAddToCart(props.breakfast)}
                className='btn-color'><FaCartPlus/></button>
                {/* <button
                // onClick={() => props.handleAddToCart(props.breakfast)}
                className='btn-color' onClick={()=>props.addToCart(props.breakfast)}><FaCartPlus/></button> */}
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