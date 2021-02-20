import {Link} from 'react-router-dom'
import './Footer.css'
import GithubWhiteIcon from '../../../images/GithubIconWhite.svg';
import LinkedInWhiteIcon from '../../../images/LinkedInWhite.svg';

const Footer = () => {
    return (
        <div className='footer footer--primary'>
            <div className='connectwithdev connectwithdev--primary'>
                <Link className='connectwithdev__aboutlink' to='/aboutus'>
                        About Us
                </Link>
                <p className='connectwithdev__text'>
                    Want to get in touch?
                </p>
                <div className='icons icons--primary'>
                    <a href='https://github.com/zeyf/' className='icons__link' target='_blank' rel='noreferrer'>
                        <img className='icons__icon' src={GithubWhiteIcon} alt='Github Icon' />
                    </a>
                    <a href='https://www.linkedin.com/in/zain-yousaf-fuentes-62353a156/' className='icons__link' target='_blank' rel='noreferrer'>
                        <img className='icons__icon' src={LinkedInWhiteIcon} alt='Github Icon' />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Footer
