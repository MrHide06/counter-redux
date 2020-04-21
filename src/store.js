import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import logger from "redux-logger";
import MainReducer from './Reducers/CombineReducer'

export default createStore(MainReducer, applyMiddleware(thunk, logger))