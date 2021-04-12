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
      dispatch({ type: 'AUTHENTICATION_COMPLETED' });
      if (response.status === 200 && response.data.success) {
        dispatch({ type: SAVING_SUCCESS, data: response.data });
        localStorage.setItem('userCreatedAccount', 'true');
        nextRoute(true);
        console.log('Inside If block', response);
      } else {
        nextRoute(false);
        const data = {
          showToast: true,
          toastMessage: response.data.message,
          position: 'top',
          duration: '10000',
        };
        dispatch({ type: 'SAVING_FAILED' });
        dispatch(updateToast(data));
        console.log('Inside else block', response);
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
      dispatch({ type: 'SAVING_FAILED' });
      dispatch(updateToast(data));
    }
  };
};
export { requestForSavingAccount };
