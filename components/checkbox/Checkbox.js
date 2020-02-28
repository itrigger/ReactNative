import React from 'react'
import {StyleSheet, View, Text} from 'react-native'
import CheckBox from "react-native-web/src/exports/CheckBox"

export const MyCheckbox = (props) => {
    return (
        <View style={styles.checkboxWrapper}>
            <Text style={styles.text}><CheckBox style={styles.cb} /> {props.title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    checkboxWrapper: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'flex-start'
    },
    text:{
        color: '#000'
    },
    cb:{

    }
})