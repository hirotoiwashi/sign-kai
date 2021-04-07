import {createSlice} from '@reduxjs/toolkit';



const cartSlice = createSlice({
    name: 'cart',
    initialState: [],
    reducers: {
        add: {
            reducer(state, action) {
                state.push(action.payload);
            },
            prepare(id, quantity) {
                return{
                    payload: {
                        id: id,
                        quantity: quantity
                    }
                }
            }
        },
        itemDelete: (state, action) => {
            const id = action;
            const index = state.findIndex((item) => item.id === id);
            state.splice(index, 1);
        }
    }
});

export const selectCart = state => state;

export const { add, itemDelete } = cartSlice.actions;

export default cartSlice.reducer;