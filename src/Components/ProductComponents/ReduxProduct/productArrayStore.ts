import { configureStore } from '@reduxjs/toolkit';
import productArrayReducer from './productArraySlice';

export const productArrayStore = configureStore({
  reducer: {
    productArray: productArrayReducer,
  },
});

export type RootStateProductArray = ReturnType<typeof productArrayStore.getState>;
export type ProductArrayAppDispatch = typeof productArrayStore.dispatch;
