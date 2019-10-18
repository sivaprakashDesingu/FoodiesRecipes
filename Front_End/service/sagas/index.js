// Imports: Dependencies
import { all, fork} from 'redux-saga/effects';
// Imports: Redux Sagas
import  initialDataSagas  from '../sagas/initial-saga';
import userDetailsSagas from '../sagas/UserDetails-sagas'
// Redux Saga: Root Saga
export function* rootSaga () {
  yield all([
    fork(initialDataSagas),
    fork(userDetailsSagas)
  ]);
};