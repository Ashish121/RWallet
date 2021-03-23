import produce from 'immer';
import {
  AUTHENTICATION_INPROGRESS,
  APPLY_SUCCESS,
  APPLY_FAILED,
} from '../Contants';
interface ApplyPageState {
  isAuthenticating: boolean;
}

// defines the initial state for the reducer ...
export const initialState: ApplyPageState = {
  isAuthenticating: false,
};

// defines this reducers reducer functions ...
const reducers: any = {
  [AUTHENTICATION_INPROGRESS]: (draft: any) => {
    draft.isAuthenticating = true;
  },
  [APPLY_SUCCESS]: (draft: any, data: any) => {
    draft.isAuthenticating = false;
    localStorage.setItem('Apply Details :', JSON.stringify(data));
  },
  [APPLY_FAILED]: (draft: any) => {
    draft.isAuthenticating = false;
  },
};

// defines all reducers for actions of interest to the this reducer ...
export default produce((draft: ApplyPageState = initialState, action) => {
  reducers?.[action.type]?.(draft, action);
  return draft;
});
