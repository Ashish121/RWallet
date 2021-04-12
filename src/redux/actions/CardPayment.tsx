import { CARD_PAYMENT_SUCCESS } from '../Contants';
import {
  authenticationForCardPaymentCalculation,
  getBankAllNameList,
} from '../../services/Connect';
import { updateToast } from './index';

const requestForCreditCardPayment = (payload: any, nextRoute: Function) => {
  return async (dispatch: any) => {
    try {
      const response = await authenticationForCardPaymentCalculation(
        payload.user_id,
        payload.amount,
        payload.bankName,
        payload.cardNumber
      );
      if (response.status === 200 && response.data.success) {
        dispatch({ type: CARD_PAYMENT_SUCCESS, data: response.data });
        nextRoute(true);
        console.log('Inside If side', response);
      } else {
        const data = {
          showToast: true,
          toastMessage: response.data.message,
          position: 'top',
          duration: '10000',
        };
        dispatch({ type: 'CARD_PAYMENT_FAILED' });
        dispatch(updateToast(data));
        console.log('Inside else part', response);
      }
    } catch (error) {
      nextRoute(false);
      const data = {
        showToast: true,
        toastMessage: 'API failed',
        position: 'top',
        duration: '10000',
      };
      dispatch({ type: 'CARD_PAYMENT_FAILED' });
      dispatch(updateToast(data));
    }
  };
};

const loadBankList = (callback: Function) => {
  return async (dispatch: any) => {
    dispatch({ type: CARD_PAYMENT_SUCCESS, data: { status: true } });
    try {
      const response = await getBankAllNameList();
      if (response.status === 200 && response.data.success) {
        dispatch({ type: CARD_PAYMENT_SUCCESS, data: { status: false } });
        localStorage.setItem('BankNameList', JSON.stringify(response));
        callback(response);
        console.log('Inside If  block bank list', response);
      } else {
        const data = {
          showToast: true,
          toastMessage: response.data.message,
          position: 'top',
          duration: '10000',
        };
        dispatch({ type: 'CARD_PAYMENT_FAILED' });
        dispatch(updateToast(data));
        console.log('Inside else part', response);
      }
      console.log('done bank list', response);
    } catch (error) {
      const data = {
        showToast: true,
        toastMessage: 'API failed',
        position: 'top',
        duration: '10000',
      };
      dispatch({ type: CARD_PAYMENT_SUCCESS, data: { status: false } });
      dispatch(updateToast(data));
    }
  };
};
export { requestForCreditCardPayment, loadBankList };
