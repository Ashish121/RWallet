import { AUTHENTICATION_INPROGRESS, FLIGHTONEWAY_SUCCESS } from '../Contants';
import {
  authenticationFlightOneWayPage,
  getFlightPlaceDetails,
  getBusPlacesDetails,
} from '../../services/Connect';
import { updateToast } from './index';

const requestForFlightOneWayPage = (payload: any, nextRoute: Function) => {
  return async (dispatch: any) => {
    dispatch({ type: AUTHENTICATION_INPROGRESS });
    try {
      const response = await authenticationFlightOneWayPage(
        payload.user_id,
        payload.returnDate,
        payload.roundTrip,
        payload.travelType,
        payload.sourceCity,
        payload.destCity,
        payload.departureDate,
        payload.travelers,
        payload.classForFlight
      );
      dispatch({ type: 'AUTHENTICATION_COMPLETED' });
      if (response.status === 200 && response.data.success) {
        dispatch({ type: FLIGHTONEWAY_SUCCESS, data: response.data });
        localStorage.setItem('userCreatedAccount', 'true');
        nextRoute(true);
      } else {
        const data = {
          showToast: true,
          toastMessage: response.data.message,
          position: 'top',
          duration: '10000',
        };
        dispatch({ type: 'FLIGHTONEWAY_FAILED' });
        dispatch(updateToast(data));
        nextRoute(false);
      }
    } catch (error) {
      dispatch({ type: 'AUTHENTICATION_COMPLETED' });
      nextRoute(false);
      const data = {
        showToast: true,
        toastMessage: 'API failed',
        position: 'top',
        duration: '10000',
      };
      dispatch({ type: 'FLIGHTONEWAY_FAILED' });
      dispatch(updateToast(data));
    }
  };
};

const loadCityNameForFlight = (callback: Function) => {
  return async (dispatch: any) => {
    dispatch({ type: FLIGHTONEWAY_SUCCESS, data: { status: true } });
    try {
      const response = await getFlightPlaceDetails();
      if (response.status === 200 && response.data.success) {
        dispatch({ type: FLIGHTONEWAY_SUCCESS, data: { status: false } });
        localStorage.setItem('BankNameList', JSON.stringify(response));
        callback(response);
        console.log('Inside If block', response);
      } else {
        const data = {
          showToast: true,
          toastMessage: response.data.message,
          position: 'top',
          duration: '10000',
        };
        dispatch({ type: 'FLIGHTONEWAY_FAILED' });
        dispatch(updateToast(data));
        console.log('Inside else block', response);
      }
    } catch (error) {
      const data = {
        showToast: true,
        toastMessage: 'API failed',
        position: 'top',
        duration: '10000',
      };
      dispatch({ type: FLIGHTONEWAY_SUCCESS, data: { status: false } });
      dispatch(updateToast(data));
    }
  };
};

const loadCityNameForBus = (callback: Function) => {
  return async (dispatch: any) => {
    dispatch({ type: FLIGHTONEWAY_SUCCESS, data: { status: true } });
    try {
      const response = await getBusPlacesDetails();
      if (response.status === 200 && response.data.success) {
        dispatch({ type: FLIGHTONEWAY_SUCCESS, data: { status: false } });
        localStorage.setItem('BankNameList', JSON.stringify(response));
        callback(response);
        console.log('Inside If block', response);
      } else {
        const data = {
          showToast: true,
          toastMessage: response.data.message,
          position: 'top',
          duration: '10000',
        };
        dispatch({ type: 'FLIGHTONEWAY_FAILED' });
        dispatch(updateToast(data));
        console.log('Inside else block', response);
      }
    } catch (error) {
      const data = {
        showToast: true,
        toastMessage: 'API failed',
        position: 'top',
        duration: '10000',
      };
      dispatch({ type: FLIGHTONEWAY_SUCCESS, data: { status: false } });
      dispatch(updateToast(data));
    }
  };
};
export {
  requestForFlightOneWayPage,
  loadCityNameForFlight,
  loadCityNameForBus,
};
