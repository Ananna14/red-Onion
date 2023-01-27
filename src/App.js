import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Breakfast from './Breakfast/Breakfast';
import Lunch from './Lunch/Lunch';
import Dinner from './Dinner/Dinner';
import DetailBreakfast from './SingleDetails/DetailBreakfast';
import Login from './Login/Login';
import Header from './Header/Header';
import Register from './Register/Register';
import DetailDinner from './SingleDetails/DetailDinner';
import DetailLunch from './SingleDetails/DetailLunch';
import { useState } from 'react';



function App() {
//   const [shoppingCart, setShoppingCart] = useState([]);

//   const addToCart=(data)=>{
// console.log(data)
//   }
const[cart, setCart] = useState([]);
  return (
    <div className="App">
      <BrowserRouter>
    <Header count={cart.length}/>
      <Routes>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/register" element={<Register/>}></Route>
     
        <Route path="/" element={<Breakfast/>}></Route>
        <Route path="/breakfast" element={<Breakfast/>}></Route>
        <Route path="/lunch" element={<Lunch/>}></Route>
        <Route path="/dinner" element={<Dinner/>}></Route>
        <Route path="/details/:id" element={<DetailBreakfast/>}></Route>
        <Route path="/lunch/:id" element={<DetailLunch/>}></Route>
        <Route path="/dinner/:id" element={<DetailDinner/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
