import React, { Component } from 'react';
import { AppRegistry, Text, View } from 'react-native';
export default class Main extends Component {

  render() {
    return (
      <View>
        <Text>Main</Text>
      </View>
    );
  }
}
AppRegistry.registerComponent('Main', () => Main);