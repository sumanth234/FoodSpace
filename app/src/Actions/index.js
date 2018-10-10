
import Services from '../Services/Services';
import {Alert} from 'react-native'
import * as Types from './types';
import * as _ from 'lodash'

export const getRestaurantsList= (dispatch) => {
    var data = []
    
    Services.getRestaurantList("http://www.mocky.io/v2/5ac4842c2f00005600f5f9fb",'GET')
        .then(result =>{
            data = JSON.parse(result._bodyText)
            navigator.geolocation.getCurrentPosition(
                (position) => {
                  _.map(data.restaurantList,(value) => {
                    var dis = Services.distance(position.coords.latitude,position.coords.longitude,value.location.latitude,value.location.longitude,'K')
                    value.dist = dis
                    value.lat = position.coords.latitude
                    value.long = position.coords.longitude
                    console.log("val",value)
                })
                data.restaurantList.sort(function(a,b){
                    return parseFloat(a.dist) - parseFloat(b.dist)
                })
                dispatch({
                    type: Types.ABLE_TO_GET_RESTAURANT_LIST,
                    payload:data
                })
                },
                (error) =>  dispatch({
                    type: Types.NOT_ABLE_TO_GET_RESTAURANT_LIST,
                    payload: []
                }),
                { enableHighAccuracy: false, timeout: 200000, maximumAge: 1000 },
              );
            console.log("Rep",data)

                
        }).catch((err => {
            dispatch({
                type: Types.NOT_ABLE_TO_GET_RESTAURANT_LIST,
                payload: []
            })
            console.log("error",err)
            Alert.alert("Please try again later")
        }))
};