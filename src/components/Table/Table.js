import React, {useEffect, useContext} from 'react'
import TableContext from '../context/TableContext/TableContext'
import Spinner from '../layout/Spinner/Spinner'
import {Sparklines, SparklinesLine} from 'react-sparklines';
import TableFunctions from '../../functions/table functions/TableFunctions'
import {Link} from 'react-router-dom'
import useSortableData from './useSortableData'
import TablePagination from './TablePagination'
import './Table.css'

const Table = () => {

    // UPPERCASE ONLY = STATE VALUES | NON UPPERCASE = FUNCTIONS //
    const {LOADING, CRYPTOS, SORTEDFIELD, CURRENTPAGE, POSTSPERPAGE, GetCryptos, setSortField} = useContext(TableContext);
    // "OUTSOURCING" functions on style and manipulation of general data representation for table data to keep a clean component
    const {newVol, newPrice, setPriceColor, setLinkParamByID, addDirectionalTriangle, setSparklineColor} = TableFunctions;

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
                        <th className='table__headcol'>
                            <button style={{width: '100%'}} onClick={() => {requestSort('rank')}} >
                             #
                            </button>
                        </th>
                        <th className='table__headcol'>
                            <button style={{width: '100%'}} onClick={() => {requestSort('name')}}>
                                NAME
                            </button>
                        </th>
                        <th className='table__headcol'>
                            <button style={{width: '100%'}} onClick={() => {requestSort('priceChange1d')}}>
                                24H CHANGE
                            </button>
                        </th>
                        <th className='table__headcol'>
                            <button style={{width: '100%'}} onClick={() => {requestSort('priceBtc')}}>
                                PRICE
                            </button>
                        </th>
                        <th className='table__headcol'>
                            <button style={{width: '100%'}} onClick={() => {requestSort('priceBtc')}}>
                                PRICE IN BTC
                            </button>
                        </th>
                        <th className='table__headcol'>
                            <button style={{width: '100%'}} onClick={() => {requestSort('volume')}}>
                                24H VOLUME
                            </button>
                        </th>
                        <th className='table__headcol'>
                            PRICE 7D
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {items.map((item, i) => {
                            const {rank, price, icon, id, volume, symbol, name, priceChange1d, priceBtc, sparklinedata, priceChange7d_CG_USD, priceChange1w} = item;
                            return <tr>
                            <td className='tablebody__data'>{rank}</td>
                            <td className='tablebody__data tablebody__data--name'>
                                    <Link style={{textDecoration: 'none', margin: '0px', padding: '0px'}} to={setLinkParamByID(id)}>
                                <div className='table_'>
                                    <img src={icon} className='tablebody__name' style={{height: '20px', width: '20px'}} />
                                    {name}
                                    {` • ${symbol}`}
                                </div>
                                </Link>
                            </td>
                            <td className='tablebody__data' style={setPriceColor(priceChange1d)}>{addDirectionalTriangle(priceChange1d)}{priceChange1d}%</td>
                            <td className='tablebody__data'>${newPrice(price)}</td>
                            <td className='tablebody__data'>{priceBtc}</td>
                            <td className='tablebody__data'>{newVol(volume)}</td>
                            
                            <td className='tablebody__data'>
                                <Link style={{textDecoration: 'none', margin: '0px', padding: '0px'}} to={setLinkParamByID(id)}>
                                    <Sparklines data={sparklinedata} width={250} height={100}>
                                        <SparklinesLine style={{fill: 'none'}} color={setSparklineColor(priceChange1w)} />
                                    </Sparklines>
                                </Link>
                            </td>
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
