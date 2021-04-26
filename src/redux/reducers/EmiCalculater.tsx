import produce from 'immer';
import { EMI_SUCCESS } from '../Contants';
interface EmiPageState {
  emiDetails: any;
}

// defines the initial state for the reducer ...
export const initialState: EmiPageState = {
  emiDetails: null,
};

// defines this reducers reducer functions ...
const reducers: any = {
  [EMI_SUCCESS]: (draft: any, data: any) => {
    draft.emiDetails = data;
  },
};

// defines all reducers for actions of interest to the this reducer ...
export default produce((draft: EmiPageState = initialState, action) => {
  reducers?.[action.type]?.(draft, action);
  return draft;
});
