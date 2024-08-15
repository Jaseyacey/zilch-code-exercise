import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  debitCard: {
    card: "1234123412341234",
    expiry: "01/23",
    cvv: "123",
  },
};

export const debitCardSlice = createSlice({
  name: "debitCard",
  initialState,
  reducers: {
    updateDebitCard: (state, action) => {
      state.debitCard = action.payload;
    },
  },
});

export const { updateDebitCard } = debitCardSlice.actions;

export default debitCardSlice.reducer;
