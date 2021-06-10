import { NOTIFICATION_SUCCESS } from '../Contants';
import { updateDeviceToken } from '../../services/Connect';
import { updateToast, toggleLoader } from './index';

const RequestForUpdateDeviceToken = (payload: any) => {
  return async (dispatch: any) => {
    dispatch({ type: NOTIFICATION_SUCCESS, data: { status: true } });
    //dispatch(toggleLoader(true, "updating token..."));
    try {
      const response = await updateDeviceToken(
        payload.user_id,
        payload.pushToken
      );
      if (response.status === 200 && response.data.success) {
        dispatch({ type: NOTIFICATION_SUCCESS, data: { status: false } });
        dispatch(toggleLoader(false));
      } else {
        dispatch(toggleLoader(false));
        const data = {
          showToast: true,
          toastMessage: '',
          position: 'top',
          duration: '10000',
        };
        dispatch({ type: 'NOTIFICATION_FAILED' });
        dispatch(updateToast(data));
      }
    } catch (error) {
      dispatch(toggleLoader(false));
      const data = {
        showToast: true,
        toastMessage: 'API failed',
        position: 'top',
        duration: '10000',
      };

      dispatch({ type: NOTIFICATION_SUCCESS, data: { status: false } });
      dispatch(updateToast(data));
    }
  };
};
export { RequestForUpdateDeviceToken };