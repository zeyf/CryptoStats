import { SET_LOADING, SET_CRYPTO } from '../types'

const CryptoReducer = (state, action) => {
    switch(action.type) {
        default:
            return state;
        case SET_CRYPTO:
            return {
                ...state,
                CRYPTO: action.payload,
                LOADING: false
            }
        case SET_LOADING:
            return {
                ...state,
                LOADING: true
            }
    }

}

export default CryptoReducer;