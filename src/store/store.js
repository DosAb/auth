import { configureStore } from '@reduxjs/toolkit';
import tokenReducer from './tokenSlice';
import loginReducer from './LoginSlice'

const store = configureStore({
  reducer: {
    token: tokenReducer,
    login: loginReducer,
  },
});

export default store;