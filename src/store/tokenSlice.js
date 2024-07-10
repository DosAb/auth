import { createSlice } from "@reduxjs/toolkit";

const tokenSlice = createSlice({
  name: "token",
  initialState: {value: 0},
  reducers: {
    setToken: (state, actions) => {
      state.value = actions.payload
    }
  }
})

export const { setToken } = tokenSlice.actions;

export default tokenSlice.reducer;