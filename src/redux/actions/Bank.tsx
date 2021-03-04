import { AUTHENTICATION_INPROGRESS, BANKTRANSFER_SUCCESS } from '../Contants';
import { authenticationForBankTransfer } from '../../services/Connect';
import { updateToast } from './index';

const requestForBankTransfer = (payload: any, nextRoute: Function) => {
  return async (dispatch: any) => {
    dispatch({ type: AUTHENTICATION_INPROGRESS });
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
      if (response.status === 200) {
        dispatch({ type: BANKTRANSFER_SUCCESS, data: response.data });
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
      dispatch({ type: 'BANKTRANSFER_FAILED ' });
      dispatch(updateToast(data));
    }
  };
};
export { requestForBankTransfer };
