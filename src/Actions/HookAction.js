export const ADD_CART = "ADD_CART";
export const MINUS_CART = "MINUS_CART"

export const addCart = () => {
    return {
        type: ADD_CART,
    }
}

export const minusCart = () => {
    return {
        type: MINUS_CART
    }
}