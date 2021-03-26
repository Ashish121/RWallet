import produce from 'immer';
import {
  AUTHENTICATION_INPROGRESS,
  TOP_UP_SUCCESS,
  TOP_UP_FAILED,
} from '../Contants';
interface TopUpRechargeState {
  isAuthenticating: boolean;
}

// defines the initial state for the reducer ...
export const initialState: TopUpRechargeState = {
  isAuthenticating: false,
};

// defines this reducers reducer functions ...
const reducers: any = {
  [AUTHENTICATION_INPROGRESS]: (draft: any) => {
    draft.isAuthenticating = true;
  },
  [TOP_UP_SUCCESS]: (draft: any, data: any) => {
    draft.isAuthenticating = false;
    localStorage.setItem('Apply Details :', JSON.stringify(data));
  },
  [TOP_UP_FAILED]: (draft: any) => {
    draft.isAuthenticating = false;
  },
};

// defines all reducers for actions of interest to the this reducer ...
export default produce((draft: TopUpRechargeState = initialState, action) => {
  reducers?.[action.type]?.(draft, action);
  return draft;
});
