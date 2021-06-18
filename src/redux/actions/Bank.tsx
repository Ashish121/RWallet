import { BANKTRANSFER_SUCCESS } from '../Contants';
import {
  authenticationForBankTransfer,
  getBankAllNameList,
} from '../../services/Connect';
import { updateToast } from './index';

const requestForBankTransfer = (payload: any, nextRoute: Function) => {
  return async (dispatch: any) => {
    try {
      const response = await authenticationForBankTransfer(
        payload.user_id,
        payload.destination,
        payload.holderName,
        payload.accountNumber,
        payload.mobileNo,
        payload.amount,
        payload.remarks
      );
      if (response.status === 200 && response.data.success) {
        dispatch({ type: BANKTRANSFER_SUCCESS, data: response.data });
        nextRoute(true);
      } else {
        const data = {
          showToast: true,
          toastMessage: response.data.message,
          position: 'top',
          duration: '10000',
        };
        dispatch({ type: 'BANKTRANSFER_FAILED ' });
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
      dispatch({ type: 'BANKTRANSFER_FAILED ' });
      dispatch(updateToast(data));
    }
  };
};
const loadDestinationBankList = (callback: Function) => {
  return async (dispatch: any) => {
    dispatch({ type: BANKTRANSFER_SUCCESS, data: { status: true } });
    try {
      const response = await getBankAllNameList();
      if (response.status === 200 && response.data.success) {
        dispatch({ type: BANKTRANSFER_SUCCESS, data: { status: false } });
        localStorage.setItem('BankNameList', JSON.stringify(response));
        callback(response);
      } else {
        const data = {
          showToast: true,
          toastMessage: response.data.message,
          position: 'top',
          duration: '10000',
        };
        dispatch({ type: 'BANKTRANSFER_FAILED ' });
        dispatch(updateToast(data));
      }
    } catch (error) {
      const data = {
        showToast: true,
        toastMessage: 'Network error',
        position: 'top',
        duration: '10000',
      };
      dispatch({ type: BANKTRANSFER_SUCCESS, data: { status: false } });
      dispatch(updateToast(data));
    }
  };
};
export { requestForBankTransfer, loadDestinationBankList };
