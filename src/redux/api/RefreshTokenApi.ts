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


import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

interface User {
  token: string,
}
export interface UserState {
    loading: boolean;
  users: Array<User>;
  error: string | undefined;
}
const initialState: UserState = {
    loading: false,
    users: [],
    error: undefined,
}
export const tokenrefresh = createAsyncThunk(
    "tokenrefresh",
    async (data, { rejectWithValue }) => {
        const response = await axios.post("http://65.21.65.49:8000/api/token/refresh",data)
        console.log("refresh token res---", response)
        return response
    }
)
const userSlice = createSlice({
  name: 'users',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(tokenrefresh.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(tokenrefresh.fulfilled, (state, action: PayloadAction<Array<User>>) => {
      state.loading = false;
      state.users = action.payload;
    });
    builder.addCase(tokenrefresh.rejected, (state, action) => {
      state.loading = false;
      state.users = [];
      state.error = action.error.message;
    });
  },
  reducers: {}
})

export default userSlice.reducer;

