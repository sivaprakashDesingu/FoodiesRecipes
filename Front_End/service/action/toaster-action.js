export const  TOAST_REQUEST = 'TOAST_REQUEST'
export const  TOAST_SUCCESS = 'TOAST_SUCCESS'
export const  TOAST_FAILED = 'TOAST_FAILED'

export function toastRequest (action){
    return{
        type:TOAST_REQUEST,
        action
    }
}
