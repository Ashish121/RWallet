import { fetchPOSDetails, createPOSOrder } from '../../services/Connect';
import { updateToast, toggleLoader } from './index';
import { POS_SUCCESS } from '../Contants';

const loadPOSDetails = (callback: Function) => {
  return async (dispatch: any) => {
    try {
      const response = await fetchPOSDetails();
      if (response.status === 200 || response.statusCode === 200) {
        // dispatch({ type: 'POS_DATA_RECEIVED', data: response.data });
        callback(response);
      }
    } catch (error) {
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

const requestForPosOrder = (payload: any, nextRoute: Function) => {
  return async (dispatch: any) => {
    dispatch({ type: POS_SUCCESS, data: { status: true } });
    dispatch(toggleLoader(true, 'Creating order...'));
    try {
      const response = await createPOSOrder(
        payload.user_id,
        payload.cartId,
        payload.posId,
        payload.country,
        payload.province,
        payload.district,
        payload.houseNo
      );
      if (response.status === 200 && response.data.success) {
        dispatch({ type: POS_SUCCESS, data: { status: false } });
        localStorage.setItem('CartDetailsList', JSON.stringify(response));
        dispatch(toggleLoader(false));
        nextRoute(true);
      } else {
        dispatch(toggleLoader(false));
        const data = {
          showToast: true,
          toastMessage: response.data.message,
          position: 'top',
          duration: '10000',
        };
        dispatch({ type: 'POS_FAILED' });
        dispatch(updateToast(data));
        nextRoute(false);
      }
    } catch (error) {
      nextRoute(false);
      dispatch(toggleLoader(false));
      const data = {
        showToast: true,
        toastMessage: 'Network error',
        position: 'top',
        duration: '10000',
      };
      dispatch({ type: POS_SUCCESS, data: { status: false } });
      dispatch(updateToast(data));
    }
  };
};

export { loadPOSDetails, requestForPosOrder };
