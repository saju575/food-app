import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "../features/api/apiSlice";

// Configure the Redux store with custom middleware and reducers
export const store = configureStore({
  reducer: {
    // Add the reducer from the apiSlice to the store
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddlewares) =>
    // Concatenate the apiSlice middleware with the default middlewares
    getDefaultMiddlewares().concat(apiSlice.middleware),
});
