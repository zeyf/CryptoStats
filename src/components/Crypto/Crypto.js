import React, {useEffect, useContext} from 'react'
import CryptoContext from '../context/CryptoContext/CryptoContext'
import FormatFunctions from '../../functions/Formatting Functions/FormatFunctions'
import CryptoSkeleton from './CryptoSkeleton'
import CryptoChart from './CryptoChart/CryptoChart';
import './Crypto.css'
import ExtraInfo from './Extra Info/ExtraInfo'
import {Helmet} from 'react-helmet'

const Crypto = ({match}) => {

    const {GetCrypto, LOADING, CRYPTO} = useContext(CryptoContext);
    
        useEffect(() => {
            GetCrypto(match.params.CryptoID);
            //eslint-disable-next-line
        }, [])

        const {
            newVol,
            newPrice,
            addDirectionalTriangle,
            format1DpriceChange,
            nameShortener,
            setCryptoPriceBGColor

        } = FormatFunctions;

        const ReturnCrypto = (type, subtype) => {
            if (CRYPTO) {
                
                const {name, id, image, symbol, market_cap_rank, market_data, genesis_date, description, categories, links, tickers} = CRYPTO;

                const {

                    circulating_supply,
                    total_supply,
                    max_supply,
                    current_price, 
                    market_cap_change_percentage_24h_in_currency, 
                    price_change_percentage_1h_in_currency,
                    price_change_percentage_24h_in_currency,
                    price_change_percentage_7d_in_currency,
                    price_change_percentage_14d_in_currency,
                    price_change_percentage_30d_in_currency,
                    total_volume,
                    sparkline_7d,
                    ath,
                    ath_date,
                    atl,
                    atl_date,
                    market_cap,
                    high_24h,
                    low_24h,

                } = market_data;

                const {

                    blockchain_site,
                    homepage
                
                } = links;

                
                
                if (type === 'name') {
                    return name;
                } else if (type === 'id') {
                    return id
                } else if (type === 'image') {
                    if (image.large) {
                        return image.large
                    } else {
                        return image.small
                    }
                } else if (type === 'symbol') {
                    return symbol.toUpperCase();
                } else if (type === 'market_cap_rank') {
                    return market_cap_rank
                } else if (type === 'circulating_supply') {
                    return `${Number(circulating_supply.toFixed(0)).toLocaleString('en')} ${symbol.toUpperCase()}` 
                } else if (type === 'ath') {
                    return ath.usd
                } else if (type === 'ath_date') {
                    return ath_date.usd
                } else if (type === 'atl') {
                    return atl.usd
                } else if (type === 'atl_date') {
                    return atl_date.usd
                } else if (type === 'max_supply') {
                    return max_supply
                } else if (type === 'genesis_date') {
                    return genesis_date
                } else if (type === 'description') {
                    return description.en
                } else if (type === 'categories') {
                    return categories
                } else if (type === 'current_price') {
                    return current_price.usd
                } else if (type === 'marketcapChange24hr') {
                    return market_cap_change_percentage_24h_in_currency.usd;
                } else if (type === 'priceChange1hr') {
                    return price_change_percentage_1h_in_currency.usd;
                } else if (type === 'priceChange24hr') {
                    return price_change_percentage_24h_in_currency.usd;
                } else if (type === 'priceChange7d') {
                    return price_change_percentage_7d_in_currency.usd;
                } else if (type === 'priceChange14d') {
                    return price_change_percentage_14d_in_currency.usd;
                } else if (type === 'priceChange30d') {
                    return price_change_percentage_30d_in_currency.usd;
                } else if (type === 'volume24hr') {
                    return total_volume.usd
                } else if (type === 'total_supply') {
                    if (total_supply) {

                        return `${Number(total_supply.toFixed(0)).toLocaleString('en')} ${symbol.toUpperCase()}`
                    } else {
                        return `-`
                    }
                } else if (type === 'tickers') {
                    return tickers
                } else if (type === 'sparkline') {
                    return sparkline_7d.price
                } else if (type === 'links') {
                    if (subtype === 'blockchain_site') {
                        
                        return blockchain_site

                    } else if (subtype === 'homepage') {
                        return homepage
                    }
                } else if (type === 'market_cap') {
                    return market_cap.usd
                } else if (type === 'low_24hr') {
                    return low_24h.usd
                } else if (type === 'high_24hr') {
                    return high_24h.usd
                }
            }
        }
        return (
        
        <div className='crypto crypto--primary'>
            <Helmet>
                <title>{LOADING ? 'LOADING... CRYPTOSTATS 🚀💰' :  `${ReturnCrypto('name')} / ${ReturnCrypto('symbol')} $${newPrice(ReturnCrypto('current_price'))} - CRYPTOSTATS.US - ${ReturnCrypto('name')} price, ${ReturnCrypto('symbol')} market cap data, ${ReturnCrypto('symbol')} 1 day 7 day 14 day 30 day timeframe live cryptocurrency chart`}</title>
            </Helmet>
            {LOADING ? <CryptoSkeleton /> :

            <div className='cryptoinfo cryptoinfo--primary'>
                <div className='maindetails maindetails--primary'>
                    <div className='maindetailcont1 maindetailcont1--primary'>
                        <div className='maindetailsubcont1 maindetailsubcont1--primary'>
                            <img className='maindetailsubcont1__image' src={ReturnCrypto('image')} alt={`${ReturnCrypto('name')} ${ReturnCrypto('symbol')} icon`} />
                            <h1 className='maindetailsubcont1__name'>
                                {ReturnCrypto('name') && `${nameShortener(ReturnCrypto('name'))} (${ReturnCrypto('symbol')})`}
                            </h1>
                            <p className='maindetailsubcont1__rank'>
                                #{ReturnCrypto('market_cap_rank')}
                            </p>
                        </div>
                        <div className='maindetailsubcont1 maindetailsubcont1--secondary'>
                            <h2 className='maindetailsubcont1__price'>
                                {ReturnCrypto('current_price') && `$${newPrice(ReturnCrypto('current_price'))}`}
                            </h2>
                            <p className='maindetailsubcont1__priceChange24hr' style={setCryptoPriceBGColor(ReturnCrypto('priceChange24hr'))}>
                                {`${addDirectionalTriangle(ReturnCrypto('priceChange24hr'))}${format1DpriceChange(ReturnCrypto('priceChange24hr'))}%`}
                            </p>
                        </div>
                    </div>
                    <div className='maindetailcont2 maindetailcont2--primary'>
                        <div className='maindetailsubcont2 maindetailsubcont2--marketcap'>
                            <h3 className='maindetailsubcont2__head'>
                                MARKET CAP
                            </h3>
                            <p className='maindetailsubcont2__text'>
                                {ReturnCrypto('market_cap') && newVol(ReturnCrypto('market_cap'))}
                            </p>
                        </div>
                        <div className='maindetailsubcont2 maindetailsubcont2--volume24hr'>
                            <h3 className='maindetailsubcont2__head'>
                                VOLUME 24H
                            </h3>
                            <p className='maindetailsubcont2__text'>
                                {ReturnCrypto('volume24hr') && newVol(ReturnCrypto('volume24hr'))}
                            </p>
                        </div>
                        <div className='maindetailsubcont2 maindetailsubcont2--totalsupply'>
                            <h3 className='maindetailsubcont2__head'>
                                TOTAL SUPPLY
                            </h3>
                            <p className='maindetailsubcont2__text'>
                                {ReturnCrypto('volume24hr') && ReturnCrypto('total_supply')}
                            </p>
                        </div>
                        <div className='maindetailsubcont2 maindetailsubcont2--circulatingsupply'>
                            <h3 className='maindetailsubcont2__head'>
                                CIRCULATING SUPPLY
                            </h3>
                            <p className='maindetailsubcont2__text'>
                                {ReturnCrypto('volume24hr') && ReturnCrypto('circulating_supply')}
                            </p>
                        </div>
                    </div>
                    <div className='maindetailcont3 maindetailcont3--primary'>
                        <div className='maindetailsubcont3 maindetailsubcont3--primary'>
                            {ReturnCrypto('links', 'blockchain_site') && ReturnCrypto('links', 'blockchain_site').map((item, i) => {
                                if(item) {
                                    return <a className='maindetailsubcont3__link' href={item} target='_blank' rel='noreferrer'>Blockchain Explorer {++i}</a>
                                }
                            })}
                        </div>
                    </div>
                </div>
                <div className='statsection statsection--primary'>
                    <CryptoChart ReturnCrypto={ReturnCrypto} formatPriceChange={format1DpriceChange} />
                    <div className='maindetailcont4 maindetailcont4--primary'>
                            <div className='maindetailsubcont4 maindetailsubcont4--primary'>
                                <h4 className='maindetailsubcont4__head'>
                                    {ReturnCrypto('symbol') && `${ReturnCrypto('symbol')} Price Statistics`}
                                </h4>
                                <table className='maindetailsubcont4__table'>
                                    <tbody>
                                    
                                        <tr className='maindetailsubcont4__tablerow'>
                                            <td className='maindetailsubcont4__tabledata1'>
                                                {ReturnCrypto('symbol') && ReturnCrypto('symbol')} Price
                                            </td>
                                            <td className='maindetailsubcont4__tabledata2'>
                                                {ReturnCrypto('current_price') && `$${newPrice(ReturnCrypto('current_price'))}`}
                                            </td>
                                        </tr>
                                        <tr className='maindetailsubcont4__tablerow'>
                                            <td className='maindetailsubcont4__tabledata1'>
                                                24H Low to High
                                            </td>
                                            <td className='maindetailsubcont4__tabledata2'>
                                                {ReturnCrypto('low_24hr') && ReturnCrypto('high_24hr') && `$${newPrice(ReturnCrypto('low_24hr'))} - $${newPrice(ReturnCrypto('high_24hr'))}`}
                                            </td>
                                        </tr>
                                        <tr className='maindetailsubcont4__tablerow'>
                                            <td className='maindetailsubcont4__tabledata1'>
                                                24H Spread Range
                                            </td>
                                            <td className='maindetailsubcont4__tabledata2'>
                                                {ReturnCrypto('low_24hr') && ReturnCrypto('high_24hr') &&
                                                `${((((ReturnCrypto('low_24hr') / ReturnCrypto('high_24hr')) - 1) * -100).toFixed(2))}%`
                                                }
                                            </td>
                                        </tr>
                                        <tr className='maindetailsubcont4__tablerow'>
                                            <td className='maindetailsubcont4__tabledata1'>
                                                All-Time High
                                            </td>
                                            <td className='maindetailsubcont4__tabledata2'>
                                                {ReturnCrypto('ath') && `$${newPrice(ReturnCrypto('ath'))}`}
                                            </td>
                                        </tr>
                                        <tr className='maindetailsubcont4__tablerow'>
                                            <td className='maindetailsubcont4__tabledata1'>
                                                All-Time Low
                                            </td>
                                            <td className='maindetailsubcont4__tabledata2'>
                                                {ReturnCrypto('atl') && `$${newPrice(ReturnCrypto('atl'))}`}
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className='maindetailsubcont4 maindetailsubcont4--primary'>
                                <h4 className='maindetailsubcont4__head'>
                                    {ReturnCrypto('symbol') && `${ReturnCrypto('symbol')} Market Cap Statistics`}
                                </h4>
                                <table className='maindetailsubcont4__table'>
                                    <tbody>
                                        <tr className='maindetailsubcont4__tablerow'>
                                            <td className='maindetailsubcont4__tabledata1'>
                                                Market Cap
                                            </td>
                                            <td className='maindetailsubcont4__tabledata2'>
                                            {ReturnCrypto('market_cap') && `$${ReturnCrypto('market_cap').toLocaleString('en')}`}
                                            </td>
                                        </tr>
                                        <tr className='maindetailsubcont4__tablerow'>
                                            <td className='maindetailsubcont4__tabledata1'>
                                                Trading Volume
                                            </td>
                                            <td className='maindetailsubcont4__tabledata2'>
                                                {ReturnCrypto('volume24hr') && `$${ReturnCrypto('volume24hr').toLocaleString('en')}`}
                                            </td>
                                        </tr>
                                        <tr className='maindetailsubcont4__tablerow'>
                                            <td className='maindetailsubcont4__tabledata1'>
                                                Volume to Market Cap 
                                            </td>
                                            <td className='maindetailsubcont4__tabledata2'>
                                                {ReturnCrypto('volume24hr') && ReturnCrypto('market_cap') && `${((ReturnCrypto('volume24hr') / ReturnCrypto('market_cap')) * 100).toFixed(2)}%`}
                                            </td>
                                        </tr>
                                        <tr className='maindetailsubcont4__tablerow'>
                                            <td className='maindetailsubcont4__tabledata1'>
                                                24H Market Cap
                                            </td>
                                            <td className='maindetailsubcont4__tabledata2'>
                                                {ReturnCrypto('marketcapChange24hr') && `${ReturnCrypto('marketcapChange24hr').toFixed(2)}%`}
                                            </td>
                                        </tr>
                                        <tr className='maindetailsubcont4__tablerow'>
                                            <td className='maindetailsubcont4__tabledata1'>
                                                Market Cap Rank
                                            </td>
                                            <td className='maindetailsubcont4__tabledata2'>
                                                {ReturnCrypto('market_cap_rank') && `#${ReturnCrypto('market_cap_rank')}`}
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                    </div>
                </div>
                <ExtraInfo 
                    formatPrice={newPrice} 
                    ReturnCrypto={ReturnCrypto}
                    formatSpread={format1DpriceChange}
                />
            </div>
            }
        </div>
    )
}

export default Crypto
