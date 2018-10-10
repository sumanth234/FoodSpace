import React, { Component } from 'react';
import { NavigationActions, DrawerItems } from 'react-navigation';
import { View, Text, ScrollView,StyleSheet } from 'react-native';


export default class SideMenu extends Component {
  constructor() {
    super();
  }

  getIconName = (label) => {
    switch (label) {
      case 'AssignedTicketStack':
        return 'ticket';
      case 'PlantFaultStack':
        return 'fault';
      case 'GridFaultStack':
        return 'fault';
      case 'MyPerformanceStack':
        return 'performance';
      case 'DailyGenerationStack':
        return 'generation';
      case 'MonthlyGenerationStack':
        return 'generation';
      case 'NotificationStack':
        return 'bell-black';
      default:
        return 'arrow-right';
    }
  }

  getItemName = (label) => {
    switch (label) {
      case 'AssignedTicketStack':
        return 'Assigned Ticket';
      case 'PlantFaultStack':
        return 'Report Plant Fault';
      case 'GridFaultStack':
        return 'Report Grid Fault';
      case 'MyPerformanceStack':
        return 'My Performance';
      case 'DailyGenerationStack':
        return 'Daily Generation';
      case 'MonthlyGenerationStack':
        return 'Monthly Generation';
      case 'NotificationStack':
        return 'Notifications';
      case 'PreventiveMaintenanceStack':
        return 'Preventive Maintenance';
      default:
        return label;
    }
  }
  navigateToScreen = (route) => () => {
    const navigateAction = NavigationActions.navigate({
      routeName: route
    });
    this.props.navigation.dispatch(navigateAction);
  }
  render() {
    return (
      <View style={styles.container} >
        <ScrollView>
          <DrawerItems
            {...this.props}
            getLabel={(scene) => {
              return (
                <View style={styles.button}>
                  {/* {
                    this.getItemName(this.props.getLabel(scene)) === 'Preventive Maintenance' ?
                      <OctiIcon
                        name='checklist'
                        size={22}
                        color={scene.focused ? Colors.backgroundColor : Colors.textHeader}
                      />
                      :
                      <Icon
                        name={this.getIconName(this.props.getLabel(scene))}
                        size={22}
                        color={scene.focused ? Colors.backgroundColor : Colors.textHeader}
                      />
                  } */}
                  <Text
                    style={[styles.buttonText, scene.focused ? { color: '#0082C9' } : { color: '#212120' }]}
                  >{this.getItemName(this.props.getLabel(scene))}
                  </Text>
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
      flex: 1
    },
    button: {
      paddingVertical: 10,
      flexDirection: 'row',
      marginVertical: 7,
      paddingHorizontal: 15,
    },
    buttonText: {
      fontFamily: 'Roboto-Medium',
      fontSize: 14,
      color: '#212120',
      marginLeft: 14,
    },
   });


