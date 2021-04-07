import React from 'react';
import {useSelector} from 'react-redux';
import './styles/App.css';
import Item from './Item';





const Events = () => {
  const items = useSelector(state => state.items);

  return (
    <div className="items-wrapper">
        <div className="items-container">
        <ul className="items-list">
            {
            items.map(item => (
              <li key={item.id}>
                  <Item 
                    key={item.id} 
                    itemId={item.id}  
                    itemImage={item.image} 
                    itemTitle={item.title} 
                    itemInfo={item.info}
                  />
              </li>
            ))
            }
        </ul>
        </div>
    </div>
  );
}
  
  export default Events;
  