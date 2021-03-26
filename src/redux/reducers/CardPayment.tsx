import produce from 'immer';
import { CARD_PAYMENT_SUCCESS, CARD_PAYMENT_FAILED } from '../Contants';
interface ApplyPageState {
  isAuthenticating: boolean;
}

// defines the initial state for the reducer ...
export const initialState: ApplyPageState = {
  isAuthenticating: false,
};

// defines this reducers reducer functions ...
const reducers: any = {
  [CARD_PAYMENT_SUCCESS]: (draft: any, data: any) => {
    draft.isAuthenticating = false;
    localStorage.setItem('Apply Details :', JSON.stringify(data));
  },
  [CARD_PAYMENT_FAILED]: (draft: any) => {
    draft.isAuthenticating = false;
  },
};

// defines all reducers for actions of interest to the this reducer ...
export default produce((draft: ApplyPageState = initialState, action) => {
  reducers?.[action.type]?.(draft, action);
  return draft;
});
