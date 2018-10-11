import React, { Component } from 'react';
import {  DrawerItems } from 'react-navigation';
import { View, Text, ScrollView,StyleSheet,Image,TouchableOpacity } from 'react-native';


export default class SideMenu extends Component {
  constructor(props) {
    super(props);
  }

  getItemName = (label) => {
    switch (label) {
      case 'RestaurantStack':
        return 'Restaurants Near By';
      case 'Screen1Stack':
        return 'Screen 1';
      case 'Screen2Stack':
        return 'Screen 2';
      case 'Screen3Stack':
        return 'Screen 3';
      default:
        return label;
    }
  }
  render() {
    return (
      <View style={styles.container} >
        <View style={[styles.button,{borderBottomWidth:1,paddingVertical:13}]}>
          <TouchableOpacity style={{justifyContent:'center'}} onPress={() =>  this.props.navigation.toggleDrawer() }>
            <Image style={{width:25,height:25,marginLeft:10,alignSelf:'center'}} source= {require('../../../assets/Clear.png')} />
          </TouchableOpacity>
          <View style={{flex:1,justifyContent:'center',alignItems:'flex-start',paddingLeft:20}}>
            <Text style={[styles.buttonText,{textAlign:'center',fontSize:22,fontWeight:'bold'}]}>Menu</Text>
          </View>
        </View>
        <ScrollView>
          <DrawerItems
            {...this.props}
            getLabel={(scene) => {
              return (
                <View style={[styles.button,{paddingVertical: 10,marginTop:7}]}>
                  <Text style={[styles.buttonText,{flex:1,marginLeft: 14,}, scene.focused ? { color: '#0082C9' } : { color: '#212120' }]}>{this.getItemName(this.props.getLabel(scene))}</Text>
                  <Image style={{width:25,height:25,alignSelf:'center'}} source= {require('../../../assets/arrow.png')} />
                </View>
              );
            }}
          />

        </ScrollView>
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor:'white'
    },
    button: {
      
      flexDirection: 'row',
      marginBottom: 7,
      paddingHorizontal: 15,
    },
    buttonText: {
      fontFamily: 'Roboto-Medium',
      fontSize: 14,
      color: '#212120',
      
    },
   });


