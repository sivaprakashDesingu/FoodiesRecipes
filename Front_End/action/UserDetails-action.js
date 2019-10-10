import {LOGGIN_USER_REQUEST} from './../constraint/constraint'

export function isUserLoggedIn(action){
    //console.warn(action)
    //alert(JSON.stringify.action)
    return{
        type:LOGGIN_USER_REQUEST,
        action
    }
}