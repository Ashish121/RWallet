import { REGISTRATION_SUCCESS } from '../Contants';
import { authenticationForRegister } from '../../services/Connect';
import { toggleLoader } from './Loader';
const requestForRegistration = (payload: any, nextRoute: Function) => {
  console.log('payload: ', payload);

  return async (dispatch: any) => {
    dispatch(toggleLoader(true, 'Creating account...'));
    try {
      const response = await authenticationForRegister(
        payload.name,
        payload.gender,
        payload.mobileNo,
        payload.password,
        payload.countryCode
      );
      console.log('res****', response);
      if (response.status == 200) {
        dispatch(toggleLoader(false));
        dispatch({ type: REGISTRATION_SUCCESS, response: response });
        localStorage.setItem('userId', response.data.user.id);
        localStorage.setItem('loginDetails', JSON.stringify(response));
        localStorage.setItem('isMpinCreated', response.data.isMpin);
        nextRoute(true, null);
      }
      console.log('done', response);
    } catch (error) {
      dispatch(toggleLoader(false));
      console.log('error: ', error);
      let data: any;
      if (error?.errors?.mobile_number) {
        data = {
          showToast: true,
          toastMessage: error.errors.mobile_number,
          position: 'top',
          duration: '10000',
        };
      } else {
        data = {
          showToast: true,
          toastMessage: 'Something went wrong',
          position: 'top',
          duration: '10000',
        };
      }

      nextRoute(false, data);
    }
  };
};
export { requestForRegistration };
