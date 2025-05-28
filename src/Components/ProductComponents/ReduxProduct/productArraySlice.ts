import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Product } from '../../Interfaces/Entity/Product';

const initialState: Product[] = [];

const productArraySlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    changeProductArray(state, action: PayloadAction<Product[]>) {
      return action.payload;
    },
  },
});

export const { changeProductArray } = productArraySlice.actions;
export default productArraySlice.reducer;
