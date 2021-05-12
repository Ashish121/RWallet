import { PRODUCTLIST_SUCCESS } from '../Contants';
import { loadProduct } from '../../services/Connect';
import { updateToast, toggleLoader } from './index';

const loadProductDetailsList = (callback: Function) => {
  return async (dispatch: any) => {
    dispatch({ type: PRODUCTLIST_SUCCESS, data: { status: true } });
    dispatch(toggleLoader(true, 'Logging out...'));
    try {
      const response = await loadProduct();
      if (response.status === 200 && response.data.success) {
        dispatch({ type: PRODUCTLIST_SUCCESS, data: { status: false } });
        localStorage.setItem('BankNameList', JSON.stringify(response));
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
        dispatch({ type: 'PRODUCTLIST_FAILED ' });
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
      dispatch({ type: PRODUCTLIST_SUCCESS, data: { status: false } });
      dispatch(updateToast(data));
    }
  };
};
export { loadProductDetailsList };
