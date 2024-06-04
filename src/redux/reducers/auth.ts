import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

export interface AuthState {
  isAuthenticated: boolean;
  isAuthenticating: boolean;
  token: null | string;
  user: object;
  message: null | string;
}

const initialState: AuthState = {
  isAuthenticated: false,
  isAuthenticating: true,
  token: null,
  user: {},
  message: null,
};

const authSlice = createSlice({
  name: "header",
  initialState,
  reducers: {
    setIsAuthenticated: (state, action: PayloadAction<boolean>) => {
      state.isAuthenticated = action.payload;
    },
    setToken: (state, action: PayloadAction<null | string>) => {
      state.token = action.payload;
    },
    setUser: (state, action: PayloadAction<object>) => {
      state.user = action.payload;
    },
    setMessage: (state, action: PayloadAction<null | string>) => {
      state.message = action.payload;
    },
  },
});

export const { setIsAuthenticated, setToken, setUser, setMessage } =
  authSlice.actions;

export default authSlice.reducer;
