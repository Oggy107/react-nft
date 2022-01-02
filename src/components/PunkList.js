import React from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { setSelected } from '../redux/actions'

import ethLogo from '../assets/eth.png'

const PunkList = () => {
    const dispatch = useDispatch()
    const punkListData = useSelector((state) => (state.assets))

    return (
        <div className='punkList-container'>
            {
                punkListData.map((item, index) => {
                    return (
                    <div key={index} className="punkCard-container" onClick={() => {dispatch(setSelected(index))}}>
                        <div className="punkImg-container">
                            <img src={item.image_url} alt="" />
                        </div>
                        <div className="punkDetail-container">
                            <h2 className='punkName'>{item.name}</h2>
                            <p className="punkId">.#{item.token_id}</p>
                            <div className="price-container">
                                {
                                    item.traits[0] && item.traits[0].trait_type === 'Price' &&
                                    <>
                                        <img src={ethLogo} alt="eth logo" />
                                        <p>{item.traits[0].value}</p>
                                    </>
                                }
                            </div>
                        </div>
                    </div>
                    )
                })
            }
        </div>
    )
}

export default PunkList
