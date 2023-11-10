// import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
// interface Token {
//     token: string 
// }
// const RefreshApi = createApi({
//     baseQuery: fetchBaseQuery({ baseUrl: 'http://65.21.65.49:8000' }),
//     tagTypes: ['Posts'],
//     endpoints: (build) => ({
//         refreshToken: build.mutation<Token, Partial<Token>>({
//             query: (body) => ({
//                 url: `/api/token/refresh`,
//                 method: 'POST',
//                 body:body,
//             }),
//             invalidatesTags: ['Posts'],
//         }),
//     }),
// })

// export  const { useRefreshTokenMutation } = RefreshApi


import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import Cookies from "js-cookie";
const token: any = Cookies.get("refreshToken")
interface Token {
  token: string,
}
export interface TokenState {
  loading: boolean;
  tokenData: string | null;
  error: string | undefined;
}
const initialState: TokenState = {
  loading: false,
  tokenData: "",
  error: undefined,
}
export const tokenRefresh = createAsyncThunk(
  "tokenRefresh",
  async (data) => {
    const response = await axios.post("http://65.21.65.49:8000/api/token/refresh", {
      "refresh_token": "string"
    }, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
        accept: "application/json",
      },
    })
    console.log("refresh token res---", response?.data?.access_token)
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


