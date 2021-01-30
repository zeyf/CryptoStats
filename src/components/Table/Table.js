import React, {useEffect, useContext} from 'react'
import TableContext from '../context/TableContext/TableContext'
import {Sparklines, SparklinesLine, SparklinesSpots} from 'react-sparklines';
import FormatFunctions from '../../functions/Formatting Functions/FormatFunctions'
import {Link} from 'react-router-dom'
import Skeleton, {SkeletonTheme} from 'react-loading-skeleton'
import useSortableData from './useSortableData'
import TablePagination from './TablePagination'
import './Table.css'
import TableSkeleton from './TableSkeleton'

const Table = () => {

    // UPPERCASE ONLY = STATE VALUES | NON UPPERCASE = FUNCTIONS //
    const {
        LOADING,
        CRYPTOS,
        INITIALLOADING,
        CURRENTPAGE,
        ROWSPERPAGE,
        SORTEDFIELD,
        GetCryptos
    } = useContext(TableContext);
    // "OUTSOURCING" functions on style and manipulation of general data representation for table data to keep a clean component
    
    const { items, requestSort } = useSortableData(CRYPTOS);

    useEffect(() => {
        GetCryptos(CURRENTPAGE, ROWSPERPAGE);
        if (SORTEDFIELD) {
            requestSort('market_cap_rank');
            if (SORTEDFIELD.direction === 'descending') {
                requestSort('market_cap_rank');
            }
        }
        //eslint-disable-next-line
    }, [])
    
    const {
        newVol,
        newPrice,
        setPriceColor,
        setLinkParamByID,
        addDirectionalTriangle,
        setSparklineColor,
        format1DpriceChange,
        nameShortener
    } = FormatFunctions;
    
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
            <TablePagination />
            {!INITIALLOADING ? <TableSkeleton /> : <>
             <table className='table table--primary'>
                <thead className='table__head'>
                    <tr className='table__head__row'>
                        <th className='table__headcol table__headcol--rank'>
                            <button className='table__headcol__button' style={{width: '100%'}} onClick={() => {requestSort('market_cap_rank')}} >
                             #
                            </button>
                        </th>
                        <th className='table__headcol table__headcol--name'>
                            <button className='table__headcol__button table__headcol__button--name' style={{width: '100%'}} onClick={() => {requestSort('name')}}>
                                NAME
                            </button>
                        </th>
                        <th className='table__headcol table__headcol--pricechange24h'>
                            <button className='table__headcol__button' style={{width: '100%'}} onClick={() => {requestSort('price_change_percentage_7d_in_currency')}}>
                                24H CHANGE
                            </button>
                        </th>
                        <th className='table__headcol table__headcol--price'>
                            <button className='table__headcol__button' style={{width: '100%'}} onClick={() => {requestSort('current_price')}}>
                                PRICE
                            </button>
                        </th>
                        <th className='table__headcol table__headcol--volume'>
                            <button className='table__headcol__button' style={{width: '100%'}} onClick={() => {requestSort('total_volume')}}>
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
                            const {market_cap_rank, current_price, image, total_volume, symbol, name, price_change_percentage_7d_in_currency, id, sparkline_in_7d, priceChange7d_CG_USD, priceChange1w} = item;
                            return <tr className='table__row'>
                            <td className='tablebody__data tablebody__data--rank'>{LOADING ?  SkeletonType('rank'): market_cap_rank}</td>
                            <td className='tablebody__data tablebody__data--name'>
                                    <Link style={{textDecoration: 'none', margin: '0px', padding: '0px', color: 'black'}} to={setLinkParamByID(id)}>
                                <div className='table_'>
                                        {LOADING ? <span style={{margin: '0px 10px'}}>{SkeletonType('icon')}</span> : <img src={image} alt={`${name} | ${symbol.toUpperCase()} icon`} className='tablebody__nameimage' style={{height: '20px', width: '20px'}} />}
                                    <p className='s'>{LOADING ? SkeletonType('name') :`${nameShortener(name)} • ${symbol.toUpperCase()}`}</p>
                                </div>
                                </Link>
                            </td>
                            <td className='tablebody__data tablebody__data--pricechange24h' style={setPriceColor(price_change_percentage_7d_in_currency)}>{LOADING ? SkeletonType('priceChange1d'): `${addDirectionalTriangle(price_change_percentage_7d_in_currency)}${format1DpriceChange(price_change_percentage_7d_in_currency)}%`}</td>
                            <td className='tablebody__data tablebody__data--price'>{LOADING ? SkeletonType('price') : `$${newPrice(current_price)}`}</td>
                            <td className='tablebody__data tablebody__data--volume'>{LOADING ? SkeletonType('24hvolume') : `${newVol(total_volume)}`}</td>
                            
                            <td className='tablebody__data tablebody__data--sparkline'>
                                {LOADING ? SkeletonType('sparklinesvg'): <Link style={{textDecoration: 'none', margin: '0px', padding: '0px'}} to={setLinkParamByID(id)}>
                                    <Sparklines data={sparkline_in_7d.price} width={250} height={100}>
                                        <SparklinesLine style={{fill: 'none'}} color={setSparklineColor(price_change_percentage_7d_in_currency)} />
                                    </Sparklines>
                                </Link>}
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
