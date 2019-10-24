import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import axios from 'axios';
import {
   FETCH_SUGGESSTION_BY_SEARCH_REQUEST,
   FETCH_SUGGESSTION_BY_SEARCH_SUCCESS,
   FETCH_SUGGESSTION_BY_SEARCH_FAILED,
   API_URL
} from './../constants/constants'

function* fetchSuggestionSearch(action) {
   
   try {
      const result = yield call(() =>
         axios.get(`${API_URL}recipe/recipeAndRecipeCategoryList?q=${action.object.keyword}`, {
            headers: {
               'Content-Type': 'application/json',
               'accesstoken' : action.object.accessToken
            }
         })
      )
      yield put({ type: FETCH_SUGGESSTION_BY_SEARCH_SUCCESS, data: result.data });
   } catch (error) {
      yield put({ type: FETCH_SUGGESSTION_BY_SEARCH_FAILED, data: error });
   }
}

function* headerSagas() {
   yield takeLatest(FETCH_SUGGESSTION_BY_SEARCH_REQUEST, fetchSuggestionSearch);
}

export default headerSagas;