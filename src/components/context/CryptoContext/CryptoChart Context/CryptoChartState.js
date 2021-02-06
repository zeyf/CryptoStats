import React, {useReducer} from 'react'
import CryptoChartContext from './CryptoChartContext';
import CryptoChartReducer from './CryptoChartReducer'
import axios from 'axios';
import {
    SET_LOADING,
    SET_CRYPTO_TIME_FRAME,
    GET_CRYPTO_CHART_DATA,
    SET_MIN_MAX_PRICE,
} from '../../types';

const CryptoChartState = ({children}) => {
    
    const InitialState = {
        CRYPTODATA: null,
        MINMAX: null,
        TIMEFRAME: 1,
        LOADING: false,
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
                        const ToolTipDate = String(UnixToDate).split(/\s/gi).slice(1, 4)
                        const Time = String(UnixToDate).split(/\s/gi).slice(4, 5)
                        if (type === 'datetime') {   
                            return `${UnixToDate.getHours()}:${UnixToDate.getMinutes()}:${UnixToDate.getSeconds()} ${UnixToDate.getHours() >= 0 && UnixToDate.getHours() < 12 ? `AM` : `PM`}`
                        } else if (type === 'date') {
                            return `${String(ToolTipDate).replaceAll(/,/gi, ' ')} ${Time}`
                        }
                    })
                    return DateType
                    // may have to add condition handling if undefined, null, etc    
                }
            }

            const PriceSorted = [...Prices].sort() // doing Prices.sort() would sort the Prices list even if it was contained in a variable, had to use spread op
                
            const DatePriceObjArray = TimeFramePriceData.map((item, i) => {
                return {
                    time: DateFormatted('datetime')[i],
                    date: DateFormatted('date')[i],
                    Price: Prices[i]
                }
            })
            
            setMinMaxOfPrice(PriceSorted[0], PriceSorted[PriceSorted.length - 1])
            dispatch({type: GET_CRYPTO_CHART_DATA, payload: DatePriceObjArray})
        }
    }

    const setTimeFrame = (TimeFrame) => {
        dispatch({type: SET_CRYPTO_TIME_FRAME, payload: TimeFrame})
    }

    const setMinMaxOfPrice = (min, max) => {
        dispatch({
            type: SET_MIN_MAX_PRICE,
            payload: {
                min,
                max
            }
        })
    }

    return <CryptoChartContext.Provider value={{
            
            CRYPTODATA: state.CRYPTODATA,
            TIMEFRAME: state.TIMEFRAME,
            LOADING: state.LOADING,
            MINMAX: state.MINMAX,
            getCryptoChartData,
            setTimeFrame
            }}>
                {children}
            </CryptoChartContext.Provider>
}

export default CryptoChartState
