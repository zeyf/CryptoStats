import React, {useEffect, useContext} from 'react'
import TableContext from '../context/TableContext/TableContext'
import Spinner from '../layout/Spinner/Spinner'
import {Sparklines} from 'react-sparklines';
import TableFunctions from '../../functions/table functions/TableFunctions'
import {Link} from 'react-router-dom'
import useSortableData from './useSortableData'
import TablePagination from './TablePagination'
import './Table.css'

const Table = () => {

    // UPPERCASE ONLY = STATE VALUES | NON UPPERCASE = FUNCTIONS //
    const {LOADING, CRYPTOS, SORTEDFIELD, CURRENTPAGE, POSTSPERPAGE, GetCryptos, setSortField} = useContext(TableContext);
    // "OUTSOURCING" functions on style and manipulation of general data representation for table data to keep a clean component
    const {newVol, newPrice, setPriceColor, setLinkParamByID, addDirectionalTriangle} = TableFunctions;

    useEffect(() => {
        GetCryptos(CURRENTPAGE, POSTSPERPAGE);
        //eslint-disable-next-line
    }, [])

    const { items, requestSort } = useSortableData(CRYPTOS);
    return (
        <div className='tablecomponent tablecomponent--primary'>
            {LOADING ? <Spinner /> :<>
             <table className='table table--primary'>
                <thead className='table__head'>
                    <tr>
                        <th><button style={{width: '100%'}} onClick={() => {requestSort('rank')}} >
                             #
                            </button>
                        </th>
                        <th>
                            <button style={{width: '100%'}} onClick={() => {requestSort('name')}}>
                                NAME
                            </button>
                        </th>
                        <th>
                            <button style={{width: '100%'}} onClick={() => {requestSort('priceChange1d')}}>
                                24H CHANGE
                            </button>
                        </th>
                        <th>
                            <button style={{width: '100%'}} onClick={() => {requestSort('priceBtc')}}>
                                PRICE
                            </button>
                        </th>
                        <th>
                            <button style={{width: '100%'}} onClick={() => {requestSort('priceBtc')}}>
                                PRICE IN BTC
                            </button>
                        </th>
                        <th>
                            <button style={{width: '100%'}} onClick={() => {requestSort('volume')}}>
                                24H VOLUME
                            </button>
                        </th>
                        <th>
                            PRICE 7D
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {items.map((item, i) => {
                            const {rank, price, icon, id, volume, symbol, name, priceChange1d, priceBtc} = item;
                            return <tr>
                            <td>{rank}</td>
                            <td>
                                <Link style={{textDecoration: 'none', margin: '0px', padding: '0px'}} to={setLinkParamByID(id)}>
                                    <img src={icon} style={{height: '20px', width: '20px'}} />
                                    {name}
                                    {` • ${symbol}`}
                                </Link>
                            </td>
                            <td style={setPriceColor(priceChange1d)}>{addDirectionalTriangle(priceChange1d)}{priceChange1d}%</td>
                            <td>{newPrice(price)}</td>
                            <td>{priceBtc}</td>
                            <td>{newVol(volume)}</td>

                        </tr>
                    })}
                </tbody>
                </table>
            </>
                }
            <TablePagination />
        </div>
    )
}
export default Table
