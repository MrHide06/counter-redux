import { ADD, MINUS } from '../Actions/IceCreamAction'

const initialState = {
    iceCream: 0,
}

const iceCream = (state = initialState, action) => {
    switch (action.type){
        case ADD:
            return {
                ...state,
                iceCream: state.iceCream + 1,
            }
        case MINUS:
            return {
                ...state,
                iceCream: state.iceCream - 1,
            }
        default:
            return state
    }
}

export default iceCream