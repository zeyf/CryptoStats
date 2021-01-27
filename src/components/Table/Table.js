import React, {useEffect, useContext} from 'react'
import TableContext from '../context/TableContext/TableContext'
import Spinner from '../layout/Spinner/Spinner'
import {Sparklines} from 'react-sparklines';
import TableFunctions from '../../functions/table functions/TableFunctions'
import {Link} from 'react-router-dom'
import useSortableData from './useSortableData'
import TablePagination from './TablePagination'

const Table = () => {

    // UPPERCASE ONLY = STATE VALUES | NON UPPERCASE = FUNCTIONS //
    const {LOADING, CRYPTOS, SORTEDFIELD, CURRENTPAGE, POSTSPERPAGE, GetCryptos, setSortField} = useContext(TableContext);
    // "OUTSOURCING" functions on style and manipulation of general data representation for table data to keep a clean component
    const {newVol, newPrice, setPriceColor, setLinkParamByID} = TableFunctions;

    useEffect(() => {
        GetCryptos(CURRENTPAGE, POSTSPERPAGE);
        //eslint-disable-next-line
    }, [])

    const { items, requestSort } = useSortableData(CRYPTOS);
    return (
        <div>
            {LOADING ? <Spinner /> :<>
             <table>
                <thead>
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
                            <button style={{width: '100%'}} onClick={() => {requestSort('price')}}>
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
                    </tr>
                </thead>
                <tbody>
                    {items.map((item, i) => {
                            return <tr>
                            <td>{item.rank}</td>
                            <td>
                                <Link style={{textDecoration: 'none', margin: '0px', padding: '0px'}} to={setLinkParamByID(item.id)}>
                                    <img src={item.icon} style={{height: '20px', width: '20px'}} />
                                    {item.name}
                                    {` • ${item.symbol}`}
                                </Link>
                            </td>
                            <td style={setPriceColor(item.priceChange1d)}>{item.priceChange1d}</td>
                            <td>{newPrice(item.price)}</td>
                            <td>{item.priceBtc}</td>
                            <td>{newVol(item.volume)}</td>
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
