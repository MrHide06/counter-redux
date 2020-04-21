import axios from 'axios'

export const GET_DATA = 'GET_DATA'
export const GET_SUCCESS = 'GET_SUCCESS'
export const GET_FAILED = 'GET_FAILED'

export function getData() {
    return {
        type: GET_DATA
    }
}

export function getSuccess(result) {
    return {
        type: GET_SUCCESS,
        result
    }
}

export function getFailed(error) {
    return {
        type: GET_FAILED,
        error
    }
}

export function getDataApi() {
    return function(dispatch){
        dispatch(getData())

        axios.get('https://jsonplaceholder.typicode.com/todos')
        .then(result => dispatch(getSuccess(result.data)))
        .catch(error => dispatch(getFailed(error.massage)))
    }
}