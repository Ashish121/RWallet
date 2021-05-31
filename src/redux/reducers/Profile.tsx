import produce from 'immer';
import {
  AUTHENTICATION_INPROGRESS,
  PROFILE_SUCCESS,
  PROFILE_FAILED,
} from '../Contants';
interface profileState {
  isAuthenticating: boolean;
  profileDetails: [];
}
// defines the initial state for the reducer ...
export const initialState: profileState = {
  isAuthenticating: false,
  profileDetails: [],
};
// defines this reducers reducer functions ...
const reducers: any = {
  [AUTHENTICATION_INPROGRESS]: (draft: any) => {
    draft.isAuthenticating = true;
  },

  [PROFILE_SUCCESS]: (draft: any, data: string) => {
    localStorage.setItem('profile_Details', JSON.stringify(data));
    draft.profileDetails = data;
    draft.profileDetails = draft.profileDetails.data;
    localStorage.setItem('accountNumber', draft.profileDetails.account_number);
  },

  [PROFILE_FAILED]: (draft: any, data: any) => {
    draft.isAuthenticating = false;
    draft.profileDetails = data;
  },
};

// defines all reducers for actions of interest to the this reducer ...
export default produce((draft: profileState = initialState, action) => {
  reducers?.[action.type]?.(draft, action);
  return draft;
});
