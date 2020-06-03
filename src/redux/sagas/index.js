import { takeLatest, all, put } from 'redux-saga/effects';
import { Types } from '../actionCreators';
import ActionCreators from '../actionCreators';

import { getRuns, createRun } from './runs';
import { login, auth, destroyAuth } from './auth';



export default function* rootSaga() {
  yield all([
    takeLatest(Types.SIGNIN_REQUEST, login),
    takeLatest(Types.AUTH_REQUEST, auth),
    takeLatest(Types.DESTROY_AUTH_REQUEST, destroyAuth),
    takeLatest(Types.GET_RUNS_REQUEST, getRuns),
    takeLatest(Types.CREATE_RUN_REQUEST, createRun),

    put(ActionCreators.authRequest()),
  ]);
}
