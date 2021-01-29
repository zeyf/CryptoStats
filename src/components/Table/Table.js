import React, {useEffect, useContext} from 'react'
import TableContext from '../context/TableContext/TableContext'
import {Sparklines, SparklinesLine, SparklinesSpots} from 'react-sparklines';
import TableFunctions from '../../functions/table functions/TableFunctions'
import {Link} from 'react-router-dom'
import Skeleton, {SkeletonTheme} from 'react-loading-skeleton'
import useSortableData from './useSortableData'
import TablePagination from './TablePagination'
import './Table.css'
import TableSkeleton from './TableSkeleton'

const Table = () => {

    // UPPERCASE ONLY = STATE VALUES | NON UPPERCASE = FUNCTIONS //
    const {LOADING, CRYPTOS, INITIALLOADING, CURRENTPAGE, ROWSPERPAGE, GetCryptos} = useContext(TableContext);
    // "OUTSOURCING" functions on style and manipulation of general data representation for table data to keep a clean component
    const {newVol, newPrice, setPriceColor, setLinkParamByID, addDirectionalTriangle, setSparklineColor, format1DpriceChange} = TableFunctions;

    useEffect(() => {
        GetCryptos(CURRENTPAGE, ROWSPERPAGE);
        //eslint-disable-next-line
    }, [])

    const { items, requestSort } = useSortableData(CRYPTOS);

    const SkeletonType = (type) => {
        if (type === 'rank') {
            return <SkeletonTheme color='#cececf'>
                <Skeleton circle={true} width={20} height={20}count={1}/>
                </SkeletonTheme>
        } else if (type === 'icon') {
            return <SkeletonTheme color='#cececf'>
                <Skeleton circle={true} width={20} height={20}count={1}/>
                </SkeletonTheme>
        } else if (type === 'name') {
            return <SkeletonTheme color='#cececf'>
                <Skeleton  width={225} height={20}count={1}/>
                </SkeletonTheme>
        } else if (type === 'price') {
            return <SkeletonTheme color='#cececf'>
                <Skeleton width={50} height={20}count={1}/>
                </SkeletonTheme>
        } else if (type === 'priceChange1d') {
            return <SkeletonTheme color='#cececf'>
                <Skeleton width={50} height={20}count={1}/>
                </SkeletonTheme>
        } else if (type === '24hvolume') {
            return <SkeletonTheme color='#cececf'>
                <Skeleton width={50} height={20}count={1}/>
                </SkeletonTheme>
        } else if (type === 'sparklinesvg') {
            return <SkeletonTheme color='#cececf'>
                <Skeleton width={150} height={50}count={1}/>
                </SkeletonTheme>
        }
    }

    return (
        
        <div className='tablecomponent tablecomponent--primary'>
            <TablePagination ShowRowsPerPage='NO' />
            {!INITIALLOADING ? <TableSkeleton /> : <>
             <table className='table table--primary'>
                <thead className='table__head'>
                    <tr className='table__head__row'>
                        <th className='table__headcol table__headcol--rank'>
                            <button className='table__headcol__button' style={{width: '100%'}} onClick={() => {requestSort('rank')}} >
                             #
                            </button>
                        </th>
                        <th className='table__headcol table__headcol--name'>
                            <button className='table__headcol__button' style={{width: '100%'}} onClick={() => {requestSort('name')}}>
                                NAME
                            </button>
                        </th>
                        <th className='table__headcol table__headcol--pricechange24h'>
                            <button className='table__headcol__button' style={{width: '100%'}} onClick={() => {requestSort('priceChange1d')}}>
                                24H CHANGE
                            </button>
                        </th>
                        <th className='table__headcol table__headcol--price'>
                            <button className='table__headcol__button' style={{width: '100%'}} onClick={() => {requestSort('price')}}>
                                PRICE
                            </button>
                        </th>
                        <th className='table__headcol table__headcol--volume'>
                            <button className='table__headcol__button' style={{width: '100%'}} onClick={() => {requestSort('volume')}}>
                                24H VOLUME
                            </button>
                        </th>
                        <th className='table__headcol table__headcol--sparkline'>
                            PRICE 7D
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {items.map((item, i) => {
                            const {rank, price, icon, id, volume, symbol, name, priceChange1d, priceBtc, sparklinedata, priceChange7d_CG_USD, priceChange1w} = item;
                            return <tr className='table__row'>
                            <td className='tablebody__data tablebody__data--rank'>{LOADING ?  SkeletonType('rank'): rank}</td>
                            <td className='tablebody__data tablebody__data--name'>
                                    <Link style={{textDecoration: 'none', margin: '0px', padding: '0px'}} to={setLinkParamByID(id)}>
                                <div className='table_'>
                                        {LOADING ? <span style={{margin: '0px 10px'}}>{SkeletonType('icon')}</span> : <img src={icon} alt={`${name} | ${symbol} icon`} className='tablebody__nameimage' style={{height: '20px', width: '20px'}} />}
                                    <p className='s'>{LOADING ? SkeletonType('name') :`${name} • ${symbol}`}</p>
                                    
                                </div>
                                </Link>
                            </td>
                            <td className='tablebody__data tablebody__data--pricechange24h' style={setPriceColor(priceChange1d)}>{LOADING ? SkeletonType('priceChange1d'): `${addDirectionalTriangle(priceChange1d)}${format1DpriceChange(priceChange1d)}%`}</td>
                            <td className='tablebody__data tablebody__data--price'>{LOADING ? SkeletonType('price') : `$${newPrice(price)}`}</td>
                            <td className='tablebody__data tablebody__data--volume'>{LOADING ? SkeletonType('24hvolume') : `${newVol(volume)}`}</td>
                            
                            <td className='tablebody__data tablebody__data--sparkline'>
                                {LOADING ? SkeletonType('sparklinesvg'): <Link style={{textDecoration: 'none', margin: '0px', padding: '0px'}} to={setLinkParamByID(id)}>
                                    <Sparklines data={sparklinedata} width={250} height={100}>
                                        <SparklinesLine style={{fill: 'none'}} color={setSparklineColor(priceChange7d_CG_USD)} />
                                    </Sparklines>
                                </Link>}
                            </td>
                        </tr>
                
                    })}
                </tbody>
                </table>
            </>}
            <TablePagination ShowRowsPerPage='YES' />
        </div>
    )
}
export default Table
