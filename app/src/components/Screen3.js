import React,{ Component} from 'react';
import {View,Text,TouchableOpacity,Image} from 'react-native';

export default class Screen3 extends Component{
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
              >Screen3</Text>
            </View>
          </View>
        )
      });
    constructor(props){
        super(props)
    }
    render(){
        return(
            <View style={{flex:1,justifyContent:'center',alignContent:'center'}}>
                <Text style={{textAlign:'center',fontSize:24}}>This page is created in reference for Drawer</Text>
            </View>
        )
    }
}