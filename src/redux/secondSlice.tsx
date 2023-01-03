import { createSlice } from "@reduxjs/toolkit";
import { ADD } from "../redux/firstSlice"

const initialState = {
  count: 10,
};
const cake_2 = createSlice({
  name: "cake-2",
  initialState,
  reducers: {
    
  },
  extraReducers: (builder) => {
    builder.addCase(ADD, (state)=>{
      state.count ++
    })
  },
});

export const cake2Reducers = cake_2.reducer;
