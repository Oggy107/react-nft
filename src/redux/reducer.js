import { FETCH_ASSETS, FETCHING_SUCCESS, FETCHING_FAILURE, SET_SELECTED, SET_ASSET_CONTRACT_ADDRESS } from "./actionTypes";

// 0x295E39F8A3E61690CbbD4aCda9f067Bf72B79F99

const initialState = {
    assets: [],
    loading: true,
    error: "",
    selected: 0,
    asset_contract_address: "0x7dca125b1e805dc88814aed7ccc810f677d3e1db"
}

const reducer = (oldState = initialState, action) => {
    switch (action.type) {
        case FETCH_ASSETS:
            return {
                ...oldState,
                loading: true
            }

        case FETCHING_SUCCESS:
            return {
                ...oldState,
                loading: false,
                assets: action.payload
            }

        case FETCHING_FAILURE:
            return {
                ...oldState,
                loading: false,
                error: action.payload
            }

        case SET_SELECTED:
            return {
                ...oldState,
                selected: action.payload
            }

        case SET_ASSET_CONTRACT_ADDRESS:
            return {
                ...oldState,
                asset_contract_address: action.payload
            }

        default:
            return oldState
    }
}

export default reducer