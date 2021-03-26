import produce from 'immer';
import {
  AUTHENTICATION_INPROGRESS,
  INTERNET_PAYMENT_SUCCESS,
  INTERNET_PAYMENT_FAILED,
} from '../Contants';
interface InternetPaymentSate {
  isAuthenticating: boolean;
}

// defines the initial state for the reducer ...
export const initialState: InternetPaymentSate = {
  isAuthenticating: false,
};

// defines this reducers reducer functions ...
const reducers: any = {
  [AUTHENTICATION_INPROGRESS]: (draft: any) => {
    draft.isAuthenticating = true;
  },
  [INTERNET_PAYMENT_SUCCESS]: (draft: any, data: any) => {
    draft.isAuthenticating = false;
    localStorage.setItem('Apply Details :', JSON.stringify(data));
  },
  [INTERNET_PAYMENT_FAILED]: (draft: any) => {
    draft.isAuthenticating = false;
  },
};

// defines all reducers for actions of interest to the this reducer ...
export default produce((draft: InternetPaymentSate = initialState, action) => {
  reducers?.[action.type]?.(draft, action);
  return draft;
});
