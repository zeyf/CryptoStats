import React, {useEffect, useContext} from 'react'
import TableContext from '../context/TableContext/TableContext'
import Spinner from '../layout/Spinner/Spinner'
import {Sparklines} from 'react-sparklines';
import TableFunctions from '../../functions/table functions/TableFunctions'
import {Link} from 'react-router-dom'

const Table = () => {
    const tableContext = useContext(TableContext);
    const {LOADING, CRYPTOS, GetCryptos} = tableContext;
    const {newVol, newPrice, setPriceColor, setLinkParamByID} = TableFunctions;

    useEffect(() => {
        GetCryptos();
        //eslint-disable-next-line
    }, [])
    return (
        <div>
            
            {LOADING ? <Spinner /> : <table>
                
                <thead>
                    <tr>
                        <th>#</th>
                        <th>NAME</th>
                        <th>24H CHANGE</th>
                        <th>PRICE</th>
                        <th>PRICE IN BTC</th>
                        <th>24H VOLUME</th>
                    </tr>
                </thead>
                <tbody>
                    {CRYPTOS.map((item, i) => {
                        return <tr>
                            <td>{item.rank}</td>
                            <td>
                                <Link style={{textDecoration: 'none', margin: '0px', padding: '0px'}} to={setLinkParamByID(item.id)}>
                                    <img src={item.icon} style={{height: '20px', width: '20px'}} />
                                    {item.name}
                                </Link>
                            </td>
                            <td style={setPriceColor(item.priceChange1d)}>{item.priceChange1d}</td>
                            <td>{newPrice(item.price)}</td>
                            <td>{item.priceBtc}</td>
                            <td>{newVol(item.volume)}</td>
                        </tr>
                    })}
                </tbody>
                </table>}
        </div>
    )
}

export default Table
