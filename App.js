/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { StyleSheet, Text, View} from 'react-native';
import AppNavigator from './src/Screens/AppNavigator';
import {Provider} from 'react-redux';
import {store,persistor} from './src/store';
import { PersistGate } from 'redux-persist/integration/react'
import SplashScreen from 'react-native-splash-screen'

export default class App extends Component {
  componentDidMount() {
      SplashScreen.hide();
  }
  render() {
    return (
    
     <Provider store = {store}> 
              <PersistGate loading={null} persistor={persistor}>
                    <AppNavigator />
              </PersistGate>
          
    </Provider>
    
   
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
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
