import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Homepage from './components/Homepage';
import Login from './components/Login';
import Aboutus from './components/Aboutus'; 
import Menu from './components/Menue'; 
import NorthIndianFood from './components/north_indian_fodd'; 
import SouthIndianFood from './components/south_indian_food'; 
import WestIndianFood from './components/west_indian_food'; 
import EastIndianFood from './components/east_indian_food'; 
import Contact from './components/contact'; 
import Menue from './components/Menue';
import Order from './components/Order_form';
import Veg_food from './components/vegfood';
import Non_veg from './components/non-veg';
import Sea_food from './components/sea_food';
import Fast_food from './components/fast_food';
import Chinies from './components/chinies_food';
import React, { useState } from 'react';
const App = () => {
  const [cartItems, setCartItems] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const addToCart = (item) => {
        setCartItems([...cartItems, item]);
        setTotalPrice(totalPrice + item.price);
    };
  return (
    <Router>
      <>
        <Header />
        <Routes>
          <Route path="/" exact element={<Homepage />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/aboutus" element={<Aboutus />} /> 
          <Route path="/Menue" element={<Menue />} /> 
          <Route path="/north_indian_food" element={<NorthIndianFood />} />
          <Route path="/south_indian_food" element={<SouthIndianFood />} />
          <Route path="/west_indian_food" element={<WestIndianFood />} />
          <Route path="/east_indian_food" element={<EastIndianFood />} /> 
          <Route path="/contact" element={<Contact />} />
          <Route path="/Order_form" element={<Order />} />
          <Route path="/vegfood" element={<Veg_food />} />
          <Route path="/non-veg" element={<Non_veg />} />
          <Route path="/sea_food" element={<Sea_food />} />
          <Route path="/fast_food" element={<Fast_food/>} />
          <Route path="/chinies_food" element={<Chinies />} />
        </Routes>
        <Footer />
      
      </>
    </Router>
  );
}

export default App;
