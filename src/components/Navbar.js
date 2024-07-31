import React from "react";
import { ShopContext } from "../context/shop-context";
import { Link } from 'react-router-dom';
import './home.css';

function Navbar() {

    const { cartItems } = React.useContext(ShopContext);
    
return (
    <>
        <div className="w-100 py-2 text-center">
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#"><img className="logo" src='https://cdn.dribbble.com/users/6427563/screenshots/18656064/dribbble.png'></img></a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                        <div class="navbar-nav">
                            
                            <Link to="/" className="nav-link">Shop</Link>
                            <Link to="/cart" className="nav-link">Cart</Link>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    </>
)
}

export default Navbar;