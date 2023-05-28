import { configureStore } from '@reduxjs/toolkit';
import userSlice from './userSlice';
import  turnSlice  from './turnSlice';

export const store = configureStore({
  reducer: {
    user: userSlice,
    turn: turnSlice
    
  },
  
});
