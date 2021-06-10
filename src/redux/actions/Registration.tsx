import { REGISTRATION_SUCCESS } from '../Contants';
import { authenticationForRegister } from '../../services/Connect';
import { toggleLoader } from './Loader';
import { updateToast } from './index';

const requestForRegistration = (payload: any, nextRoute: Function) => {
  return async (dispatch: any) => {
    dispatch({ type: REGISTRATION_SUCCESS, data: { status: true } });
    dispatch(toggleLoader(true, 'Hold on...'));
    try {
      const response = await authenticationForRegister(
        payload.name,
        payload.gender,
        payload.mobileNo,
        payload.password,
        payload.countryCode
      );
      if (response.status === 200 && response.data.success) {
        dispatch({ type: REGISTRATION_SUCCESS, data: { status: false } });
        localStorage.setItem('loginDetails', JSON.stringify(response));
        localStorage.setItem('userId', response.data.user.id);
        localStorage.setItem('isMpinCreated', response.data.isMpin);
        dispatch(toggleLoader(false));
        nextRoute(true, null);
      } else {
        nextRoute(false);
        dispatch(toggleLoader(false));
        const data = {
          showToast: true,
          toastMessage: response.data.message,
          position: 'top',
          duration: '10000',
        };
        dispatch({ type: 'REGISTRATION_FAILED ' });
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
      dispatch({ type: REGISTRATION_SUCCESS, data: { status: false } });
      dispatch(updateToast(data));
      nextRoute(false, data);
    }
  };
};
export { requestForRegistration };
