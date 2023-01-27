import React, { useEffect, useState } from 'react'
import SingleBreakfast from '../SingleBreakfast/SingleBreakfast';
import Row from 'react-bootstrap/Row';
import Cart from '../Cart/Cart';
import Nav from '../Nav/Nav';
import Delivery from '../Delivery/Delivery';
import Footer from '../Footer/Footer';
import { breakfastsData } from '../FilterData/Breakfast';

const Breakfast = () => {
  // const [breakfasts, setBreakfasts ] = useState([]);
  const [breakfasts, setBreakfasts ] = useState(breakfastsData);
  // console.log(breakfasts)
  const[cart, setCart] = useState([]);

  // useEffect(()=>{
  //   fetch("./breakfast.json")
  //   .then(res => res.json())
  //   .then(data => setBreakfasts(data))
  // }, [])
 
  const handleAddToCart=(breakfast)=>{
    console.log(breakfast);
    const newCart = [...cart, {...breakfast, quantity: 1}];
    setCart(newCart);
  }
// const [item, setItem] = useState([]);

// const addToCart = (data)=>{
//   console.log(item);
//   // const newCart = [...item, data];
//   setCart([...item, data]);
// }
const [showCart, setShowCart] = useState(false);
const handleShow=(value)=>{
setShowCart(value);
}
  return (
   <>
   <Nav count={cart.length} handleShow={handleShow}></Nav>
   {
    showCart ? 
     <Cart cart={cart}></Cart> :
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
   }
   
 
    <Delivery/>
    <Footer/>
   </>
  )
}

export default Breakfast