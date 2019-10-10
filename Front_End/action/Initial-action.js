import {USER_INITIAL_INPUT} from './../constraint/constraint'

export function updateUserInitialInput (action){
    return{
        type:USER_INITIAL_INPUT,
        action
    }
}