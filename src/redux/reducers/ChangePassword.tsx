import produce from 'immer';
import {
  AUTHENTICATION_INPROGRESS,
  CHANGEPASSWORD_SUCCESS,
  CHANGEPASSWORD_FAILED,
} from '../Contants';
interface ChangePasswordState {
  isAuthenticating: boolean;
}

// defines the initial state for the reducer ...
export const initialState: ChangePasswordState = {
  isAuthenticating: false,
};

// defines this reducers reducer functions ...
const reducers: any = {
  [AUTHENTICATION_INPROGRESS]: (draft: any) => {
    draft.isAuthenticating = true;
  },
  [CHANGEPASSWORD_SUCCESS]: (draft: any) => {
    draft.isAuthenticating = false;
  },
  [CHANGEPASSWORD_FAILED]: (draft: any) => {
    draft.isAuthenticating = false;
  },
};

// defines all reducers for actions of interest to the this reducer ...
export default produce((draft: ChangePasswordState = initialState, action) => {
  reducers?.[action.type]?.(draft, action);
  return draft;
});
