import { fetchPOSDetails } from '../../services/Connect';
import { updateToast } from './index';

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
        toastMessage: 'API failed',
        position: 'top',
        duration: '10000',
      };
      dispatch(updateToast(data));
    }
  };
};
export { loadPOSDetails };
