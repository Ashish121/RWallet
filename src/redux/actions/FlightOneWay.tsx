import { AUTHENTICATION_INPROGRESS, FLIGHTONEWAY_SUCCESS } from '../Contants';
import { authenticationFlightOneWayPage } from '../../services/Connect';
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
      if (response.status === 200) {
        dispatch({ type: FLIGHTONEWAY_SUCCESS, data: response.data });
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
      dispatch({ type: 'FLIGHTONEWAY_FAILED' });
      dispatch(updateToast(data));
    }
  };
};
export { requestForFlightOneWayPage };
