import React from 'react'
import { ShopContext } from '../context/shop-context';


const CartItem = (props) => {
    const {id, title, price, image} = props.data;
    const { cartItems, addToCart, removeFromCart } = React.useContext(ShopContext)
    const cartItemCount = cartItems[id]
  return (
    <div className="card cart-card CartItem">
        <img className='card-img-top' src={image} width={80}/>
        <div className='description'>
            <p className='card-title'><b> {title} </b></p>
            <p className='card-price'>${price}</p>
            <div className='countHandler'>
                <button onClick={() => removeFromCart(id)}>-</button>
                <p>{cartItemCount}</p>
                <button onClick={() => addToCart(id)}>+</button>
            </div>
        </div>
    </div>
  )
}

export default CartItem