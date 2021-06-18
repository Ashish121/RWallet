import { PROFILE_SUCCESS } from '../Contants';
import { loadProfile, loadImageSlider } from '../../services/Connect';
import { updateToast, toggleLoader } from './index';
const requestForProfile = (payload: any, nextRoute: Function) => {
  return async (dispatch: any) => {
    try {
      const response = await loadProfile(payload.user_id);
      if (response.status === 200 && response.data.success) {
        dispatch({ type: PROFILE_SUCCESS, data: response.data.user });
        localStorage.setItem(
          'createdAccountType',
          response.data.user.account_type
        );

        nextRoute(true);
      } else {
        nextRoute(false);
        const data = {
          showToast: true,
          toastMessage: response.data.message,
          position: 'top',
          duration: '10000',
        };
        dispatch({ type: 'PROFILE_FAILED' });
        dispatch(updateToast(data));
      }
    } catch (error) {
      nextRoute(false);
      const data = {
        showToast: true,
        toastMessage: 'API failed',
        position: 'top',
        duration: '10000',
      };
      dispatch({ type: 'PROFILE_FAILED' });
      dispatch(updateToast(data));
    }
  };
};

const requestForImageSlider = (callback: Function) => {
  return async (dispatch: any) => {
    dispatch({ type: PROFILE_SUCCESS, data: { status: true } });
    dispatch(toggleLoader(true, 'Fetching details...'));
    try {
      const response = await loadImageSlider();
      if (response.status === 200 && response.data.success) {
        dispatch({ type: PROFILE_SUCCESS, data: { status: false } });
        localStorage.setItem('sliderList', JSON.stringify(response));
        dispatch(toggleLoader(false));
        callback(response);
      } else {
        dispatch(toggleLoader(false));
        const data = {
          showToast: true,
          toastMessage: response.data.message,
          position: 'top',
          duration: '10000',
        };
        dispatch({ type: 'PROFILE_FAILED ' });
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
      dispatch({ type: PROFILE_SUCCESS, data: { status: false } });
      dispatch(updateToast(data));
    }
  };
};

export { requestForProfile, requestForImageSlider };
