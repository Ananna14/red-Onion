import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Breakfast from './Breakfast/Breakfast';
import Lunch from './Lunch/Lunch';
import Dinner from './Dinner/Dinner';
import Home from './Home/Home';
import Footer from './Footer/Footer';
import Details from './BreakfastDetails/Details';
import Delivery from './Delivery/Delivery';
import TwoFooterAdd from './TwoFooterAdd/TwoFooterAdd';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Home/>
      <Routes>
        <Route path="/" element={<Breakfast/>}></Route>
        <Route path="/breakfast" element={<Breakfast/>}></Route>
        <Route path="/lunch" element={<Lunch/>}></Route>
        <Route path="/dinner" element={<Dinner/>}></Route>
        <Route path="/dinner" element={<Delivery/>}></Route>
        <Route path="/details/:id" element={<Details/>}></Route>
      
       
      </Routes>
      <TwoFooterAdd/>
      </BrowserRouter>
    </div>
  );
}

export default App;
