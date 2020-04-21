import { combineReducers } from 'redux'
import Cakes  from './CakesReducer'
import IceCream from './IceCreamReducer'
import getApi from './ApiReducer'
import getMock from './MockReducer'

const MainReducer = combineReducers({
    Cakes,
    IceCream,
    getApi,
    getMock
})

export default MainReducer