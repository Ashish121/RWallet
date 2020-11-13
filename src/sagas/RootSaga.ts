import { all } from 'redux-saga/effects';
import { helloSaga } from './Login';

function* rootSaga() {
  yield all([
    helloSaga(),
  ]);
}

export { rootSaga };