export const ADD = "ADD";
export const MINUS = "MINUS"

export const addIceCream = () => {
    return {
        type: ADD,
    }
}

export const minusIceCream = () => {
    return {
        type: MINUS
    }
}