import { SET_LOADING, SET_CRYPTO, SET_TICKER_SORT_FIELD} from '../types'

const CryptoReducer = (state, action) => {
    switch(action.type) {
        default:
            return state;
        case SET_LOADING:
            return {
                ...state,
                LOADING: true
            }
        case SET_CRYPTO:
            return {
                ...state,
                CRYPTO: action.payload,
                LOADING: false
            }
        case SET_TICKER_SORT_FIELD:
            return {
                ...state,
                TICKERSORTEDFIELD: action.payload
            }
    }

}

export default CryptoReducer;