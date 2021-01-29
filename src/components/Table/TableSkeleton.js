import {useContext} from 'react'
import './Table.css'
import Skeleton, {SkeletonTheme} from 'react-loading-skeleton'
import {Link} from 'react-router-dom'
import useSortableData from './useSortableData'
import TableContext from '../context/TableContext/TableContext'


const TableSkeleton = () => {
    

    const { POSTSPERPAGE } = useContext(TableContext);
    //default postsperpage is 25. now it will be able to adjusted based posts per page.

    const DefaultCount = () => {
        const RowList=[]
        for (let i=1; i < (POSTSPERPAGE + 1); i++) {
            RowList.push(i)
        }
        return RowList
    }

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
            <>
             <table className='table table--primary'>
                <thead className='table__head'>
                    <tr className='table__head__row'>
                        <th className='table__headcol table__headcol--rank'>
                            <button className='table__headcol__button' style={{width: '100%'}}>
                             #
                            </button>
                        </th>
                        <th className='table__headcol table__headcol--name'>
                            <button className='table__headcol__button' style={{width: '100%'}}>
                                NAME
                            </button>
                        </th>
                        <th className='table__headcol table__headcol--pricechange24h'>
                            <button className='table__headcol__button' style={{width: '100%'}}>
                                24H CHANGE
                            </button>
                        </th>
                        <th className='table__headcol table__headcol--price'>
                            <button className='table__headcol__button' style={{width: '100%'}}>
                                PRICE
                            </button>
                        </th>
                        <th className='table__headcol table__headcol--volume'>
                            <button className='table__headcol__button' style={{width: '100%'}}>
                                24H VOLUME
                            </button>
                        </th>
                        <th className='table__headcol table__headcol--sparkline'>
                            PRICE 7D
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {DefaultCount().map((item, i) => {
                            return <tr className='table__row'>
                            <td className='tablebody__data tablebody__data--rank'>{SkeletonType('rank')}</td>
                            <td className='tablebody__data tablebody__data--name'>
                                    <Link style={{textDecoration: 'none', margin: '0px', padding: '0px'}} to={``}>
                                <div className='table_'>
                                        {<span style={{margin: '0px 10px'}}>{SkeletonType('icon')}</span>}
                                    <p className='s'>{SkeletonType('name')}</p>
                                    
                                </div>
                                </Link>
                            </td>
                            <td className='tablebody__data tablebody__data--pricechange24h'>{SkeletonType('priceChange1d')}</td>
                            <td className='tablebody__data tablebody__data--price'>{SkeletonType('price')}</td>
                            <td className='tablebody__data tablebody__data--volume'>{SkeletonType('24hvolume')}</td>
                            
                            <td className='tablebody__data tablebody__data--sparkline'>
                                {SkeletonType('sparklinesvg')}
                            </td>
                        </tr>
                
                    })}
                </tbody>
                </table>
            </>
    )
}

export default TableSkeleton
