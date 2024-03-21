import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counterSlice';
import dataReducer from '../features/dataSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    data: dataReducer,
  },
});
