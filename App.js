import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {Navbar} from './components/navbar/Navbar'
import {MyCheckbox} from './components/checkbox/Checkbox'

export default class LotsOfGreetings extends Component {
  render() {
    return (
        <View style={styles.container}>
            <Navbar title='Чек Лист СУШИ ХИРО'/>
            <View style={styles.cbWrapper}>
               <MyCheckbox title='первый' />
               <MyCheckbox title='второй' />
               <MyCheckbox title='третий' />
            </View>
        </View>
    )
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    cbWrapper: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        padding: 10
    }
})
