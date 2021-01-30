import React, {useEffect, useContext} from 'react'
import { mockComponent } from 'react-dom/test-utils'
import CryptoContext from '../context/CryptoContext/CryptoContext'
import Loader from '../layout/Loader/Loader'

const Crypto = ({match}) => {

    const {GetCrypto, LOADING, CRYPTO} = useContext(CryptoContext);
    
        useEffect(() => {
            GetCrypto(match.params.CryptoID);
        }, [])

        const ReturnCrypto = (type, subtype) => {
            if (CRYPTO) {
                
                const {name, id, image, symbol, market_cap_rank, market_data, genesis_date, description, categories, links} = CRYPTO;

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
                    tickers,
                    sparkline_7d,
                    ath,
                    ath_date

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
                    return symbol
                } else if (type === 'market_cap_rank') {
                    return market_cap_rank
                } else if (type === 'circulating_supply') {
                    return circulating_supply
                } else if (type === 'ath') {
                    return ath.usd
                } else if (type === 'ath_date') {
                    return ath_date.usd
                }
                 else if (type === 'max_supply') {
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
                } else if (type === 'volume') {
                    return total_volume.usd
                } else if (type === 'total_supply') {
                    return total_supply
                } else if (type === 'tickers') {
                    return tickers
                } else if (type === 'sparkline') {
                    return sparkline_7d
                } else if (type === 'links') {
                    if (subtype === 'blockchain_site') {
                        
                        const Filtering = blockchain_site.filter((item, i) => {
                            if (item.match(/etherscan/gi)) {
                                return item
                            } else if (item.match(/blockchain/gi)) {
                                return item
                            }
                        })

                        return Filtering[0]

                    } else if (subtype === 'homepage') {
                        return homepage[0]
                    }
                }
            }
        }
        return (
        
        <div>
            {LOADING ? 'd' :

            <>
                <div className='maindetails maindetails--primary'>
                    <img className='maindetails__image' src={ReturnCrypto('image')} />
                </div>
            {ReturnCrypto('name')} |
            {ReturnCrypto('symbol')} |
            {ReturnCrypto('market_cap_rank')} |
            {ReturnCrypto('circulating_supply')} |
            {ReturnCrypto('genesis_date')} |
            {ReturnCrypto('categories')} |
            {ReturnCrypto('current_price')} | 
            {ReturnCrypto('marketcapChange24hr')} |
            {ReturnCrypto('priceChange1hr')} |
            {ReturnCrypto('priceChange24hr')} |
            {ReturnCrypto('priceChange7d')} |
            {ReturnCrypto('priceChange14d')} |
            {ReturnCrypto('priceChange30d')} |
            {ReturnCrypto('volume')} |
            {ReturnCrypto('total_supply')} |
            </>
            }
        </div>
    )
}

export default Crypto
