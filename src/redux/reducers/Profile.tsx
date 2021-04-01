import produce from 'immer';
import {
  AUTHENTICATION_INPROGRESS,
  PROFILE_SUCCESS,
  PROFILE_FAILED,
} from '../Contants';
interface profileState {
  isAuthenticating: boolean;
  profileDetails: any;
}

// defines the initial state for the reducer ...
export const initialState: profileState = {
  isAuthenticating: false,
  profileDetails: null,
};

// defines this reducers reducer functions ...
const reducers: any = {
  [AUTHENTICATION_INPROGRESS]: (draft: any) => {
    draft.isAuthenticating = true;
  },
  // [PROFILE_SUCCESS]: (draft: any, data: any) => {
  //   draft.isAuthenticating = false;
  //   draft.profileDetails = data;
  // },
  [PROFILE_SUCCESS]: (draft: any, data: string) => {
    draft.profileDetails = data;
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
