import { CHANGEPASSWORD_SUCCESS } from '../Contants';
import { authenticationForChangePassword } from '../../services/Connect';
import { updateToast } from './index';

const requestFoChangePassword = (payload: any, nextRoute: Function) => {
  return async (dispatch: any) => {
    try {
      const response = await authenticationForChangePassword(
        payload.user_id,
        payload.currentPassword,
        payload.newPass
      );
      if (response.status === 200 && response.data.success) {
        dispatch({ type: CHANGEPASSWORD_SUCCESS, data: response.data });
        nextRoute(true);
      } else {
        const data = {
          showToast: true,
          toastMessage: response.data.message,
          position: 'top',
          duration: '10000',
        };
        dispatch({ type: 'CHANGEPASSWORD_FAILED ' });
        dispatch(updateToast(data));
        nextRoute(false);
      }
    } catch (error) {
      nextRoute(false);
      const data = {
        showToast: true,
        toastMessage: 'Network error',
        position: 'top',
        duration: '10000',
      };
      dispatch({ type: 'CHANGEPASSWORD_FAILED ' });
      dispatch(updateToast(data));
    }
  };
};

export { requestFoChangePassword };
