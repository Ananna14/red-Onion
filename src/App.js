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
import React, { useContext, useReducer } from 'react';
import { initialState } from './store/store';
import { reducer } from './store/reducer';
import CartItem from './CartItem/CartItem';

export const CountContext = React.createContext();




export const useStore=()=>{
  return useContext(CountContext);
}
function App() {
 const [count, dispatch] = useReducer(reducer, initialState)
  return (
    <CountContext.Provider value={{state: count, dispatch: dispatch}}>
    <div className="App">
      {/* Count - {count} */}
      <BrowserRouter>
    <Header></Header>
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
        <Route path="/cartItem" element={<CartItem/>}></Route>

      </Routes>
      </BrowserRouter>
    </div>
    </CountContext.Provider>
  );
}

export default App;
