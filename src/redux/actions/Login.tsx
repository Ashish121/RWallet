import { AUTHENTICATION_INPROGRESS, LOGIN_SUCCESS } from '../Contants';
import { authenticate } from '../../services/Connect';
import { updateToast } from './index';

const requestForLogin = (payload: any, nextRoute: Function) => {
  return async (dispatch: any) => {
    dispatch({ type: AUTHENTICATION_INPROGRESS });
    try {
      const response = await authenticate(payload.contactNo, payload.password);
      dispatch({ type: 'AUTHENTICATION_COMPLETED' });
      if (response.status === 200 && response.data.success) {
        dispatch({ type: LOGIN_SUCCESS });
        localStorage.setItem('loginDetails', JSON.stringify(response));
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

export { requestForLogin };
