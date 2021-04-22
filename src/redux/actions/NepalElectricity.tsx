import { AUTHENTICATION_INPROGRESS, ELECTRICITY_SUCCESS } from '../Contants';
import { authenticationForNepalElectricityPage } from '../../services/Connect';
import { updateToast } from './index';

const requestForNepalElectricityPage = (payload: any, nextRoute: Function) => {
  return async (dispatch: any) => {
    dispatch({ type: AUTHENTICATION_INPROGRESS });
    try {
      const response = await authenticationForNepalElectricityPage(
        payload.user_id,
        payload.neaCounter,
        payload.scNumber,
        payload.customerID
      );
      dispatch({ type: 'AUTHENTICATION_COMPLETED' });
      if (response.status === 200 && response.data.success) {
        dispatch({ type: ELECTRICITY_SUCCESS, data: response.data });
        localStorage.setItem('userCreatedAccount', 'true');
        nextRoute(true);
      } else {
        nextRoute(false);
        const data = {
          showToast: true,
          toastMessage: response.data.message,
          position: 'top',
          duration: '10000',
        };
        dispatch({ type: 'ELECTRICITY_FAILED' });
        dispatch(updateToast(data));
      }
    } catch (error) {
      dispatch({ type: 'AUTHENTICATION_COMPLETED' });
      nextRoute(false);
      const data = {
        showToast: true,
        toastMessage: 'API failed',
        position: 'top',
        duration: '10000',
      };
      dispatch({ type: 'ELECTRICITY_FAILED' });
      dispatch(updateToast(data));
    }
  };
};
export { requestForNepalElectricityPage };
