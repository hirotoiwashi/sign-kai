import React from 'react';
import {useDispatch} from 'react-redux';
import {Link} from 'react-router-dom';
import './styles/Item.css';

import {updateSelected} from '../features/items/selectedItemSlice';

const Item = (props) => {

    const dispatch = useDispatch();

    const onItemClicked = (Id) => {
        dispatch(updateSelected(Id));
    }

    return(
        <Link className="item-link" to={`/event/id=${props.itemId}`}>
        <div className="item-wrapper" onClick={() => onItemClicked(props.itemId)}>
            <div className="item-container">
                <div className="item-image-wrapper">
                    <img className="item-image" src={props.itemImage} alt="item" />
                </div>
            <h2 className="item-title">{props.itemTitle}</h2>
            </div>
        </div>
        </Link>
    );

}

export default Item;