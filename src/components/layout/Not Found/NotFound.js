import {Link} from 'react-router-dom'
import './NotFound.css'
import NotFoundSVG from '../../../images/NotFound.svg'

const NotFound = () => {
    return (
        <div className='notfound notfound--primary'>

            <img src={NotFoundSVG} className='notfound__image' />
            <div className='notfoundinner notfoundinner--primary'>
                <h1 className='notfound__head'>
                    Page not found
                </h1>
                <p className='notfound__text'>
                    This page does not exist!
                </p>
                <Link to='/' className='notfound__link'>
                    <button className='notfound__button'>
                        BACK TO HOME
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default NotFound
