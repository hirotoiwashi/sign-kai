import React from 'react'; 
import {useSelector} from 'react-redux';
import './styles/Cart.css';

import CartItem from './CartItem';

const Cart = () => {

    const cart = useSelector(state => state.cart);

    return(
        <div className="cart-page-wrapper">
            <div className="cart-container">
                {
                    cart.map(item => (
                        <CartItem key={item.id} itemId={item.id} itemQuantity={item.quantity} />
                    ))
                }
            </div>
        </div>
    );
};

export default Cart;