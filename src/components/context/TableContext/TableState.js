import TableContext from './TableContext';
import TableReducer from './TableReducer';
import {useReducer} from 'react';
import {GET_CRYPTOS, SET_LOADING, SET_SORTED_FIELD} from '../types';
import axios from 'axios';



const TableState = ({children}) => {
    const InitialState = {
        CRYPTOS: [],
        LOADING: false,
        SORTEDFIELD: null
    }

    const [state, dispatch] = useReducer(TableReducer, InitialState);

    const SetLoading = () => {
        dispatch({
            type: SET_LOADING
        })
    }

    const GetCryptos = async () => {
        SetLoading();
        const response = await axios.get('https://api.coinstats.app/public/v1/coins?skip=0&limit=100&currency=USD')
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
        console.log(field)
    }

    return <TableContext.Provider value={{
            CRYPTOS: state.CRYPTOS,
            LOADING: state.LOADING,
            SORTEDFIELD: state.SORTEDFIELD,
            GetCryptos,
            setSortField
            }}>
                {children}
            </TableContext.Provider>
}
export default TableState;