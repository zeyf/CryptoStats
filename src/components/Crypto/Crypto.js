import React, {useEffect, useContext} from 'react'
import { mockComponent } from 'react-dom/test-utils'
import CryptoContext from '../context/CryptoContext/CryptoContext'
import Loader from '../layout/Loader/Loader'

const Crypto = ({match}) => {

    const {GetCrypto, LOADING, CRYPTO} = useContext(CryptoContext);

    useEffect(() => {
        GetCrypto(match.params.CryptoID);
    }, [])

    return (
        <div>
            <h1>
                {console.log(CRYPTO)}
            </h1>
            <img src={CRYPTO && CRYPTO.image.small} />
        </div>
    )
}

export default Crypto
