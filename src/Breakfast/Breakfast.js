import React, { useEffect, useState } from 'react'
import SingleBreakfast from '../SingleBreakfast/SingleBreakfast';
import Row from 'react-bootstrap/Row';
import Cart from '../Cart/Cart';

const Breakfast = () => {
  const [breakfasts, setBreakfasts ] = useState([]);
  const[cart, setCart] = useState([]);

  useEffect(()=>{
    fetch("./breakfast.json")
    .then(res => res.json())
    .then(data => setBreakfasts(data))
  }, [])
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
        breakfasts.map(breakfast => <SingleBreakfast
        key={breakfast.img}
        breakfast={breakfast}
        handleAddToCart={handleAddToCart}
        ></SingleBreakfast>)
      }
     </Row>
    </div>
   </>
  )
}

export default Breakfast