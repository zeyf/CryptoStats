import React from 'react'
import PortfolioImage from '../../images/AboutImage.svg'
import GithubIcon from '../../images/GithubIcon.svg'
import LinkedInIcon from '../../images/LinkedIn.svg'
import './About.css'

const About = () => {
    return (
        <div className='about about--primary'>
            <img className='about__image' src={PortfolioImage} alt='cryptocurrency portfolio market cap data price data' />
            <div className='abouttext abouttext--primary'>
                <h1 className='abouttext__head'>About Us</h1>
                <p className='abouttext__text'>
                    CryptoStats is a cryptocurrency price, market cap, and statistical data web app, powered by React and the CoinGecko API.
                    We feature the top 500 cryptocurrencies, along with numerical interpretations of their standing in the cryptocurrency market
                    and data visualization of price action in the form of 1 day, 7 day, 14 day, and 30 day interactive timeframe charts.
                </p>
                <p className='infoincons__text'>
                    Want to get in touch?
                </p>
                <div className='infoicons infoicons--primary'>
                    <a href='https://github.com/zeyf/' target='_blank' rel='noreferrer'>
                        <img className='infoicons__icon' src={GithubIcon} alt='Github icon' />
                    </a>
                    <a href='https://www.linkedin.com/in/zain-yousaf-fuentes-62353a156/' target='_blank' rel='noreferrer'>
                        <img className='infoicons__icon' src={LinkedInIcon} alt='LinkedIn icon' />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default About
