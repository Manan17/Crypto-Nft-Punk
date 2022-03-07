import React from 'react'
import './Header.css'
import punklogo from '../../assets/cryptopunk-logo.png';
import searchlogo from '../../assets/search.png';
import themeswitch from '../../assets/theme-switch.png';
const Header = () => {
    return (
        <div className='header'>
            <div className='header_navbar' >
                <img src={punklogo} className='header__punkLogo' />
                <div className='header__searchBar'>
                    <img src={searchlogo} className='header__searchLogo' />
                    <input type="text" className='header__searchBarInput' placeholder='Collection, item or user.' />                    
                </div>
                <div className='header__options'>
                    <h4>Drops</h4>
                    <h4>Marketplace</h4>
                    <h4>Create</h4>
                </div>
                <div className='header__buttons'>
                    <div className='header__buttonsTheme'>
                        <img src={themeswitch} className='header__buttonsThemeImage' />
                    </div>
                    <div className='header__buttonsGetIN'>
                        <p>GET IN</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
