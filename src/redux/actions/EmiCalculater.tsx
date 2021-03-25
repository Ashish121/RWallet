import { EMI_SUCCESS } from '../Contants';
import { authenticationForEmiCalculaterPage } from '../../services/Connect';
import { updateToast } from './index';

const requestForEmiCalculaterPage = (payload: any, nextRoute: Function) => {
  return async (dispatch: any) => {
    try {
      const response = await authenticationForEmiCalculaterPage(
        payload.loanAmount,
        payload.interestRate,
        payload.loanTenure
      );
      if (response.status === 200) {
        dispatch({ type: EMI_SUCCESS, data: response.data });
        nextRoute(true);
      }
      console.log('done', response);
    } catch (error) {
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
