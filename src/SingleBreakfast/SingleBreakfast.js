import React from 'react'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
import './SingleBreakfast.css'

const SingleBreakfast = ({breakfast}) => {
    const { price, img, name, discription, id } = breakfast;
  return (
    <div className="col-lg-4 col-md-6 col-12">
         <Link to={`/details/${id}`}>
          <Col>
            <Card style={{ width: '20rem' }}  className="inner">
              <Card.Img variant="top" src={img} className="inner" />
              <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                  {discription}
                </Card.Text>
                <h2 className='d-flex justify-content-start price-text'>{price}</h2>
              </Card.Body>
            </Card>
          </Col>        
         </Link>
    </div>
  )
}

export default SingleBreakfast