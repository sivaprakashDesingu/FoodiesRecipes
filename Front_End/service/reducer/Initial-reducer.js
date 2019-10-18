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
} from './../constraint/constraint'


const initialState = {
    personalizedData: {
        isAlreadySet: false,
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
            }
        case SAVE_PERSONALIZED_DATA_SUCCESS:
            return {
                ...state,
                personalizedData: {
                    isAlreadySet: true,
                    localStorage: true,
                    userInput: {
                        cookingSkill: action.data.data.userLevel,
                        isVegeterian: action.data.data.userType,
                    }
                }
            }

        case SAVE_PERSONALIZED_DATA_FAILED:
            return {
                ...state,
            }

        case FETCH_PERSONALIZED_DATA_REQUEST:
            return {
                ...state,
            }
        case FETCH_PERSONALIZED_DATA_SUCCESS:
            return {
                ...state,
                personalizedData: {
                    isAlreadySet: true,
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
                userStatus:action.data.data.status
            }

        case UDADATE_PERSONALIZED_DATA_REQUEST:
            return {
                ...state,
            }
        case UDADATE_PERSONALIZED_DATA_SUCCESS:
            return {
                ...state,
                personalizedData: {
                    isAlreadySet: true,
                    localStorage: true,
                    userInput: {
                        cookingSkill: action.data.data.userLevel,
                        isVegeterian: action.data.data.userType,
                    }
                }
            }

        case UDADATE_PERSONALIZED_DATA_FAILED:
            return {
                ...state,
            }
        default:
            return state
    }
}

export default InitialReducer