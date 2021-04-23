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

    const changedQuantity = e => setQuantity(Number(e.target.value))

    const onQuantityChanged = () => {dispatch(changeQuantity({id: item.id,quantity: quantity}))
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
                
                <select name="数量" defaultValue={props.itemQuantity} onChange={changedQuantity}>
                    <option  value="1">1</option>
                    <option  value="2">2</option>
                    <option  value="3">3</option>
                    <option  value="4">4</option>
                    <option  value="5">5</option>
                </select>
                <button className="cartitem-change" onClick={onQuantityChanged}>
                    　変更
                </button>

                <h3 className="cartitem-quantity">数量</h3>
            </div>
        </div>
    );
};

export default CartItem;