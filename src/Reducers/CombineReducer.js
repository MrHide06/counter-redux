import { combineReducers } from 'redux'
import Cakes  from './CakesReducer'
import IceCream from './IceCreamReducer'

const MainReducer = combineReducers({
    Cakes,
    IceCream
})

export default MainReducer