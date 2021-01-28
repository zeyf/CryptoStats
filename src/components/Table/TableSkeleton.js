import React from 'react'
import 'Table.css'

const TableSkeleton = () => {

    const DefaultCount = () => {
        const RowList=[]
        for (let i=1; i < 26; i++) {
            RowList.push(i)
        }
        return RowList
    }

    const SkeletonType = (type) => {
        if (type === 'rank') {
            return <SkeletonTheme color='#cececf'>
                <Skeleton width={20} height={20}count={1}/>
                </SkeletonTheme>
        }
    }
    
    return (
        <div className='tablecomponent tablecomponent--primary'>
        <>
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
                {DefaultCount.map((item, i) => {
                        
                        return <tr className='table__row'>
                        <td className='tablebody__data tablebody__data--rank'>{LOADING ?  SkeletonType('rank'): rank}</td>
                        <td className='tablebody__data tablebody__data--name'>
                                <Link style={{textDecoration: 'none', margin: '0px', padding: '0px'}} to={setLinkParamByID(id)}>
                            <div className='table_'>
                                    <img src={icon} className='tablebody__nameimage' style={{height: '20px', width: '20px'}} />
                                <p className='s'>{name}<span>{` • ${symbol}`}</span></p>
                                
                            </div>
                            </Link>
                        </td>
                        <td className='tablebody__data tablebody__data--pricechange24h' style={setPriceColor(priceChange1d)}>{addDirectionalTriangle(priceChange1d)}{priceChange1d}%</td>
                        <td className='tablebody__data tablebody__data--price'>${newPrice(price)}</td>
                        <td className='tablebody__data tablebody__data--volume'>{newVol(volume)}</td>
                        
                        <td className='tablebody__data tablebody__data--sparkline'>
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
            
        <TablePagination />
    </div>
    )
}

export default TableSkeleton
