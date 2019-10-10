import USER_INITIAL_INPUT from './../action/Initial-action'

const initialState = {
    userInitalInputFromUser :{}
}

const InitialReducer = (state = initialState,action) => {
    switch(action.type){
        case USER_INITIAL_INPUT:
            return{
                ...state,
                userInitalInputFromUser : action.action
            }
        default:
            return state
    }
}

export default  InitialReducer