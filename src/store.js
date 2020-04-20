import { createStore, combineReducers } from 'redux'
import Cakes from './Reducers/CakesReducer'
import IceCream from './Reducers/IceCreamReducer'

const MainReducer = combineReducers({
    Cakes,
    IceCream
})
export default createStore(MainReducer)