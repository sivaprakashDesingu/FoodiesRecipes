import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import axios from 'axios';
import {
   FETCH_SUGGESSTION_BY_SEARCH_REQUEST,
   FETCH_SUGGESSTION_BY_SEARCH_SUCCESS,
   FETCH_SUGGESSTION_BY_SEARCH_FAILED,
   SELECTED_RECIPE_ID_OR_NAME,
   SELECTED_RECIPE_ID_OR_NAME_SUCCESS,
   SELECTED_RECIPE_ID_OR_NAME_FAILED,
   API_URL,
} from './../constants/constants'

function* fetchSuggestionSearch(action) {

   try {
      const result = yield call(() =>
         axios.get(`${API_URL}recipe/recipeAndRecipeCategoryList?q=${action.object.keyword}`, {
            headers: {
               'Content-Type': 'application/json',
               'accesstoken': action.object.accessToken
            }
         })
      )
      yield put({ type: FETCH_SUGGESSTION_BY_SEARCH_SUCCESS, data: result.data });
   } catch (error) {
      yield put({ type: FETCH_SUGGESSTION_BY_SEARCH_FAILED, data: error });
   }
}

function* setActiveRecipeId(action) {
   try {
      yield put({ type: SELECTED_RECIPE_ID_OR_NAME_SUCCESS, data: action.object });
   }
   catch (error) {
      yield put({ type: SELECTED_RECIPE_ID_OR_NAME_FAILED, data: error });
   }
}

function* headerSagas() {
   yield takeLatest(FETCH_SUGGESSTION_BY_SEARCH_REQUEST, fetchSuggestionSearch);
   yield takeLatest(SELECTED_RECIPE_ID_OR_NAME, setActiveRecipeId);
}

export default headerSagas;