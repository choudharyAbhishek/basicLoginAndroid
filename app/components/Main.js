import React, { Component } from 'react';
import { AppRegistry, Text, View, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
export default class Main extends Component {

    render() {
        return (
            <View style={styles.mainContainer}>
                <View style={styles.header}>
                    <Text style={styles.headerText}>Login App</Text>
                </View>
                <View style={styles.inputContainerUser}>
                    <Text style={styles.text}>UserId : </Text>
                    <TextInput placeholder='Enter User Id' />
                </View>
                <View style={styles.inputContainerPassword}>
                    <Text style={styles.text} >Password : </Text>
                    <TextInput placeholder='Enter Password' secureTextEntry={true} />
                </View>
                <View style={styles.footerButtonsView}>
                    <TouchableOpacity style={styles.footerButtons}>
                        <View><Text style={styles.textFooter}>login</Text></View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.footerButtons}>
                        <View><Text style={styles.textFooter}>SignUp</Text></View>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    mainContainer: {
        flex: 1
    },
    header: {
        height: 55,
        backgroundColor: 'lightgrey',
        elevation: 3
    },
    headerText: {
        color: 'salmon',
        fontSize: 30,
        textAlign: 'center'
    },
    text: {
        color: 'salmon',
        padding: 5,
        fontSize: 20
    },
    textFooter: {
        textAlign: 'center',
        color: 'salmon',
        padding: 10,
        fontSize: 20
    },
    footerButtonsView: {
        flexDirection: 'row'
    },
    footerButtons: {
        flex: 1,
        backgroundColor: 'lightcyan',
        borderRadius: 4,
        borderWidth: 0.5,
        borderColor: '#d6d7da',
    },


});
AppRegistry.registerComponent('Main', () => Main);