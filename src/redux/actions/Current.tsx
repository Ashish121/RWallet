import { AUTHENTICATION_INPROGRESS, CURRENT_SUCCESS } from '../Contants';
import { authenticationForCurrentAc } from '../../services/Connect';
import { updateToast } from './index';

const requestForCurrentAccount = (payload: any, nextRoute: Function) => {
  return async (dispatch: any) => {
    dispatch({ type: AUTHENTICATION_INPROGRESS });
    try {
      const response = await authenticationForCurrentAc(
        payload.user_id,
        payload.amount
      );
      dispatch({ type: 'AUTHENTICATION_COMPLETED' });
      if (response.status === 200) {
        dispatch({ type: CURRENT_SUCCESS, data: response.data });
        localStorage.setItem('userCreatedAccount', 'true');
        nextRoute(true);
      } else {
        nextRoute(false);
      }
      console.log('done', response);
    } catch (error) {
      dispatch({ type: 'AUTHENTICATION_COMPLETED' });
      nextRoute(false);
      const data = {
        showToast: true,
        toastMessage: 'API failed',
        position: 'top',
        duration: '10000',
      };
      dispatch({ type: 'CURRENT_FAILED' });
      dispatch(updateToast(data));
    }
  };
};
export { requestForCurrentAccount };
