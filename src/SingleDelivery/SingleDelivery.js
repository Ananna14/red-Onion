import React from 'react'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import { FaBusAlt } from 'react-icons/fa';
import Button from 'react-bootstrap/Button';
import './SingleDelivery.css'

const SingleDelivery = ({delivery}) => {
    const { img, name, discription } = delivery;
  return (
    <div className="col-lg-4 col-md-6 col-12 d-flex justify-content-center">
          <Card style={{ width: '21rem'}}>
            <Card.Img variant="top" style={{ width: '21rem', height:'21rem'}}  src={img} />
            <Card.Body className="p-3">
               <div className="d-flex ">
                    {/* 1st-start */}
                    <div>
                       <button className="icon-delivery mx-2"><span className='d-flex justify-content-center'><FaBusAlt/></span></button>
                    </div>
                    {/* 2nd-start */}
                    <div className='text-start'>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {discription}
                    </Card.Text>
                    <Button className='btn-delivery'>SHOW MORE</Button>
                    </div>
               </div>
            </Card.Body>
          </Card>
    </div>
  )
}

export default SingleDelivery