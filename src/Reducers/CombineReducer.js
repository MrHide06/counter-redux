import { combineReducers } from 'redux'
import Cakes  from './CakesReducer'
import IceCream from './IceCreamReducer'
import getApi from './ApiReducer'
import getMock from './MockReducer'
import Cart from './HookReducer'

const MainReducer = combineReducers({
    Cakes,
    IceCream,
    getApi,
    getMock,
    Cart
})

export default MainReducer