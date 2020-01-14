import {
    FETCH_REICPE_LISTING,
    FETCH_REICPE_DETAILS,
    FETCH_REICPE_LISTING_BY_CATEGORY
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

export function fetchRecipeListingByCategory(categoryID, accessToken) {

    return {
        type: FETCH_REICPE_LISTING_BY_CATEGORY,
        object: { categoryID, accessToken }
    }
}