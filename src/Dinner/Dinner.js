import React, { useEffect, useState } from 'react'
import SingleDinner from '../SingleDinner/SingleDinner';
import Row from 'react-bootstrap/Row';
import Cart from '../Cart/Cart';

const Dinner = () => {
    const [dinners, setDinners] = useState([]);
    const[cart, setCart] = useState([]);

    useEffect(()=>{
        fetch(`./dinner.json`)
        .then(res => res.json())
        .then(data => setDinners(data))
    },[])
    const handleAddToCart=(breakfast)=>{
      // console.log(breakfast);
      const newCart = [...cart, breakfast];
      setCart(newCart);
    }
  return (
   <>
    {/* 1st-part */}
    <div>
      <Cart cart={cart}></Cart>
    </div><br/><br/>
   {/* 1st-2nd */}
    <div className="container">
    <Row xs={1} md={2} className="g-5">
    {
      dinners.map(dinner => <SingleDinner
      key={dinner.img}
      handleAddToCart={handleAddToCart}
      dinner={dinner}
      ></SingleDinner>)
    }
   </Row>
  </div>
   </>
  )
}

export default Dinner