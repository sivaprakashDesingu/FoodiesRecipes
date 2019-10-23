import TOAST_SUCCESS from './../action/toaster-action'

const initialState = {
    toast :{
        type:'',
        message:''
    }
}

const toasterReducer = (state = initialState,action) => {
    switch(action.type){
        case TOAST_SUCCESS:
            return{
                ...state,
                toast :{
                    type:"success",
                    message:"Enjoy!!!!!"
                }
            }
        default:
            return state
    }
}

export default  toasterReducer