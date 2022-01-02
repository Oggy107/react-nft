import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { setAssetConractAddress } from '../redux/actions'

import SubMenu from './SubMenu'

import logo from '../assets/header/cryptopunk-logo.png'
import searchLogo from '../assets/header/search.png'
import themeSwitch from '../assets/header/theme-switch.png'

const Header = () => {
    const inputRef = React.useRef(null);
    const subMenuRef = React.useRef(null)
    const dispatch = useDispatch();
    const error = useSelector((state) => (state.error))

    const handleSubmit = (eo) => {
        eo.preventDefault()
        
        if (inputRef.current.value)
        {
            dispatch(setAssetConractAddress(inputRef.current.value))
            inputRef.current.value = ''
        }
    }

    const openSubMenu = (eo) => {
        const pos = eo.currentTarget.getBoundingClientRect()
        const center = (pos.left + pos.right) / 2
        subMenuRef.current.style.left = `${center}px`
        subMenuRef.current.style.top = `${pos.bottom}px`
        subMenuRef.current.style.display = "block"
    }

    const closeSubMenu = (eo) => {
        subMenuRef.current.style.display = "none"
    }

    React.useEffect(() => {
        if (error)
            alert("Provided asset conract address is not valid")
    }, [error])

    return (
        <div className='header-container'>
            <div className="logo-container">
                <img src={logo} alt="logo" />
            </div>
            <div className="search-container">
                <img src={searchLogo} alt="logo"/>
                <form autoComplete='off' onSubmit={(eo) => {handleSubmit(eo)}}>
                    <input ref={inputRef} className='input-custom input-search' type="text" name="search" placeholder='asset contract address'/>
                </form>
            </div>
            <div className="flex-container" style={{display: 'flex', alignItems: 'center', columnGap: '20px'}}>
                <div className="nav-link-container">
                    <ul className='ul-custom'>
                        <SubMenu subMenuRef={subMenuRef}/>
                        <li><a onMouseEnter={(eo) => {openSubMenu(eo);}} onMouseLeave={(eo) => {closeSubMenu(eo)}} className='a-custom nav-link' href="#">Addresses</a></li>
                        <li><a className='a-custom nav-link' href="#">Marketplace</a></li>
                        <li><a className='a-custom nav-link' href="#">Create</a></li>
                    </ul>
                </div>
                <div className="theme-switch">
                    <img src={themeSwitch} alt="switch"/>
                </div>
                <button className="btn-custom btn-getin">GET IN</button>
            </div>
        </div>
    )
}

export default Header
