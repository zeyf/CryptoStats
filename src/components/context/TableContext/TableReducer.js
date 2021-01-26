import {SET_LOADING, GET_CRYPTOS, SET_SORTED_FIELD} from '../types';

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
        case SET_SORTED_FIELD:
            return {
                ...state,
                SORTEDFIELD: action.payload
            }
    }
}

export default TableReducer;