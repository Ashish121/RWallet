import produce from 'immer';
import { INITIAL_DATA_LOADING, INITIAL_DATA_FAILED } from '../Contants';
interface AccountState {
  initialLoading: boolean;
  initialData: any;
  // isServiceError: boolean;
  // user: object;
}

// defines the initial state for the reducer ...
export const initialState: AccountState = {
  initialLoading: false,
  initialData: {},
};

// defines this reducers reducer functions ...
const reducers: any = {
  [INITIAL_DATA_LOADING]: (draft: any, data: any) => {
    draft.initialLoading = data.status;
  },
  [INITIAL_DATA_FAILED]: (draft: any, data: any) => {
    draft.initialLoading = data.status;
  },
};

// defines all reducers for actions of interest to the this reducer ...
export default produce((draft: AccountState = initialState, action) => {
  reducers?.[action.type]?.(draft, action);
  return draft;
});
