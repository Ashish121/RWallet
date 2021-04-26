import produce from 'immer';
import {
  AUTHENTICATION_INPROGRESS,
  SAVING_SUCCESS,
  SAVING_FAILED,
} from '../Contants';
interface SavingState {
  isAuthenticating: boolean;
  accountDetails: any;
}

// defines the initial state for the reducer ...
export const initialState: SavingState = {
  isAuthenticating: false,
  accountDetails: null,
};

// defines this reducers reducer functions ...
const reducers: any = {
  [AUTHENTICATION_INPROGRESS]: (draft: any) => {
    draft.isAuthenticating = true;
  },
  [SAVING_SUCCESS]: (draft: any, data: any) => {
    draft.isAuthenticating = false;
    localStorage.setItem('Saving_Account_Details', JSON.stringify(data));
    draft.accountDetails = data.data.data.saving_account_number;
    //
  },
  [SAVING_FAILED]: (draft: any) => {
    draft.isAuthenticating = false;
  },
};

// defines all reducers for actions of interest to the this reducer ...
export default produce((draft: SavingState = initialState, action) => {
  reducers?.[action.type]?.(draft, action);
  return draft;
});
