import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* fetchUser(action) {
   try {
      yield put({type: "USER_INITIAL_INPUT", user: 'hello'});
   } catch (e) {
      yield put({type: "USER_INITIAL_INPUT", message: e.message});
   }
}

/*
  Starts fetchUser on each dispatched `USER_FETCH_REQUESTED` action.
  Allows concurrent fetches of user.
*/
function* initialDataSagas() {
  yield takeEvery("USER_FETCH_REQUESTED", fetchUser);
}

export default initialDataSagas;