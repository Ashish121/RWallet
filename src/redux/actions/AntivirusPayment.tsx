import { ANTIVIRUS_SUCCESS } from '../Contants';
import { authenticationForAntivirusPayment } from '../../services/Connect';
import { updateToast } from './index';

const requestForAntivirusPayment = (payload: any, nextRoute: Function) => {
  return async (dispatch: any) => {
    try {
      const response = await authenticationForAntivirusPayment(
        payload.user_id,
        payload.brandName,
        payload.planName,
        payload.accountType
      );

      if (response.status === 200 && response.data.success) {
        dispatch({ type: ANTIVIRUS_SUCCESS, data: response.data });
        localStorage.setItem('Antivirus payment', 'true');
        nextRoute(true, response.data);
      } else {
        const data = {
          showToast: true,
          toastMessage: response.data.message,
          position: 'top',
          duration: '10000',
        };
        dispatch({ type: 'ANTIVIRUS_FAILED' });
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
      dispatch({ type: 'ANTIVIRUS_FAILED' });
      dispatch(updateToast(data));
    }
  };
};
export { requestForAntivirusPayment };
