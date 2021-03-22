import { AUTHENTICATION_INPROGRESS, REGISTRATION_SUCCESS } from '../Contants';
import { authenticationForRegister } from '../../services/Connect';
const requestForRegistration = (payload: any, nextRoute: Function) => {
  console.log('payload: ', payload);

  return async (dispatch: any) => {
    dispatch({ type: AUTHENTICATION_INPROGRESS });
    try {
      const response = await authenticationForRegister(
        payload.name,
        payload.gender,
        payload.mobileNo,
        payload.password
      );
      console.log('res****', response);
      dispatch({ type: 'AUTHENTICATION_COMPLETED' });
      if (response.status == 200) {
        dispatch({ type: REGISTRATION_SUCCESS, response: response });
        localStorage.setItem('registeredUserId', response.data.user.id);
        localStorage.setItem('userDetails', JSON.stringify(response));
        nextRoute(true, null);
      }
      console.log('done', response);
    } catch (error) {
      dispatch({ type: 'AUTHENTICATION_COMPLETED' });
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

      dispatch({ type: 'REGISTRATION_FAILED' });
      nextRoute(false, data);
    }
  };
};
export { requestForRegistration };
