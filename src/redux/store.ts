import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./reducers/userReducer";
import themeReducer from "./reducers/themeReducer";

// Criando a store com os reducers "user" e "theme"
export const store = configureStore({
  reducer: {
    user: userReducer,
    theme: themeReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
