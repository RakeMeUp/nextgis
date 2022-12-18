import { toast } from "react-toastify";
export const showError = (
    message = "Uknown Error Occured",
    hideProgressBar = true,
    autoClose = 5000
) => {
    toast(message, {
        hideProgressBar: hideProgressBar,
        autoClose: autoClose,
        type: "error",
    });
};
