import {SET_LOADING, GET_CRYPTOS} from '../types';

const TableReducer = (state, action) => {
    switch(action.type) {
        default:
            return state;
        case SET_LOADING:
            return {
                ...state,
                LOADING: true
            }
        case GET_CRYPTOS:
            return {
                ...state,
                CRYPTOS: action.payload,
                LOADING: false
            }
    }
}

export default TableReducer;