import { createSlice } from "@reduxjs/toolkit";
export const initialState = {
    email: '',
    fullName: '',
    token:'',
    error:'',
    list:[],
}
export const slice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        userAuthenticated: (state, action) => { 
            state.email = action.payload.email;
            state.fullName = action.payload.fullName;
            state.token = action.payload.token;
            state.error = '';
            state.list = [];
        },
        userAuthenticationFailed: (state, action) => {
          state.error = action.payload;
        },
        userList: (state,action)=>{
            state.list = action.payload.list;
        }
    }
});

export const {userAuthenticated, userAuthenticationFailed, userList} = slice.actions;
export default slice.reducer;