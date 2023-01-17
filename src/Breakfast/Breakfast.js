import React, { useEffect, useState } from 'react'
import SingleBreakfast from '../SingleBreakfast/SingleBreakfast';
import Row from 'react-bootstrap/Row';

const Breakfast = () => {
  const [breakfasts, setBreakfasts ] = useState([]);

  useEffect(()=>{
    fetch("./breakfast.json")
    .then(res => res.json())
    .then(data => setBreakfasts(data))

  })
  return (
    <div className="container">
      <Row xs={1} md={2} className="g-5">
      {
        breakfasts.map(breakfast => <SingleBreakfast
        key={breakfast.img}
        breakfast={breakfast}
        ></SingleBreakfast>)
      }
     </Row>
    </div>
  )
}

export default Breakfast