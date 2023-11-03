import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useAppSelector } from 'redux/hooks';

function Toast() {
  const { isVisible, notification } = useAppSelector((state) => state.toast);

  if (isVisible) {
    if (notification.type === "INFO") {
      toast.info(notification.message);
    }
    if (notification.type === "SUCCESS") {
      toast.success(notification.message);
    }
    if (notification.type === "WARN") {
      toast.warn(notification.message);
    }
    if (notification.type === "ERROR") {
      toast.error(notification.message);
    }
  }

  return (
    <>
      <ToastContainer
        position='bottom-center'
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme='dark'
      />
    </>
  );
}

export default Toast;
