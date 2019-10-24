import { combineReducers } from 'redux'
import InitialReducer from './Initial-reducer'
import toasterReducer from './toast-reducer'
import UserDetailsReducer from './UserDetailsReducer'
import HeaderReducer from './header-reducer'
const AllReducers = combineReducers({
    personalizedDataReducer:InitialReducer,
    toasterReducer,
    UserDetailsReducer,
    HeaderReducer
});

export default AllReducers;