import { CARTDETAILS_SUCCESS } from '../Contants';
import {
  loadCartItemsDetails,
  updateCartItem,
  removeCartItem,
  addNewItemToCart,
  addRatingForProduct,
} from '../../services/Connect';
import { updateToast, toggleLoader } from './index';

const loadCartDetails = (payload: any, callback: Function) => {
  return async (dispatch: any) => {
    dispatch({ type: CARTDETAILS_SUCCESS, data: { status: true } });
    dispatch(toggleLoader(true, 'Loading  items...'));
    try {
      const response = await loadCartItemsDetails(payload.user_id);
      if (response.status === 200 && response.data.success) {
        if (response.data.data === null) {
          dispatch(toggleLoader(false));
          const data = {
            showToast: true,
            toastMessage: response.data.message,
            position: 'top',
            duration: '10000',
          };
          dispatch({ type: 'CARTDETAILS_FAILED ' });
          dispatch(updateToast(data));
        }

        dispatch({ type: CARTDETAILS_SUCCESS, data: { status: false } });
        localStorage.setItem('CartDetailsList', JSON.stringify(response));
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
        dispatch({ type: 'CARTDETAILS_FAILED ' });
        dispatch(updateToast(data));
      }
    } catch (error) {
      dispatch(toggleLoader(false));
      const data = {
        showToast: true,
        toastMessage: 'Network error',
        position: 'top',
        duration: '10000',
      };

      dispatch({ type: CARTDETAILS_SUCCESS, data: { status: false } });
      dispatch(updateToast(data));
    }
  };
};

/**
 *
 * @param payload Payload to update cart
 * @returns null
 */
const requestForUpdateCartItem = (payload: any, callback: Function) => {
  return async (dispatch: any) => {
    dispatch({ type: CARTDETAILS_SUCCESS, data: { status: true } });
    dispatch(toggleLoader(true, 'Updating cart item...'));
    try {
      const response = await updateCartItem(
        payload.cartItemID,
        payload.quantity
      );
      if (response.status === 200 && response.data.success) {
        dispatch({ type: CARTDETAILS_SUCCESS, data: { status: false } });
        localStorage.setItem('CartDetailsList', JSON.stringify(response));
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
        dispatch({ type: 'CARTDETAILS_FAILED ' });
        dispatch(updateToast(data));
      }
    } catch (error) {
      dispatch(toggleLoader(false));
      const data = {
        showToast: true,
        toastMessage: 'Network error',
        position: 'top',
        duration: '10000',
      };
      dispatch({ type: CARTDETAILS_SUCCESS, data: { status: false } });
      dispatch(updateToast(data));
    }
  };
};

/**
 * remove cart item
 * @param payload
 * @returns null
 */
const requestForRemoveCartItem = (payload: any) => {
  return async (dispatch: any) => {
    dispatch({ type: CARTDETAILS_SUCCESS, data: { status: true } });
    dispatch(toggleLoader(true, 'Updatig cart...'));
    try {
      const response = await removeCartItem(payload.cartItemID);
      if (response.status === 200 && response.data.success) {
        dispatch({ type: CARTDETAILS_SUCCESS, data: { status: false } });
        localStorage.setItem('CartDetailsList', JSON.stringify(response));
        dispatch(toggleLoader(false));
      } else {
        dispatch(toggleLoader(false));
        const data = {
          showToast: true,
          toastMessage: response.data.message,
          position: 'top',
          duration: '10000',
        };
        dispatch({ type: 'CARTDETAILS_FAILED ' });
        dispatch(updateToast(data));
      }
    } catch (error) {
      dispatch(toggleLoader(false));
      const data = {
        showToast: true,
        toastMessage: 'Network error',
        position: 'top',
        duration: '10000',
      };
      dispatch({ type: CARTDETAILS_SUCCESS, data: { status: false } });
      dispatch(updateToast(data));
    }
  };
};

/**
 * add new Item to cart
 * @param payload
 * @returns
 */
const requestForAddItemToCart = (payload: any, nextRoute: Function) => {
  return async (dispatch: any) => {
    dispatch({ type: CARTDETAILS_SUCCESS, data: { status: true } });
    dispatch(toggleLoader(true, 'Adding your item to cart...'));
    try {
      const response = await addNewItemToCart(
        payload.user_id,
        payload.productId,
        payload.configId,
        payload.quantity
      );
      if (response.status === 200 && response.data.success) {
        dispatch({ type: CARTDETAILS_SUCCESS, data: { status: false } });
        localStorage.setItem('CartDetailsList', JSON.stringify(response));
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
        dispatch({ type: 'CARTDETAILS_FAILED ' });
        dispatch(updateToast(data));
        nextRoute(false);
      }
    } catch (error) {
      nextRoute(false);
      dispatch(toggleLoader(false));
      const data = {
        showToast: true,
        toastMessage: 'Network error',
        position: 'top',
        duration: '10000',
      };
      dispatch({ type: CARTDETAILS_SUCCESS, data: { status: false } });
      dispatch(updateToast(data));
    }
  };
};

const requestForRating = (payload: any) => {
  return async (dispatch: any) => {
    dispatch({ type: CARTDETAILS_SUCCESS, data: { status: true } });
    // dispatch(toggleLoader(true, 'loading cart items...'));
    try {
      const response = await addRatingForProduct(
        payload.user_id,
        payload.productId
      );
      if (response.status === 200 && response.data.success) {
        if (response.data.data === null) {
          dispatch(toggleLoader(false));
          const data = {
            showToast: true,
            toastMessage: response.data.message,
            position: 'top',
            duration: '10000',
          };
          dispatch({ type: 'CARTDETAILS_FAILED ' });
          dispatch(updateToast(data));
        }

        dispatch({ type: CARTDETAILS_SUCCESS, data: { status: false } });
        localStorage.setItem('CartDetailsList', JSON.stringify(response));
        dispatch(toggleLoader(false));
      } else {
        dispatch(toggleLoader(false));
        const data = {
          showToast: true,
          toastMessage: response.data.message,
          position: 'top',
          duration: '10000',
        };
        dispatch({ type: 'CARTDETAILS_FAILED ' });
        dispatch(updateToast(data));
      }
    } catch (error) {
      dispatch(toggleLoader(false));
      const data = {
        showToast: true,
        toastMessage: 'Network error',
        position: 'top',
        duration: '10000',
      };

      dispatch({ type: CARTDETAILS_SUCCESS, data: { status: false } });
      dispatch(updateToast(data));
    }
  };
};

export {
  loadCartDetails,
  requestForUpdateCartItem,
  requestForRemoveCartItem,
  requestForAddItemToCart,
  requestForRating,
};
