import { AUTHENTICATION_INPROGRESS, REGISTRATION_SUCCESS } from '../Contants';
import { authenticationForRegister } from '../../services/Connect';
import { updateToast } from './index';

const requestForRegistration = (payload: any, nextRoute: Function) => {
  return async (dispatch: any) => {
    dispatch({ type: AUTHENTICATION_INPROGRESS });
    try {
      const response = await authenticationForRegister(
        payload.fullName,
        payload.gender,
        payload.mobileNo,
        payload.password
      );
      if (response.status === 200) {
        dispatch({ type: REGISTRATION_SUCCESS, data: response.data });
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
      dispatch({ type: 'REGISTRATION_FAILED' });
      dispatch(updateToast(data));
    }
  };
};
export { requestForRegistration };
