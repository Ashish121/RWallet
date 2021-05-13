import produce from 'immer';
import {
  AUTHENTICATION_INPROGRESS,
  CARTDETAILS_SUCCESS,
  CARTDETAILS_FAILED,
} from '../Contants';
interface ProductDetailsState {
  isAuthenticating: boolean;
}

// defines the initial state for the reducer ...
export const initialState: ProductDetailsState = {
  isAuthenticating: false,
};

// defines this reducers reducer functions ...
const reducers: any = {
  [AUTHENTICATION_INPROGRESS]: (draft: any) => {
    draft.isAuthenticating = true;
  },
  [CARTDETAILS_SUCCESS]: (draft: any) => {
    draft.isAuthenticating = false;
  },
  [CARTDETAILS_FAILED]: (draft: any) => {
    draft.isAuthenticating = false;
  },
};

// defines all reducers for actions of interest to the this reducer ...
export default produce((draft: ProductDetailsState = initialState, action) => {
  reducers?.[action.type]?.(draft, action);
  return draft;
});
