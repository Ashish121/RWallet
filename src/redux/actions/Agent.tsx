import { AUTHENTICATION_INPROGRESS, AGETTRANSFER_SUCCESS } from '../Contants';
import { authenticationForAgentTransfer } from '../../services/Connect';
import { updateToast } from './index';

const requestForAgentTransfer = (payload: any, nextRoute: Function) => {
  return async (dispatch: any) => {
    dispatch({ type: AUTHENTICATION_INPROGRESS });
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
      if (response.status === 200) {
        dispatch({ type: AGETTRANSFER_SUCCESS, data: response.data });
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
      dispatch({ type: 'AGETTRANSFER_FAILED' });
      dispatch(updateToast(data));
    }
  };
};
export { requestForAgentTransfer };
