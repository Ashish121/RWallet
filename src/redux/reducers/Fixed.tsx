import produce from 'immer';
import {
  AUTHENTICATION_INPROGRESS,
  FIXED_SUCCESS,
  FIXED_FAILED,
} from '../Contants';
interface FixedState {
  isAuthenticating: boolean;
  accountDetails: any;
}

// defines the initial state for the reducer ...
export const initialState: FixedState = {
  isAuthenticating: false,
  accountDetails: null,
};

// defines this reducers reducer functions ...
const reducers: any = {
  [AUTHENTICATION_INPROGRESS]: (draft: any) => {
    draft.isAuthenticating = true;
  },
  [FIXED_SUCCESS]: (draft: any, data: any) => {
    draft.isAuthenticating = false;
    localStorage.setItem('Fixed_Account_Details', JSON.stringify(data));
    draft.accountDetails = data.data.data[0].fixed_account_number;
    //
  },
  [FIXED_FAILED]: (draft: any) => {
    draft.isAuthenticating = false;
  },
};

// defines all reducers for actions of interest to the this reducer ...
export default produce((draft: FixedState = initialState, action) => {
  reducers?.[action.type]?.(draft, action);
  return draft;
});
