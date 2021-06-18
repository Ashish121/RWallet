import { AUTHENTICATION_INPROGRESS, RESETPASSWORD_SUCCESS } from '../Contants';
import { authenticationForResetPassword } from '../../services/Connect';
import { updateToast } from './index';

const requestForResetPassword = (payload: any, nextRoute: Function) => {
  return async (dispatch: any) => {
    dispatch({ type: AUTHENTICATION_INPROGRESS });
    try {
      const response = await authenticationForResetPassword(
        payload.mobileNo,
        payload.newPass
      );
      dispatch({ type: 'AUTHENTICATION_COMPLETED' });
      if (response.status === 200 && response.data.success) {
        dispatch({ type: RESETPASSWORD_SUCCESS, data: response.data });
        nextRoute();
      } else {
        //nextRoute(false);
        const data = {
          showToast: true,
          toastMessage: response.data.message,
          position: 'top',
          duration: '10000',
        };
        dispatch({ type: 'RESETPASSWORD_FAILED' });
        dispatch(updateToast(data));
      }
    } catch (error) {
      dispatch({ type: 'AUTHENTICATION_COMPLETED' });
      const data = {
        showToast: true,
        toastMessage: 'Network error',
        position: 'top',
        duration: '10000',
      };
      dispatch({ type: 'RESETPASSWORD_FAILED' });
      dispatch(updateToast(data));
    }
  };
};
export { requestForResetPassword };
