
import { combineReducers } from 'redux';
import * as Types from '../Actions/types'
const INITIALSTATE = {
    restaurantListSuccessData : [],
    restaurantListFailureData : [],
    loaderState:true
}

const restaurantListReducer = (state = INITIALSTATE, {type,payload}) => {
    switch(type){
        case Types.ABLE_TO_GET_RESTAURANT_LIST:
            return { ...state, restaurantListSuccessData: payload,loaderState:false }
        case Types.NOT_ABLE_TO_GET_RESTAURANT_LIST:
            return { ...state, restaurantListFailureData:payload}
        default:
            return state
    }
}

export default combineReducers({
    restaurantListLib:restaurantListReducer,
})
