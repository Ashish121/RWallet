import { TRANSACTION_SUCCESS } from '../Contants';
import { loadTransactionHistory } from '../../services/Connect';
import { updateToast } from './index';

const requestForTransactionDetails = (payload: any, nextRoute: Function) => {
  return async (dispatch: any) => {
    try {
      const response = await loadTransactionHistory(payload.user_id);
      if (response.status === 200 && response.data.success) {
        dispatch({ type: TRANSACTION_SUCCESS, data: response.data });
        nextRoute(true);
      } else {
        const data = {
          showToast: true,
          toastMessage: response.data.message,
          position: 'top',
          duration: '10000',
        };
        dispatch({ type: 'TRANSACTION_FAILED ' });
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
      dispatch({ type: 'TRANSACTION_FAILED ' });
      dispatch(updateToast(data));
    }
  };
};

export { requestForTransactionDetails };
