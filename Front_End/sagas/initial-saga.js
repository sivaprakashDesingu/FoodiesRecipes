import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import axios from 'axios';
import {
   UDADATE_PERSONALIZED_DATA_REQUEST,
   UDADATE_PERSONALIZED_DATA_SUCCESS,
   UDADATE_PERSONALIZED_DATA_FAILED,
   FETCH_PERSONALIZED_DATA_REQUEST,
   FETCH_PERSONALIZED_DATA_SUCCESS,
   FETCH_PERSONALIZED_DATA_FAILED,
   SAVE_PERSONALIZED_DATA_REQUEST,
   SAVE_PERSONALIZED_DATA_SUCCESS,
   SAVE_PERSONALIZED_DATA_FAILED,
   API_URL
} from './../constraint/constraint'
// worker Saga: will be fired on USER_FETCH_REQUESTED actions




function* fetchPersonalizedData(action) {

   const {accessToken} = action.object
   let result= {}
   try {
      result = yield call(() =>
         axios.get(`${API_URL}user/personalized/get`, {
            headers: {
               'Content-Type': 'application/json',
               'accesstoken' : accessToken
            }
         })
      )
      yield put({ type: FETCH_PERSONALIZED_DATA_SUCCESS, data: result.data });
   } catch (error) {
      yield put({ type: FETCH_PERSONALIZED_DATA_FAILED, data: error.response});
   }
   
}

function* savePersonalizedData(action) {
   const {accessToken,userInput} = action.object
   let result ={}

   try {
      result = yield call(() =>
         axios.post(`${API_URL}user/personalized/save`, userInput ,{
            headers: {  
               'Content-Type': 'application/json',
               'accesstoken' : accessToken
            }
         })
      )
      yield put({ type: SAVE_PERSONALIZED_DATA_SUCCESS, data: result.data });
   } catch (error) {
      yield put({ type: SAVE_PERSONALIZED_DATA_FAILED, data: error.response });
   }
}

function* updatePersonalizedData(action) {
   const {accessToken,userInput} = action.object
   let result ={}
   try {
      result = yield call(() =>
         axios.post(`${API_URL}user/personalized/update`, userInput ,{
            headers: {  
               'Content-Type': 'application/json',
               'accesstoken' : accessToken
            }
         })
      )
      yield put({ type: UDADATE_PERSONALIZED_DATA_SUCCESS, data: result.data });
   } catch (error) {
      yield put({ type: UDADATE_PERSONALIZED_DATA_FAILED, data: error.response });
   }
}

/*
  Starts fetchUser on each dispatched `USER_FETCH_REQUESTED` action.
  Allows concurrent fetches of user.
*/
function* initialDataSagas() {
   yield takeEvery(UDADATE_PERSONALIZED_DATA_REQUEST, updatePersonalizedData);
   yield takeEvery(FETCH_PERSONALIZED_DATA_REQUEST, fetchPersonalizedData);
   yield takeEvery(SAVE_PERSONALIZED_DATA_REQUEST, savePersonalizedData);

}

export default initialDataSagas;