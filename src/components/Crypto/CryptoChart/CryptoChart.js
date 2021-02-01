import React, {useEffect} from 'react'
import {Sparklines, SparklinesLine} from 'react-sparklines';
import {useContext} from 'react';
import CryptoChartContext from '../../context/CryptoContext/CryptoChart Context/CryptoChartContext';
import './CryptoChart.css'


const CryptoChart = ({ReturnCrypto, setSparklineColor}) => {

    const {CRYPTODATA, TIMEFRAME, LOADING, getCryptoChartData, setTimeFrame} = useContext(CryptoChartContext);


    useEffect(() => {
        getCryptoChartData(ReturnCrypto('id'), TIMEFRAME)
        if (CRYPTODATA) console.log(CRYPTODATA)
    }, [])

    const SelectedTimeFrame = (type) => {
        if (TIMEFRAME) {
            if (TIMEFRAME === type) {
                return {
                    backgroundColor: '#13AD87'
                }
            } else if (TIMEFRAME === type) {
                return {
                    backgroundColor: '#13AD87'
                }
            } else if (TIMEFRAME === type) {
                return {
                    backgroundColor: '#13AD87'
                }
            } else if (TIMEFRAME === type) {
                return {
                    backgroundColor: '#13AD87'
                }
            }
        }
    }
    
    return (
        <div>
            <Sparklines data={ReturnCrypto('sparkline')} height={50} width={150}>
                <SparklinesLine color={setSparklineColor(ReturnCrypto('priceChange7d'))} style={{fill: 'none'}} />
            </Sparklines>
            <div className='sparklinebuttons sparklinesbuttons--primary'>
                <button className='sparklinebuttons__button' style={SelectedTimeFrame(1)} onClick={() => {
                    if (ReturnCrypto('id')) {
                        getCryptoChartData(ReturnCrypto('id'), 1)
                    }
                    }}>
                    1D
                </button>
                <button className='sparklinebuttons__button' style={SelectedTimeFrame(7)} onClick={() => {
                    if (ReturnCrypto('id')) {
                        getCryptoChartData(ReturnCrypto('id'), 7)
                    }

                    }}>
                    7D
                </button>
                <button className='sparklinebuttons__button' style={SelectedTimeFrame(14)} onClick={() => {
                    if (ReturnCrypto('id')) {
                        getCryptoChartData(ReturnCrypto('id'), 14)
                    }
                    }}>
                    14D
                </button>
                <button className='sparklinebuttons__button' style={SelectedTimeFrame(30)} onClick={() => {
                    if (ReturnCrypto('id')) {
                        getCryptoChartData(ReturnCrypto('id'), 30)
                    }
                    }}>
                    30D
                </button>
            </div>
        </div>
    )
}

export default CryptoChart
