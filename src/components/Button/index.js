import React from 'react';
import { StyleSheet, TouchableOpacity, View, Text } from 'react-native';

export const Button = props => {
  const {width, height, fontSize, onPress, text, color} = props;
  return(
    <TouchableOpacity onPress={onPress} style={{...styles.container, width: width ? width : 200, height: height ? height : 120, borderColor: color ? color : '#444'}}>
      <Text style={{...styles.text, fontSize: fontSize ? fontSize : 16}}>{text}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    width: 200,
    height: 120,
    backgroundColor: '#fff',
    elevation: 5,
    borderColor: '#444',
    borderWidth: 1,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    alignSelf: 'center'
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#444',
    shadowOpacity: 100
  }
});