import { GET_MOCK, GET_MOCK_SUCCESS, GET_MOCK_FAILED} from '../Actions/MockAction'

const initailState = {
    data: [],
    error: null,
}

const getMock = (state = initailState, action) => {
    switch (action.type){
        case GET_MOCK:
            return{
                ...state,
            }
        case GET_MOCK_SUCCESS:
            return {
                ...state,
                data: action.result
            }
        case GET_MOCK_FAILED:
            return {
                ...state,
                error: action.error
            }
        default:
            return state
    }
}

export default getMock