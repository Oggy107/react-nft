import React from 'react'

import loadingAnimation from '../assets/loading.gif'

const Loading = ({className}) => {
    return (
        <div className={className}>
            <img src={loadingAnimation} alt="" />
        </div>
    )
}

export default Loading
