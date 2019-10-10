import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import {LOGGIN_USER_REQUEST,LOGGIN_USER_SUCCESS,LOGGIN_USER_FAILED} from './../constraint/constraint'
// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* isUserLoggedIn(action) {
   alert(JSON.stringify(action))
   /*try {
      yield put({type: LOGGIN_USER_SUCCESS, user: 'hello'});
   } catch (e) {
      yield put({type: LOGGIN_USER_FAILED, message: e.message});
   }*/
}



function* userDetailsSagas() {
  yield takeLatest("LOGGIN_USER_REQUEST", isUserLoggedIn);
}

export default userDetailsSagas;