import { combineReducers } from 'redux'
import InitialReducer from './Initial-reducer'
import toasterReducer from './toast-reducer'
import UserDetailsReducer from './UserDetailsReducer'
const AllReducers = combineReducers({
    InitialReducer,
    toasterReducer,
    UserDetailsReducer
});

export default AllReducers;