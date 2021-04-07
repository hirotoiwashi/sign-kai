import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import './styles/ItemDetails.css';

import {add} from '../features/items/cartSlice';


const ItemDetail = (props) => {

    const dispatch = useDispatch();

    const [quantity, setQuantity] = useState(1);

    const onHandleChange = (event) => {
        setQuantity(event.target.value);
    }

    const onAddClicked = (id, quantity) => {
        dispatch(add(id, quantity));
    }

    return(
        <div className="item-detail-wrapper">
            <div className="item-detail-container">
                <h2 className="item-detail-title">{props.itemTitle}</h2>
                <div className="detail">
                    <div className="detail-image-wrapper">
                    <img src={props.itemImage} alt="item"/>
                    </div>
                    <p>{props.itemInfo}</p>
                </div>

                <div className="operation">
                    <p className="quantity">数量</p>
                    <select name="数量" value={quantity} onChange={(event) => onHandleChange(event)}>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                    <button className="cart-add" onClick={() => onAddClicked(props.itemId, quantity)}>カートに追加</button>
                </div>
            </div>
        </div>
    );
}

export default ItemDetail;