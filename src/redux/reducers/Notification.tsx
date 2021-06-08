import produce from 'immer';
import {
  AUTHENTICATION_INPROGRESS,
  NOTIFICATION_SUCCESS,
  NOTIFICATION_FAILED,
} from '../Contants';
interface NotificationDetailsState {
  isAuthenticating: boolean;
}

// defines the initial state for the reducer ...
export const initialState: NotificationDetailsState = {
  isAuthenticating: false,
};

// defines this reducers reducer functions ...
const reducers: any = {
  [AUTHENTICATION_INPROGRESS]: (draft: any) => {
    draft.isAuthenticating = true;
  },
  [NOTIFICATION_SUCCESS]: (draft: any) => {
    draft.isAuthenticating = false;
  },
  [NOTIFICATION_FAILED]: (draft: any) => {
    draft.isAuthenticating = false;
  },
};

// defines all reducers for actions of interest to the this reducer ...
export default produce(
  (draft: NotificationDetailsState = initialState, action) => {
    reducers?.[action.type]?.(draft, action);
    return draft;
  }
);
