import { APPLY_SUCCESS } from '../Contants';
import { authenticationForApplyPage } from '../../services/Connect';
import { updateToast } from './index';

const requestForApplyPage = (payload: any, nextRoute: Function) => {
  return async (dispatch: any) => {
    try {
      const response = await authenticationForApplyPage(
        payload.user_id,
        payload.loanType,
        payload.fullName,
        payload.fatherName,
        payload.mobileNo,
        payload.purposeOfLoan
      );

      if (response.status === 200 && response.data.success) {
        dispatch({ type: APPLY_SUCCESS, data: response.data });
        localStorage.setItem('loan type :', 'true');
        nextRoute(true);
      } else {
        const data = {
          showToast: true,
          toastMessage: response.data.message,
          position: 'top',
          duration: '10000',
        };
        dispatch({ type: 'APPLY_FAILED' });
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
      dispatch({ type: 'APPLY_FAILED' });
      dispatch(updateToast(data));
    }
  };
};
export { requestForApplyPage };
