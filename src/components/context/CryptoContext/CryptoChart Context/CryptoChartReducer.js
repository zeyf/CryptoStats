import {
    SET_LOADING,
    GET_CRYPTO_CHART_DATA,
    SET_CRYPTO_TIME_FRAME
} from '../../types';


const CryptoChartReducer = (state, action) => {
    
    switch(action.type) {
        default:
            return state;
        case SET_LOADING:
            return {
                ...state,
                LOADING: true
            }
        case GET_CRYPTO_CHART_DATA:
            return {
                ...state,
<<<<<<< HEAD
                CRYPTODATA: action.payload,
=======
                CHARTDATA: action.payload,
>>>>>>> 8ceeeb0b83f7f12c974098c927529430eb46be9a
                LOADING: false
            }
        case SET_CRYPTO_TIME_FRAME:
            return {
                ...state,
                TIMEFRAME: action.payload
            }
    }
}

export default CryptoChartReducer