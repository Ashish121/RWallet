import { AUTHENTICATION_INPROGRESS, EMI_SUCCESS } from '../Contants';
import { authenticationForEmiCalculaterPage } from '../../services/Connect';
import { updateToast } from './index';

const requestForEmiCalculaterPage = (payload: any, nextRoute: Function) => {
  return async (dispatch: any) => {
    dispatch({ type: AUTHENTICATION_INPROGRESS });
    try {
      const response = await authenticationForEmiCalculaterPage(
        payload.loanAmount,
        payload.interestRate,
        payload.loanTenure
      );
      dispatch({ type: 'AUTHENTICATION_COMPLETED' });
      if (response.status === 200) {
        dispatch({ type: EMI_SUCCESS, data: response.data });
        localStorage.setItem('userCreatedAccount', 'true');
        nextRoute(true);
      } else {
        nextRoute(false);
      }
      console.log('done', response);
    } catch (error) {
      dispatch({ type: 'AUTHENTICATION_COMPLETED' });
      nextRoute(false);
      const data = {
        showToast: true,
        toastMessage: 'API failed',
        position: 'top',
        duration: '10000',
      };
      dispatch({ type: 'EMI_FAILED' });
      dispatch(updateToast(data));
    }
  };
};
export { requestForEmiCalculaterPage };
