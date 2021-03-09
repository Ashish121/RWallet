import { combineReducers } from 'redux';
import LoginReducer from './Login';
import Toast from './Toast';
import UserAccount from './UserAccount';
import Bank from './Bank';
const rootReducer = combineReducers({
  login: LoginReducer,
  toast: Toast,
  userAccount: UserAccount,
  bank:Bank
});
export default rootReducer;
