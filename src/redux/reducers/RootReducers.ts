import { combineReducers } from 'redux';
import LoginReducer from './Login';
import Toast from './Toast';
import UserAccount from './UserAccount';
const rootReducer = combineReducers({
  login: LoginReducer,
  toast: Toast,
  userAccount: UserAccount,
});
export default rootReducer;
