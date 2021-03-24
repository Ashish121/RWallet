import produce from 'immer';
import {
  AUTHENTICATION_INPROGRESS,
  FLIGHTONEWAY_SUCCESS,
  FLIGHTONEWAY_FAILED,
} from '../Contants';
interface FlightOneWayPageState {
  isAuthenticating: boolean;
}

// defines the initial state for the reducer ...
export const initialState: FlightOneWayPageState = {
  isAuthenticating: false,
};

// defines this reducers reducer functions ...
const reducers: any = {
  [AUTHENTICATION_INPROGRESS]: (draft: any) => {
    draft.isAuthenticating = true;
  },
  [FLIGHTONEWAY_SUCCESS]: (draft: any, data: any) => {
    draft.isAuthenticating = false;
    localStorage.setItem(
      'Flight one way booking Details :',
      JSON.stringify(data)
    );
  },
  [FLIGHTONEWAY_FAILED]: (draft: any) => {
    draft.isAuthenticating = false;
  },
};

// defines all reducers for actions of interest to the this reducer ...
export default produce(
  (draft: FlightOneWayPageState = initialState, action) => {
    reducers?.[action.type]?.(draft, action);
    return draft;
  }
);
