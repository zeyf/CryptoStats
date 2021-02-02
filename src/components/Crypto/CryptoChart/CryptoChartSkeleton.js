import React from 'react'
import Skeleton, {SkeletonTheme} from 'react-loading-skeleton';


const CryptoChartSkeleton = () => {

    const SkeletonType = (type) => {
        if (type === 'chart') return <SkeletonTheme  color={'#cececf'}><Skeleton height={'16vh'} width={'100%'}></Skeleton></SkeletonTheme>
    }

    return (
        <div className='sparkline sparkline--primary'>
            {SkeletonType('chart')}
        </div>
    )
}

export default CryptoChartSkeleton
