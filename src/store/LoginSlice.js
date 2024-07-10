import { createSlice } from "@reduxjs/toolkit";

const loginSlice = createSlice({
  name: "login",
  initialState: {value: {}},
  reducers: {
    setLogin: (state, actions) => {
      state.value = actions.payload
    }
  }
})

export const { setLogin } = loginSlice.actions;

export default loginSlice.reducer;