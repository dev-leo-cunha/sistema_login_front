import { createSlice } from "@reduxjs/toolkit";
export const initialState = {
  email: "",
  fullName: "",
  token: "",
  errorLogin: "",
  errorRegister: "",
  list: [],
};
export const slice = createSlice({
  name: "user",
  initialState,
  reducers: {
    userAuthenticated: (state, action) => {
      state.email = action.payload.email;
      state.fullName = action.payload.fullName;
      state.token = action.payload.token;
      state.errorLogin = "";
      state.errorRegister = "";
      state.list = [];
    },
    userAuthenticationFailed: (state, action) => {
      state.errorLogin = action.payload;
    },
    userRegisterFailed: (state, action) => {
        state.errorRegister = action.payload;
    },
    userList: (state, action) => {
      state.list = action.payload.list;
    },
  },
});

export const { userAuthenticated, userAuthenticationFailed, userList, userRegisterFailed } =
  slice.actions;
export default slice.reducer;
