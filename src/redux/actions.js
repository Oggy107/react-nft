import axios from "axios";

import { FETCH_ASSETS, FETCHING_SUCCESS, FETCHING_FAILURE, SET_SELECTED } from "./actionTypes";

export const fetchAssetsRequest = () => {
    return {
        type: FETCH_ASSETS,
    }
}


export const fetchSuccess = (assets) => {
    return {
        type: FETCHING_SUCCESS,
        payload: assets
    }
}

export const fetchFailure = (error) => {
    return {
        type: FETCHING_FAILURE,
        payload: error
    }
}

// thunk action creator
export const fetchAssets = () => {
    // returns thunk function
    return (dispatch) => {
        dispatch(fetchAssetsRequest)
        // axios.get('https://testnets-api.opensea.io/assets?asset_contract_address=0x295E39F8A3E61690CbbD4aCda9f067Bf72B79F99&order_direction=asc')
        axios.get('https://testnets-api.opensea.io/assets?asset_contract_address=0x7dca125b1e805dc88814aed7ccc810f677d3e1db&order_direction=asc')
            .then((resp) => {
                dispatch(fetchSuccess(resp.data.assets))
            })
            .catch((err) => {
                dispatch(fetchFailure(err))
            })
    }
}

export const setSelected = (index) => {
    return {
        type: SET_SELECTED,
        payload: index
    }
}