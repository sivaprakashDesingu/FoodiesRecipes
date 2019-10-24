import {
    UDADATE_PERSONALIZED_DATA_REQUEST,
    SAVE_PERSONALIZED_DATA_REQUEST,
    FETCH_PERSONALIZED_DATA_REQUEST
} from './../constants/constants'

export function saveUserInitialInput(userInput, accessToken) {

    return {
        type: SAVE_PERSONALIZED_DATA_REQUEST,
        object: { userInput, accessToken }
    }
}
export function fetchUserInitialInput(accessToken) {

    return {
        type: FETCH_PERSONALIZED_DATA_REQUEST,
        object:{accessToken}
    }
}
export function updateUserInitialInput(userInput, accessToken) {

    return {
        type: UDADATE_PERSONALIZED_DATA_REQUEST,
        object: { userInput, accessToken }
    }
}