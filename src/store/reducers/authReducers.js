import { CHANGE_WALLET } from "../actions/types";

const initialState = {
    WALLET: `0`
}

const authReducers = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_WALLET: {
            return {
                ...state,
                WALLET: action.wallet
            }
        }
        default: {
            return {...state}
        }
    } 
}

export default authReducers;