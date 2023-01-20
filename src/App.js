import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Breakfast from './Breakfast/Breakfast';
import Lunch from './Lunch/Lunch';
import Dinner from './Dinner/Dinner';
import Home from './Home/Home';
import TwoFooterAdd from './TwoFooterAdd/TwoFooterAdd';
import DetailBreakfast from './SingleDetails/DetailBreakfast';



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
        <Route path="/details/:id" element={<DetailBreakfast/>}></Route>
      
       
      </Routes>
      <TwoFooterAdd/>
      </BrowserRouter>
    </div>
  );
}

export default App;
