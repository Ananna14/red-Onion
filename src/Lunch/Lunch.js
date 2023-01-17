import React, { useEffect, useState } from 'react'
import Row from 'react-bootstrap/Row';
import SingleLunch from '../SingleLunch/SingleLunch';

const Lunch = () => {
    const [lunchs, setLunches] = useState([]);

    useEffect(()=>{
        fetch("./lunch.json")
        .then(res => res.json())
        .then(data => setLunches(data))
    })
  return (
    <div className="container">
      <Row xs={1} md={2} className="g-5">
      {
        lunchs.map(lunch => <SingleLunch
        key={lunch.img}
        lunch={lunch}
        ></SingleLunch>)
      }
     </Row>
    </div>
  )
}

export default Lunch