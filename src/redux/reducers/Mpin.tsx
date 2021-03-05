import produce from 'immer';
import {
  AUTHENTICATION_INPROGRESS,
  MPIN_SUCCESS,
  MPIN_FAILED,
} from '../Contants';
interface RegistrationState {
  isAuthenticating: boolean;
}

// defines the initial state for the reducer ...
export const initialState: RegistrationState = {
  isAuthenticating: false,
};

// defines this reducers reducer functions ...
const reducers: any = {
  [AUTHENTICATION_INPROGRESS]: (draft: any) => {
    draft.isAuthenticating = true;
  },
  [MPIN_SUCCESS]: (draft: any, data: any) => {
    draft.isAuthenticating = false;
    localStorage.setItem('MPI Details :', JSON.stringify(data));
  },
  [MPIN_FAILED]: (draft: any) => {
    draft.isAuthenticating = false;
  },
};

// defines all reducers for actions of interest to the this reducer ...
export default produce((draft: RegistrationState = initialState, action) => {
  reducers?.[action.type]?.(draft, action);
  return draft;
});
