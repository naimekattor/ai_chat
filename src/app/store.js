import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./../features/auth/authSlice";
import { chatAPI } from "./../features/chat/chatAPI";

const store = configureStore({
  reducer: {
    auth: authReducer,
    [chatAPI.reducerPath]: chatAPI.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(chatAPI.middleware),
});

export default store;
