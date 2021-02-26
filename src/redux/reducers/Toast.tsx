import produce from 'immer';
import { UPDATE_TOAST, RESET_TOAST } from '../Contants';
interface ToastState {
  showToast: boolean;
  toastMessage: String;
  position?: String;
  duration?: String;
  // isServiceError: boolean;
  // user: object;
}

// defines the initial state for the reducer ...
export const initialState: ToastState = {
  showToast: false,
  toastMessage: '',
  position: 'top',
  duration: '2000',
};

// defines this reducers reducer functions ...
const reducers: any = {
  [UPDATE_TOAST]: (draft: any, toastData: any) => {
    draft.showToast = toastData.data.showToast;
    draft.toastMessage = toastData.data.toastMessage;
    draft.position = toastData.data.position;
    draft.duration = toastData.data.duration;
  },
  [RESET_TOAST]: (draft: any) => {
    draft.showToast = false;
    draft.toastMessage = '';
    draft.position = 'top';
    draft.duration = 1000;
  },
};

// defines all reducers for actions of interest to the this reducer ...
export default produce((draft: ToastState = initialState, action) => {
  reducers?.[action.type]?.(draft, action);
  return draft;
});
