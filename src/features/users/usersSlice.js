import {createSlice, nanoid} from '@reduxjs/toolkit';


const usersSlice = createSlice({
    name: 'users',
    initialState: {
        id: "",
        username: "",
        isLoggedIn: false
    },
    reducers: {
        login: {
            reducer(state, action) {
                state.id = action.payload.id;
                state.username = action.payload.username;
                state.isLoggedIn = true;
            },
            prepare(username) {
                return{
                    payload: {
                        id: nanoid(),
                        username: username
                    }
                }
            }
        },
        logout: state => {
            state.id = "";
            state.username = "";
            state.isLoggedIn = false;
        }
    }
});

export const { login, logout } = usersSlice.actions;
export const selectLoginState = state => state.users.isLoggedIn;
export const selectUsername = state => state.users.username;

export default usersSlice.reducer;