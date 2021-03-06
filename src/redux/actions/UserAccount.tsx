import { INITIAL_DATA_LOADING } from '../Contants';
import { updateToast } from './Toast';
import {
  loadCountryAndStates,
  updateUserAccountDetails,
} from '../../services/Connect';
const loadInitialData = (callback: Function) => {
  return async (dispatch: any) => {
    dispatch({ type: INITIAL_DATA_LOADING, data: { status: true } });
    try {
      const response = await loadCountryAndStates();
      if (response.status === 200) {
        dispatch({ type: INITIAL_DATA_LOADING, data: { status: false } });
        localStorage.setItem('initialData', JSON.stringify(response));
        callback(response);
      }
      console.log('done', response);
    } catch (error) {
      const data = {
        showToast: true,
        toastMessage: 'API failed',
        position: 'top',
        duration: '10000',
      };
      dispatch({ type: INITIAL_DATA_LOADING, data: { status: false } });
      dispatch(updateToast(data));
    }
  };
};
const updateUserDetails = (payload: any, callback: Function) => {
  return async (dispatch: any) => {
    try {
      const response = await updateUserAccountDetails(payload);
      if (response.status === 200) {
        localStorage.setItem('userUpdated', JSON.stringify(response));
        callback(true);
      }
      console.log('done', response);
    } catch (error) {
      callback(false);
      const data = {
        showToast: true,
        toastMessage: 'API failed',
        position: 'top',
        duration: '10000',
      };
      dispatch(updateToast(data));
    }
  };
};

export { loadInitialData, updateUserDetails };
