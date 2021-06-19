import { PROFILE_SUCCESS } from '../Contants';
import { loadProfile } from '../../services/Connect';
import { updateToast } from './index';
const requestForProfile = (payload: any, nextRoute: Function) => {
  return async (dispatch: any) => {
    try {
      const response = await loadProfile(payload.user_id);
      if (response.status === 200 && response.data.success) {
        dispatch({ type: PROFILE_SUCCESS, data: response.data.user });
        localStorage.setItem('balance', response.data.user.balance);
        localStorage.setItem(
          'createdAccountType',
          response.data.user.account_type
        );
        localStorage.setItem('profileNewData', response.data.user);
        nextRoute(true, response.data);
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
        toastMessage: 'Network error',
        position: 'top',
        duration: '10000',
      };
      dispatch({ type: 'PROFILE_FAILED' });
      dispatch(updateToast(data));
    }
  };
};

export { requestForProfile };
