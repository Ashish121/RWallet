import produce from 'immer';

interface AgentTransferState {
  isLoading: boolean;
  message: any;
}

// defines the initial state for the reducer ...
export const initialState: AgentTransferState = {
  isLoading: false,
  message: null,
};

// defines this reducers reducer functions ...
const reducers: any = {
  'TOGGLE_LOADER': (draft: any, data: any) => {
    draft.isLoading = data.loading;
    draft.message = data.message;
  },
};

// defines all reducers for actions of interest to the this reducer ...
export default produce((draft: AgentTransferState = initialState, action) => {
  reducers?.[action.type]?.(draft, action);
  return draft;
});
