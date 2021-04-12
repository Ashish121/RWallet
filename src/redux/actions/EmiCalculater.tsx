import { EMI_SUCCESS } from '../Contants';
import { authenticationForEmiCalculation } from '../../services/Connect';
import { updateToast } from './index';

const requestForEmiCalculaterPage = (payload: any, nextRoute: Function) => {
  return async (dispatch: any) => {
    try {
      const response = await authenticationForEmiCalculation(
        payload.loanAmount,
        payload.interestRate,
        payload.loanTenure
      );
      if (response.status === 200 && response.data.success) {
        dispatch({ type: EMI_SUCCESS, data: response.data });
        nextRoute(true);
        console.log('Inside If block', response);
      } else {
        const data = {
          showToast: true,
          toastMessage: response.data.message,
          position: 'top',
          duration: '10000',
        };
        dispatch({ type: 'EMI_FAILED' });
        dispatch(updateToast(data));
        console.log('Inside else block', response);
      }
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
