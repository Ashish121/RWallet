import { AUTHENTICATION_INPROGRESS, MPIN_SUCCESS } from '../Contants';
import { authenticationForMpin } from '../../services/Connect';
import { updateToast } from './index';

const requestForMpin = (payload: any, nextRoute: Function) => {
  return async (dispatch: any) => {
    dispatch({ type: AUTHENTICATION_INPROGRESS });
    try {
      const response = await authenticationForMpin(
        payload.user_id,
        payload.mpin
      );
      if (response.status === 200) {
        dispatch({ type: MPIN_SUCCESS, data: response.data });
        nextRoute(true);
      }
    } catch (error) {
      nextRoute(false);
      const data = {
        showToast: true,
        toastMessage: 'API failed',
        position: 'top',
        duration: '10000',
      };
      dispatch({ type: 'MPIN_FAILED' });
      dispatch(updateToast(data));
    }
  };
};
export { requestForMpin };
