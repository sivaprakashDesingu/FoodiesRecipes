import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import axios from 'axios';
import {
    FETCH_REICPE_DETAILS,
    FETCH_REICPE_DETAILS_FAILED,
    FETCH_REICPE_DETAILS_SUCCESS,
    FETCH_REICPE_LISTING,
    FETCH_REICPE_LISTING_FAILED,
    FETCH_REICPE_LISTING_SUCCESS,
    API_URL
} from './../constants/constants'


function* fetchRecipeDetails(action) {
    try {
        const result = yield call(() =>
            axios.get(`${API_URL}recipe/recipDetails/${action.object.recipeId}`, {
                headers: {
                    'Content-Type': 'application/json',
                    'accesstoken': action.object.accessToken
                }
            })
        )
        yield put({ type: FETCH_REICPE_DETAILS_SUCCESS, data: result.data });
    } catch (error) {
        yield put({ type: FETCH_REICPE_DETAILS_FAILED, data: error });
    }
}

function* fetchRecipeListing(action){
    try {
        const result = yield call(() =>
            axios.get(`${API_URL}recipe/recipeListing/${action.object.keyword}`, {
                headers: {
                    'Content-Type': 'application/json',
                    'accesstoken': action.object.accessToken
                }
            })
        )
        yield put({ type: FETCH_REICPE_LISTING_SUCCESS, data: result.data });
    } catch (error) {
        yield put({ type: FETCH_REICPE_LISTING_FAILED, data: error });
    }
}

function* recipeSagas() {
    yield takeLatest(FETCH_REICPE_DETAILS, fetchRecipeDetails);
    yield takeLatest(FETCH_REICPE_LISTING, fetchRecipeListing);
}

export default recipeSagas;