import React from 'react'

import ethLogo from '../assets/eth.png'

const PunkList = () => {
    return (
        <div className='punkList-container'>
            <div className="punkCard-container">
                <div className="punkImg-container">
                    <img src="https://static01.nyt.com/images/2021/03/12/arts/11nft-auction-cryptopunks-print/11nft-auction-cryptopunks-print-articleLarge.jpg?quality=75&auto=webp&disable=upscale" alt="" />
                </div>
                <div className="punkDetail-container">
                    <h2 className='punkName'>cool punk</h2>
                    <div className="price-container">
                        <img src={ethLogo} alt="" />
                        <p>5</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PunkList
