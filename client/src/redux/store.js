import { configureStore } from '@reduxjs/toolkit';
import userSlice from './userSlice';
import authSlice from './authSlice';
import turnSlice from './turnSlice';

export const store = configureStore({
  reducer: {
    user: userSlice,
    auth: authSlice,
    turns: turnSlice,
  },
});
