import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import './styles/CartItem.css';
import { useState} from 'react'


import {itemDelete} from '../features/items/cartSlice';
import {changeQuantity} from '../features/items/cartSlice';

const CartItem = (props) => {

    const dispatch = useDispatch();

    const item = useSelector(state => 
        state.items.find(item => item.id === props.itemId)
    );

    const onDeleteClicked = (id) => {
        console.log(id);
        dispatch(itemDelete(id));
    }

    const [quantity, setQuantity] = useState(item.quantity)

    const quantityClicked = e => setQuantity(e.target.value)

    const onQuantityChanged = (id,quantity) => {
        dispatch(changeQuantity(id,quantity))
    }
    
    return (
        <div className="cartitem-wrapper">
            <div className="cartitem-container">
                <div className="cartitem-image-wrapper">
                    <img src={item.image} alt="cartitem" />
                </div>
                <h2 className="cartitem-title">{item.title}</h2>

                <button className="cartitem-delete" onClick={() => onDeleteClicked(item.id)}>
                    削除
                </button>
                
                <select name="数量" defaultValue={props.itemQuantity} onChange={() => onQuantityChanged(item.id,quantity)}>
                    <option onClick={quantityClicked} value="1">1</option>
                    <option onClick={quantityClicked} value="2">2</option>
                    <option onClick={quantityClicked} value="3">3</option>
                    <option onClick={quantityClicked} value="4">4</option>
                    <option onClick={quantityClicked} value="5">5</option>
                </select>

                <h3 className="cartitem-quantity">数量</h3>
            </div>
        </div>
    );
};

export default CartItem;