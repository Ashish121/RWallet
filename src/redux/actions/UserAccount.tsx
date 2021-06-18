import { INITIAL_DATA_LOADING } from '../Contants';
import { updateToast } from './Toast';
import {
  getProvinces,
  getDistrictByProvince,
  updateUserAccountDetails,
  getLocalLevelName,
} from '../../services/Connect';

const fetchdistrictByProvince = (callback: Function, id: any) => {
  return async (dispatch: any) => {
    dispatch({ type: INITIAL_DATA_LOADING, data: { status: true } });
    try {
      const response = await getDistrictByProvince(id);

      if (response.status === 200 && response.data.success) {
        dispatch({ type: INITIAL_DATA_LOADING, data: { status: false } });
        localStorage.setItem('districts', JSON.stringify(response));
        callback(response);
      } else {
        const data = {
          showToast: true,
          toastMessage: response.data.message,
          position: 'top',
          duration: '10000',
        };
        dispatch({ type: 'INITIAL_DATA_FAILED' });
        dispatch(updateToast(data));
      }
      //
    } catch (error) {
      const data = {
        showToast: true,
        toastMessage: 'Network error',
        position: 'top',
        duration: '10000',
      };
      dispatch({ type: INITIAL_DATA_LOADING, data: { status: false } });
      dispatch(updateToast(data));
    }
  };
};
const loadProvince = (callback: Function) => {
  return async (dispatch: any) => {
    dispatch({ type: INITIAL_DATA_LOADING, data: { status: true } });
    try {
      const response = await getProvinces();
      if (response.status === 200 && response.data.success) {
        dispatch({ type: INITIAL_DATA_LOADING, data: { status: false } });
        localStorage.setItem('provinceList', JSON.stringify(response));
        callback(response);
      } else {
        const data = {
          showToast: true,
          toastMessage: response.data.message,
          position: 'top',
          duration: '10000',
        };
        dispatch({ type: 'INITIAL_DATA_FAILED' });
        dispatch(updateToast(data));
      }
    } catch (error) {
      const data = {
        showToast: true,
        toastMessage: 'Network error',
        position: 'top',
        duration: '10000',
      };
      dispatch({ type: INITIAL_DATA_LOADING, data: { status: false } });
      dispatch(updateToast(data));
    }
  };
};
const localLevelName = (callback: Function, id: any) => {
  return async (dispatch: any) => {
    dispatch({ type: INITIAL_DATA_LOADING, data: { status: true } });
    try {
      const response = await getLocalLevelName(id);
      if (response.status === 200 && response.data.success) {
        dispatch({ type: INITIAL_DATA_LOADING, data: { status: false } });
        localStorage.setItem('localLevelName', JSON.stringify(response));
        callback(response);
      } else {
        const data = {
          showToast: true,
          toastMessage: response.data.message,
          position: 'top',
          duration: '10000',
        };
        dispatch({ type: 'INITIAL_DATA_FAILED' });
        dispatch(updateToast(data));
      }
    } catch (error) {
      const data = {
        showToast: true,
        toastMessage: 'Network error',
        position: 'top',
        duration: '10000',
      };
      dispatch({ type: INITIAL_DATA_LOADING, data: { status: false } });
      dispatch(updateToast(data));
    }
  };
};
const updateUserDetails = (payload: any, nextRoute: Function) => {
  return async (dispatch: any) => {
    try {
      const response = await updateUserAccountDetails(payload);
      if (response.status === 200 && response.data.success) {
        localStorage.setItem('userUpdated', JSON.stringify(response));
        nextRoute(true);
      } else {
        const data = {
          showToast: true,
          toastMessage: response.data.message,
          position: 'top',
          duration: '10000',
        };
        dispatch({ type: 'INITIAL_DATA_FAILED' });
        dispatch(updateToast(data));
        nextRoute(false);
      }
    } catch (error) {
      nextRoute(false);

      const data = {
        showToast: true,
        toastMessage: 'Network error',
        position: 'top',
        duration: '10000',
      };
      dispatch(updateToast(data));
    }
  };
};

export {
  loadProvince,
  updateUserDetails,
  fetchdistrictByProvince,
  localLevelName,
};
