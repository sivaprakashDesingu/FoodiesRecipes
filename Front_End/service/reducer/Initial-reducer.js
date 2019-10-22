import {
    SAVE_PERSONALIZED_DATA_SUCCESS,
    SAVE_PERSONALIZED_DATA_REQUEST,
    SAVE_PERSONALIZED_DATA_FAILED,

    FETCH_PERSONALIZED_DATA_REQUEST,
    FETCH_PERSONALIZED_DATA_SUCCESS,
    FETCH_PERSONALIZED_DATA_FAILED,

    UDADATE_PERSONALIZED_DATA_REQUEST,
    UDADATE_PERSONALIZED_DATA_SUCCESS,
    UDADATE_PERSONALIZED_DATA_FAILED
} from './../constants/constants'


const initialState = {
    personalizedData: {
        isAlreadySet: false,
        pageLoading: true,
        localStorage: false,
        userStatus:'AUTHORISED',
        userInput: {
            cookingSkill: 'Beginner',
            isVegeterian: false,
        }
    }
}

const InitialReducer = (state = initialState, action) => {
    switch (action.type) {

        case SAVE_PERSONALIZED_DATA_REQUEST:
            return {
                ...state,
                pageLoading: true,
            }
        case SAVE_PERSONALIZED_DATA_SUCCESS:
            return {
                ...state,
                personalizedData: {
                    isAlreadySet: true,
                    localStorage: true,
                    pageLoading:false,
                    userInput: {
                        cookingSkill: action.data.data.userLevel,
                        isVegeterian: action.data.data.userType,
                    }
                }
            }

        case SAVE_PERSONALIZED_DATA_FAILED:
            return {
                ...state,
                pageLoading: true,
            }

        case FETCH_PERSONALIZED_DATA_REQUEST:
            return {
                ...state,
                pageLoading: true,
            }
        case FETCH_PERSONALIZED_DATA_SUCCESS:
            return {
                ...state,
                personalizedData: {
                    isAlreadySet: true,
                    pageLoading: false,
                    localStorage:false,
                    userInput: {
                        cookingSkill: action.data.data.userLevel,
                        isVegeterian: action.data.data.userType,
                    }
                }
            }

        case FETCH_PERSONALIZED_DATA_FAILED:
            return {
                ...state,
                userStatus:action.data.data.status,
                pageLoading: true,
            }

        case UDADATE_PERSONALIZED_DATA_REQUEST:
            return {
                ...state,
                pageLoading: true,
            }
        case UDADATE_PERSONALIZED_DATA_SUCCESS:
            return {
                ...state,
                personalizedData: {
                    isAlreadySet: true,
                    localStorage: true,
                    pageLoading: false,
                    userInput: {
                        cookingSkill: action.data.data.userLevel,
                        isVegeterian: action.data.data.userType,
                    }
                }
            }

        case UDADATE_PERSONALIZED_DATA_FAILED:
            return {
                ...state,
                pageLoading: true,
            }
        default:
            return state
    }
}

export default InitialReducer