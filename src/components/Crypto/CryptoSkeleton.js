import React from 'react'
import Skeleton, {SkeletonTheme} from 'react-loading-skeleton';

const CryptoSkeleton = () => {

    const SkeletonType = (type) => {
        if (type === 'rank') {
            return <SkeletonTheme color='#cececf'>
                <Skeleton circle={false} width={40} height={30}count={1}/>
                </SkeletonTheme>
        } else if (type === 'image') {
            return <SkeletonTheme color='#cececf'>
                <Skeleton circle={true} width={40} height={40}count={1}/>
                </SkeletonTheme>
        } else if (type === 'name') {
            return <SkeletonTheme color='#cececf'>
                <Skeleton  width={150} height={30}count={1}/>
                </SkeletonTheme>
        } else if (type === 'price') {
            return <SkeletonTheme color='#cececf'>
                <Skeleton width={100} height={30}count={1}/>
                </SkeletonTheme>
        } else if (type === 'priceChange1d') {
            return <SkeletonTheme color='#cececf'>
                <Skeleton width={75} height={30}count={1}/>
                </SkeletonTheme>
        } else if (type === 'market_cap' || type === 'circulating_supply' ||
                    type === 'total_supply' || type === 'volume24hr') {

            return  <SkeletonTheme color='#cececf'>
                        <Skeleton width={125} height={25} count={1} margin={{top: 5, bottom: 5, left: 5, right: 5}} />
                    </SkeletonTheme>
        } else if (type === 'explorers') {
            return <SkeletonTheme color='#cececf'>
                <Skeleton width={175} height={50}count={1}/>
                </SkeletonTheme>
        } else if (type === 'cryptochart') {
            return <SkeletonTheme color='#cececf'>
                <Skeleton  count={1}/>
                </SkeletonTheme> // SEE IF IT WORKS
        } else if (type === 'priceChangeOfTimeFrames') {
            return <SkeletonTheme color='#cececf'>
                <Skeleton width={50} height={25} count={1}/>
                </SkeletonTheme>
        } else if (type === 'TableSectionHead') {
            return <SkeletonTheme color='#cececf'>
                <Skeleton width={200} height={35} count={1}/>
                </SkeletonTheme>
        } else if (type === 'symbol') {
            return <SkeletonTheme color='#cececf'>
                <Skeleton width={100} height={25} count={1}/>
                </SkeletonTheme>
        } else if (type === 'tabledatasmall') {
            return <SkeletonTheme color='#cececf'>
                <Skeleton width={150} height={25} count={1}/>
                </SkeletonTheme>
        }
    }

    const TickersToShowArr = (number) => {
        const array = []
        for (let i=1; i < number; i++) {
            array.push(i)
        }
        return array
    }

    return (
        <div className='cryptoinfo cryptoinfo--primary'>
                <div className='maindetails maindetails--primary'>
                    <div className='maindetailcont1 maindetailcont1--primary'>
                        <div className='maindetailsubcont1 maindetailsubcont1--primary'>
                            <span style={{margin: '0px 10px 0px 0px'}}>{SkeletonType('image')}</span>
                            <h1 className='maindetailsubcont1__name'>
                                {SkeletonType('name')}
                            </h1>
                            <p className='maindetailsubcont1__rank' style={{backgroundColor: 'transparent'}}>
                                {SkeletonType('rank')}
                            </p>
                        </div>
                        <div className='maindetailsubcont1 maindetailsubcont1--secondary'>
                            <h2 className='maindetailsubcont1__price'>
                                {SkeletonType('price')}
                            </h2>
                            <p className='maindetailsubcont1__priceChange24hr'>
                                {SkeletonType('priceChange1d')}
                            </p>
                        </div>
                    </div>
                    <div className='maindetailcont2--primary'>
                        <div className='maindetailsubcont2 maindetailsubcont2--marketcap'>
                            <h3 className='maindetailsubcont2__head'>
                                MARKET CAP
                            </h3>
                            <p className='maindetailsubcont2__text'>
                                {SkeletonType('market_cap')}
                            </p>
                        </div>
                        <div className='maindetailsubcont2 maindetailsubcont2--volume24hr'>
                            <h3 className='maindetailsubcont2__head'>
                                VOLUME 24H
                            </h3>
                            <p className='maindetailsubcont2__text'>
                                {SkeletonType('volume24hr')}
                            </p>
                        </div>
                        <div className='maindetailsubcont2 maindetailsubcont2--totalsupply'>
                            <h3 className='maindetailsubcont2__head'>
                                TOTAL SUPPLY
                            </h3>
                            <p className='maindetailsubcont2__text'>
                                {SkeletonType('total_supply')}
                            </p>
                        </div>
                        <div className='maindetailsubcont2 maindetailsubcont2--circulatingsupply'>
                            <h3 className='maindetailsubcont2__head'>
                                CIRCULATING SUPPLY
                            </h3>
                            <p className='maindetailsubcont2__text'>
                                {SkeletonType('circulating_supply')}
                            </p>
                        </div>
                    </div>
                    <div className='maindetailcont3 maindetailcont3--primary'>
                        <div className='maindetailsubcont3 maindetailsubcont3--primary'>
                            {SkeletonType('explorers')}
                            {SkeletonType('explorers')}
                            {SkeletonType('explorers')}
                            {SkeletonType('explorers')}
                        </div>
                    </div>
                </div>
                <div className='statsection statsection--primary'>
                    <div className='cryptochart cryptochart--primary'>
                        <div className='sparkline sparkline--primary'>

                            <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                                {SkeletonType('cryptochart')}
                            </div>
                            
                        </div>
                        <div className='sparklinebuttons sparklinesbuttons--primary'>
                            <button className='sparklinebuttons__button'>
                                1D
                            </button>
                            <button className='sparklinebuttons__button'>
                                7D
                            </button>
                            <button className='sparklinebuttons__button'>
                                14D
                            </button>
                            <button className='sparklinebuttons__button'>
                                30D
                            </button>
                        </div>
                        <div className='pricechanges pricechanges--primary'>
                                <table className='pricechangetable pricechangetable--primary'>
                                    <tr>
                                        <td className='pricechangetable__data'>{SkeletonType('priceChangeOfTimeFrames')}</td>
                                        <td className='pricechangetable__data'>{SkeletonType('priceChangeOfTimeFrames')}</td>
                                        <td className='pricechangetable__data'>{SkeletonType('priceChangeOfTimeFrames')}</td>
                                        <td className='pricechangetable__data'>{SkeletonType('priceChangeOfTimeFrames')}</td>
                                    </tr>
                                </table>
                        </div>
                    </div>
                    <div className='maindetailcont4 maindetailcont4--primary'>
                            <div className='maindetailsubcont4 maindetailsubcont4--primary'>
                                <h4 className='maindetailsubcont4__head'>
                                    {SkeletonType('TableSectionHead')}
                                </h4>
                                <table className='maindetailsubcont4__table'>
                                    <tbody>
                                    
                                        <tr className='maindetailsubcont4__tablerow'>
                                            <td className='maindetailsubcont4__tabledata1'>
                                                {SkeletonType('symbol')}
                                            </td>
                                            <td className='maindetailsubcont4__tabledata2'>
                                                {SkeletonType('tabledatasmall')}
                                            </td>
                                        </tr>
                                        <tr className='maindetailsubcont4__tablerow'>
                                            <td className='maindetailsubcont4__tabledata1'>
                                                24H Low to High
                                            </td>
                                            <td className='maindetailsubcont4__tabledata2'>
                                                {SkeletonType('tabledatasmall')}
                                            </td>
                                        </tr>
                                        <tr className='maindetailsubcont4__tablerow'>
                                            <td className='maindetailsubcont4__tabledata1'>
                                                24H Spread Range
                                            </td>
                                            <td className='maindetailsubcont4__tabledata2'>
                                                {SkeletonType('tabledatasmall')}
                                            </td>
                                        </tr>
                                        <tr className='maindetailsubcont4__tablerow'>
                                            <td className='maindetailsubcont4__tabledata1'>
                                                All-Time High
                                            </td>
                                            <td className='maindetailsubcont4__tabledata2'>
                                                {SkeletonType('tabledatasmall')}
                                            </td>
                                        </tr>
                                        <tr className='maindetailsubcont4__tablerow'>
                                            <td className='maindetailsubcont4__tabledata1'>
                                                All-Time Low
                                            </td>
                                            <td className='maindetailsubcont4__tabledata2'>
                                                {SkeletonType('tabledatasmall')}
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className='maindetailsubcont4 maindetailsubcont4--primary'>
                                <h4 className='maindetailsubcont4__head'>
                                    {SkeletonType('TableSectionHead')}
                                </h4>
                                <table className='maindetailsubcont4__table'>
                                    <tbody>
                                        <tr className='maindetailsubcont4__tablerow'>
                                            <td className='maindetailsubcont4__tabledata1'>
                                                Market Cap
                                            </td>
                                            <td className='maindetailsubcont4__tabledata2'>
                                                {SkeletonType('tabledatasmall')}
                                            </td>
                                        </tr>
                                        <tr className='maindetailsubcont4__tablerow'>
                                            <td className='maindetailsubcont4__tabledata1'>
                                                Trading Volume
                                            </td>
                                            <td className='maindetailsubcont4__tabledata2'>
                                                {SkeletonType('tabledatasmall')}
                                            </td>
                                        </tr>
                                        <tr className='maindetailsubcont4__tablerow'>
                                            <td className='maindetailsubcont4__tabledata1'>
                                                Volume to Market Cap 
                                            </td>
                                            <td className='maindetailsubcont4__tabledata2'>
                                                {SkeletonType('tabledatasmall')}
                                            </td>
                                        </tr>
                                        <tr className='maindetailsubcont4__tablerow'>
                                            <td className='maindetailsubcont4__tabledata1'>
                                                24H Market Cap
                                            </td>
                                            <td className='maindetailsubcont4__tabledata2'>
                                                {SkeletonType('tabledatasmall')}
                                            </td>
                                        </tr>
                                        <tr className='maindetailsubcont4__tablerow'>
                                            <td className='maindetailsubcont4__tabledata1'>
                                                Market Cap Rank
                                            </td>
                                            <td className='maindetailsubcont4__tabledata2'>
                                                {SkeletonType('tabledatasmall')}
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                    </div>
                </div>
                <div className='extrainfo extrainfo--primary'>
                    <div className='tickers tickers--primary'>
                        <h4 className='tickers__head'>
                            {SkeletonType('TableSectionHead')}
                        </h4>
                        <div className='tickers__scrollable'>
                            <table className='tickers__table'>
                                <thead className='tickers_thead'>
                                    <tr className='tickers_headrow'>
                                        <th className='tickers__headcol'>
                                            <button className='tickers__headcolbutton'>
                                                EXCHANGE
                                            </button>
                                        </th>
                                        <th className='tickers__headcol'>
                                            <button className='tickers__headcolbutton'>
                                                PAIR
                                            </button>
                                        </th>
                                        <th className='tickers__headcol'>
                                            <button className='tickers__headcolbutton'>
                                                PRICE
                                            </button>
                                        </th>
                                        <th className='tickers__headcol'>
                                            <button className='tickers__headcolbutton'>
                                                SPREAD
                                            </button>
                                        </th>
                                        <th className='tickers__headcol'>
                                            <button className='tickers__headcolbutton'>
                                                24H VOLUME
                                            </button>
                                        </th>
                                    </tr>
                                </thead>
                                {TickersToShowArr(5).map((ticker, i) => {

                                        return  <tr className='tickers__row'>
                                                <td className='tickers__dataexchange'>
                                                    {SkeletonType('tabledatasmall')}    
                                                </td>
                                                <td className='tickers__data'>
                                                    {SkeletonType('tabledatasmall')}
                                                </td>
                                                <td className='tickers__data'>
                                                    {SkeletonType('tabledatasmall')}
                                                </td>
                                                <td className='tickers__data'>
                                                    {SkeletonType('tabledatasmall')}
                                                </td>
                                                <td className='tickers__data'>
                                                    {SkeletonType('tabledatasmall')}
                                                </td>
                                            </tr>
                                })}
                            </table>
                        </div>

                    </div>
                </div>
            </div>
    )
}

export default CryptoSkeleton
