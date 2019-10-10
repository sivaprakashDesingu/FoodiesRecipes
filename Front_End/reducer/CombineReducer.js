import { combineReducers } from 'redux'
import InitialReducer from './Initial-reducer'
import toasterReducer from './toast-reducer'

const AllReducers = combineReducers({
    InitialReducer,
    toasterReducer
});

export default AllReducers;