import { AUTHENTICATION_INPROGRESS, TVPAYMENT_SUCCESS } from "../Contants";
import { uploadImage } from "../../services/Connect";
import { updateToast, toggleLoader } from "./index";

const reuestUpload = (userId: any, imageString: any, callback: Function) => {
  return async (dispatch: any) => {
    try {
      //   dispatch(toggleLoader(true, "Upload image..."));
      const response = await uploadImage(userId, imageString, callback);
      dispatch(toggleLoader(false));
      if (response.status !== 200) {
        // dispatch(toggleLoader(false));
        const data = {
          showToast: true,
          toastMessage: response.data.message,
          position: "top",
          duration: "10000",
        };
        dispatch(updateToast(data));
      }
    } catch (error) {
      const data = {
        showToast: true,
        toastMessage: "API failed",
        position: "top",
        duration: "10000",
      };
      dispatch({ type: "TVPAYMENT_FAILED" });
      dispatch(updateToast(data));
    }
  };
};
export { reuestUpload };
