import React, {useEffect} from 'react'
import {useContext} from 'react';
import CryptoChartContext from '../../context/CryptoContext/CryptoChart Context/CryptoChartContext';
import {XAxis, YAxis, Tooltip, ResponsiveContainer, Area, AreaChart} from 'recharts'
import Loader from '../../layout/Loader/Loader'
import './CryptoChart.css'


const CryptoChart = ({ReturnCrypto, formatPriceChange}) => {

    const {CRYPTODATA, TIMEFRAME, LOADING, MINMAX, getCryptoChartData} = useContext(CryptoChartContext);


    useEffect(() => {
        getCryptoChartData(ReturnCrypto('id'), TIMEFRAME)
        //eslint-disable-next-line
    }, [])

    const SelectedTimeFrame = (type) => {
        if (TIMEFRAME === type) return {backgroundColor: '#13AD87'}
    }

    const ReturnData = (type) => {
        if (CRYPTODATA) {
            const {min, max} = MINMAX;

            if (type === 'data') {
                return CRYPTODATA
            } else if (type === 'min') {
                return min
            } else if (type === 'max') {
                return max
            } else if (type ==='LowerY') {

                const MinimumBound = min * 0.97;
                if (MinimumBound[0] === 0) {
                    return Number(MinimumBound.toFixed(4))
                } else if (MinimumBound[0] !== 0) {
                    return Number(MinimumBound.toFixed(2))
                }
            } else if (type === 'HigherY') {
                const MaximumBound = max * 1.03;
                if (MaximumBound[0] === 0) {
                    return Number(MaximumBound.toFixed(4))
                } else if (MaximumBound[0] !== 0) {
                    return Number(MaximumBound.toFixed(2))
                }
            }
            
        }
    }

    const YAxisWidth = () => {
        if (window.screen.width < 600) return 50 
        if (window.screen.width >= 600 && window.screen.width <= 1024) return 75 
        if (window.screen.width > 1024) return 75
    }

    const renderLineChart = () => {
        if (ReturnData('data')) {

            return <ResponsiveContainer width={'100%'} height={'100%'}>
                        <AreaChart data={ReturnData('data')} margin={{left: 5, right: 10, top: 0, bottom: 0}}>
                            <Area type="monotone" dataKey='Price' stroke="#4141bf" dot={false} fill={'rgba(0,255,255, 0.40)'} />
                            <YAxis dataKey='Price' domain={[ReturnData('LowerY'), ReturnData('HigherY')]} width={YAxisWidth()} type='number'  />
                            <XAxis  dataKey='date'tick={false} margin={{ left: 0, right: 0, top: 0, bottom: 0}} height={15}/>
                            <Tooltip />
                        </AreaChart>
                    </ResponsiveContainer>
        }
    }
      
    
    return (
        <div className='cryptochart cryptochart--primary'>
            <div className='sparkline sparkline--primary'>

                {LOADING ? <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}><Loader />Loading...</div> : 
                    ReturnData('data') && renderLineChart()
                }
            </div>
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
            <div className='pricechanges pricechanges--primary'>
                    <table className='pricechangetable pricechangetable--primary'>
                        <tr>
                            <td className='pricechangetable__data'>{ReturnCrypto('priceChange24hr') && `${formatPriceChange(ReturnCrypto('priceChange24hr'))}%`}</td>
                            <td className='pricechangetable__data'>{ReturnCrypto('priceChange7d') && `${formatPriceChange(ReturnCrypto('priceChange7d'))}%`}</td>
                            <td className='pricechangetable__data'>{ReturnCrypto('priceChange14d') && `${formatPriceChange(ReturnCrypto('priceChange14d'))}%`}</td>
                            <td className='pricechangetable__data'>{ReturnCrypto('priceChange30d') && `${formatPriceChange(ReturnCrypto('priceChange30d'))}%`}</td>

                        </tr>
                    </table>
            </div>
        </div> 
    )
}

export default CryptoChart
