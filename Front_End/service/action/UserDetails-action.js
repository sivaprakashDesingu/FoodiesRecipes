import {
    LOGGIN_USER_REQUEST,
    REGISTER_USER_REQUEST,
    FETCH_USER_DETAILS_RQUEST
} from './../constraint/constraint'

export function isUserLoggedIn(action) {
    return {
        type: LOGGIN_USER_REQUEST,
        action
    }
}

export function isUserRegistered(email, fullName) {
    return {
        type: REGISTER_USER_REQUEST,
        payload: {
            email,
            fullName
        }
    }
}

export function fetchUserDetails(accessToken) {
    return {
        type: FETCH_USER_DETAILS_RQUEST,
        payload: {
            accessToken
        }
    }
}