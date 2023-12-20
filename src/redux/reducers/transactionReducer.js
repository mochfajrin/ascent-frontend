import { createSlice } from "@reduxjs/toolkit";

const transactionSlice = createSlice({
  name: "transaction",
  initialState: { transactionData: [] },
  reducers: {
    setTransactionData: (state, action) => {
      state.transactionData = action.payload;
    },
  },
});

export const { setTransactionData } = transactionSlice.actions;
export default transactionSlice.reducer;
