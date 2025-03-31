import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  Start5G: 0,
  Plus5G: 0,
  Pro5G: 0,
  Jetpacks: 0,
  Tablet: 0,
  BI: 0,
  NumberOfPhones: 0,
  CostOfPhones: 0,
  VBiz: false,
  BusinessMobileProtection: false,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state, action) => {
      const item = action.payload.item;
      //so state[item] finds the item
      if (state[item] !== undefined) {
        state[item] += 1;
      }
    },
    decrement: (state, action) => {
      const item = action.payload.item;
      if (state[item] > 0) {
        state[item] -= 1;
      }
    },
    setQuantity: (state, action) => {
      const { item, value } = action.payload;
      if (state[item] !== undefined) {
        state[item] = value;
      }
    },

    toggleCheckbox: (state, action) => {
      const item = action.payload.item;
      state[item] = !state[item];
    },

    clearData:(state)=>{
      Object.assign(state, initialState);
    }
  },
});

export const { increment, decrement, setQuantity, toggleCheckbox,clearData } =
  counterSlice.actions;
export default counterSlice.reducer;
