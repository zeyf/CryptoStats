import TableContext from './TableContext';
import TableReducer from './TableReducer';
import {useReducer} from 'react';
import {GET_CRYPTOS, SET_LOADING} from '../types';
import axios from 'axios';



const TableState = ({children}) => {
    const InitialState = {
        CRYPTOS: [],
        LOADING: false
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
        console.log(response.data.coins) // test
    }

    return <TableContext.Provider value={{
            CRYPTOS: state.CRYPTOS,
            LOADING: state.LOADING,
            COLUMNS: state.COLUMNS,
            GetCryptos
            }}>
                {children}
            </TableContext.Provider>
}
export default TableState;