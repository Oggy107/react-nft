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

    React.useEffect(() => {
        dispatch(fetchAssets())
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

