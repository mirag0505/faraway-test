import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { AppDispatch, RootState } from "../../store";
import type { TypedUseSelectorHook } from "react-redux";
import { useDispatch, useSelector } from "react-redux";

// Define a type for the slice state
type PersonsInfoState = {
  value: number;
}

// Define the initial state using that type
const initialState: PersonsInfoState = {
  value: 0,
};

export const personsInfoSlice = createSlice({
  name: "personsInfo",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    // Use the PayloadAction type to declare the contents of `action.payload`
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount } = personsInfoSlice.actions;

export default personsInfoSlice.reducer;
