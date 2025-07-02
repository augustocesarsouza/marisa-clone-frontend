import { configureStore } from '@reduxjs/toolkit';
import productReducer from './productSlice';

export const productStore = configureStore({
  reducer: {
    product: productReducer,
  },
});

export type RootStateProduct = ReturnType<typeof productStore.getState>;
export type ProductAppDispatch = typeof productStore.dispatch;
