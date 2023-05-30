import { configureStore } from '@reduxjs/toolkit';
import userSlice from './userSlice';
import authSlice from './authSlice';
import { apiSlices } from "../services/apiSlices";


export const store = configureStore({
  reducer: {
    user: userSlice,
    auth: authSlice,
    [apiSlices.reducerPath]: apiSlices.reducer,
  },
  middleware: (gDM) => gDM().concat(apiSlices.middleware),
});






