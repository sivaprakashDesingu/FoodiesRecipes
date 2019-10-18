// Imports: Dependencies
import { createStore, applyMiddleware } from 'redux';
//import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
// Imports: Redux Root Reducer
import AllReducers from './../reducer/CombineReducer';
// Imports: Redux Root Saga
import { rootSaga } from '../sagas';
// Middleware: Redux Saga
const sagaMiddleware = createSagaMiddleware();
// Redux: Store
const store = createStore(
  AllReducers,
  applyMiddleware(
    sagaMiddleware,
    //createLogger(),
  ),
);
// Middleware: Redux Saga
sagaMiddleware.run(rootSaga);
// Exports
export {store}