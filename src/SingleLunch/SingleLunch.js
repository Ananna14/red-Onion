import React from 'react'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
import { FaCartPlus } from 'react-icons/fa';

const SingleLunch = (props) => {
    const { price, img, name, discription, id } = props.lunch;
  return (
    <div className="col-lg-4 col-md-6 col-12">
         <Col>
          <Card style={{ width: '20rem' }} className="inner">
            <Link to={`/lunch/${id}`}>
            <Card.Img variant="top" src={img} className="inner" />
            </Link>
            <div className='d-flex justify-content-end'>
                <button
                onClick={() => props.handleAddToCart(props.lunch)}
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

export default SingleLunch