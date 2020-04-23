import { ADD_CART, MINUS_CART } from '../Actions/HookAction'

const initialState = {
    cart: 0,
}

const Cart = (state = initialState, action) => {
    switch (action.type){
        case ADD_CART:
            return {
                ...state,
                cart: state.cart + 1,
            }
        case MINUS_CART:
            return {
                ...state,
                cart: state.cart - 1,
            }
        default:
            return state
    }
}

export default Cart