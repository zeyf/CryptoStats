import React from 'react'
import loader from '../../../images/loaderchart.svg'

const Spinner = () => {
    return (
        <div style={{width: '50%', height: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            <img style={{width: '50%', height: '50%'}} src={loader} alt='loading spinner' />
        </div>
    )
}

export default Spinner
