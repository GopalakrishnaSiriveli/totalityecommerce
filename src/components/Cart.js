import React from 'react'
import products from './../products'
import { ShopContext } from '../context/shop-context'
import CartItem from './CartItem'
import { Link, useNavigate } from 'react-router-dom'

export const Cart = () => {
    const { cartItems, getTotalCartAmount, checkout } = React.useContext(ShopContext);
    const subtotal = getTotalCartAmount();
    const navigate = useNavigate();
    return (
        <div className='cart'>
            {
                subtotal > 0 ?
                    <div>
                        <h1>Cart Items</h1>
                        <div className='cartItemWrapper'>

                            <div className='cartItems'>
                                {products.map((product) => {
                                    if (cartItems[product.id] > 0) {
                                        return <CartItem data={product} />
                                    }
                                })}
                            </div>
                        </div>

                        <h3>Subtotal: {subtotal}</h3>
                        <div className='checkout my-4'>
                            <button className='btn btn-lg btn-dark conti-shop-btn' onClick={() => navigate('/')}>Continue Shopping</button>
                            <Link to='/checkout'>
                                <button className='btn btn-lg btn-dark'>Checkout</button>
                            </Link>
                        </div>
                    </div>

                    :

                    <><h1>Your Cart is Empty</h1><button onClick={() => navigate('/')} className='btn btn-lg btn-dark'>Continue Shopping</button></>


            }
        </div>
    )
}