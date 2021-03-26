import { TOP_UP_SUCCESS } from '../Contants';
import { authenticationForTopUpRecharge } from '../../services/Connect';
import { updateToast } from './index';

const requestForTopUpRecharge = (payload: any, nextRoute: Function) => {
  return async (dispatch: any) => {
    try {
      const response = await authenticationForTopUpRecharge(
        payload.user_id,
        payload.amount,
        payload.companyName,
        payload.mobileNumber
      );

      if (response.status === 200) {
        dispatch({ type: TOP_UP_SUCCESS, data: response.data });
        localStorage.setItem('userCreatedAccount', 'true');
        nextRoute(true);
      } else {
        nextRoute(false);
      }
    } catch (error) {
      nextRoute(false);
      const data = {
        showToast: true,
        toastMessage: 'API failed',
        position: 'top',
        duration: '10000',
      };
      dispatch({ type: 'TOP_UP_FAILED' });
      dispatch(updateToast(data));
    }
  };
};
export { requestForTopUpRecharge };
