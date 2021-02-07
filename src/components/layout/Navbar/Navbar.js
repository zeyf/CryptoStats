import {useState, useContext, useEffect} from 'react'
import './Navbar.css'
import {Link} from 'react-router-dom'
import MenuIcon from '../../../images/MobileMenuIcon.svg'
import XIcon from '../../../images/XCloseIcon.svg'
import CryptoContext from '../../context/CryptoContext/CryptoContext';
import axios from 'axios';


const Navbar = () => {

    const [showMenu, setShowMenu] = useState(false)
    const [searchedCrypto, setSearchedCrypto] = useState(null)
    const [cryptoList, setCryptoList] = useState(null)

    const {GetCrypto} = useContext(CryptoContext)

    const onSubmit = (event) => {
        event.preventDefault();
    }
    const searchOnChange = (event) => {
        if (cryptoList) {
            const filterChange = cryptoList.filter((crypto, i) => {
                const {symbol, id} = crypto;
                if (symbol === event.target.value) {
                    return id
                }
            })
            if (filterChange[0]) {
                setSearchedCrypto((filterChange[0].id).toLowerCase())
                return filterChange[0]
            } else {

                setSearchedCrypto((event.target.value).toLowerCase());
            }
        }

    }

    const GetCryptoList = async () => {
        const response = await axios.get('https://api.coingecko.com/api/v3/coins/list');
        setCryptoList(response.data)
    }

    useEffect(() => {
        GetCryptoList()
    }, [])

    const FindCryptoBySymbol = (symbolSearched) => {
        console.log(symbolSearched)
        if (cryptoList) {
            const searchList = [searchedCrypto];
            
            cryptoList.filter((crypto, i) => {
                const {symbol, id} = crypto;
                if (symbol === symbolSearched) {
                    return id
                }
            })
        }
    }

    return (
        <div className='navbar navbar--primary'>
            {showMenu && <div className='mobilemenuoverlay mobilemenuoverlay--primary'>
                            <div className='menuiconsection menuiconsection--primary'>
                                <img className='menuiconsection__xicon' src={XIcon} alt='cryptocurrency website mobile menu close icon' onClick={() => {
                                    setShowMenu(false);
                                }} />
                            </div>
                            <div className='menulistsection menulistsection--primary'>
                                <ul className='menulistsection__ul'>
                                    <li className='menulistsection__option'>
                                        <Link className='menulistsection__optionlink' to='/' onClick={() => {
                                            setShowMenu(false);
                                        }}>
                                            HOME
                                        </Link>
                                    </li>
                                    <li className='menulistsection__option'>
                                        <Link className='menulistsection__optionlink' to='/cryptocurrencies' onClick={() => {
                                            setShowMenu(false);
                                        }}>
                                            CRYPTOCURRENCIES
                                        </Link>
                                    </li>
                                    <li className='menulistsection__option'>
                                        <Link className='menulistsection__optionlink' to='' onClick={() => {
                                            setShowMenu(false);
                                        }}>
                                            ABOUT US
                                        </Link>
                                    </li>
                                    <li className='menulistsection__option'>
                                        <Link className='menulistsection__optionlink' to='' onClick={() => {
                                            setShowMenu(false);
                                        }}>
                                            CONTACT US
                                        </Link>
                                    </li>
                                </ul>
                                <button className='menulistsection__button'>
                                    DARK MODE
                                </button>
                                <div>
                                    <form onSubmit={onSubmit}>
                                    <input placeholder='Search crypto by name...' required onChange={searchOnChange}/>
                                    <Link to={`/cryptocurrencies/${searchedCrypto}`}>
                                        <button type='submit' onClick={() => {
                                            setShowMenu(false);
                                            FindCryptoBySymbol(searchedCrypto)
                                            GetCrypto(searchedCrypto);
                                        }}>
                                            GO
                                        </button>
                                    </Link>
                                    </form>
                                </div>
                            </div>
                         </div>
            }
            <Link className='navbarlogo__link' to='/' style={{position: 'absolute'}}>
                <span className='navbar__span'>cryptostats 🚀🌕</span>
            </Link>
            <div className='navbaroverlay navbarunderlay--primary'>
                <div className='navbarmenu navbarmenu--primary'>
                    <img className='navbarmenu__icon' src={MenuIcon} alt='cryptocurrency website mobile menu icon' onClick={() => {
                        if (showMenu) setShowMenu(false);
                        if (!showMenu) setShowMenu(true);
                    }} />
                </div>
            </div>
        </div>
    )
}

export default Navbar
