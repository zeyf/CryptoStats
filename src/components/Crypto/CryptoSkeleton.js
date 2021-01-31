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
                        <Skeleton width={125} height={25}count={1}/>
                    </SkeletonTheme>
        }
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
                        <div className='maindetailsubcont2 maindetailsubcont2--circulatingsupply'>
                            <h3 className='maindetailsubcont2__head'>
                                CIRCULATING SUPPLY
                            </h3>
                            <p className='maindetailsubcont2__text'>
                                {SkeletonType('circulating_supply')}
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
                    </div>
                </div>
            </div>
    )
}

export default CryptoSkeleton
