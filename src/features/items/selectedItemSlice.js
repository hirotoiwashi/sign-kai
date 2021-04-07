import {createSlice} from '@reduxjs/toolkit';



const selectedItemSlice = createSlice({
    name: 'selectedItem',
    initialState: null,
    reducers: {
        updateSelected: (state, action) => {
            state = action;
        }
    }
});

export const { updateSelected } = selectedItemSlice.actions;
export const selectSelectedId = state => state;

export default selectedItemSlice.reducer;