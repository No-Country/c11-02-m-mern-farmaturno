import { configureStore } from '@reduxjs/toolkit';
import userSlice from './userSlice';
import authSlice from './authSlice';
import {turnSlices } from "../redux/turnSlices";



export const store = configureStore({
  reducer: {
    user: userSlice,
    auth: authSlice,
    [turnSlices.reducerPath]: turnSlices.reducer,
  },
  middleware: (gDM) => gDM().concat(turnSlices.middleware),
});






