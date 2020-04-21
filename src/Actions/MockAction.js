import axios from 'axios'

export const GET_MOCK = 'GET_MOCK'
export const GET_MOCK_SUCCESS = 'GET_MOCK_SUCCESS'
export const GET_MOCK_FAILED = 'GET_MOCK_FAILED'

export function getMock() {
    return {
        type: GET_MOCK
    }
}

export function getMockSuccess(result) {
    return {
        type: GET_MOCK_SUCCESS,
        result
    }
}

export function getMockFailed(error) {
    return {
        type: GET_MOCK_FAILED,
        error
    }
}

export function getDataMock() {
    return function(dispatch){
        dispatch(getMock())

        axios.get('https://5e9e9cb7fb467500166c42f2.mockapi.io/ChannelYT')
        .then(result => dispatch(getMockSuccess(result.data)))
        .catch(error => dispatch(getMockFailed(error.massage)))
    }
}

export function postDataMock(obj) {
    return function(dispatch){
        dispatch(getMock())

        axios.post('https://5e9e9cb7fb467500166c42f2.mockapi.io/ChannelYT',obj)
        .then(() => dispatch(getDataMock()))
        .catch(error => dispatch(getMockFailed(error.massage)))
    }
}   