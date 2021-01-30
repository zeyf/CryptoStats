import TableContext from './TableContext';
import TableReducer from './TableReducer';
import {useReducer} from 'react';
import axios from 'axios';
import {
    SET_LOADING, 
    GET_CRYPTOS, 
    SET_SORTED_FIELD,
    SET_CURRENT_PAGE,
    SET_INITIAL_LOADING,
    SET_ROWS_PER_PAGE
} from '../types';

const TableState = ({children}) => {
    const InitialState = {
        CRYPTOS: [],
        LOADING: false,
        SORTEDFIELD: null,
        CURRENTPAGE: 1,
        ROWSPERPAGE: 20,
        INITIALLOADING: false
    }

    const [state, dispatch] = useReducer(TableReducer, InitialState);

    const SetLoading = () => {
        dispatch({type: SET_LOADING})
    }

    const GetCryptos = async (currentPage, perPage) => {
        if(currentPage === 1 && perPage === 20) {
            SetInitialLoading(false);
        }
        SetLoading();
        
        const CoinGeckoResponse = await axios.get(
            `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=${perPage}&page=${currentPage}&sparkline=true&price_change_percentage=7d`
            );

        dispatch({
            type: GET_CRYPTOS,
            payload: CoinGeckoResponse.data
        })

        if(currentPage === 1 && perPage === 20) {
            SetInitialLoading(true);
        }
    }

    const setSortField = (field) => {
        console.log(field)
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

    const setRowsPerPage = (perPage) => {
        dispatch({
            type: SET_ROWS_PER_PAGE,
            payload: perPage
        })
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
            ROWSPERPAGE: state.ROWSPERPAGE,
            INITIALLOADING: state.INITIALLOADING,
            GetCryptos,
            setSortField,
            setCurrentPage,
            setRowsPerPage
            }}>
                {children}
            </TableContext.Provider>
}
export default TableState;