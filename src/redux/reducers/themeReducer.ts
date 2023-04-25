import { createSlice } from "@reduxjs/toolkit";
export const initialState = {
    theme: 'dark'
}
export const slice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        changeTheme: (state, action) => { 
            state.theme = action.payload.theme;
        }
    }
});

export const {changeTheme} = slice.actions;
export default slice.reducer;