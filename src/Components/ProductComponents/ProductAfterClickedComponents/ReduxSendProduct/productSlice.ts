import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Product } from '../../../Interfaces/Entity/Product';

const initialState = null as Product | null;

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    changeProduct(state, action: PayloadAction<Product | null>) {
      return action.payload;
    },
  },
});

export const { changeProduct } = productSlice.actions;
export default productSlice.reducer;
