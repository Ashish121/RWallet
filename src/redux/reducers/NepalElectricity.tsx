import produce from 'immer';
import {
  AUTHENTICATION_INPROGRESS,
  ELECTRICITY_SUCCESS,
  ELECTRICITY_FAILED,
} from '../Contants';
interface initialPageState {
  isAuthenticating: boolean;
}

// defines the initial state for the reducer ...
export const initialState: initialPageState = {
  isAuthenticating: false,
};

// defines this reducers reducer functions ...
const reducers: any = {
  [AUTHENTICATION_INPROGRESS]: (draft: any) => {
    draft.isAuthenticating = true;
  },
  [ELECTRICITY_SUCCESS]: (draft: any, data: any) => {
    draft.isAuthenticating = false;
    localStorage.setItem('Electricity Details :', JSON.stringify(data));
  },
  [ELECTRICITY_FAILED]: (draft: any) => {
    draft.isAuthenticating = false;
  },
};

// defines all reducers for actions of interest to the this reducer ...
export default produce((draft: initialPageState = initialState, action) => {
  reducers?.[action.type]?.(draft, action);
  return draft;
});
