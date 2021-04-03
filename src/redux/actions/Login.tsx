import { AUTHENTICATION_INPROGRESS, LOGIN_SUCCESS } from '../Contants';
import { authenticate, logout } from '../../services/Connect';
import { updateToast, toggleLoader } from './index';

const requestForLogin = (payload: any, nextRoute: Function) => {
  return async (dispatch: any) => {
    dispatch({ type: AUTHENTICATION_INPROGRESS });
    try {
      const response = await authenticate(payload.contactNo, payload.password);
      dispatch({ type: 'AUTHENTICATION_COMPLETED' });
      if (response.status === 200 && response.data.success) {
        dispatch({ type: LOGIN_SUCCESS });
        localStorage.setItem('loginDetails', JSON.stringify(response));
        localStorage.setItem('userId', response.data.user.id);
        localStorage.setItem('isMpinCreated', response.data.is_mpin);
        nextRoute();
      } else {
        const data = {
          showToast: true,
          toastMessage: response.data.message,
          position: 'top',
          duration: '10000',
        };
        dispatch({ type: 'LOGIN_FAILED' });
        dispatch(updateToast(data));
      }
    } catch (error) {
      dispatch({ type: 'AUTHENTICATION_COMPLETED' });
      const data = {
        showToast: true,
        toastMessage: 'API failed',
        position: 'top',
        duration: '10000',
      };
      dispatch({ type: 'LOGIN_FAILED' });
      dispatch(updateToast(data));
    }
  };
};
const requestForLogout = (nextRoute: Function) => {
  return async (dispatch: any) => {
    dispatch(toggleLoader(true, 'Logging out...'));
    try {
      const response = await logout();
      if (response.status === 200 && response.data.success) {
        dispatch(toggleLoader(false));
        nextRoute();
      } else {
        dispatch(toggleLoader(false));
        const data = {
          showToast: true,
          toastMessage: response.data.message,
          position: 'top',
          duration: '10000',
        };
        dispatch(updateToast(data));
      }
    } catch (error) {
      dispatch(toggleLoader(false));
      const data = {
        showToast: true,
        toastMessage: 'API failed',
        position: 'top',
        duration: '10000',
      };
      dispatch(updateToast(data));
    }
  };
};

export { requestForLogin, requestForLogout };
