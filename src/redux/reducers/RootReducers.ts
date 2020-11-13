import { combineReducers } from 'redux';
import LoginReducer from './Login';
const rootReducer = combineReducers({
  login : LoginReducer,
});
export default rootReducer ;