import {AUTHENTICATION_INPROGRESS, LOGIN_SUCCESS } from '../Contants';

const requestForLogin = () => {
  return {type: AUTHENTICATION_INPROGRESS};
};
const loginSuccess = () => {
  return { type: LOGIN_SUCCESS};
};

export  {requestForLogin, loginSuccess};
