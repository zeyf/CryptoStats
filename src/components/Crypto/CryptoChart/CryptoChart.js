import React, {useEffect} from 'react'
import {Sparklines, SparklinesLine} from 'react-sparklines';
import {useContext} from 'react';
import CryptoChartContext from '../../context/CryptoContext/CryptoChart Context/CryptoChartContext';
<<<<<<< HEAD
import CryptoChartSkeleton from './CryptoChartSkeleton'
import {Line, LineChart, XAxis, YAxis, Tooltip} from 'recharts'
=======
>>>>>>> 8ceeeb0b83f7f12c974098c927529430eb46be9a
import './CryptoChart.css'


const CryptoChart = ({ReturnCrypto, setSparklineColor}) => {

    const {CRYPTODATA, TIMEFRAME, LOADING, getCryptoChartData, setTimeFrame} = useContext(CryptoChartContext);


    useEffect(() => {
        getCryptoChartData(ReturnCrypto('id'), TIMEFRAME)
        if (CRYPTODATA) console.log(CRYPTODATA)
    }, [])

    const SelectedTimeFrame = (type) => {
        if (TIMEFRAME) {
<<<<<<< HEAD
            if (TIMEFRAME === type) return {backgroundColor: '#13AD87'}
        }
    }

    const ReturnData = (type) => {
        if (CRYPTODATA) {
            if (type === 'data') {
                console.log(CRYPTODATA)
                return CRYPTODATA
            } else if (type === 'lowest') {
                return CRYPTODATA
            }
            
        }
    }

    const renderLineChart = () => {

        return <LineChart width={300} height={125} data={ReturnData('data')}>
          <Line type="monotone" dataKey='price' stroke="#8884d8" dot={false} />
          <YAxis dataKey='price'  domain={[30000, 40000]} />
          <XAxis dataKey='date'tick={false}/>
          <Tooltip />
        </LineChart>
        }
      
    
    return (
        <div className='cryptochart cryptochart--primary'>
            <div className='sparkline sparkline--primary'>

                {LOADING ? <CryptoChartSkeleton /> : 
                    renderLineChart()
                }
            </div>
=======
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
>>>>>>> 8ceeeb0b83f7f12c974098c927529430eb46be9a
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
<<<<<<< HEAD
        </div> 
=======
        </div>
>>>>>>> 8ceeeb0b83f7f12c974098c927529430eb46be9a
    )
}

export default CryptoChart
