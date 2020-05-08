import { takeLatest } from 'redux-saga/effects';
import { Types } from '../actionCreators';

function* login(action) {
  console.log('login', action);
}

export default function* rootSaga() {
  console.log('root saga');
  yield takeLatest(Types.SIGNIN_REQUEST, login);
}
