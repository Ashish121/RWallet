import { AUTHENTICATION_INPROGRESS, WATERBILL_SUCCESS } from '../Contants';
import { authenticationForKhanepaniPage } from '../../services/Connect';
import { updateToast } from './index';

const requestForKhanepaniPage = (payload: any, nextRoute: Function) => {
  return async (dispatch: any) => {
    dispatch({ type: AUTHENTICATION_INPROGRESS });
    try {
      const response = await authenticationForKhanepaniPage(
        payload.user_id,
        payload.placeName,
        payload.customerID
      );
      dispatch({ type: 'AUTHENTICATION_COMPLETED' });
      if (response.status === 200 && response.data.success) {
        dispatch({ type: WATERBILL_SUCCESS, data: response.data });
        localStorage.setItem('userCreatedAccount', 'true');
        nextRoute(true);
      } else {
        const data = {
          showToast: true,
          toastMessage: response.data.message,
          position: 'top',
          duration: '10000',
        };
        dispatch({ type: 'WATERBILL_FAILED' });
        dispatch(updateToast(data));
        nextRoute(false);
      }
    } catch (error) {
      dispatch({ type: 'AUTHENTICATION_COMPLETED' });
      nextRoute(false);
      const data = {
        showToast: true,
        toastMessage: 'Network error',
        position: 'top',
        duration: '10000',
      };
      dispatch({ type: 'WATERBILL_FAILED' });
      dispatch(updateToast(data));
    }
  };
};
export { requestForKhanepaniPage };
