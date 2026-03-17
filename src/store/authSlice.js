import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isAuthenticated: false,
    phoneNumber: null,
  },
  reducers: {
    login: (state, action) => {
      state.isAuthenticated = true;
      state.phoneNumber = action.payload?.phoneNumber ?? null;
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.phoneNumber = null;
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
