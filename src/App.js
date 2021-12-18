import React from 'react'
import { Provider } from 'react-redux'

import store from './redux/store'
import Header from './components/Header'
import PunkList from './components/PunkList'
import Details from './components/Details'

const App = () => {
    return (
        <Provider store={store}>
            <div className='app-container'>
                <Header />
                <Details />
                <PunkList />
            </div>
        </Provider>
    )
}

export default App

