import axios from "axios";

import { FETCH_ASSETS, FETCHING_SUCCESS, FETCHING_FAILURE, SET_SELECTED, SET_ASSET_CONTRACT_ADDRESS } from "./actionTypes";

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
export const fetchAssets = (asset_contract_address) => {
    // returns thunk function
    return (dispatch) => {
        dispatch(fetchAssetsRequest())
        axios.get(`https://testnets-api.opensea.io/assets?asset_contract_address=${asset_contract_address}&order_direction=asc`)
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

const setAssetConractAddress_i = (asset_contract_address) => {
    return {
        type: SET_ASSET_CONTRACT_ADDRESS,
        payload: asset_contract_address
    }
}

export const setAssetConractAddress = (asset_contract_address) => {
    return (dispatch) => {
        dispatch(setAssetConractAddress_i(asset_contract_address))
        dispatch(fetchAssets(asset_contract_address))
    }
}