import {useContext} from 'react'
import CryptoContext from '../../context/CryptoContext/CryptoContext'
import useTickerSortableData from './useTickerSortableData'
import './ExtraInfo.css'

const ExtraInfo = ({ReturnCrypto, formatPrice, formatSpread}) => {

    
    const DestructuredTickers = () => {
        
        if (ReturnCrypto('tickers')) {
            
            const MutableTickers = [...ReturnCrypto('tickers')]
            const FinalTickers = MutableTickers.map((ticker, i) => {
                
                const { market, converted_last, base, target } = ticker;
                const { name } = market;
                const { usd } = converted_last
                
                ticker.pair = `${base}/${target}`
                ticker.lasttradeinusd = usd;
                ticker.exchangename = name;
                
                return ticker
            })
            return FinalTickers
            
        }
    }
    {console.log(DestructuredTickers())}
    const {items, requestSort} = useTickerSortableData(DestructuredTickers());

        return (

        <div className='extrainfo extrainfo--primary'>
            <div className='tickers tickers--primary'>
                <h4 className='tickers__head'>
                    {ReturnCrypto('symbol') && ReturnCrypto('symbol')} Markets
                </h4>
                <div className='tickers__scrollable'>
                    <table className='tickers__table'>
                        <thead className='tickers_thead'>
                            <tr className='tickers_headrow'>
                                <th className='tickers__headcol'>
                                    <button className='tickers__headcolbutton' onClick={() => {
                                        requestSort('exchangename')
                                    }}>
                                        EXCHANGE
                                    </button>
                                </th>
                                <th className='tickers__headcol'>
                                    <button className='tickers__headcolbutton' onClick={() => {
                                        requestSort('pair')
                                    }}>
                                        PAIR
                                    </button>
                                </th>
                                <th className='tickers__headcol'>
                                    <button className='tickers__headcolbutton' onClick={() => {
                                        requestSort('lasttradeinusd')
                                    }}>
                                        PRICE
                                    </button>
                                </th>
                                <th className='tickers__headcol'>
                                    <button className='tickers__headcolbutton' onClick={() => {
                                        requestSort('bid_ask_spread_percentage')
                                    }}>
                                        SPREAD
                                    </button>
                                </th>
                                <th className='tickers__headcol'>
                                    <button className='tickers__headcolbutton' onClick={() => {
                                        requestSort('volume')
                                    }}>
                                        24H VOLUME
                                    </button>
                                </th>
                            </tr>
                        </thead>
                        {DestructuredTickers() && items.map((ticker, i) => {

                            const {

                                base,
                                bid_ask_spread_percentage,
                                trade_url,
                                volume,
                                exchangename,
                                lasttradeinusd,
                                pair
                            
                            } = ticker;

                            if (base === ReturnCrypto('symbol')) {

                                return  <tr className='tickers__row'>
                                        <td className='tickers__dataexchange'>
                                            <a className='tickers_link' href={trade_url} target='_blank' rel='noreferrer'>
                                                {exchangename}
                                            </a>
                                        </td>
                                        <td className='tickers__data'>
                                                {pair}
                                        </td>
                                        <td className='tickers__data'>
                                            ${formatPrice(lasttradeinusd)}
                                        </td>
                                        <td className='tickers__data'>
                                            {formatSpread(bid_ask_spread_percentage)}%
                                        </td>
                                        <td className='tickers__data'>
                                            ${formatPrice(Number(volume * lasttradeinusd))}
                                        </td>
                                    </tr>
                            }
                        })}
                    </table>
                </div>

            </div>
        </div>
    )
}

export default ExtraInfo
