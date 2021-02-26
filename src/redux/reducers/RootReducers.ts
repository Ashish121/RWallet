import { combineReducers } from 'redux';
import LoginReducer from './Login';
import Toast from './Toast';
const rootReducer = combineReducers({
  login : LoginReducer,
  toast : Toast
});
export default rootReducer ;