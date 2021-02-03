import React, {useEffect} from 'react'
import {Sparklines, SparklinesLine} from 'react-sparklines';
import {useContext} from 'react';
import CryptoChartContext from '../../context/CryptoContext/CryptoChart Context/CryptoChartContext';
import CryptoChartSkeleton from './CryptoChartSkeleton'
import {Line, LineChart, XAxis, YAxis, Tooltip, ResponsiveContainer, Area, AreaChart} from 'recharts'
import './CryptoChart.css'


const CryptoChart = ({ReturnCrypto, setSparklineColor}) => {

    const {CRYPTOCHARTDATA, TIMEFRAME, LOADING, MINMAX, getCryptoChartData, setTimeFrame} = useContext(CryptoChartContext);


    useEffect(() => {
        getCryptoChartData(ReturnCrypto('id'), TIMEFRAME)
    }, [])

    const SelectedTimeFrame = (type) => {
        if (TIMEFRAME === type) return {backgroundColor: '#13AD87'}
    }

    const ReturnData = (type) => {
        if (CRYPTOCHARTDATA) {
            const {min, max} = MINMAX;

            if (type === 'data') {
                return CRYPTOCHARTDATA
            } else if (type === 'min') {
                return min
            } else if (type === 'max') {
                return max
            } else if (type ==='LowerY') {

                const MinimumBound = min * 0.98;
                if (MinimumBound[0] === 0) {
                    return Number(MinimumBound.toFixed(4))
                } else if (MinimumBound[0] !== 0) {
                    return Number(MinimumBound.toFixed(2))
                }
            } else if (type === 'HigherY') {
                const MaximumBound = max * 1.02;
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
                            <YAxis dataKey='price' domain={[ReturnData('LowerY'), ReturnData('HigherY')]} width={YAxisWidth()} type='number'  />
                            <XAxis  dataKey='date'tick={false} margin={{ left: 0, right: 0, top: 0, bottom: 0}} height={15}/>
                            <Tooltip />
                        </AreaChart>
                    </ResponsiveContainer>
        }
    }
      
    
    return (
        <div className='cryptochart cryptochart--primary'>
            <div className='sparkline sparkline--primary'>

                {LOADING ? <div style={{display: 'flex', alignItems: 'center'}}><p >Loading...</p></div> : 
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
        </div> 
    )
}

export default CryptoChart
