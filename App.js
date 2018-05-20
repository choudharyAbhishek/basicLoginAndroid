import React, { Component } from 'react';
import { AppRegistry, Text, View } from 'react-native';
import Main from './app/components/Main';
export default class MyApp extends Component {

  render() {
    return (
      <View>
        <Main />
      </View>
    );
  }
}
AppRegistry.registerComponent('MyApp', () => MyApp);