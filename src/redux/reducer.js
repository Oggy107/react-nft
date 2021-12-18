import { FETCH_ASSETS, FETCHING_SUCCESS, FETCHING_FAILURE, SET_SELECTED } from "./actionTypes";

const initialState = {
    assets: [],
    loading: true,
    error: "",
    selected: 0
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

        default:
            return oldState
    }
}

export default reducer