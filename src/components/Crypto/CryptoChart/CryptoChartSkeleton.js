import React from 'react'
import Skeleton, {SkeletonTheme} from 'react-loading-skeleton';


const CryptoChartSkeleton = () => {

    const SkeletonType = (type) => {
        if (type === 'chart') return <SkeletonTheme  color={'#cececf'}><Skeleton width={'100vw'} height={'100%'}></Skeleton></SkeletonTheme>
    }

    return (
        <div className='sparkline--primary'>
            {SkeletonType('chart')}
            <p style={{position: 'absolute'}}>Loading...</p>
        </div>
    )
}

export default CryptoChartSkeleton
