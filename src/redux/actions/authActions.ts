import { createAsyncThunk, AsyncThunk } from "@reduxjs/toolkit";
import { setIsAuthenticated, setToken, setUser, setMessage } from "../reducers/auth";
import { user as userUrls } from "@/data/urls";
import { removeCookie, setCookie } from "@/utils";

interface UserDataType {
  id: number;
  name: string;
  surname: string;
  email: string;
  phone: string;
  type: number;
  type_value: string;
  status: number;
  phone_verified_at: number;
  email_verified_at: number;
  token: string;
  created_at: number;
  updated_at: number;
}

interface UserLoginType {
  email: string;
  password: string;
}

export const login: AsyncThunk<void, UserLoginType, { dispatch: any }> = createAsyncThunk(
  "auth/login",
  async (user: UserLoginType, { dispatch }) => {
    await fetch(`${process.env.DOMAIN_REQUEST_URL}${userUrls.login}`, {
      method: "POST",
      body: JSON.stringify(user),
    })
      .then(data => data.json())
      .then(res => {
        if (!res?.data?.token) {
          dispatch(setMessage(res.message));
          removeCookie("access_token");
          dispatch(setIsAuthenticated(false));
          dispatch(setToken(null));
          dispatch(setUser({}));

          throw new Error("Token Not Found");
        } else {
          const userData = res?.data as UserDataType;

          setCookie("access_token", userData.token);
          dispatch(setIsAuthenticated(true));
          dispatch(setToken(userData.token));
          dispatch(setUser(userData));
          dispatch(setMessage(res.message));
        }
      });
  }
);

export const logout: AsyncThunk<void, void, { dispatch: any }> = createAsyncThunk(
  "auth/logout",
  async (_, { dispatch }) => {
    try {
      removeCookie("access_token");

      dispatch(setIsAuthenticated(false));
      dispatch(setToken(null));
      dispatch(setUser({}));
      dispatch(setMessage(null));

      return Promise.resolve();
    } catch (error) {
      return Promise.reject(error);
    }
  }
);
