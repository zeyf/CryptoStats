import {useContext} from 'react'
import CryptoContext from '../../context/CryptoContext/CryptoContext'
import useTickerSortableData from './useTickerSortableData'
import './ExtraInfo.css'

const ExtraInfo = ({ReturnCrypto, formatPrice, formatSpread}) => {

    const {items, requestSort} = useTickerSortableData(ReturnCrypto('tickers'));


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
                                        requestSort('market.name')
                                    }}>
                                        Exchange
                                    </button>
                                </th>
                                <th className='tickers__headcol'>
                                    <button className='tickers__headcolbutton' onClick={() => {
                                        requestSort('base')
                                    }}>
                                        Pair
                                    </button>
                                </th>
                                <th className='tickers__headcol'>
                                    <button className='tickers__headcolbutton' onClick={() => {
                                        requestSort('converted_last.usd')
                                    }}>
                                        Price
                                    </button>
                                </th>
                                <th className='tickers__headcol'>
                                    <button className='tickers__headcolbutton' onClick={() => {
                                        requestSort('bid_ask_spread_percentage')
                                    }}>
                                        Spread
                                    </button>
                                </th>
                                <th className='tickers__headcol'>
                                    <button className='tickers__headcolbutton' onClick={() => {
                                        requestSort('volume')
                                    }}>
                                        24H Volume
                                    </button>
                                </th>
                            </tr>
                        </thead>
                        {ReturnCrypto('tickers') && items.map((ticker, i) => {

                            const {

                                base, 
                                target, 
                                bid_ask_spread_percentage,
                                trade_url,
                                volume,
                                converted_last,
                                market
                            
                            } = ticker;

                            const {

                                name,

                            } = market

                            const {
                                btc,
                                eth,
                                usd
                            } = converted_last

                            if (base === ReturnCrypto('symbol')) {

                                return  <tr className='tickers__row'>
                                        <td className='tickers__dataexchange'>
                                            <a className='tickers_link' href={trade_url} target='_blank' rel='noreferrer'>
                                                {name}
                                            </a>
                                        </td>
                                        <td className='tickers__data'>
                                                {base}/{target}
                                        </td>
                                        <td className='tickers__data'>
                                                ${formatPrice(usd)}
                                        </td>
                                        <td className='tickers__data'>
                                                {formatSpread(bid_ask_spread_percentage)}%
                                        </td>
                                        <td className='tickers__data'>
                                                ${formatPrice((volume * usd).toFixed(2))}
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
