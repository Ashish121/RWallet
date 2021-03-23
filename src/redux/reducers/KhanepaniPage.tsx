import produce from 'immer';
import {
  AUTHENTICATION_INPROGRESS,
  WATERBILL_SUCCESS,
  WATERBILL_FAILED,
} from '../Contants';
interface WaterBillPageState {
  isAuthenticating: boolean;
}

// defines the initial state for the reducer ...
export const initialState: WaterBillPageState = {
  isAuthenticating: false,
};

// defines this reducers reducer functions ...
const reducers: any = {
  [AUTHENTICATION_INPROGRESS]: (draft: any) => {
    draft.isAuthenticating = true;
  },
  [WATERBILL_SUCCESS]: (draft: any, data: any) => {
    draft.isAuthenticating = false;
    localStorage.setItem('Apply Details :', JSON.stringify(data));
  },
  [WATERBILL_FAILED]: (draft: any) => {
    draft.isAuthenticating = false;
  },
};

// defines all reducers for actions of interest to the this reducer ...
export default produce((draft: WaterBillPageState = initialState, action) => {
  reducers?.[action.type]?.(draft, action);
  return draft;
});
