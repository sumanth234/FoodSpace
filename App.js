import React, {Component} from 'react';
import { StyleSheet, Text, View, StatusBar} from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './app/src/Reducers'
import AppNavigation from './app/src/Navigation/AppNavigation'

export default class App extends Component {
  render() {
    return (
      <Provider store={createStore(reducers)}>
        <View style={styles.container}>
          <StatusBar barStyle='light-content' />
          <AppNavigation />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
