import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CheckBox from "react-native-web/src/exports/CheckBox";
import {Navbar} from './components/navbar/Navbar'

export default class LotsOfGreetings extends Component {
  render() {
    return (
        <View style={styles.container}>
            <Navbar/>
            <View style={{ flexDirection: 'row' }}>
                <CheckBox />
                <Text style={{marginTop: -2, color: '#fff'}}>this is checkbox</Text>
            </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',

  },
});
