import React , {Component} from 'react'
import { View,Image,Dimensions,ScrollView,Text,TouchableOpacity,TextInput,ActivityIndicator } from 'react-native'
import * as _ from 'lodash'
import { getRestaurantsList }  from '../Actions/index';
import { connect } from 'react-redux';
import Communications from "react-native-communications";
const deviceWidth = Dimensions.get('window').width
const deviceHeight = Dimensions.get('window').height

class RestaurantList extends Component{
    static navigationOptions = ({ navigation }) => ({
        title: null,
        headerLeft: (
          <View style={{ marginLeft: 15, flexDirection: 'row' }}>
            <TouchableOpacity
              style={{ padding: 5 }} activeOpacity={0.7}
              onPress={() => { navigation.toggleDrawer(); }}
            >
              <Image source={require('../../../assets/Menu.png')} style={{width:25,height:25}} />
            </TouchableOpacity>
            <View style={{ alignItems: 'center', alignSelf: 'center', marginLeft: 20 }}>
              <Text
                style={{
                  fontFamily: 'Roboto-Bold',
                  fontSize: 18,
                  color: 'black'
                }}
              >FoodSpaze</Text>
            </View>
          </View>
        )
      });
    constructor(props){
        super(props)
        this.state = ({
            latitude: "",
            longitude: "",
            error:"",
            resList:[],
            searchVal:"",
            filteredList:[]
        })
    }
    componentDidMount(){
        this.props.getRestaurantsList()
    }
    onSearch(value){
        var data = []
        var searchData = []
        searchData = this.props.restaurantListSuccessData.restaurantList
        if(value.length > 0){
            data = _.filter(searchData,Item => Item.name.toLowerCase().includes(value.toLowerCase()))
            this.setState({filteredList:data})
        }     
    }
    renderList(){
        return(
            <View style={{justifyContent:'center',alignItems:'center',backgroundColor:'black'}}>
                {this.state.searchVal.length === 0?
                <View >
                    {_.map(this.props.restaurantListSuccessData.restaurantList,(value) => {
                        return (
                            <TouchableOpacity onPress={() => this.props.navigation.navigate('RestaurantProfileScreen',{data:value})} style={{flex:1,width:deviceWidth-40,marginVertical:10}}>
                                <Image style={{height:200,width:deviceWidth-40,borderTopRightRadius:10,borderTopLeftRadius:10}} source={{uri: value.image_url}} /> 
                                <View style={{flexDirection:'row',borderWidth:1,borderTopWidth:0,backgroundColor:'white'}}>
                            <View style={{flex:2,margin:20}}>
                                <Text style={{textAlign:'left',flex:1,fontWeight:'bold',fontSize:20}}>{value.name}</Text>
                                <Text style={{textAlign:'left',flex:1,fontSize:12}}>{parseInt(value.dist)} Kms away</Text>
                                </View>
                                <TouchableOpacity style={{flex:1,margin:20,justifyContent:'center'}} onPress = {() =>  Communications.phonecall(value.contact, true)}><Text style={{textAlign:'right',fontSize:16}}>Call</Text></TouchableOpacity>
                                </View>
                            </TouchableOpacity>
                        )
                    })}
                </View>:
                <View >
                    {_.map(this.state.filteredList,(value) => {
                        return (
                            <TouchableOpacity onPress={() => this.props.navigation.navigate('RestaurantProfileScreen',{data:value})} style={{flex:1,width:deviceWidth-40,marginVertical:10}}>
                                <Image style={{height:200,width:deviceWidth-40,borderTopRightRadius:10,borderTopLeftRadius:10}} source={{uri: value.image_url}} /> 
                                <View style={{flexDirection:'row',borderWidth:1,borderTopWidth:0,backgroundColor:'white'}}>
                                    <View style={{flex:2,margin:20}}>
                                        <Text style={{textAlign:'left',flex:1,fontWeight:'bold',fontSize:20}}>{value.name}</Text>
                                        <Text style={{textAlign:'left',flex:1,fontSize:12}}>{parseInt(value.dist)} Kms away</Text>
                                    </View>
                                    <TouchableOpacity style={{flex:1,margin:20,justifyContent:'center'}} onPress = {() => Communications.phonecall(value.contact, true)}>
                                        <Text style={{textAlign:'right',fontSize:16}}>Call</Text>
                                    </TouchableOpacity>
                                </View>
                            </TouchableOpacity>
                        )
                    })}
                </View>}
            </View>
        )
    }
    render(){
        return (  
            <View style={{flex:1,backgroundColor:'black'}}>
                <View style={{flexDirection:'row',backgroundColor:'white',marginHorizontal:10,marginVertical:5,borderRadius:15,paddingHorizontal:20,paddingVertical:5}}>
                    <Image style={{width:25,height:25,alignSelf:'center',marginRight:20}} source={require('../../../assets/Search.png')} />
                    <TextInput placeholder="Search" value={this.state.searchVal} style={{flex:3,fontSize:18}}
                        onChangeText = {(value) => {
                        this.setState({searchVal:value})
                        this.onSearch(value)}} 
                    />
                </View>       
                <ScrollView style={{flex:1,marginTop:5}}> 
                {this.props.loaderState?
                <View style={{flex:1,justifyContent:'center',alignContent:'center',marginTop:deviceHeight/3}}><ActivityIndicator style={{alignSelf:'center'}} size="large"/></View>:<View style={{flex:1}}>
                {this.renderList()}
                </View>}
                </ScrollView>
            </View>     
        )
    }
} 

const mapDispatchToProps = dispatch => {
    return ({
        getRestaurantsList() { getRestaurantsList(dispatch) },
    })
}

const mapStateToProps = ({  restaurantListLib }) => {
    const {restaurantListSuccessData,restaurantListFailureData,loaderState} = restaurantListLib
    return {restaurantListSuccessData,restaurantListFailureData,loaderState}
}
export default connect(mapStateToProps,mapDispatchToProps)(RestaurantList)