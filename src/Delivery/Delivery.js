import React, { useEffect, useState } from 'react'
import SingleDelivery from '../SingleDelivery/SingleDelivery';
import Row from 'react-bootstrap/Row';

const Delivery = () => {
  const[deliverys, setDeliverys] = useState([]);

  useEffect(()=>{
    fetch(`./delivery.json`)
    .then(res => res.json())
    .then(data => setDeliverys(data))
  })
  return (
    <>
      <div>
        {/* 1st-part-start */}
        <div className='text-start container my-5'>
            <h3>Why Choose Us</h3>
            <p>Barton waited twenty always repair in within we do.<br/> an delighted offending curiosity my is dash woods at. Boy<br/> prosperous increasing surrounded.</p>
        </div>
        {/* 1st-part-end */}
      </div>
      <div className="container">
      <Row xs={1} md={2} className="g-5">
      {
        deliverys.map(delivery=><SingleDelivery
        delivery={delivery}
        key={delivery.img}
        ></SingleDelivery>)

      }
      </Row>
      </div>
    </>
  )
}

export default Delivery