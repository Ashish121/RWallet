import { combineReducers } from 'redux';
import LoginReducer from './Login';
import Toast from './Toast';
import UserAccount from './UserAccount';
import Bank from './Bank';
import CoOperative from './CoOperative';
import Agent from './Agent';
import EmiCalculater from './EmiCalculater';
import Profile from './Profile';
import Loader from './Loader';
const rootReducer = combineReducers({
  login: LoginReducer,
  toast: Toast,
  userAccount: UserAccount,
  bank: Bank,
  co_operative: CoOperative,
  agent: Agent,
  emi: EmiCalculater,
  profile: Profile,
  loader: Loader,
});
export default rootReducer;
