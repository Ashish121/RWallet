import { AGETTRANSFER_SUCCESS } from '../Contants';
import {
  authenticationForAgentTransfer,
  loadCountryNameList,
} from '../../services/Connect';
import { updateToast } from './index';

const requestForAgentTransfer = (payload: any, nextRoute: Function) => {
  return async (dispatch: any) => {
    try {
      const response = await authenticationForAgentTransfer(
        payload.user_id,
        payload.country,
        payload.agentCode,
        payload.accountHolderName,
        payload.accountNo,
        payload.mobileNo,
        payload.amount,
        payload.remarks
      );
      if (response.status === 200 && response.data.success) {
        dispatch({ type: AGETTRANSFER_SUCCESS, data: response.data });
        nextRoute(true);
      } else {
        const data = {
          showToast: true,
          toastMessage: response.data.message,
          position: 'top',
          duration: '10000',
        };
        dispatch({ type: 'AGETTRANSFER_FAILED' });
        dispatch(updateToast(data));
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
      dispatch({ type: 'AGETTRANSFER_FAILED' });
      dispatch(updateToast(data));
    }
  };
};

const loadCountryList = (callback: Function) => {
  return async (dispatch: any) => {
    dispatch({ type: AGETTRANSFER_SUCCESS, data: { status: true } });
    try {
      const response = await loadCountryNameList();
      if (response.status === 200 && response.data.success) {
        dispatch({ type: AGETTRANSFER_SUCCESS, data: { status: false } });
        localStorage.setItem('CountryNameList', JSON.stringify(response));
        callback(response);
      } else {
        const data = {
          showToast: true,
          toastMessage: response.data.message,
          position: 'top',
          duration: '10000',
        };
        dispatch({ type: 'CARD_PAYMENT_FAILED' });
        dispatch(updateToast(data));
      }
    } catch (error) {
      const data = {
        showToast: true,
        toastMessage: 'API failed',
        position: 'top',
        duration: '10000',
      };
      dispatch({ type: AGETTRANSFER_SUCCESS, data: { status: false } });
      dispatch(updateToast(data));
    }
  };
};
export { requestForAgentTransfer, loadCountryList };
