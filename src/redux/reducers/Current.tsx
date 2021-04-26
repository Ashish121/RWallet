import produce from 'immer';
import {
  AUTHENTICATION_INPROGRESS,
  CURRENT_SUCCESS,
  CURRENT_FAILED,
} from '../Contants';
interface CurrentState {
  isAuthenticating: boolean;
  accountDetails: any;
}

// defines the initial state for the reducer ...
export const initialState: CurrentState = {
  isAuthenticating: false,
  accountDetails: null,
};

// defines this reducers reducer functions ...
const reducers: any = {
  [AUTHENTICATION_INPROGRESS]: (draft: any) => {
    draft.isAuthenticating = true;
  },
  [CURRENT_SUCCESS]: (draft: any, data: any) => {
    draft.isAuthenticating = false;
    localStorage.setItem('current account Details', JSON.stringify(data));
    draft.accountDetails = data.data.data[0].current_account_number;
    //
  },
  [CURRENT_FAILED]: (draft: any) => {
    draft.isAuthenticating = false;
  },
};

// defines all reducers for actions of interest to the this reducer ...
export default produce((draft: CurrentState = initialState, action) => {
  reducers?.[action.type]?.(draft, action);
  return draft;
});
