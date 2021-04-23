import produce from 'immer';
import {
  AUTHENTICATION_INPROGRESS,
  TRANSACTION_SUCCESS,
  TRANSACTION_FAILED,
} from '../Contants';
interface transactionState {
  isAuthenticating: boolean;
  // historyDetails: any;
  historyDetails: [];
}

// defines the initial state for the reducer ...
export const initialState: transactionState = {
  isAuthenticating: false,
  //historyDetails: null,
  historyDetails: [],
};

// defines this reducers reducer functions ...
const reducers: any = {
  [AUTHENTICATION_INPROGRESS]: (draft: any) => {
    draft.isAuthenticating = true;
  },
  [TRANSACTION_SUCCESS]: (draft: any, data: any) => {
    draft.isAuthenticating = false;

    draft.historyDetails = data;
    draft.historyDetails = draft.historyDetails.data.data;
    // draft.historyDetails = draft.historyDetails.data;
  },
  [TRANSACTION_FAILED]: (draft: any) => {
    draft.isAuthenticating = false;
  },
};

// defines all reducers for actions of interest to the this reducer ...
export default produce((draft: transactionState = initialState, action) => {
  reducers?.[action.type]?.(draft, action);
  return draft;
});
