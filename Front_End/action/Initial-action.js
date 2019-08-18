export const  USER_INITIAL_INPUT = 'USER_INITIAL_INPUT'


export function updateUserInitialInput (action){
    return{
        type:USER_INITIAL_INPUT,
        action
    }
}