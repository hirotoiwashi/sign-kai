import {configureStore} from '@reduxjs/toolkit';

import usersReducer from '../features/users/usersSlice';
import itemsReducer from '../features/items/itemsSlice';
import selectedItemReducer from '../features/items/itemsSlice';
import cartReducer from '../features/items/cartSlice';

export default configureStore({
    reducer: {
        users: usersReducer,
        items: itemsReducer,
        selectedItem: selectedItemReducer,
        cart: cartReducer
    }
})