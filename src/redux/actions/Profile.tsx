import { PROFILE_SUCCESS } from '../Contants';
import { loadProfile } from '../../services/Connect';
import { updateToast } from './index';
const requestForProfile = (payload: any, nextRoute: Function) => {
  return async (dispatch: any) => {
    try {
      const response = await loadProfile(payload.user_id);
      if (response.status === 200) {
        dispatch({ type: PROFILE_SUCCESS, data: response.data.user });
        nextRoute(true);
      }
      // console.log('done', response);
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
export { requestForProfile };
