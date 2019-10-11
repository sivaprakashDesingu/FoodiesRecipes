import {
    LOGGIN_USER_FAILED,
    LOGGIN_USER_SUCCESS,
    LOGGIN_USER_REQUEST,
    REGISTER_USER_SUCCESS,
    REGISTER_USER_FAILED,
    REGISTER_USER_REQUEST
} from './../constraint/constraint'

const initialState = {
    userDetails: {
        emailId: '',
        fullName: '',
        accessToken: ''
    },
    aboutRegister: {
        status: null,
        message: ''
    },
    isRegisterUser: true,
}

const UserDetailsReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGGIN_USER_REQUEST:
            return {
                ...state,
            }

        case LOGGIN_USER_SUCCESS:
            
            return {
                ...state,
                userDetails: {
                    emailId: action.data.data[0].emailId,
                    fullName: action.data.data[0].fullName,
                    accessToken: action.data.data[0].accessToken
                },
                isRegisterUser: true
            }

        case LOGGIN_USER_FAILED:
                
            return {
                ...state,
                isRegisterUser: false,
                userDetails: {
                    emailId: '',
                    fullName: '',
                    accessToken: ''
                },
            }

        case REGISTER_USER_REQUEST:
            return {
                ...state
            }

        case REGISTER_USER_SUCCESS:
            return {
                ...state,
                aboutRegister: {
                    status: true,
                    message: "Registered Successfully",
                },
                userDetails: {
                    emailId: action.data.data.data[0].emailId,
                    fullName: action.data.data.data[0].fullName,
                    accessToken: action.data.data.data[0].accessToken
                },
                
            }

        case REGISTER_USER_FAILED:  
            return {
                ...state,
                aboutRegister: {
                    status: false,
                    message: "Unable to Registered!..."
                }
            }

        default:
            return state
    }
}

export default UserDetailsReducer