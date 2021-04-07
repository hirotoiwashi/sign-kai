import {createSlice} from '@reduxjs/toolkit';



const cartSlice = createSlice({
    name: 'cart',
    initialState: [],
    reducers: {
        add: {
            reducer(state, action) {
                state.push(action.payload);
                console.log(state);
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
            console.log(state);
            console.log(action);
            const id = action;
            const index = state.findIndex((item) => item.id === id);
            state.splice(index, 1);
            console.log(state);
        }
    }
});

export const selectCart = state => state;

export const { add, itemDelete } = cartSlice.actions;

export default cartSlice.reducer;