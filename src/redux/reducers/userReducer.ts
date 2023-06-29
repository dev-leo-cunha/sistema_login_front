import { createSlice } from "@reduxjs/toolkit";

// Definindo o tipo do estado inicial do reducer "user"
export const initialState = {
  email: "",
  fullName: "",
  token: "",
  errorLogin: "",
  errorRegister: "",
  list: [],
};

// Criando o reducer "user" com as actions "userAuthenticated", "userAuthenticationFailed", "userList", "userRegisterFailed"
export const slice = createSlice({
  name: "user",
  initialState,
  reducers: {
    userAuthenticated: (state, action) => {
      // userAuthenticated serve para autenticar o usuário e armazenar os dados do usuário no state
      state.email = action.payload.email;
      state.fullName = action.payload.fullName;
      state.token = action.payload.token;
      state.errorLogin = "";
      state.errorRegister = "";
      state.list = [];
    },
    userAuthenticationFailed: (state, action) => {
      // userAuthenticationFailed serve para armazenar o erro de autenticação no state
      state.errorLogin = action.payload;
    },
    userRegisterFailed: (state, action) => {
      // userRegisterFailed serve para armazenar o erro de registro no state
      state.errorRegister = action.payload;
    },
    userList: (state, action) => {
      // userList serve para armazenar a lista de usuários no state
      state.list = action.payload.list;
    },
  },
});

export const {
  userAuthenticated,
  userAuthenticationFailed,
  userList,
  userRegisterFailed,
} = slice.actions;
export default slice.reducer;
