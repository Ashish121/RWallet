import { AUTHENTICATION_INPROGRESS, FIXED_SUCCESS } from '../Contants';
import { authenticationForFixedAccount } from '../../services/Connect';
import { updateToast } from './index';

const requestForFixedAccount = (payload: any, nextRoute: Function) => {
  return async (dispatch: any) => {
    dispatch({ type: AUTHENTICATION_INPROGRESS });
    try {
      const response = await authenticationForFixedAccount(
        payload.investment_period,
        payload.user_id,
        payload.amount
      );
      dispatch({ type: 'AUTHENTICATION_COMPLETED' });
      if (response.status === 200 && response.data.success) {
        dispatch({ type: FIXED_SUCCESS, data: response.data });
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
        dispatch({ type: 'FIXED_FAILED' });
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
      dispatch({ type: 'FIXED_FAILED' });
      dispatch(updateToast(data));
    }
  };
};
export { requestForFixedAccount };
