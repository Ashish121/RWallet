import { AUTHENTICATION_INPROGRESS, MPIN_SUCCESS } from '../Contants';
import { authenticationForMpin, changeMpin } from '../../services/Connect';
import { updateToast, toggleLoader } from './index';

const requestForMpin = (payload: any, nextRoute: Function) => {
  return async (dispatch: any) => {
    dispatch({ type: AUTHENTICATION_INPROGRESS });
    try {
      const response = await authenticationForMpin(
        parseInt(payload.user_id),
        payload.mpin
      );
      dispatch({ type: 'AUTHENTICATION_COMPLETED' });
      if (response.status === 200) {
        dispatch({ type: MPIN_SUCCESS, data: response.data });
        localStorage.removeItem('isMpinCreated');
        localStorage.setItem('isMpinCreated', response.data.isMpin);
        nextRoute(true);
      }
    } catch (error) {
      dispatch({ type: 'AUTHENTICATION_COMPLETED' });
      nextRoute(false);
      const data = {
        showToast: true,
        toastMessage: 'API failed',
        position: 'top',
        duration: '10000',
      };
      dispatch({ type: 'MPIN_FAILED' });
      dispatch(updateToast(data));
    }
  };
};

const requestForChangeMpin = (payload: any, nextRoute: Function) => {
  return async (dispatch: any) => {
    console.log('payload: ----', payload);

    dispatch(toggleLoader(true, 'Updating MPIN...'));
    try {
      const response = await changeMpin(
        parseInt(payload.user_id),
        payload.current_mpin,
        payload.new_mpin
      );
      console.log('response*******: ', response);

      if (response.status === 200 && response.data.success) {
        dispatch({ type: MPIN_SUCCESS, data: response.data });
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

        dispatch(updateToast(data));
      }
    } catch (error) {
      dispatch(toggleLoader(false));
      nextRoute(false);
      const data = {
        showToast: true,
        toastMessage: 'API failed',
        position: 'top',
        duration: '10000',
      };
      dispatch({ type: 'MPIN_FAILED' });
      dispatch(updateToast(data));
    }
  };
};
export { requestForMpin, requestForChangeMpin };
