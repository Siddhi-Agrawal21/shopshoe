import React from 'react';
import './App.css';
import {Route, Routes} from 'react-router-dom'; 
import Navbar from "./components/Navbar.js";
import Home from './components/Home';
import About from './components/About';
import Products from './components/Products';
import Cart from './components/Cart';
import Details from './components/Details';
import Payment from './components/Payment';
import {
  BrowserRouter,
} from "react-router-dom";



function App() {
  return (
   
<React.Fragment>
  <Navbar />
  
 <Routes>
  <Route exact path="/" element={<Home/>} />
  <Route exact path="/about" element={<About/>} />
  <Route exact path="/products" element={<Products/>} />
  <Route exact path="/payment" element={<Payment/>} />
  <Route exact path="/details/:id" element={<Details/>} />
 
  
 </Routes>
 {/* <Route exact path="/cart" component={<Cart/>} /> */}

 
</React.Fragment> 
  );
}

export default App;
