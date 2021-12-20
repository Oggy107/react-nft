import React from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { fetchAssets } from './redux/actions'

import Header from './components/Header'
import PunkList from './components/PunkList'
import Details from './components/Details'

import loadingAnimation from './assets/loading.gif'

const App = () => {
    const dispatch = useDispatch()
    const loading = useSelector((state) => (state.loading))
    const asset_contract_address = useSelector((state) => (state.asset_contract_address))

    React.useEffect(() => {
        dispatch(fetchAssets(asset_contract_address))
    }, [])

    if (loading)
    {
        return <div className="app-container">
            <Header />
            <div className="app-body-container">
                <img className='loading-animation' src={loadingAnimation} alt="loading animation" />
            </div>
        </div>
    }

    return (
        <div className='app-container'>
            <Header />
            <div className="app-body-container">
                <Details />
                <PunkList />
            </div>
        </div>
    )
}

export default App

