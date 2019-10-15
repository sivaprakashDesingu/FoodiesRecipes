import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import {
   UDADATE_PERSONALIZED_DATA_REQUEST,
   UDADATE_PERSONALIZED_DATA_SUCCESS,
   UDADATE_PERSONALIZED_DATA_FAILED,
   API_URL
} from './../constraint/constraint'
// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* fetchUser(action) {
   // try {
   //    yield put({ type: USER_INITIAL_INPUT, user: 'hello' });
   // } catch (e) {
   //    yield put({ type: USER_INITIAL_INPUT, message: e.message });
   // }
   let result= ''
   try {
      /*result = yield call(() =>
         axios.get(`${API_URL}user/isLoggedIn?emailID=${action.action}`, {
            headers: {
               'Content-Type': 'application/json',
            }
         })
      )
      yield put({ type: LOGGIN_USER_SUCCESS, data: result.data });*/
   } catch (error) {
      /*yield put({ type: LOGGIN_USER_FAILED, data: "failed" }); */
   }
}

/*
  Starts fetchUser on each dispatched `USER_FETCH_REQUESTED` action.
  Allows concurrent fetches of user.
*/
function* initialDataSagas() {
   yield takeEvery(UDADATE_PERSONALIZED_DATA_REQUEST, fetchUser);
}

export default initialDataSagas;