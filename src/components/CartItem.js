import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import './styles/CartItem.css';

import {itemDelete} from '../features/items/cartSlice';

const CartItem = (props) => {

    console.log(props.itemId);

    const dispatch = useDispatch();

    const item = useSelector(state => 
        state.items.find(item => item.id === props.itemId)
    );

    const onDeleteClicked = (id) => {
        dispatch(itemDelete(id));
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
                
                <select name="数量" value={props.itemQuantity} >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>

                <h3 className="cartitem-quantity">数量</h3>
            </div>
        </div>
    );
};

export default CartItem;