import React, { useEffect, useState } from 'react'
import SingleDinner from '../SingleDinner/SingleDinner';
import Row from 'react-bootstrap/Row';
import Cart from '../Cart/Cart';
import Nav from '../Nav/Nav';
import Delivery from '../Delivery/Delivery';
import Footer from '../Footer/Footer';
import { dinnerData } from '../FilterData/DinnerData';


const Dinner = () => {
    const [dinners, setDinners ] = useState(dinnerData);
    const[cart, setCart] = useState([]);

    // useEffect(()=>{
    //     fetch(`./dinner.json`)
    //     .then(res => res.json())
    //     .then(data => setDinners(data))
    // },[])
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
    <Delivery/>
    <Footer/>
   </>
  )
}

export default Dinner