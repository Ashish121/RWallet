import { AUTHENTICATION_INPROGRESS, SAVING_CREDIT_SUCCESS } from '../Contants';
import { authenticationForFinancePaymentCalculation } from '../../services/Connect';
import { updateToast } from './index';

const requestForRoyalitySavingCreditPage = (
  payload: any,
  nextRoute: Function
) => {
  return async (dispatch: any) => {
    dispatch({ type: AUTHENTICATION_INPROGRESS });
    try {
      const response = await authenticationForFinancePaymentCalculation(
        payload.user_id,
        payload.accountNumber,
        payload.memberName,
        payload.mobileNo,
        payload.transType,
        payload.savingAmount,
        payload.remarks,
        payload.financeName
      );
      dispatch({ type: 'AUTHENTICATION_COMPLETED' });
      if (response.status === 200 && response.data.success) {
        dispatch({ type: SAVING_CREDIT_SUCCESS, data: response.data });
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
        dispatch({ type: 'SAVING_CREDIT_FAILED' });
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
      dispatch({ type: 'SAVING_CREDIT_FAILED' });
      dispatch(updateToast(data));
    }
  };
};
export { requestForRoyalitySavingCreditPage };
