import {
    FETCH_SUGGESSTION_BY_SEARCH_REQUEST,
    FETCH_SUGGESSTION_BY_SEARCH_FAILED,
    FETCH_SUGGESSTION_BY_SEARCH_SUCCESS,
    SELECTED_RECIPE_ID_OR_NAME_SUCCESS
} from './../constants/constants'


const initialState = {
    suggestionRecipe: [],
    suggestionRecipeByCategory: {},
    selectedRecipe: {
        queryString: '',
        recipeId: '',
        currentPage: '',
    }

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
                suggestionRecipe: action.data.data.suggestionRecipe,
                suggestionRecipeByCategory: action.data.data.suggestionRecipeByCategory
            }

        case SELECTED_RECIPE_ID_OR_NAME_SUCCESS:
            return {
                ...state,
                selectedRecipe: {
                    queryString: action.data.page === 'RecipeDetails' ? '' : action.data.id,
                    recipeId: action.data.page === 'RecipeDetails' ? action.data.id : '',
                    currentPage: action.data.page,
                },
                suggestionRecipe: [],
                suggestionRecipeByCategory: {},
            }
        default:
            return state
    }
}

export default HeaderReducer