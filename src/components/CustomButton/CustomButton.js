import { View, Text, StyleSheet, Pressable} from 'react-native'
import React from 'react'

const CustomButton = ({ onPress, text, type="PRIMARY"}) => {
  return (
    <Pressable onPress={onPress} style={[styles.container, styles[`container_${type}`]]}>
      <Text style= {[styles.text, styles[`text_${type}`]]}>{text}</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',

        padding: 15,
        marginVertical: 5,
        
        alignItems: 'center',
        borderRadius: 5,
    },

    container_PRIMARY:{
        backgroundColor: '#3B71F3',
    },

    cotainer_TERTIARY: {
        backgroundColor: '#5B71F3',
    },

    text: {
        fontWeight: 'bold',
    },

    text_PRIMARY: {
        color: 'white',
    },

    text_TERTIARY: {
        color: 'grey',
    }
});
export default CustomButton