import {
    SET_LOADING, 
    GET_CRYPTOS, 
    SET_SORTED_FIELD,
    SET_CURRENT_PAGE,
    SET_INITIAL_LOADING,
    SET_ROWS_PER_PAGE
} from '../types';

// consider adding set post per page to allow user to change it

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
        case SET_CURRENT_PAGE:
            return {
                ...state,
                CURRENTPAGE: action.payload
            }
        case SET_INITIAL_LOADING:
            return {
                ...state,
                INITIALLOADING: action.payload
            }
        case SET_ROWS_PER_PAGE:
            return {
                ...state,
                ROWSPERPAGE: action.payload
            }
    }
}

export default TableReducer;