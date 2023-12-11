import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import Cookies from "js-cookie";

const token: string | undefined = Cookies.get("refreshToken")
export interface TokenState {
  loading: boolean;
  tokenData: string | undefined;
  error: string | undefined;
}
const initialState: TokenState = {
  loading: false,
  tokenData: "",
  error: undefined,
}
export const tokenRefresh = createAsyncThunk(
  "tokenRefresh",
  async () => {
    const response = await axios.post("https://devapi.egirls.ai/api/token/refresh", {
      "refresh_token": "string"
    }, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
        accept: "application/json",
      },
    })
    return response?.data?.access_token
  }
)
const tokenSlice = createSlice({
  name: 'token',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(tokenRefresh.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(tokenRefresh.fulfilled, (state, action: any) => {
      state.loading = false;
      state.tokenData = action.payload;
    });
    builder.addCase(tokenRefresh.rejected, (state, action) => {
      state.loading = false;
      state.tokenData = "";
      state.error = action.error.message;
    });
  },
  reducers: {}
})

export default tokenSlice.reducer;


