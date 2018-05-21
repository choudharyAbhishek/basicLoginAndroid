import React, { Component } from 'react';
import { AppRegistry, Text, View, StyleSheet } from 'react-native';
import Main from './app/components/Main';
import { StackNavigator } from 'react-navigation';
import SignUp from './app/components/SignUp';

const Application = StackNavigator({
  Home : { screen : Main},
  SignUp : { screen : SignUp}
}, {
  navigationOptions: {
    header : false,
  }
});

export default class MyApp extends Component {

  render() {
    return (    
        <Application />
    );
  }
}

AppRegistry.registerComponent('MyApp', () => MyApp);