import React from 'react';
import useAuth from '../hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import './home.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from './Navbar';
import ProductCard from './ProductCard';
import products from './../products';
import { Cart } from './Cart';
import Checkout from './Checkout';
import OrderPlaced from './OrderPlaced';

const Home = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div className='home-container'>
        <Navbar />
      <h1>Welcome {user ? user.name : 'Guest'}!</h1>
    {user ? (
        <>
          <button onClick={handleLogout} className='buttona'>Logout</button>
          <p>Email: {user.email}</p>
        </>
      ) : (
        <button onClick={() => navigate('/login')} className='buttona'>Login</button>
      )}
      
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexWrap: "wrap",
          backgroundColor:"black",
        }}
      >
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      
    </div>
  );
};

export default Home;
