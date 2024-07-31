import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Home from './components/Home';
import {Cart} from './components/Cart.js';
import { ShopContextProvider } from './context/shop-context'; // Import your context provider
import 'bootstrap/dist/css/bootstrap.min.css';
import Checkout from './components/Checkout';
import OrderPlaced from './components/OrderPlaced';

function App() {
  return (
    <ShopContextProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path='/cart' element={<Cart/>} />
          <Route path='/checkout' element={<Checkout/>} />
          <Route path='/placed' element={<OrderPlaced />} />
          
        </Routes>
      </Router>
    </ShopContextProvider>
  );
}

export default App;

