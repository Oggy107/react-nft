import React from 'react'

import ethLogo from '../assets/eth.png'
import loadingAnimation from '../assets/loading.gif'

const PunkList = () => {
    const [punkListData, setPunkListData] = React.useState([])
    const [loading, setLoading] = React.useState(true);

    React.useEffect(async () => {
        const resp = await fetch('https://testnets-api.opensea.io/assets?asset_contract_address=0x295E39F8A3E61690CbbD4aCda9f067Bf72B79F99&order_direction=asc')
        // const resp = await fetch('https://testnets-api.opensea.io/assets?asset_contract_address=0x7dca125b1e805dc88814aed7ccc810f677d3e1db&order_direction=asc')
        const openseaData = await resp.json()
        setPunkListData(openseaData.assets)
        console.log(openseaData.assets)
        setLoading(false)
    }, [])

    if (loading)
    {
        return (
            <div className="punkList-container">
                <img src={loadingAnimation} alt="" />
            </div>
        )
    }

    return (
        <div className='punkList-container'>
            {
                punkListData.map((item, index) => {
                    return (
                    <div key={index} className="punkCard-container">
                        <div className="punkImg-container">
                            <img src={item.image_url} alt="" />
                        </div>
                        <div className="punkDetail-container">
                            <h2 className='punkName'>{item.name}</h2>
                            <p className="punkId">.#{item.token_id}</p>
                            <div className="price-container">
                                <img src={ethLogo} alt="" />
                                <p>{item.traits[0].value}</p>
                                {/* <p>{item.description}</p> */}
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
