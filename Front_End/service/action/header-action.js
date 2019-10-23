import {
    FETCH_SUGGESSTION_BY_SEARCH_REQUEST
} from './../constants/constants'

export function fetchSuggestionSearch(accessToken,keyword) {
    
    return {
        type: FETCH_SUGGESSTION_BY_SEARCH_REQUEST,
        object: { keyword, accessToken }
    }
}
