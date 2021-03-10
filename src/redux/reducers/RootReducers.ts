import { combineReducers } from 'redux';
import LoginReducer from './Login';
import Toast from './Toast';
import UserAccount from './UserAccount';
import Bank from './Bank';
import Agent from './Agent';
const rootReducer = combineReducers({
  login: LoginReducer,
  toast: Toast,
  userAccount: UserAccount,
  bank:Bank,
  agent:Agent
});
export default rootReducer;
