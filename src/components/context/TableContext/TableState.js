import TableContext from './TableContext';
import TableReducer from './TableReducer';
import {useReducer} from 'react';
import axios from 'axios';
import {
    SET_LOADING, 
    GET_CRYPTOS, 
    SET_SORTED_FIELD,
    SET_CURRENT_PAGE,
    SET_INITIAL_LOADING
} from '../types';

const TableState = ({children}) => {
    const InitialState = {
        CRYPTOS: [],
        LOADING: false,
        SORTEDFIELD: null,
        CURRENTPAGE: 1,
        POSTSPERPAGE: 20,
        INITIALLOADING: false
    }

    const [state, dispatch] = useReducer(TableReducer, InitialState);

    const SetLoading = () => {
        dispatch({type: SET_LOADING})
    }

    const GetCryptos = async (currentPage, perPage) => {
        if(currentPage === 1) {
            SetInitialLoading(false);
        }
        SetLoading();
        const limit = perPage;
        const skip = () => {
            if (limit === limit * currentPage) {
                return 0;
            } else {
                return (limit * currentPage) - perPage
            }
        }
        const CoinStatsResponse = await axios.get(`https://api.coinstats.app/public/v1/coins?skip=${skip()}&limit=${limit}&currency=USD`)
        const CoinStatsData = CoinStatsResponse.data.coins
        
        const CoinGeckoSparkline7DDataResponse = await axios.get(
            `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=${perPage}&page=${currentPage}&sparkline=true&price_change_percentage=7d`
            );

        const SparklinesForCurrent = CoinGeckoSparkline7DDataResponse.data.map((crypto, i) => {
            return crypto.sparkline_in_7d
        })
        const CoinGecko7dChange = CoinGeckoSparkline7DDataResponse.data.map((crypto, i) => {
            return crypto.price_change_percentage_7d_in_currency
        })

        const CombinedData = CoinStatsData.map((crypto, i) => {
            crypto.sparklinedata = SparklinesForCurrent[i].price;
            crypto.priceChange7d_CG_USD = CoinGecko7dChange[i];
            return crypto
        })

        dispatch({
            type: GET_CRYPTOS,
            payload: CombinedData
        })

        if(currentPage === 1) {
            SetInitialLoading(true);
        }
    }

    const setSortField = (field) => {
        dispatch({
            type: SET_SORTED_FIELD,
            payload: field
        })
    }

    const setCurrentPage = (currentPage, perPage) => {
        dispatch({
            type: SET_CURRENT_PAGE,
            payload: currentPage
        })
        GetCryptos(currentPage, perPage);
    }

    const SetInitialLoading = (status) => {
        if (status === false) {
            dispatch({
                type: SET_INITIAL_LOADING,
                payload: false
            })
        } else {
            dispatch({
                type: SET_INITIAL_LOADING,
                payload: true
            })
        }
    }

    return <TableContext.Provider value={{
            CRYPTOS: state.CRYPTOS,
            LOADING: state.LOADING,
            SORTEDFIELD: state.SORTEDFIELD,
            CURRENTPAGE: state.CURRENTPAGE,
            POSTSPERPAGE: state.POSTSPERPAGE,
            INITIALLOADING: state.INITIALLOADING,
            GetCryptos,
            setSortField,
            setCurrentPage
            }}>
                {children}
            </TableContext.Provider>
}
export default TableState;