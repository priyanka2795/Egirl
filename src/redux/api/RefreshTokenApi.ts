import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
interface Token {
    token: string 
}
const RefreshApi = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: 'http://65.21.65.49:8000' }),
    tagTypes: ['Posts'],
    endpoints: (build) => ({
        refreshToken: build.mutation<Token, Partial<Token>>({
            query: (body) => ({
                url: `/api/token/refresh`,
                method: 'POST',
                body:body,
            }),
            invalidatesTags: ['Posts'],
        }),
    }),
})

export  const { useRefreshTokenMutation } = RefreshApi


// import { createSlice, createAsyncThunk, isRejectedWithValue } from "@reduxjs/toolkit";
// import { refreshToken } from "services/services";

// export const tokenrefresh = createAsyncThunk(
//     "tokenrefresh",
//     async (data, { rejectWithValue }) => {
//         const response = await refreshToken(data)
//         return response
//     }
// )

// export const tokenSlice = createSlice({
//     name:"token",
//     initialState:{
//         data:[]
//     },
//     extraReducers:{
//             [tokenrefresh.fulfilled]:(state,action)=>{
//                 state.data.push(action.payload)
//             }
//         }
    
// })

// export default tokenSlice.reducer

