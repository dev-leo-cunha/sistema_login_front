import { createSlice } from "@reduxjs/toolkit";

// Definindo o tipo do estado inicial do reducer "theme"
export const initialState = {
  theme: "dark",
};

// Criando o reducer "theme" com as actions "changeTheme"
// ChangeTheme recebe um payload com o novo tema e altera o estado
export const slice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    changeTheme: (state, action) => {
      state.theme = action.payload.theme;
    },
  },
});

export const { changeTheme } = slice.actions;
export default slice.reducer;
