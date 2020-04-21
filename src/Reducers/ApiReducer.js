import { GET_DATA, GET_SUCCESS, GET_FAILED} from '../Actions/ApiAction'

const initailState = {
    data: [],
    error: null,
}

const getApi = (state = initailState, action) => {
    switch (action.type){
        case GET_DATA:
            return{
                ...state,
            }
        case GET_SUCCESS:
            return {
                ...state,
                data: action.result
            }
        case GET_FAILED:
            return {
                ...state,
                error: action.error
            }
        default:
            return state
    }
}

export default getApi