import TableContext from './TableContext';
import TableReducer from './TableReducer';
import {useReducer} from 'react';
import axios from 'axios';
import {
    SET_LOADING, 
    GET_CRYPTOS, 
    SET_SORTED_FIELD,
    SET_CURRENT_PAGE
} from '../types';

const TableState = ({children}) => {
    const InitialState = {
        CRYPTOS: [],
        LOADING: false,
        SORTEDFIELD: null,
        CURRENTPAGE: 1,
        POSTSPERPAGE: 25
    }

    const [state, dispatch] = useReducer(TableReducer, InitialState);

    const SetLoading = () => {
        dispatch({type: SET_LOADING})
    }

    const GetCryptos = async (currentPage, perPage) => {
        SetLoading();
        const skip = () => {
            if (currentPage) {
                return perPage * 0
            }
        }
        const limit = perPage * currentPage

        const response = await axios.get(`https://api.coinstats.app/public/v1/coins?skip=${skip()}&limit=${limit}&currency=USD`)
        dispatch({
            type: GET_CRYPTOS,
            payload: response.data.coins
        })
    }

    const setSortField = (field) => {
        dispatch({
            type: SET_SORTED_FIELD,
            payload: field
        })
    }

    const setCurrentPage = (pageSelected) => {
        dispatch({
            type: SET_CURRENT_PAGE,
            payload: pageSelected
        })
    }

    return <TableContext.Provider value={{
            CRYPTOS: state.CRYPTOS,
            LOADING: state.LOADING,
            SORTEDFIELD: state.SORTEDFIELD,
            CURRENTPAGE: state.CURRENTPAGE,
            POSTSPERPAGE: state.POSTSPERPAGE,
            GetCryptos,
            setSortField,
            setCurrentPage
            }}>
                {children}
            </TableContext.Provider>
}
export default TableState;