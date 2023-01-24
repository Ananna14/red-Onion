import React, { useEffect, useState } from 'react'
import Row from 'react-bootstrap/Row';
import Cart from '../Cart/Cart';
import Delivery from '../Delivery/Delivery';
import { lunchData } from '../FilterData/lunchData';
import Footer from '../Footer/Footer';
import Nav from '../Nav/Nav';
import SingleLunch from '../SingleLunch/SingleLunch';

const Lunch = () => {
    const [lunchs, setLunches] = useState(lunchData);
    const[cart, setCart] = useState([]);

   
    const handleAddToCart=(breakfast)=>{
      // console.log(breakfast);
      const newCart = [...cart, breakfast];
      setCart(newCart);
    }
  return (
    <>
    <Nav/>
     {/* 1st-part */}
     <div>
     <Cart cart={cart}></Cart>
   </div><br/><br/>
    <div className="container">
      <Row xs={1} md={2} className="g-5">
      {
        lunchs.map(lunch => <SingleLunch
        key={lunch.img}
        lunch={lunch}
        handleAddToCart={handleAddToCart}
        ></SingleLunch>)
      }
     </Row>
    </div>
    <Delivery/>
    <Footer/>
    </>
  )
}

export default Lunch