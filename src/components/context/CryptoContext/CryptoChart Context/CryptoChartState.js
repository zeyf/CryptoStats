import React, {useReducer} from 'react'
import CryptoChartContext from './CryptoChartContext';
import CryptoChartReducer from './CryptoChartReducer'
import axios from 'axios';
import {
    SET_LOADING,
    GET_CRYPTO_CHART_DATA,
    SET_CRYPTO_TIME_FRAME
} from '../../types';

const CryptoChartState = ({children}) => {
    
    const InitialState = {
        CRYPTODATA: null,
        TIMEFRAME: 1,
        LOADING: false
    }

    const [state, dispatch] = useReducer(CryptoChartReducer, InitialState);

    const  SetLoading = () => {
        dispatch({type: SET_LOADING})
    }


    const getCryptoChartData = async (CryptoID, TimeFrame) => {
        if (CryptoID) {
            SetLoading();
            setTimeFrame(TimeFrame);
            const Data = await axios.get(`https://api.coingecko.com/api/v3/coins/${CryptoID}/market_chart?vs_currency=usd&days=${TimeFrame}`);

            const TimeFramePriceData = Data.data.prices;
            const Prices = TimeFramePriceData.map((daydataset, i) => {
            if (String(daydataset)[0] !== '0') return Number(daydataset[daydataset.length - 1].toFixed(2))
            if (String(daydataset)[0] === '0') return Number(daydataset[daydataset.length - 1].toFixed(4))
            // may have to add condition handling if undefined, null, etc
            })

            const DateFormatted = (type) => {
                if (TimeFramePriceData) {

                    const DateType = TimeFramePriceData.map((daydataset, i) => {
                        
                        const UnixTimeStamp = daydataset[daydataset.length - daydataset.length]
                        const UnixToDate = new Date(UnixTimeStamp); // milliseconds to seconds
                        
                        if (type === 'datetime') {   
                            return `${UnixToDate.getHours()}:${UnixToDate.getMinutes()}:${UnixToDate.getSeconds()} ${UnixToDate.getHours() >= 0 && UnixToDate.getHours() < 12 ? `AM` : `PM`}`
                        } else if (type === 'date') {
                            return `${UnixToDate.getDay()}/${UnixToDate.getMonth()}`
                        }
                    })
                    return DateType
                    // may have to add condition handling if undefined, null, etc    
                }
            }
                
            const DatePriceObjArray = TimeFramePriceData.map((item, i) => {
                return {
                    time: DateFormatted('datetime')[i],
                    date: DateFormatted('date')[i],
                    price: Prices[i]
                }
            })

            dispatch({type: GET_CRYPTO_CHART_DATA, payload: DatePriceObjArray})
        }
    }

    const setTimeFrame = (TimeFrame) => {
        dispatch({type: SET_CRYPTO_TIME_FRAME, payload: TimeFrame})
    }

    return <CryptoChartContext.Provider value={{
            
            CRYPTODATA: state.CRYPTODATA,
            TIMEFRAME: state.TIMEFRAME,
            LOADING: state.LOADING,
            getCryptoChartData,
            setTimeFrame
            }}>
                {children}
            </CryptoChartContext.Provider>
}

export default CryptoChartState
