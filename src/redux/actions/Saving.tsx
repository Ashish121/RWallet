import { AUTHENTICATION_INPROGRESS, SAVING_SUCCESS } from '../Contants';
import { authenticationForSavingAccount } from '../../services/Connect';
import { updateToast } from './index';

const requestForSavingAccount = (payload: any, nextRoute: Function) => {
  return async (dispatch: any) => {
    dispatch({ type: AUTHENTICATION_INPROGRESS });
    try {
      const response = await authenticationForSavingAccount(
        payload.investment_period,
        payload.user_id,
        payload.amount,
        payload.depositType
      );
      if (response.status === 200) {
        dispatch({ type: SAVING_SUCCESS, data: response.data });
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
      dispatch({ type: 'SAVING_FAILED' });
      dispatch(updateToast(data));
    }
  };
};
export { requestForSavingAccount };
