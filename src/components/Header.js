import React from 'react'

import logo from '../assets/header/cryptopunk-logo.png'
import searchLogo from '../assets/header/search.png'
import themeSwitch from '../assets/header/theme-switch.png'

const Header = () => {
    return (
        <div className='header-container'>
            <div className="logo-container">
                <img src={logo} alt="logo" />
            </div>
            <div className="search-container">
                <img src={searchLogo} />
                <input className='input-custom input-search' type="text" name="search" placeholder='Collection, item or user'/>
            </div>
            <div class="flex-container" style={{display: 'flex', alignItems: 'center', columnGap: '20px'}}>
                <div className="nav-link-container">
                    <ul className='ul-custom'>
                        <li><a className='a-custom nav-link' href="#">Drops</a></li>
                        <li><a className='a-custom nav-link' href="#">Marketplace</a></li>
                        <li><a className='a-custom nav-link' href="#">Create</a></li>
                    </ul>
                </div>
                <div className="theme-switch">
                    <img src={themeSwitch} />
                </div>
                <button className="btn-custom btn-getin">GET IN</button>
            </div>
        </div>
    )
}

export default Header
