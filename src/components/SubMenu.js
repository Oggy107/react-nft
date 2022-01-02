import React from 'react'

const SubMenu = ({subMenuRef}) => {
    const keepSubMenuOpen = () => {
        subMenuRef.current.style.display = "block"
    }

    const closeSubMenu = () => {
        subMenuRef.current.style.display = "none"
    }

    const copy = (eo) => {
        navigator.clipboard.writeText(eo.currentTarget.previousElementSibling.innerHTML)
    }

    return (
        <div className='subMenu-container' style={{display: "none"}} ref={subMenuRef} onMouseEnter={() => {keepSubMenuOpen()}} onMouseLeave={() => {closeSubMenu()}}>
            <div className='subMenu-item'>
                <p>0x295E39F8A3E61690CbbD4aCda9f067Bf72B79F99</p>
                <img onClick={(eo) => {copy(eo)}} src="https://img.icons8.com/pastel-glyph/24/ffffff/copy--v2.png" alt="copy"/>
            </div>
            <div className='subMenu-item'>
                <p>0xcc14dd8e6673fee203366115d3f9240b079a4930</p>
                <img onClick={(eo) => {copy(eo)}} src="https://img.icons8.com/pastel-glyph/24/ffffff/copy--v2.png" alt="copy"/>
            </div>
            <div className='subMenu-item'>
                <p>0x5216b15f14914023c2092b8486f694f8fe2766f6</p>
                <img onClick={(eo) => {copy(eo)}} src="https://img.icons8.com/pastel-glyph/24/ffffff/copy--v2.png" alt="copy"/>
            </div>
        </div>
    )
}

export default SubMenu
