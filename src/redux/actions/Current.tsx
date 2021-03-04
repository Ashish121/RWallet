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
      if (response.status === 200) {
        dispatch({ type: CURRENT_SUCCESS, data: response.data });
        nextRoute();
      }
      console.log('done', response);
    } catch (error) {
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
