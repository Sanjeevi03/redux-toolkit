import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface initialStateType {
  count: number;
}
const initialState: initialStateType = {
  count: 0,
};
const cake = createSlice({
  name: "cake",
  initialState,
  reducers: {
    ADD: (state) => {
      state.count++;
    },
    SUB: (state, action: PayloadAction<number>) => {
      state.count = state.count - action.payload;
    },
  },
  extraReducers: (builder) => {
    // builder.addCase()
  },
});

export const { ADD, SUB } = cake.actions;
export const cakeReducers = cake.reducer;
