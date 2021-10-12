import { createSlice, configureStore } from '@reduxjs/toolkit';

const initial = {
    isLoggedIn: false,
    user: {},
    lastMsg: {}
}

const authSlice = createSlice({
    name: 'auth',
    initialState: initial,
    reducers: {
        login(state, actions) {
            state.isLoggedIn = true;
            state.user = actions.payload
        },
        addLastMsg(state, actions) {
            state.lastMsg = actions.payload
        }
    }
})

const store = configureStore({
    reducer: authSlice.reducer
})

export const authActions = authSlice.actions;
export default store;