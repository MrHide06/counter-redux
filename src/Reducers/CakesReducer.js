import { TAMBAH, KURANG } from '../Actions/CakesAction'

const initialState = {
    cakes: 0,
}

const Cakes = (state = initialState, action) => {
    switch (action.type){
        case TAMBAH:
            return {
                ...state,
                cakes: state.cakes + 1,
            }
        case KURANG:
            return {
                ...state,
                cakes: state.cakes - 1,
            }
        default:
            return state
    }
}

export default Cakes