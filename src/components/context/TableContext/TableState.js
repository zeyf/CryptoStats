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
        const limit = perPage;
        const skip = () => {
            if (limit === limit * currentPage) {
                return 0;
            } else {
                return (limit * currentPage)
            }
        }
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

    const setCurrentPage = (currentPage, perPage) => {
        dispatch({
            type: SET_CURRENT_PAGE,
            payload: currentPage
        })
        GetCryptos(currentPage, perPage);
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