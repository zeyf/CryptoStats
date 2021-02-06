import {useReducer} from 'react'
import CryptoReducer from './CryptoReducer'
import CryptoContext from './CryptoContext';
import {
    SET_LOADING,
    SET_CRYPTO,
    SET_TICKER_SORT_FIELD
} from '../types'
import axios from 'axios';

const CryptoState = ({children}) => {

    const InitialState = {
        LOADING: false,
        CRYPTO: null,
        TICKERSORTEDFIELD: null
    };

    const SetLoading = () => {
        dispatch({type: SET_LOADING})
    };

    const GetCrypto = async (CryptoID) => {
        SetLoading();
        const response = await axios.get(`https://api.coingecko.com/api/v3/coins/${CryptoID}?tickers=true&market_data=true&community_data=false&developer_data=true&sparkline=true`);
        
        dispatch({
            type: SET_CRYPTO,
            payload: response.data
        });
    }

    const setTickerSortField = (field) => {
        dispatch({
            type: SET_TICKER_SORT_FIELD,
            payload: field
        })
    }


    const [state, dispatch] = useReducer(CryptoReducer, InitialState);

    return <CryptoContext.Provider value={{
       CRYPTO: state.CRYPTO,
       LOADING: state.LOADING,
       TICKERSORTEDFIELD: state.TICKERSORTEDFIELD,
       GetCrypto,
       setTickerSortField
    }}>
        {children}
    </CryptoContext.Provider>;
}
export default CryptoState