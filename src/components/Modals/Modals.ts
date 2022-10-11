import { toast, Zoom } from "react-toastify";

export const loadingModal = (message: string) => {
  toast.info(message, {
    position: "top-center",
    autoClose: 1000,
    theme: "light",
    transition: Zoom,
    closeOnClick: true,
    hideProgressBar: true,
  });
};

export const errorModal = (message: string) => {
  toast.error(message, {
    position: "top-center",
    autoClose: 2000,
    theme: "light",
    transition: Zoom,
    closeOnClick: true,
  });
};
