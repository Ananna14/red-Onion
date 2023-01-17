import React from 'react'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';

const SingleLunch = ({lunch}) => {
    const { price, img, name, discription } = lunch;
  return (
    <div className="col-lg-4 col-md-6 col-12">
         <Col>
          <Card style={{ width: '20rem' }} className="inner">
            <Card.Img variant="top" src={img} className="inner" />
            <Card.Body>
              <Card.Title>{name}</Card.Title>
              <Card.Text>
                {discription}
              </Card.Text>
              <h2 className='d-flex justify-content-start text-danger'>{price}</h2>
            </Card.Body>
          </Card>
        </Col>
    </div>
  )
}

export default SingleLunch