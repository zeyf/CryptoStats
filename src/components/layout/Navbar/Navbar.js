import {useState, useContext, useEffect} from 'react'
import './Navbar.css'
import {Link} from 'react-router-dom'
import MenuIcon from '../../../images/MobileMenuIcon.svg'
import XIcon from '../../../images/XCloseIcon.svg'
import CryptoContext from '../../context/CryptoContext/CryptoContext';
import axios from 'axios';


const Navbar = ({darkMode, setDarkMode, ChangeStyle}) => {

    const [showMenu, setShowMenu] = useState(false)
    const [searchedCrypto, setSearchedCrypto] = useState(null)
    const [cryptoList, setCryptoList] = useState(null)
    const [searchResultList, setSearchResultList] = useState(null)

    const {GetCrypto} = useContext(CryptoContext)

    const onSubmit = (event) => {
        event.preventDefault();
    }
    const searchOnChange = (event) => {
        if (cryptoList) {
            const filterChange = cryptoList.filter((crypto, i) => {
                const {symbol, id, name} = crypto;
                if (symbol.toUpperCase() === event.target.value.toUpperCase()) {
                    return id
                } else if (name.toUpperCase() === event.target.value.toUpperCase()) {
                    return name
                }
            })
            if (filterChange.length === 1) {

                setSearchedCrypto((filterChange[0].id).toLowerCase())
                setSearchResultList(filterChange)

            } else if (filterChange.length > 1) {

                setSearchResultList(filterChange)

            } else if (!filterChange[0]) {
                setSearchResultList(null)
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


    return (
        <div className='navbar navbar--primary' >
            {showMenu && <div className='mobilemenuoverlay mobilemenuoverlay--primary' >
                            <div className='menuiconsection menuiconsection--primary'>
                                <img className='menuiconsection__xicon' src={XIcon} alt='cryptocurrency website mobile menu close icon' onClick={() => {
                                    setShowMenu(false);
                                }} />
                            </div>
                            <div className='menulistsection menulistsection--primary'>
                                <ul className='menulistsection__ul'>
                                    <li className='menulistsection__option'>
                                        <Link className='menulistsection__optionlink'  to='/' onClick={() => {
                                            setShowMenu(false);
                                        }}>
                                            HOME
                                        </Link>
                                    </li>
                                    <li className='menulistsection__option'>
                                        <Link className='menulistsection__optionlink'  to='/cryptocurrencies' onClick={() => {
                                            setShowMenu(false);
                                        }}>
                                            CRYPTOCURRENCIES
                                        </Link>
                                    </li>
                                    <li className='menulistsection__option'>
                                        <Link className='menulistsection__optionlink'  to='' onClick={() => {
                                            setShowMenu(false);
                                        }}>
                                            ABOUT US
                                        </Link>
                                    </li>
                                    <li className='menulistsection__option'>
                                        <Link className='menulistsection__optionlink'  to='' onClick={() => {
                                            setShowMenu(false);
                                        }}>
                                            CONTACT US
                                        </Link>
                                    </li>
                                </ul>
                                <div className='searchsection searchsection--primary'>
                                    <form className='searchsection__form' onSubmit={onSubmit}>
                                        <div className='searchsection__searcharea'>
                                            <input className='searchsection__input' placeholder='Search crypto by name...' required onChange={searchOnChange}/>
                                            <Link className='searchsection__link' to={`/cryptocurrencies/${searchedCrypto}`}>
                                                <button className='searchsection__button' type='submit' onClick={() => {
                                                    setShowMenu(false);
                                                    GetCrypto(searchedCrypto);
                                                    setSearchedCrypto(null)
                                                    setSearchResultList(null)
                                                }}>
                                                    GO
                                                </button>
                                            </Link>
                                        </div>
                                    </form>
                                    <ul className='searchsection__resultsul'>
                                        {searchResultList && searchResultList.map((crypto, i) => {
                                            const {id, symbol, name} = crypto;
                                            return  <li className='searchsection__resultsoption'>
                                                        <Link className='searchsection__resultsoptionlink' to={`/cryptocurrencies/${id}`} onClick={() => {
                                                            setShowMenu(false);
                                                            GetCrypto(id);
                                                            setSearchedCrypto(null)
                                                            setSearchResultList(null)
                                                        }}>
                                                            {name} ({symbol.toUpperCase()})
                                                        </Link>
                                                    </li>
                                        
                                        })}                                      
                                    </ul>
                                </div>
                                <button className='menulistsection__button' onClick={() => {
                                    if (!darkMode) setDarkMode(true)
                                    if (darkMode) setDarkMode(false)
                                }}>
                                    DARK MODE
                                </button>
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
