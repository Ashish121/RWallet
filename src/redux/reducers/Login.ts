import produce from 'immer';
import {AUTHENTICATION_INPROGRESS, LOGIN_SUCCESS } from '../Contants';
interface LoginState {
    isAuthenticating: boolean;
    authenticated: boolean;
    // isServiceError: boolean;
    // user: object;
  }

// defines the initial state for the reducer ...
export const initialState: LoginState = {
  isAuthenticating : false,
  authenticated: false
};
  
// defines this reducers reducer functions ...
const reducers: any = {
  [AUTHENTICATION_INPROGRESS] : (draft: any) => {
    draft.isAuthenticating = true;
  },
  [LOGIN_SUCCESS] : (draft: any)=>{
    draft.authenticated = true;
    draft.isAuthenticating = false;
  }
};
  
// defines all reducers for actions of interest to the this reducer ...
export default produce((draft: LoginState = initialState, action) => {
    reducers?.[action.type]?.(draft, action);
    return draft;
});