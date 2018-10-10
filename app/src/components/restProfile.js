import React , {Component} from 'react'
import { View,Image,Text,Dimensions,TouchableOpacity,ScrollView,Switch } from 'react-native'
import * as data from '../../app.json'
import StarRating from './react-native-star-rating';
import Communications from "react-native-communications";
const deviceWidth = Dimensions.get('window').width
import getDirections from 'react-native-google-maps-directions'
import * as _ from 'lodash'



export default class RestaurantProfile extends Component{
    constructor(props){
        super(props)
        this.state = ({
            toggle:false
        })
    }
    handleGetDirections(){
        const { navigation } = this.props
        var profileData = navigation.getParam('data')
        const data = {
            source: {
                latitude: profileData.lat,
                longitude: profileData.long
            },
            destination: {
                latitude: profileData.location.latitude,
                longitude: profileData.location.longitude
            },
            params: [
                {
                    key: "dirflg",
                    value: "h"
                },
                {
                    key: "layer",
                    value: "t"
                },
                {
                    key: "t",
                    value: "m"
                },
            ]
        }
        getDirections(data)
    }
    Capitalize(str){
        return str.charAt(0).toUpperCase() + str.slice(1);
        }
    renderMenuItem(val){
        return(
            <View style={{flexDirection:'row',margin:10}}>
                <View style={{flex:2}}>
                    <Text style={{fontSize:18,textAlign:'left',}}>{this.Capitalize(val.dish_name)}</Text>
                    <View style={{width:200}}>
                    <StarRating
                        disabled={true}
                        maxStars={5}
                        rating={val.rating}
                        buttonStyle={{borderColor:'black'}}  
                        fullStarColor="orange" 
                        halfStarColor="orange" 
                        starSize={20}
                        starStyle={{padding:0,margin:0}}
                        // selectedStar={(rating) => this.onStarRatingPress(rating)}
                    />
                    </View>
                </View>
                <View style={{flex:1,justifyContent:'center',alignContent:'center'}}>
                <Text style={{textAlign:'right',fontSize:18}}>{val.price} /-</Text></View>
            </View>
        )
    }
    render(){
        const { navigation } = this.props
         var profileData = navigation.getParam('data')
         console.log("pdata",profileData)
        return (
                <ScrollView style={{flex:1,backgroundColor:'white'}}>
                    <Image style={{height:250,width:deviceWidth}} source={{uri: profileData.image_url}} />
                    <View >
                        <View style={{flexDirection:'row',margin:20}}>
                        <Text style={{textAlign:'left',fontSize:26,fontWeight:'bold',flex:1.5}}>{profileData.name}</Text>
                        <TouchableOpacity style={{flex:1}} onPress={this.handleGetDirections.bind(this)}>
                    <View style={{justifyContent:'center',alignItems:'center'}}>
                    <Image style={{height:25,width:25}} source={require('../../../assets/marker.png')} /></View>
                        <Text style={{textAlign:'left',fontSize:14,textAlign:'center',alignSelf:'center'}}>{parseInt(profileData.dist)} Kms Away</Text>
                        </TouchableOpacity>
                        </View>
                        <View style={{flexDirection:'row'}}>
                        <TouchableOpacity style={{flex:1,backgroundColor:'rgb(59,106,192)',height:40,margin:10,justifyContent:'center'}} onPress={() => alert("Book a table in progress")}>
                            <Text style={{textAlign:'center',color:'white',fontSize:16}}>BOOK A TABLE</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{flex:1,backgroundColor:'rgb(59,106,192)',height:40,margin:10,justifyContent:'center'}} onPress={() => Communications.phonecall(profileData.contact, true)}>
                            <Text style={{textAlign:'center',color:'white',fontSize:16}}>CALL</Text>
                        </TouchableOpacity>
                        </View>
                        {profileData.hasOwnProperty('menu_list')?
                        <View>
                        {/* <View style={{flexDirection:'row'}}> */}
                        
                        {/* <Text style={{flex:1,textAlign:'left',fontSize:24}}>Menu</Text> */}
                        <View style={{flex:1,justifyContent:'flex-end',alignItems:'center',flexDirection:'row'}}>
                        <Text style={{textAlign:'center',fontSize:16}}>Veg Only</Text>
                        <Switch
                            size='small'
                            value={this.state.toggle}
                            onValueChange={ () => this.setState({toggle:!this.state.toggle}) }
                        />
                        </View>
                        {/* </View> */}
                        {profileData.menu_list[0].hasOwnProperty('Veg') && profileData.menu_list[0].Veg.length !== 0?
                        <View>
                            <View style={{backgroundColor:'#ebf0fa',marginVertical:10}}>
                            <Text style={{textAlign:'left',fontSize:24,margin:10}}>Veg</Text>
                            </View>
                            {_.map(profileData.menu_list[0].Veg,(val) => {
                                return (
                                    <View>                                     

                                    {this.renderMenuItem(val)}
                                    </View>
                                )
                            })}
                        </View>:<View />}
                        {profileData.menu_list[0].hasOwnProperty('nonVeg') && !this.state.toggle && profileData.menu_list[0].nonVeg.length !== 0?
                        <View>
                            <View style={{backgroundColor:'#ebf0fa',marginVertical:10}}>
                            <Text style={{textAlign:'left',fontSize:24,margin:10}}>Non Veg</Text></View>
                            {_.map(profileData.menu_list[0].nonVeg,(val) => {
                                return (
                                    <View>
                                    {this.renderMenuItem(val)}
                                    </View>
                                )
                            })}
                        </View>:<View />}

                        </View>:<View style={{margin:20}}><Text>Menu Currently not available</Text></View>}

                    </View> 
                </ScrollView>
                )
    }
} 