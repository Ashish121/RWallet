import { PRODUCTLIST_SUCCESS } from '../Contants';
import { loadProduct, loadSearchItemDetails } from '../../services/Connect';
import { updateToast, toggleLoader } from './index';

const loadProductDetailsList = (payload: any, callback: Function) => {
  return async (dispatch: any) => {
    dispatch({ type: PRODUCTLIST_SUCCESS, data: { status: true } });
    dispatch(toggleLoader(true, 'Fetching details...'));
    try {
      const response = await loadProduct(payload.user_id);
      if (response.status === 200 && response.data.success) {
        dispatch({ type: PRODUCTLIST_SUCCESS, data: { status: false } });
        localStorage.setItem('productDetailsList', JSON.stringify(response));
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

const requestForSearchItem = (payload: any, callback: Function) => {
  return async (dispatch: any) => {
    dispatch({ type: PRODUCTLIST_SUCCESS, data: { status: true } });
    dispatch(toggleLoader(true, 'Searching items...'));
    try {
      const response = await loadSearchItemDetails(payload.searchString);
      if (response.status === 200 && response.data.success) {
        dispatch({ type: PRODUCTLIST_SUCCESS, data: { status: false } });
        localStorage.setItem('searchList', JSON.stringify(response));
        dispatch(toggleLoader(false));
        callback(response);
      } else {
        dispatch(toggleLoader(false));
        const data = {
          showToast: true,
          toastMessage:
            'This product is not available now, please enter another product name.',
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
export { loadProductDetailsList, requestForSearchItem };
