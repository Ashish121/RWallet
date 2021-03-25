import produce from 'immer';
import {
  AUTHENTICATION_INPROGRESS,
  SAVING_CREDIT_SUCCESS ,
  SAVING_CREDIT_FAILED ,
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
  [SAVING_CREDIT_SUCCESS ]: (draft: any, data: any) => {
    draft.isAuthenticating = false;
    localStorage.setItem('Apply Details :', JSON.stringify(data));
  },
  [SAVING_CREDIT_FAILED ]: (draft: any) => {
    draft.isAuthenticating = false;
  },
};

// defines all reducers for actions of interest to the this reducer ...
export default produce((draft: ApplyPageState = initialState, action) => {
  reducers?.[action.type]?.(draft, action);
  return draft;
});
