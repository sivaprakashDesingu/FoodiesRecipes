import {
    FETCH_REICPE_LISTING,
    FETCH_REICPE_LISTING_SUCCESS,
    FETCH_REICPE_LISTING_FAILED,
    FETCH_REICPE_DETAILS,
    FETCH_REICPE_DETAILS_FAILED,
    FETCH_REICPE_DETAILS_SUCCESS,
    FETCH_REICPE_LISTING_BY_CATEGORY,
    FETCH_REICPE_LISTING_BY_CATEGORY_SUCCESS,
    FETCH_REICPE_LISTING_BY_CATEGORY_FAILED
} from './../constants/constants'

const initialState = {
    recipeList: [],
    recipeDetails: {},
}
const RecipeReducer = (state = initialState, action) => {
    switch (action.type) {

        case FETCH_REICPE_LISTING:
            return {
                ...state,
            }

        case FETCH_REICPE_LISTING_SUCCESS:
            return {
                ...state,
                recipeList: action.data.data
            }

        case FETCH_REICPE_LISTING_FAILED:
            return {
                ...state,
                recipeList: [],
            }

        case FETCH_REICPE_DETAILS:
            return {
                ...state,
            }
        case FETCH_REICPE_DETAILS_FAILED:
            return {
                ...state,
                recipeDetails: {},
            }
        case FETCH_REICPE_DETAILS_SUCCESS:
            return {
                ...state,
                recipeDetails: action.data.data[0]
            }
        case FETCH_REICPE_LISTING_BY_CATEGORY:
            return {
                ...state,

            }
        case FETCH_REICPE_LISTING_BY_CATEGORY_SUCCESS:

            return {
                ...state,
                recipeList: action.data.data
            }
        case FETCH_REICPE_LISTING_BY_CATEGORY_FAILED:

            return {
                ...state
            }
        default:
            return state
    }
}
export default RecipeReducer;