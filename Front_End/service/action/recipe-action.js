import {
    FETCH_REICPE_LISTING,
    FETCH_REICPE_DETAILS
} from './../constants/constants'

export function fetchRecipeDetails(recipeId, accessToken) {

    return {
        type: FETCH_REICPE_DETAILS,
        object: { recipeId, accessToken }
    }
    
}

export function fetchRecipeListing(keyword, accessToken) {
    return {
        type: FETCH_REICPE_LISTING,
        object: { keyword, accessToken }
    }
}