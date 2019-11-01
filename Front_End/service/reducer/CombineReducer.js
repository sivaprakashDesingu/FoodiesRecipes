import { combineReducers } from 'redux'
import {
    RecipeReducer,
    HeaderReducer,
    UserDetailsReducer,
    toasterReducer,
    InitialReducer
} from './index'

const AllReducers = combineReducers({
    personalizedDataReducer: InitialReducer,
    toasterReducer,
    UserDetailsReducer,
    HeaderReducer,
    RecipeReducer
});

export default AllReducers;