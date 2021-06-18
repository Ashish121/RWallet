import { AUTHENTICATION_INPROGRESS, TVPAYMENT_SUCCESS } from '../Contants';
import { authenticationForTvPayment } from '../../services/Connect';
import { updateToast } from './index';

const requestForTvPayment = (payload: any, nextRoute: Function) => {
  return async (dispatch: any) => {
    dispatch({ type: AUTHENTICATION_INPROGRESS });
    try {
      const response = await authenticationForTvPayment(
        payload.user_id,
        payload.amount,
        payload.companyName,
        payload.customerId
      );
      dispatch({ type: 'AUTHENTICATION_COMPLETED' });
      if (response.status === 200 && response.data.success) {
        dispatch({ type: TVPAYMENT_SUCCESS, data: response.data });
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
        dispatch({ type: 'TVPAYMENT_FAILED' });
        dispatch(updateToast(data));
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
      dispatch({ type: 'TVPAYMENT_FAILED' });
      dispatch(updateToast(data));
    }
  };
};
export { requestForTvPayment };
