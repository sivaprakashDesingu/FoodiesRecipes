import {
    LOGGIN_USER_REQUEST,
    REGISTER_USER_REQUEST
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