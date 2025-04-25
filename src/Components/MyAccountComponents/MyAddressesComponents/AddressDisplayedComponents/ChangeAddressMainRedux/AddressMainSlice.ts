import { createSlice } from '@reduxjs/toolkit';

type UserState = {
  changeAddressMain: boolean;
};

const initialState: UserState = {
  changeAddressMain: false,
};

const AddressMainSlice = createSlice({
  name: 'addressMain',
  initialState,
  reducers: {
    changeValue(state, action) {
      state.changeAddressMain = action.payload;
    },
    //   logout(state) {
    //     state.name = "";
    //     state.isLogged = false;
    //   },
  },
});

export const { changeValue } = AddressMainSlice.actions;
export default AddressMainSlice.reducer;
