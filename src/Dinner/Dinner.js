import React, { useEffect, useState } from 'react'
import SingleDinner from '../SingleDinner/SingleDinner';
import Row from 'react-bootstrap/Row';

const Dinner = () => {
    const [dinners, setDinners] = useState([]);

    useEffect(()=>{
        fetch(`./dinner.json`)
        .then(res => res.json())
        .then(data => setDinners(data))
    })
  return (
    <div className="container">
    <Row xs={1} md={2} className="g-5">
    {
      dinners.map(dinner => <SingleDinner
      key={dinner.img}
      dinner={dinner}
      ></SingleDinner>)
    }
   </Row>
  </div>
  )
}

export default Dinner