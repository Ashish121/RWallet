import produce from 'immer';
import {
  AUTHENTICATION_INPROGRESS,
  AGETTRANSFER_SUCCESS,
  AGETTRANSFER_FAILED,
} from '../Contants';
interface AgentTransferState {
  isAuthenticating: boolean;
  agentDetails: any;
}

// defines the initial state for the reducer ...
export const initialState: AgentTransferState = {
  isAuthenticating: false,
  agentDetails: null,
};

// defines this reducers reducer functions ...
const reducers: any = {
  [AUTHENTICATION_INPROGRESS]: (draft: any) => {
    draft.isAuthenticating = true;
  },
  [AGETTRANSFER_SUCCESS]: (draft: any, data: any) => {
    draft.isAuthenticating = false;
    draft.agentDetails = data;
  },
  [AGETTRANSFER_FAILED]: (draft: any) => {
    draft.isAuthenticating = false;
  },
};

// defines all reducers for actions of interest to the this reducer ...
export default produce((draft: AgentTransferState = initialState, action) => {
  reducers?.[action.type]?.(draft, action);
  return draft;
});
