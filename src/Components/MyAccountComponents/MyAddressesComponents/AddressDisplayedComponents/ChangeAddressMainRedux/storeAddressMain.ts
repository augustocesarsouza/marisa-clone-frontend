import { configureStore } from '@reduxjs/toolkit';
import AddressMainReducer from './AddressMainSlice';

export const storeAddressMain = configureStore({
  reducer: {
    addressMain: AddressMainReducer,
  },
});

export type RootState = ReturnType<typeof storeAddressMain.getState>;
export type AppDispatch = typeof storeAddressMain.dispatch;
