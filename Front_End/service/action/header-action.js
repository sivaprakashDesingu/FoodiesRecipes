import {
    FETCH_SUGGESSTION_BY_SEARCH_REQUEST,
    SELECTED_RECIPE_ID_OR_NAME
} from './../constants/constants'

export function fetchSuggestionSearch(accessToken, keyword) {

    return {
        type: FETCH_SUGGESSTION_BY_SEARCH_REQUEST,
        object: { keyword, accessToken }
    }
}
export function setActiveRecipeId(id, page) {
    return{
        type:SELECTED_RECIPE_ID_OR_NAME,
        object:{id,page}
    }
}

