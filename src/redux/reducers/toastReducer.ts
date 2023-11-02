import { createSlice } from "@reduxjs/toolkit";

const toastSlice = createSlice({
  name: "toast",
  initialState: {
    isVisible: false,
    notification:{type:"", message: ""}
  },
  reducers: {
    showToast(state, action) {
      state.notification = action.payload;
    },
    setToastVisible(state){
        state.isVisible = true;
    }
  },
});

export const {showToast,setToastVisible} = toastSlice.actions;
export default toastSlice.reducer