import React, { Component } from 'react';
import { AppRegistry, Text, View, StyleSheet } from 'react-native';
import Main from './app/components/Main';
export default class MyApp extends Component {

  render() {
    return (
      <View style={styles.container}>
        <Main />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container : {
    flex : 1,
    backgroundColor : 'white'
  }
});
AppRegistry.registerComponent('MyApp', () => MyApp);