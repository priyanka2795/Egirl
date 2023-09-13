import * as Yup from "yup";

export const signUpSchema = Yup.object({
    name : Yup.string().min(2).max(25).required("Please enter your name"),
    username : Yup.string().min(6).max(25).required("Username is not available"),
})