import {
    FETCH_SUGGESSTION_BY_SEARCH_REQUEST,
    FETCH_SUGGESSTION_BY_SEARCH_FAILED,
    FETCH_SUGGESSTION_BY_SEARCH_SUCCESS
} from './../constants/constants'


const initialState = {
    suggestionRecipe:[],
    suggestionRecipeByCategory:{}
    
}

const HeaderReducer = (state = initialState, action) => {
    switch (action.type) {

        case FETCH_SUGGESSTION_BY_SEARCH_REQUEST:
            return {
                ...state,
            }
        case FETCH_SUGGESSTION_BY_SEARCH_FAILED:
            return {
                ...state,   
            }

        case FETCH_SUGGESSTION_BY_SEARCH_SUCCESS:
            return {
                ...state,
                suggestionRecipe:action.data.data.suggestionRecipe,
                suggestionRecipeByCategory:action.data.data.suggestionRecipeByCategory
            }

        default:
            return state
    }
}

export default HeaderReducer