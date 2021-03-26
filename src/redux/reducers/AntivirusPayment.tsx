import produce from 'immer';
import { ANTIVIRUS_SUCCESS, ANTIVIRUS_FAILED } from '../Contants';
interface AntivirusPaymentSate {
  isAuthenticating: boolean;
}

// defines the initial state for the reducer ...
export const initialState: AntivirusPaymentSate = {
  isAuthenticating: false,
};

// defines this reducers reducer functions ...
const reducers: any = {
  [ANTIVIRUS_SUCCESS]: (draft: any, data: any) => {
    draft.isAuthenticating = false;
    localStorage.setItem('Antivirus Details :', JSON.stringify(data));
  },
  [ANTIVIRUS_FAILED]: (draft: any) => {
    draft.isAuthenticating = false;
  },
};

// defines all reducers for actions of interest to the this reducer ...
export default produce((draft: AntivirusPaymentSate = initialState, action) => {
  reducers?.[action.type]?.(draft, action);
  return draft;
});
