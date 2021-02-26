import { AUTHENTICATION_INPROGRESS, LOGIN_SUCCESS } from '../Contants';
import { authenticate } from '../../services/Connect';
import { updateToast } from './index';

const requestForLogin = (payload: any, nextRoute: Function) => {
  return async (dispatch: any) => {
    dispatch({ type: AUTHENTICATION_INPROGRESS });
    try {
      const response = await authenticate(payload.contactNo, payload.password);
      if (response.status === 200) {
        dispatch({ type: LOGIN_SUCCESS, data: response.data });
        nextRoute();
      }
      console.log('done', response);
    } catch (error) {
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
