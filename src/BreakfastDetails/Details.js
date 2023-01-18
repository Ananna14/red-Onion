import React, { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import { useParams } from 'react-router-dom';

const Details = () => {
    const [details, setDetails] = useState([]);
    // const {id} = useParams();

    useEffect(()=>{
        fetch(`./breakfast.json`)
        .then(res => res.json())
        .then(data => setDetails(data))
      })
  return (
    <div className="col-lg-4 col-md-6 col-12">
      <h1>{details.length}</h1>
          <Col>
            <Card style={{ width: '20rem' }}  className="inner">
              <Card.Img variant="top" src={details.img} className="inner" />
              <Card.Body>
                <Card.Title>{details.name}</Card.Title>
                <Card.Text>
                  {details.discription}
                </Card.Text>
                <h2 className='d-flex justify-content-start price-text'>{details.price}</h2>
              </Card.Body>
            </Card>
          </Col>        
    </div>
  )
}

export default Details