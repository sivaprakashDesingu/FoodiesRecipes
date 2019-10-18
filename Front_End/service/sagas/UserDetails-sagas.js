import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import axios from 'axios';
import {
   LOGGIN_USER_REQUEST,
   LOGGIN_USER_SUCCESS,
   LOGGIN_USER_FAILED,
   REGISTER_USER_REQUEST,
   REGISTER_USER_SUCCESS,
   REGISTER_USER_FAILED,
   FETCH_USER_DETAILS_RQUEST,
   FETCH_USER_DETAILS_SUCCESS,
   FETCH_USER_DETAILS_FAILED,
   API_URL
} from './../constraint/constraint'

function* isUserLoggedIn(action) {
   try {
      const result = yield call(() =>
         axios.get(`${API_URL}user/isLoggedIn?emailID=${action.action}`, {
            headers: {
               'Content-Type': 'application/json',
            }
         })
      )
      yield put({ type: LOGGIN_USER_SUCCESS, data: result.data });
   } catch (error) {
      yield put({ type: LOGGIN_USER_FAILED, data: "failed" });
   }
}

function* fetchUserDetails(action) {
   const {accessToken} = action.payload
   try {
      const result = yield call(() =>
         axios.get(`${API_URL}user/user`, {
            headers: {
               'Content-Type': 'application/json',
               'accesstoken' : accessToken.substring(1, accessToken.length - 1)
            }
         })
      )
      yield put({ type: FETCH_USER_DETAILS_SUCCESS, data: result.data });
   } catch (error) {
      yield put({ type: FETCH_USER_DETAILS_FAILED, data: "failed" });
   }
}

function* isUserRegistered(action) {
   let result ={}
   const data = {
      emailId:action.payload.email,
      fullName:action.payload.fullName
   }
   
   try {
      result = yield call(() =>
         axios.post(`${API_URL}user/register`, data ,{
            headers: {  
               'Content-Type': 'application/json',
            }
         })
      )
      yield put({ type: REGISTER_USER_SUCCESS, data: result });
   } catch (error) {
      yield put({ type: REGISTER_USER_FAILED, data: result });
   }
}

function* userDetailsSagas() {
   yield takeLatest(LOGGIN_USER_REQUEST, isUserLoggedIn);
   yield takeLatest(REGISTER_USER_REQUEST, isUserRegistered);
   yield takeLatest (FETCH_USER_DETAILS_RQUEST,fetchUserDetails)
}

export default userDetailsSagas;