import { postApi } from "./apis";

// Post Login data
export const userSignUp = (data:any) => postApi('/api/signup', data)