import React, { useContext } from "react";
import { ShopContext } from "../context/shop-context";

function ProductCard({ product }) {

    const { cartItems, addToCart, removeFromCart } = useContext(ShopContext)
    const cartItemCount = cartItems[product.id]

    return (
        <div class="card py-3">
            <img src={product.image} class="card-img-top" alt="..." />
            <div class="card-body">
                <h5 class="card-title">{product.title}</h5>
                <p class="card-text">{product.description}</p>
            </div>
            <div className="cart-btn-and-price">
                <button onClick={() => removeFromCart(product.id)}>-</button><i href="#" className="cart-btn" style={{"width":"90px",}}>{cartItemCount > 0 ? <p>{cartItemCount}</p> : <p>Add to Cart</p>}</i><button onClick={() => addToCart(product.id)}>+</button>
                <p className="card-price">${product.price}</p>
            </div>

        </div>
    );
}

export default ProductCard;