import produce from 'immer';
import {
  AUTHENTICATION_INPROGRESS,
  TVPAYMENT_SUCCESS,
  TVPAYMENT_FAILED,
} from '../Contants';
interface tvPaymentSate {
  isAuthenticating: boolean;
}

// defines the initial state for the reducer ...
export const initialState: tvPaymentSate = {
  isAuthenticating: false,
};

// defines this reducers reducer functions ...
const reducers: any = {
  [AUTHENTICATION_INPROGRESS]: (draft: any) => {
    draft.isAuthenticating = true;
  },
  [TVPAYMENT_SUCCESS]: (draft: any, data: any) => {
    draft.isAuthenticating = false;
    localStorage.setItem('Apply Details :', JSON.stringify(data));
  },
  [TVPAYMENT_FAILED]: (draft: any) => {
    draft.isAuthenticating = false;
  },
};

// defines all reducers for actions of interest to the this reducer ...
export default produce((draft: tvPaymentSate = initialState, action) => {
  reducers?.[action.type]?.(draft, action);
  return draft;
});
