import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ToastState {
  isVisible: boolean;
  notification: {
    type: string;
    message: string;
  };
}

const initialState: ToastState = {
  isVisible: false,
  notification: { type: "", message: "" },
};

const toastSlice = createSlice({
  name: "toast",
  initialState,
  reducers: {
    showToast(state, action: PayloadAction<{ type: string; message: string }>) {
      state.notification = action.payload;
    },
    setToastVisible(state) {
      state.isVisible = true;
    },
  },
});

export const { showToast, setToastVisible } = toastSlice.actions;
export default toastSlice.reducer;
